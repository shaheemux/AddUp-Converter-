window.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const convertBtn = document.getElementById('convertBtn');
    const resultOutput = document.getElementById('result');
  
    // Add event listener to the convert button
    convertBtn.addEventListener('click', convertToSum);
  
    // Function to convert number1 and number2 to sum
    function convertToSum() {
      const number1 = parseFloat(number1Input.value);
      const number2 = parseFloat(number2Input.value);
  
      if (isNaN(number1) || isNaN(number2)) {
        resultOutput.value = 'Invalid input';
        return;
      }
  
      const sum = number1 + number2;
      resultOutput.value = sum.toFixed(2);
    }
  });