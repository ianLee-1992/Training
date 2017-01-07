var studentScore = {
	score: '',
	init: function(){
		this.getScore();
	},
	getScore: function(){
		var scoreValue = document.getElementById('studentScore');
		var scoreBtn = document.getElementById('checkScore');

		scoreBtn.onclick = function(){
			studentScore.score = scoreValue.value;
			if (studentScore.score == '') {
				//尚未输入
				alert('您尚未输入成绩，请输入！');
				return;
			}else{
				studentScore.calculate();
			}
		}
	},
	calculate: function(){
		var score = studentScore.score;
		switch(true){
			case score > 90 && score <= 100:
				alert('1等生');
				break;
			default:
			alert('请输入0到100的数字！');
			break;	
		}
	}
};

(function(){
	studentScore.init();
})();