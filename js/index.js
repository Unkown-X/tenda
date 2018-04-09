$(function(){
	var product = [{name:['nova','AC18','AC15','AC9'],img:['20171117102579019.jpg','AC18.jpg','AC15.jpg','AC9CN.jpg'],info:['500平米别墅级覆盖WiFi系统','1900M 11ac千兆口别墅型双频无线路由器','1900M 11ac双频无线千兆口路由器','1200M 5口全千兆双频无线路由器']},
					{name:['S105V10.0','S108','SG108','SG105'],img:['S105V10.0.jpg','S108.jpg','SG108.jpg','SG105.jpg'],info:['5口快速以太网交换机','8口快速以太网交换机','8口千兆桌面式交换机','5口千兆桌面式交换机']},
					{name:['U3','U6','U12','W311MA 免驱版'],img:['201710251748562452.jpg','2017521459158688.jpg','2017116155418833.jpg','2017141515335722.jpg'],info:['300M迷你无线网卡','300M 信号增强型无线网卡','1300M极速影音11AC双频无线网卡','150M 信号增强型免驱无线网卡']},
					{name:['PH3','PH15','PA202','P202'],img:['2016919827395509.jpg','PH15.jpg','PA202.jpg','P202.jpg'],info:['1000M有线电力猫','1000M子母路由（电力猫）','300M无线电力线扩展','200M有线电力线适配器']},
					{name:['A12','A9','AR301','A301'],img:['s_20178221634518947.jpg','2016741550474097.jpg','AR301.jpg','A301.jpg'],info:['全屋覆盖信号扩展器','300M信号放大器','300M无缝覆盖套装②号','300M 无线信号扩展器']}];
	for(var j=0;j<$('#nav-buy li').length;j++){
		$('#nav-buy li').eq(j).on('click',function(){
			for(var i=0;i<$('#nav-buy li').length;i++){
				$('#nav-buy li').eq(i).attr('class','');
			}
			$(this).attr('class','active');
			change($(this).index());
			// console.log($(this).index())
		});
	}
	function change(num){
		for(var i=0;i<4;i++){
			$('#product-buy img').eq(i).attr('src','./images/'+product[num].img[i]);
			$('#product-buy h3').eq(i).text(product[num].name[i]);
			$('#product-buy h4').eq(i).text(product[num].info[i]);
		}
	}
});