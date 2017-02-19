var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name:{
		type :String,
		required:true
	},
	create_date:{
		type : Date,
		default : Date.now
	}
});

var user = module.exports = mongoose.model('user',userSchema);


//get user
module.exports.getUser = function(callback,limit){
 user.find(callback).limit(limit);
}