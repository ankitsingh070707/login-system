const email = document.querySelector("#email");
const password = document.querySelector("#password");
const hidebtn = document.querySelector("#hide_btn");
const loginbtn = document.querySelector("#login_btn");
const useremail = "ankits19783@gmail.com";
const userpassword = "ankit55ff";
const output = document.querySelector("#output");

hidebtn.addEventListener("click", () => {
  if (hidebtn.innerHTML === `<i class="fa-regular fa-eye"></i>`) {
    hidebtn.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    password.setAttribute("type", "text");
  } else {
    hidebtn.innerHTML = `<i class="fa-regular fa-eye"></i>`;
    password.setAttribute("type", "password");
  }
});

const idandpassword = [
  ["ankits19783@gmail.com", "ankit55ff"],
  ["abc6565@gmail.com", "13131"],
];

loginbtn.addEventListener("click", () => {
  let login = false;
  for (let i = 0; i < idandpassword.length; i++) {
    if (
      email.value === idandpassword[i][0] &&
      password.value === idandpassword[i][1]
    ) {
      login = true;
      break;
    }
  }
  if (login) {
    setTimeout(() => {
      window.location = "abc.html";
    }, 3000);
    output.style.color = "#0f0";
    output.innerText = "LOGIN SUCCESSFUL";
  } else {
    output.innerText = "somthing wrong".toUpperCase();
  }
});
