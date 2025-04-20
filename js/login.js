var signinEmail = document.querySelector("#signinEmail");
var signinpass = document.querySelector("#signinpass");
var login = document.querySelector("#login");
var ErrorMsg = document.querySelector("#ErrorMsg");
var togglePass = document.querySelector("#togglePass");
var passInput = document.querySelector("#signinpass");

var dataList = JSON.parse(localStorage.getItem("userdata")) || [];

function Login() {
  if (signinEmail.value === "" || signinpass.value === "") {
    ErrorMsg.innerHTML = `<p style="color:red; font-weight:bold;">All inputs are required</p>`;
  } else {
    checkUser();
  }
}

function checkUser() {
  for (var i = 0; i < dataList.length; i++) {
    if (
      signinEmail.value === dataList[i].email &&
      signinpass.value === dataList[i].password
    ) {
      var userWelcomeName = dataList[i].name;
      var remember = document.querySelector("#rememberMe").checked;

      if (remember) {
        localStorage.setItem("username", userWelcomeName);
      } else {
        sessionStorage.setItem("username", userWelcomeName);
      }

      var basePath = location.origin + location.pathname.replace(/\/[^\/]*$/, "");
      location.href = basePath + "/home.html";
      return;
    }
  }

  Swal.fire({
    icon: "error",
    title: "Oops!",
    text: "This email is not registered or the password is incorrect.",
    confirmButtonColor: "#d33",
  });
}

login.addEventListener("click", Login);

togglePass.addEventListener("click", function () {
  if (passInput.type === "password") {
    passInput.type = "text";
    togglePass.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passInput.type = "password";
    togglePass.classList.replace("fa-eye-slash", "fa-eye");
  }
});
