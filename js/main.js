const actions = document.querySelector('.actions');
const inputButton = document.querySelector('.input-button');
const messageCount = document.querySelector('.message-count');
const tweets = document.querySelector('.tweets');

tweetButton.elementRef.addEventListener(
  'click',
  tweetButton.handleClick(
    tweetInput.elementRef,
    tweetInput.handleBlur(actions, inputButton),
    tweets
  )
);

tweetInput.elementRef.addEventListener(
  'focus',
  tweetInput.handleFocus(actions, inputButton)
);
tweetInput.elementRef.addEventListener(
  'blur',
  tweetInput.handleBlur(actions, inputButton)
);
tweetInput.elementRef.addEventListener(
  'input',
  tweetInput.handleButtonDisable(tweetButton.elementRef)
);
tweetInput.elementRef.addEventListener(
  'input',
  tweetInput.updateMessageCount(messageCount)
);
