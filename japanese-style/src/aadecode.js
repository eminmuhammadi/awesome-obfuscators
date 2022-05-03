const aadecode = (text) =>{
	text = text.replace("\) \('_'\)","");
	text = text.replace("\(ﾟДﾟ\) \['_'\] \(","return ");

	return new Function(text)();
}

module.exports = aadecode;