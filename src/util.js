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
