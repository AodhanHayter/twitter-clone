const tweetInput = (function() {
  const tweetInput = document.querySelector('#composeInput');

  function handleFocus(actionsElem, imgUploadButtonElem) {
    return function(e) {
      tweetInput.classList.add('expanded');
      actionsElem.classList.remove('hide');
      imgUploadButtonElem.classList.add('hide');
    };
  }

  function handleBlur(actionsElem, imgUploadButtonElem) {
    return function(event) {
      if (event.target.value.length === 0) {
        tweetInput.classList.remove('expanded');
        actionsElem.classList.add('hide');
        inputButton.classList.remove('hide');
      }
    };
  }

  function updateMessageCount(countElem) {
    return function(event) {
      const remainingChars = 280 - parseInt(event.target.value.length);
      if (remainingChars <= 10) {
        countElem.classList.add('danger');
      } else {
        countElem.classList.remove('danger');
      }
      countElem.textContent = remainingChars.toString();
    };
  }

  function handleButtonDisable(buttonElem) {
    return function(event) {
      if (event.target.value.length) {
        buttonElem.disabled = false;
      } else {
        buttonElem.disabled = true;
      }
    };
  }

  return {
    elementRef: tweetInput,
    handleFocus,
    handleBlur,
    updateMessageCount,
    handleButtonDisable,
  };
})();
