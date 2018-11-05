let list = {};
let catchButton = document.getElementById("catch");
catchButton.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { type: "catch" }, function(
      response
    ) {});
  });
};
