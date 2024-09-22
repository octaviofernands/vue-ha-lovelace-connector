import { ref, onMounted, onUnmounted } from 'vue';

const isBBLAuthenticated = ref(false);

export const useBBLAPI = () => {
  const baseURL = import.meta.env.VITE_BFF;

  const callBBLBFFEndpoint = async (endpoint, method = 'GET', payload = {}) => {
    const requestObj = {
      method,
      headers: { 'Content-Type': 'application/json' }
    }

    if(method === 'POST') {
      requestObj.body = JSON.stringify(payload);
    }

    const response = await fetch(`${baseURL}/bambu${endpoint}`, requestObj);

    return await response.json();
  }

// callBBLBFFEndpoint('/v1/iot-service/api/user/bind').then(console.log)

  const checkAuth = async () => {
    const response = await fetch(`${baseURL}/bambu/auth`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.status === 200) {
      isBBLAuthenticated.value = true;
      return;
    }

    isBBLAuthenticated.value = false;
    }

  const bblLogin = (username, password) => {
    const payload = {
      account: username,
      password,
      apiError: ''
    }

    fetch(`${baseURL}/bambu/login`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      if ([200, 201, 203].includes(response.status)) {
        return response.json().then(json => {
          console.log(json)
          return json;
        })
      }

    }).catch(err => {
      console.log('err', err)
    })
  }

  let authPollingInterval;

  onMounted(() => {
    checkAuth();
    authPollingInterval = setInterval(checkAuth, 5000);
  });

  onUnmounted(() => {
    clearInterval(authPollingInterval);
  });

  return {
    bblLogin,
    callBBLBFFEndpoint,
    isBBLAuthenticated
  }
}
