const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];
let num1, num2;

num1 = 0;
num2 = 0;

for (num1 + 1;num1<=15; num1++ ) {
  console.log('これはfor文です。', holidays[num1]);
}

while (num2 <= 15) {
  console.log('これはwhile文です。', holidays[num2]);
  num2 = num2 + 1;
}
