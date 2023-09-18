function test() {
	var real_price = 29000;
	var user_price = document.getElementById("user-price-box").value;
	document.getElementById('real-price-box').value = real_price;
	document.getElementById('result-box').value = user_price - real_price;

}

function gameStart() {
	// 게임영역 초기화
	$("#gameArea").empty();

	// 랜덤난수 부여
	var randomNumber = Math.floor(Math.random() * 101);
	$("#randomNumber").val(randomNumber);

	// 게임 영역 생성
	$("#gameArea").append("<image src = 'images/1.jpg' width = '400' height = '400'></image>")
	$("#gameArea").append("<p>삼성 정품 갤럭시 Z플립5 케이스 실리콘 With 링 제트플립5</p>");
}
