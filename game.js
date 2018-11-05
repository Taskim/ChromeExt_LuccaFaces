const list = JSON.parse(window.localStorage.list);

const targetNode = document.getElementsByTagName("body")[0];
console.log("HELLO2.JS", list, targetNode);
const config = { attributes: true, childList: true, subtree: true };

const callback = function(mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type == "childList") {
      if (
        !document.getElementsByClassName("has-answered").length &&
        document.getElementsByClassName("answer").length === 4
      ) {
        const buttons = Array.from(document.querySelectorAll(".answer")).map(
          el => [el.textContent, el]
        );

        const goodOne = buttons.find(
          x =>
            x[0].trim().toUpperCase() ===
            list[
              document
                .querySelector(".image")
                .style.backgroundImage.match(
                  /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
                )[0]
            ]
              .trim()
              .toUpperCase()
        );
        goodOne[1].click();
      }
    }
  }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);
