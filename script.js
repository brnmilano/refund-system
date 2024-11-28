const currencyInput = document.querySelector("#amount");

/**
 * @description Função que formata o input para aceitar apenas números.
 *
 * @param {*} inputValue - valor do input.
 * @returns {string} - retorna o valor do input formatado.
 */
function formattedInput(inputValue) {
  return inputValue.value.replace(/[^0-9.]/g, "").replace(/(\.*?)\..*/g, "$1");
}

/**
 * @description Evento que formata o input ao digitar.
 */
currencyInput.oninput = () => {
  currencyInput.value = formattedInput(currencyInput);

  console.log(currencyInput.value);
};

try {
  console.log("try");
} catch (error) {
  console.log("catch");
  console.log(error);
}
