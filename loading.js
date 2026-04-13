(function () {
  var timeoutContainer = document.querySelector("[data-timeout]");
  if (!timeoutContainer) return;

  setTimeout(function () {
    timeoutContainer.hidden = false;
  }, 7000);

  var retry = document.querySelector("[data-retry]");
  if (retry) {
    retry.addEventListener("click", function () {
      timeoutContainer.hidden = true;
      setTimeout(function () {
        timeoutContainer.hidden = false;
      }, 7000);
    });
  }
})();
