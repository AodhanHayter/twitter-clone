const tweetButton = (function() {
  const tweetButton = document.querySelector('.post-tweet');

  function handleClick(inputElem, resetInput, tweetsElem) {
    return function(event) {
      const tweetContent = tweetInput.elementRef.value;

      // reset input
      tweetInput.elementRef.value = '';
      const resetEvent = {
        target: {
          value: tweetInput.elementRef.value,
        },
      };
      resetInput(resetEvent);

      // create tweet element
      tweets.prepend(tweetComponent.create(tweetContent, {
        displayName: 'Aodhan Hayter',
        handle: '@ahayter',
        profileImg: 'img/alagoon.jpg'
      }))
    };
  }

  return {
    elementRef: tweetButton,
    handleClick,
  };
})();
