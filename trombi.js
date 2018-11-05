chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "catch") {
    let list = Array.from(document.querySelectorAll(".picture")).reduce(
      (acc, x) => {
        acc[
          x.style.backgroundImage.match(
            /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
          )
        ] = x.parentNode.parentNode.getElementsByTagName("h4")[0].innerText;
        return acc;
      },
      {}
    );
    window.localStorage.list = JSON.stringify(list);
    sendResponse({ list });
    return true;
  }
});
