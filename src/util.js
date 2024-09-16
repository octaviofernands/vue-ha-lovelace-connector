export const parseMQTTCoolingPercentage = (value) => {
  const percentage = Math.ceil(value * 100 / 15);
  const roundPercentage = Math.round(percentage/10) * 10;

  return roundPercentage;
}

export const coolingPercentageToGCodeSpeed = (value) => {
  const percentage = Math.round(value / 10) * 10
  let speed = Math.ceil(255 * percentage / 100)

  if(speed > 255) speed = 255;
  if(speed < 0) speed = 0;

  return speed;
}

export const getFanSpeedGCode = (fanID, percentage) => {
  const speed = coolingPercentageToGCodeSpeed(percentage);
  const gcode = `M106 ${fanID} S${speed}\n`;

  return gcode
}

export const sendMQTTMessage = async (payload, hass, {input_topic = import.meta.env.VITE_X1C_INPUT_TOPIC}) => {
  console.log('sendMessage', payload);
  const domain = 'mqtt';
  const service = 'publish';

  if(!input_topic) {
    throw new Error('sendMQTTMessage: input_topic undefined');
  }

  console.log('sendMQTTMessage hass', hass)
  console.log('sendMQTTMessage input_topic', input_topic)

  const serviceData = {
    topic: input_topic,
    payload: JSON.stringify(payload)
  };

  if(!hass || !hass.callService) {
    throw new Error('sendMQTTMessage: hass or hass.callService is undefined');
  }

  try{
    const response = await hass.callService(domain, service, serviceData);
    console.log('sendMQTTMessage: message sent', response)
  } catch(e) {
    throw new Error(e);
  }
}

export const bambuPrintAction = (action, hass, config) => {
  if(!['pause', 'resume', 'stop'].includes(action)) {
    throw new Error(`Action ${action} cant be used`);
  }

  const msg = {
    print: {
      sequence_id: '0',
      command: action,
      param: '', // Always empty
    }
  }

  console.log('bambuPrintAction', msg);

  sendMQTTMessage(msg, hass, config);
}

export const bambuSetSpeedProfile = (value, hass, config) => {
  if(value == '4') { // no ludicrous :)
    return false;
  }

  const msg = {
    print: {
      sequence_id: '0',
      command: 'print_speed',
      param: value.toString() // Print speed level as a string
                              // 1 = silent
                              // 2 = standard
                              // 3 = sport
                              // 4 = ludicrous
    }
  }

  console.log('setSpeedProfile', msg);

  sendMQTTMessage(msg, hass, config);
}
