<script setup>
import { ref, defineModel, provide, onUnmounted } from 'vue';

const bblUsername = defineModel('bblUsername', { type: String });
const bblPassword = defineModel('bblPassword', { type: String });
const isBBLAuthenticated = ref(false);

const baseURL = import.meta.env.VITE_BFF;

const BFFCallBBLEndpoint = async (endpoint, method = 'GET', payload = {}) => {
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

provide('BFFCallBBLEndpoint', BFFCallBBLEndpoint);

// BFFCallBBLEndpoint('/v1/iot-service/api/user/bind').then(console.log)

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

const login = () => {
  const payload = {
    account: bblUsername.value,
    bblPassword: bblPassword.value,
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

checkAuth();
const authPollingInterval = setInterval(checkAuth, 5000);

onUnmounted(() => {
  clearInterval(authPollingInterval);
})
</script>

<template>
  <div>
    <ha-card class="custom-card bbl-login-card">
      <input
        v-model="bblUsername"
        type="text"
        id="bblUsername"
        placeholder="bblUsername"
      >

      <input
        v-model="bblPassword"
        type="password"
        id="bblPassword"
        placeholder="bblPassword"
      >

      <button @click="login()">
        Login
      </button>
    </ha-card>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import url('@/main.scss');
</style>

<script>
export default {
  name: 'custom-bff-provider',
  friendlyName: '',
  description: '',
}

</script>
