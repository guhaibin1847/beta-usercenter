/**************************************************
*
*	Project : Beta Front JS Project
*	Version : 1.0
* 	Module  : Template engine
* 	Author  : Bean
* 	Contact : guhaibin1847@gmail.coms
*
**************************************************/ 
__.utils.TE = __.utils.TE || {};


(function(){
	var utils = __.utils;

	var renderByTemplate = function(template, data){
		var compiled = _.template(template);
		if(_.isArray(data)){
			var html = '';
			for (var i = 0; i < data.length; i++) {
				html += renderByTemplate(template, data[i]);
			}
			return html;
		}else if(_.isObject(data)){
			return compiled(data);
		}
		return '';
	};

	var renderBySelector = function(selector, data){
		var $wrapper = $(selector);
		if($wrapper[0]){
			var template = $wrapper.html();
			return renderByTemplate(template, data);
		}
		return '';
	};


	utils.TE.renderById = function(id, data){
		return renderBySelector('#'+id, data);
	};

	utils.TE.renderByTemplate = renderByTemplate;

})();