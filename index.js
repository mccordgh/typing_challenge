cl = (thang) => {
  console.log(thang);
}

const display = document.getElementById('display');
const userInput = document.getElementById('userInput');

const getUserInput = (event) => {
  const userInputText = userInput.value.toString();
  const displayText = display.innerHTML;
  const userInputLength = userInputText.length;
  const lastLetterTyped = userInputText[userInputLength - 1];

  cl({
    userInputLength,
    lastLetterTyped,
  });

  if (userInputText === displayText) {
    cl('YOU WONNERED ~~~~~~~~~~~~');
    cl('YOU WONNERED ~~~~~~~~~~~~');
    cl('YOU WONNERED ~~~~~~~~~~~~');
    cl('YOU WONNERED ~~~~~~~~~~~~');
    cl('YOU WONNERED ~~~~~~~~~~~~');
    cl('YOU WONNERED ~~~~~~~~~~~~');
    return;
  }

  if (lastLetterTyped === displayText[userInputLength - 1]) {
    cl("CORRECT");
  } else {
    cl("WRONG");
    if (userInputLength === 1) {
      cl('blanking');
      userInput.value = '';
    } else {
      cl('taking off one');
      cl({
        el: userInput.value,
        userInputText,
        userInputLength,
      })
      cl('trimming');
      cl('userInputText ', userInputText);
      cl('userInputLength - 1: ' + (parseInt(userInputLength) - 1));
      userInput.value = userInputText.slice(0, -1);
    }
  }

}

userInput.addEventListener('keydown', getUserInput);
userInput.focus();

display.innerHTML = "The fox is doing stuff.";
userInput.value = "";
