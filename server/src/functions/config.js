import envVariables from './runtimeconfig.json';
const variablesNames = Object.keys(envVariables.config);
const variablesValues = Object.values(envVariables.config);
const numVars = ['max_bulk', 'max_featured_count', 'usu_token_expiry', 'timwe_operator_id', 'timwe_service_id'];
const notUppcasedVars = ['api_key', 'domain'];

function numberValue(value, index) {
  for (let ix = 0; ix < numVars.length; ix++) {
    if (value === numVars[ix]) {
      return (variablesValues[index] = Number(variablesValues[index]));
    }
  }

  return variablesValues[index];
}

function uppcased(value, array) {
  for (let ix = 0; ix < array.length; ix++) {
    if (value === array[ix]) {
      return value;
    }
  }

  return value.toUpperCase();
}

const config = variablesNames.reduce((acc, value, index) => {
  if (!acc[value]) {
    acc[uppcased(value, notUppcasedVars)] = numberValue(value, index);
    return acc;
  }

  return acc;
}, {});



export default config;
