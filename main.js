$('header > ul > li:eq(1)').hover(function(){
	//hoverした時
	$('.sub2').css({
		//transformの設定
		'transform': 'translate3d(0, 100px, 0)',
		'transition': 'all 0.2s',
		'-webkit-transition': 'all 0.2s'
	});
},function(){
	//hoverが解除された時
	//これはitem2からmouseleaveした直後の数回取得する
	$(':hover').each(function(){
		//headerとitem2の間にundefinedがあるため
		if ($(this).attr('class') != undefined){
			if ($(this).attr('class') != 'sub2'){
				$('.sub2').css({'transform': 'translate3d(0, 0, 0)'});
			}
		}
	});

});

$('.sub2').on('mouseleave',function(){
	//transformの上書き
	$('.sub2').css({'transform': 'translate3d(0, 0, 0)'});
});




$('header > ul > li:eq(2)').hover(function(){
	//hoverした時
	$('.sub3').css({
		//transformの設定
		'transform': 'translate3d(0, 100px, 0)',
		'transition': 'all 0.2s',
		'-webkit-transition': 'all 0.2s'
	});
	$('main').css({
		//transformの設定
		'transform': 'translate3d(0, 100px, 0)',
		'transition': 'all 0.2s',
		'-webkit-transition': 'all 0.2s'
	});
},function(){
	//hoverが解除された時
	//これはitem3からmouseleaveした直後の数回取得する
	$(':hover').each(function(){
		//headerとitem3の間にundefinedがあるため
		if ($(this).attr('class') != undefined){
			if ($(this).attr('class') != 'sub3'){
				$('.sub3').css({'transform': 'translate3d(0, 0, 0)'});
				//mainが動くとz-indexが一番大きくなるため固定してitem1,2が後ろにいかないようにする
				$('main').css({
					'transform': 'translate3d(0, 0, 0)',
					'z-index': '1'
				});
			}
		}
	});

});

$('.sub3').on('mouseleave',function(){
	//transformの上書き
	$('.sub3').css({'transform': 'translate3d(0, 0, 0)'});
	$('main').css({
		'transform': 'translate3d(0, 0, 0)',
		'z-index': '1'
	});
});







$('header > ul > li:eq(3)').hover(function(){
	//hoverした時
	$('.sub4_box').css({
		//transformの設定
		'transform': 'translate3d(0, 100px, 0)',
		'transition': 'all 0.2s',
		'-webkit-transition': 'all 0.2s'
	});

	let time = 0.4;
	for (let i=0; i<3; i++){
		$('body > ul:eq(2) > li:eq('+i+')').css({
			//transformの設定
			'transform': 'translate3d(0, 100px, 0)',
			'transition': 'all '+time+'s',
			'-webkit-transition': 'all '+time+'s'
		});
		time += 0.3;
	}
},function(){
	//hoverが解除された時
	//これはitem2からmouseleaveした直後の数回取得する
	$(':hover').each(function(){
		//headerとitem2の間にundefinedがあるため
		if ($(this).attr('class') != undefined){
			if ($(this).attr('class') != 'sub4'){
				for (let i=0; i<3; i++){
					$('body > ul:eq(2) > li:eq('+i+')').css({
						//transformの設定
						'transform': 'translate3d(0, 0, 0)'
					});
				}
				//listが動くのを待つため0.3秒遅らせる
				setTimeout(function(){
					$('.sub4_box').css({'transform': 'translate3d(0, 0, 0)'});
				},300);
			}
		}
	});

});

$('.sub4_box').on('mouseleave',function(){
	//transformの上書き
	for (let i=0; i<3; i++){
		$('body > ul:eq(2) > li:eq('+i+')').css({'transform': 'translate3d(0, 0, 0)'});
	}
	setTimeout(function(){
		$('.sub4_box').css({'transform': 'translate3d(0, 0, 0)'});
	},300);
});











