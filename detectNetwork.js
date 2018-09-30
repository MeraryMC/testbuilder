var detectNetwork = function(cardNumber) {
	var oneDigitPrefix = Number(cardNumber.slice(0,1));
	var threeDigitPrefix = Number(cardNumber.slice(0,3));
  	var fourDigitPrefix = Number(cardNumber.slice(0,4));
  	var sixDigitPrefix = Number(cardNumber.slice(0,6))
  
	if (cardNumber.length === 14 && (cardNumber.startsWith('38') || cardNumber.startsWith('39'))) {
		return "Diner's Club";
	} else if ((cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) && (fourDigitPrefix  === 4903 || fourDigitPrefix  === 4905 || fourDigitPrefix  === 4911 || fourDigitPrefix  === 4936 || sixDigitPrefix === 564182 || sixDigitPrefix === 633110 || fourDigitPrefix  === 6333 || fourDigitPrefix  === 6759)) {
    	return 'Switch';
	} else if (cardNumber.length === 15 && (cardNumber.startsWith('34') || cardNumber.startsWith('37'))) {
		return 'American Express';
	} else if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && cardNumber.startsWith('4')) {
		return 'Visa';
	} else if (cardNumber.length === 16 && (cardNumber.startsWith('51') || cardNumber.startsWith('52') || cardNumber.startsWith('53') || cardNumber.startsWith('54') || cardNumber.startsWith('55'))) {
		return 'MasterCard';
	} else if ((cardNumber.length === 16 || cardNumber.length === 19) && (cardNumber.startsWith('6011') || cardNumber.startsWith('644') || cardNumber.startsWith('645') || cardNumber.startsWith('646') || cardNumber.startsWith('647') || cardNumber.startsWith('648') || cardNumber.startsWith('649') || cardNumber.startsWith('65'))) {
		return 'Discover';
	} else if ((cardNumber.length === 12 || cardNumber.length === 13 || cardNumber.length === 14 || cardNumber.length === 15 || cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19) && (cardNumber.startsWith('5018') || cardNumber.startsWith('5020') || cardNumber.startsWith('5038') || cardNumber.startsWith('6304'))) {
		return 'Maestro';
	} else if ((16 <= cardNumber.length && cardNumber.length <= 19) &&(622126 <= sixDigitPrefix && sixDigitPrefix <= 622925) || (624 <= threeDigitPrefix  && threeDigitPrefix  <= 626) || (6282 <= fourDigitPrefix && fourDigitPrefix  <= 6288)) {
    	return 'China UnionPay';
	} else if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && oneDigitPrefix  === 4) {
    	return 'Visa';
	} else {
		return 'card unknown';
	}
};



