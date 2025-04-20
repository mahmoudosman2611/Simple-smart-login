var welcome = document.querySelector("#welcome");
var btnLogOut = document.querySelector("#btnLogOut");

var username = localStorage.getItem("username") || sessionStorage.getItem("username");

if (!username) {
  var basePath = location.origin + location.pathname.replace(/\/[^\/]*$/, "");
  window.location.href = basePath + "/index.html";
} else {
  welcome.innerHTML = "Welcome, " + username;
}

btnLogOut.addEventListener("click", function () {
  localStorage.removeItem("username");
  sessionStorage.removeItem("username");

  var basePath = location.origin + location.pathname.replace(/\/[^\/]*$/, "");
  window.location.href = basePath + "/index.html";
});
