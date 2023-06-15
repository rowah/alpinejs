import { tweetsData } from "./data.js";
const tweetInput = document.getElementById("tweet-input");
const tweetBtn = document.getElementById("tweet-btn");
const tweetContainer = document.getElementById("feed");

tweetBtn.addEventListener("click", () => {
  console.log(tweetInput.value);
});

function getFeedHtml() {
  let htmlTweet = ``;
  //   for (const tweet of tweetsData) {
  //     // Perform additional operations with the user object here
  //     htmlTweet += `<div class="tweet">
  //     <div class="tweet-inner">
  //         <img src=${tweet.profilePic} class="profile-pic">
  //         <div>
  //             <p class="handle">${tweet.handle}</p>
  //             <p class="tweet-text">${tweet.tweetText}</p>
  //             <div class="tweet-details">
  //                 <span class="tweet-detail">
  //                     ${tweet.replies.length}
  //                 </span>
  //                 <span class="tweet-detail">
  //                     ${tweet.likes}
  //                 </span>
  //                 <span class="tweet-detail">
  //                     ${tweet.retweets}
  //                 </span>
  //             </div>
  //         </div>
  //     </div>
  // </div>`;

  //     console.log(htmlTweet);
  //   }
  //   /*
  // Challenge:
  // 1. Use a "for of" to iterate over the data and
  //    create HTML string for each tweet using the
  //    boilerplate below. Replace UPPERCASE text
  //    with data from the tweets.
  // 2. Store this HTML in a let called "feedHtml".
  // 3. Log out feedHtml.
  // 4. Call getFeedHtml to check it's working.
  // */

  /*
Challenge:
1. Inside each span that has a class of "tweet-detail",
   add an <i> tag.
2. Give each <i> tag the classes it needs to render the
   correct icons next to the numbers.
   The classes you will need are:
    fa-regular, 
    fa-solid, 
    fa-comment-dots, 
    fa-heart, 
    fa-retweet
*/
  tweetsData.forEach((tweet) => {
    htmlTweet += `<div class="tweet">
      <div class="tweet-inner">
          <img src=${tweet.profilePic} class="profile-pic">
          <div>
              <p class="handle">${tweet.handle}</p>
              <p class="tweet-text">${tweet.tweetText}</p>
              <div class="tweet-details">
                  <span class="tweet-detail">
                  <i class="fa-regular fa-comment-dots"></i>
                      ${tweet.replies.length}
                  </span>
                  <span class="tweet-detail">
                  <i class="fa-solid fa-heart"></i>
                      ${tweet.likes}
                  </span>
                  <span class="tweet-detail">
                  <i class="fa-solid fa-retweet"></i>
                      ${tweet.retweets}
                  </span>
              </div>   
          </div>            
      </div>
  </div>`;
  });
  console.log(htmlTweet);
  return htmlTweet;
}
getFeedHtml();

function render() {
  tweetContainer.innerHTML = getFeedHtml();
  /*
Challenge:
1. Take control of the ‘feed’ div.
2. Render the HTML returned by the getFeedHtml
   function to the 'feed' div.
   See if you can do this with just one line of code!
*/
}

render();
