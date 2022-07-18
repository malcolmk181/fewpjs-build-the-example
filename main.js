// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  let errorDiv = document.querySelector("#modal");

  document.body.addEventListener("click", event => {
    if (event.target.classList.contains("like-glyph")) {
      let heartSpan = event.target;
      mimicServerCall().then(() => {
        heartSpan.innerText === EMPTY_HEART ? heartSpan.innerText = FULL_HEART : heartSpan.innerText = EMPTY_HEART;
        heartSpan.classList.toggle("activated-heart");
      }).catch(error => {
        errorDiv.classList.remove("hidden");
        document.querySelector("#modal-message").innerText = error;
        setTimeout(() => errorDiv.classList.add("hidden"), 3000);
      })
    }
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
