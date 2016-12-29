
/* Text Cleaner 
   Takes in user inputted text and strips off whitespace, case, and extra
   characters. Returns cleaned text
*/

function textCleaner(text) {
  text = text.replace(/\r?\n|\r/g, "");
  text = text.toLowerCase().match(/\b[^\s]+\b/g).sort();
  return text;
}

/* Unique Words
   Takes in scrubbedText array, and checks to see if each
   array item is already in uniqueWords array.  If item is
   already in, nothing happens, otherwise array item is pushed
   onto new uniqueWords array
*/

function uniqueWordCount(scrubbedText) {
  var uniqueWords = [];
  for (i = 0; i < scrubbedText.length; i++) {
    if (uniqueWords.indexOf(scrubbedText[i]) === -1) {
      uniqueWords.push(scrubbedText[i]);
    } 
  }
  return uniqueWords.length;
}


/* Average Word Length
   Takes in the user text that has been scrubbed clean of case
   and extra characters, and returns the total length of the text
   divided by the total number of words
*/

function avgWordLength(scrubbedText) {
  var totalTextLength = scrubbedText.join("").length;
  return (totalTextLength/scrubbedText.length).toFixed(2);
}


/* Average words in sentences
   Takes in original text and finds line breaks to indicate end of sentence
   divides that number by total number of words to get average

*/

function averageWordsPerSentence(text, numWords) {
	var numSentences = 0;

	if (text.match(/\r?\n/g)) {
		numSentences = text.match(/\r?\n/g).length + 1;
	}
	else {
		numSentences = 1;
	}
	return (numWords/numSentences).toFixed(2);
}

//   var totalSentences = 3;
//   return(numWords/totalSentences);
// }
// var numSentences = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length : 1;

// var numSentences = 0

// if (text.match(/\n+/g)) {
// 	numSentences = text.match(/\n+/g).length 
// }
// else {
// 	numSentences = 1
// }

// str = str.split('\n').split('\r').reverse().join(' ')

// console.log("orig: " + userText);
// console.log("clean: " + scrubbedText);
// console.log("total word count: " + wordCount);
// console.log("average word length: " + averageWordLength);
// console.log("unique words: " + uniqueWords);
// console.log("words per sentences: " + avgSent);

function resultsReport(text){
  
  var scrubbedText = textCleaner(text);
  var wordCount = scrubbedText.length;
  var averageWordLength = avgWordLength(scrubbedText);
  var uniqueWords = uniqueWordCount(scrubbedText);
  var avgWordsPerSentence = averageWordsPerSentence(text, wordCount);

  $('.js-word-count').text(wordCount);
  $('.js-unique-words').text(uniqueWords);
  $('.js-avg-word-length').text(averageWordLength + " chars");
  $('.js-avg-sentence-length').text(avgWordsPerSentence + " words");
  $('.js-text-report').removeClass('hidden');
  $('.js-text-report').addClass('test-class');
  
}

function getUserText() {
	$('.js-input-form').submit(function(event) {
		event.preventDefault();
		var userText = $(this).find('#user-text').val();
		console.log(resultsReport(userText));
	});
  
}      


$( document ).ready(function() {
    getUserText();
});
