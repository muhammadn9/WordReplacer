// popup.js
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("replaceButton")
    .addEventListener("click", replaceWords);
});

function replaceWords() {
  var replaceWord = document.getElementById("replaceInput").value;
  var withWord = document.getElementById("withInput").value;

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "replace",
      replaceWord,
      withWord,
    });
  });
}
