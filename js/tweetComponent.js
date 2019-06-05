const tweetComponent = (function() {
  function create(tweetContent, postedBy)  {
    const newTweet = document.createElement('div');
    newTweet.classList.add('tweet');

    newTweet.innerHTML = `
      <div class="profile">
        <img class="img-tweet-profile" src="${postedBy.profileImg}" />
      </div>
      <div class="message">
        <div class="posted-by">
          <span class="display-name">${postedBy.displayName}</span>
          <span class="handle">${postedBy.handle}</span>
        </div>
        <div class="content">
          <p>${tweetContent}</p>
        </div>
        <div class="tweet-actions">
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="far fa-envelope"></i>
        </div>
      </div>
    `

    return newTweet;
  }

  return {
    create,
  }
})();
