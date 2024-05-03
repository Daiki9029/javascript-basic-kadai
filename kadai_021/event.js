const h2 = document.getElementById("text");

const btn = document.getElementById("btn");

btn.onclick = function () {
  setTimeout(function () {
    h2.innerHTML = "ボタンをクリックしました。"
  }, 2000);
}
