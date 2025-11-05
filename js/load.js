// js/load.js
$(function () {
  $("#header").load("partials/header.html", function (response, status, xhr) {
    if (status == "error") {
      console.log("Header load failed: " + xhr.status + " " + xhr.statusText);
    }
  });

  $("#footer").load("partials/footer.html", function (response, status, xhr) {
    if (status == "error") {
      console.log("Footer load failed: " + xhr.status + " " + xhr.statusText);
    }
  });
});
