// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "replace") {
    var replaceRegex = new RegExp("\\b" + request.replaceWord + "\\b", "gi");

    document.querySelectorAll("*").forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.replace(
          replaceRegex,
          request.withWord
        );
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        node.innerHTML = node.innerHTML.replace(replaceRegex, request.withWord);
      }
    });
  }
});
