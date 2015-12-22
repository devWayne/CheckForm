/**
 * @param {varType} options Description
 * @return {void} description
 */
function Check(options){
	options = options || {};
	var defaultOpts = {
	
	}
	this.config = merge(options,defaultOpts);

	function merge(master,slave){
		if(!slave) return master;
		Object.keys(master).forEach(function(value,key){
			slave[value] = master[value];
		});
		return slave;
	}
}

Check.prototype.num= function(){
	var checkEl = "input[check-type='num']";
	$(document).delegate(checkEl,'keyup',function(e){
		var ipValue = $(this).val();
		if(!$.isNumeric(ipValue)){
			 $(this).val('');
		}
	});
}

