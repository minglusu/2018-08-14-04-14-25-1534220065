"use strict";

module.exports = function main(input) {
	let numbers = `
._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.
|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|
|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|
`;
	let splitArr = numbers.split(/   |\n/),
		numberArr = [],
		k= 0;
	for(let i=0, l=splitArr.length;i<l;i++){
		let numberStr = splitArr[i];
		if(''==numberStr) continue;
		if(10==k) k=0;
		if(!(k in numberArr)) numberArr[k] = [];
		numberArr[k].push(numberStr);
		k++;
	}
    console.log(numberArr);

    let output = '';
    for(let i=0; i<3; i++){
    	for(let k = 0, l=input.length; k<l;k++){
    		let number = input[k];
    		output += numberArr[number][i];
    		if(k!=l-1) output += " ";
    	}
    	output += "\n";
    }
    console.log(output);
    return output;
};