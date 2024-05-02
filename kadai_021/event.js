const h2 = document.getElementById("text");

document.getElementById("btn").onclick = function () {
  setTimeout(function () {
    h2.innerHTML = "ボタンをクリックしました。"
  }, 2000);
}
