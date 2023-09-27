let jsonData = JSON.parse(JSON.stringify(items));
var random_index = Math.floor(Math.random() * 10);
var item_name = JSON.stringify(jsonData["itemList"][random_index].name);
var item_price = JSON.stringify(jsonData["itemList"][random_index].price);
var item_image = JSON.stringify(jsonData["itemList"][random_index].image);

function gameStart() {
  //'게임시작' 버튼 클릭시 '게임시작' 버튼 숨기기
  const btnStart = document.getElementById("btnStart");
  btnStart.style.display = "none";

  //'게임시작' 버튼 클릭시 '다음문제' 버튼 나타내기
  const btnNext = document.getElementById("btnNext");
  btnNext.style.display = "block";

  //상품 이미지, 이름 나타날 공간 초기화
  var imgArea = document.getElementById("productImageArea");
  var nameArea = document.getElementById("productNameArea");
  imgArea.innerHTML = "";
  nameArea.innerHTML = "";

  //상품 이미지, 이름 나타내기
  var img = new Image();
  img.src = "images/" + item_image.replace(/"/g, "");
  img.width = "400";
  img.height = "400";
  imgArea.appendChild(img);

  nameArea.append(item_name);
}

function nextProblem() {
  document.getElementById("user-price-box").value = "0";
  document.getElementById("real-price-box").value = "";
  document.getElementById("diff-price-box").value = "";

  random_index = Math.floor(Math.random() * 10);
  item_name = JSON.stringify(jsonData["itemList"][random_index].name);
  item_price = JSON.stringify(jsonData["itemList"][random_index].price);
  item_image = JSON.stringify(jsonData["itemList"][random_index].image);

  var imgArea = document.getElementById("productImageArea");
  var nameArea = document.getElementById("productNameArea");
  imgArea.innerHTML = "";
  nameArea.innerHTML = "";

  var img = new Image();
  img.src = "images/" + item_image.replace(/"/g, "");
  img.width = "400";
  img.height = "400";
  imgArea.appendChild(img);

  nameArea.append(item_name);
}

function show_result() {
  // 만약 예측값이 없는 경우에 확인하기 버튼을 누른 경우.
  // 입력값을 0 점으로 반영하여 처리.
  var real_price = item_price.replace(/"/g, "") * 1;
  var user_price = parseInt(document.getElementById("user-price-box").value);
  var realPriceBox = document.getElementById("real-price-box");
  realPriceBox.value = real_price;
  var diffPriceBox = document.getElementById("diff-price-box");
  diffPriceBox.value = Math.abs(real_price - user_price);

  var userScore = document.getElementById("userScore");
  var newScore = parseInt(userScore.value) + Math.abs(real_price - user_price);
  console.log(typeof newScore);
  userScore.value = newScore;

  if (userScore.value > 1000000) {
    alert("점수가 100만원을 넘었습니다! 실패!");
  }
}
