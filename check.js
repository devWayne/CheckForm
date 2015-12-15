/**
 * @param {varType} options Description
 * @return {void} description
 */
function Check(options){
	
	var defaultOpts = {
	
	}
	this.config = merge{options,defaultOpts);

	function merge(master,slave){
		if(!slave) return master;
		Object.keys(master).forEach(function(value,key){
			slave[value] = master[value];
		});
		return slave;
	}
}

check.prototype.run(){

}

