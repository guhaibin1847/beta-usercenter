/**************************************************
*
*	Project : Beta Front JS Project
*	Version : 1.0
* 	Module  : Init page svgs
* 	Author  : Bean
* 	Contact : guhaibin1847@gmail.coms
*
**************************************************/ 
__.service.init = __.service.initSvg || {};

(function(){
	var $svgs = $('.svg');

	__.service.init.svg = function(){
		_.each($svgs, function(svg){
			var $svg = $(svg);
			var ref =$svg.attr('ref-template');
			var html = __.utils.TE.renderById(ref, {});
			$svg.html(html);
		});
	};

})();

$(document).ready(function(){
	__.service.init.svg();
});