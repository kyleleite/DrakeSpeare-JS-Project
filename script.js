$(function() {

	var textChoice = {
	onlyDrake: ["I\'m way up","I feel blessed","Started from the bottom now we\’re here","Last name ever","first name greatest","On my worst behavior","That\'s when you\'re the prettiest","I hope that you don\'t take it wrong","Better late than never","but never late is better","Tuck my napkin in my shirt cause I\'m just mobbing like that","I like who I\'m becoming","I turn the six upside down","it\’s a nine now" ,"You toying with it like a Happy Meal","Don\’t you see Riri right next to me?","Let\’s do the things that we say on text","Got so many chains","they call me Chaining Tatum" ,"Why you gotta fight with me at Cheesecake?","All that grey in our conversation history","Your best day is my worst day","Hold On, We\’re Going Home","Yolo","The 6","Thank me later","Take care","nothing was the same","views","so far gone","if your reading this its too late","what a time to be alive","Weston Road Flows","Pop Style","hotline bling","jump man","started from the bottom","hold on, were going home" ,"big rings","energy","back to back","6 god" ,"right hand" ,"0 to 100","worst behaviour" ,"how about now","best I ever had","the motto" ,"10 bands","doing it wrong","crew love" ,"keep the family close" ,"u with me?","hype","controlla","one dance","grammys","childs play","summer sixteen","legend","know yourself","preach","jungle","the language","the motion","up all night","fancy","rihanna","we the north","Aubrey Drake Graham", "known professionally as Drake","Canadian rapper", "singer", "songwriter", "record producer","actor", "born and raised in Toronto","OVO","Octobers very own"],

	onlyShakespeare: ["wherefore art","thou","o\'","shall","oft","thine own self","wherein","brevity is the soul of wit","fool","doth","that wrens make pray","Romeo","Juliet","Capulet","Montague","torches to burn bright","glove upon that hand","o\'er","hath eaten me","King","Queen","true nobility","Caesar","masters of their fate","Brutus","ides of March","daggers","I say","t\'is","careless trifle","serpent\'s tooth","knowest","greatness thrust upon","Cupid painted blind","much ado","raineth","true love","comedy","tragedy","infinite deal of nothing","all\'s well","methinks","no sooner sighed","that which we call a rose","comforteth","MacBeth","anon","afeard","aught","aye","befall","beshrew","cuckold","forsooth","livery","morn","morrow","quoth","thou canst not then be false to any man","doth protest too much","a little more than kin","I will speak daggers to her","doubt that the sun doth move","all the world\'s a stage","thou art not so unkind as man\'s ingratitude","star-crossed lovers","the course of true love","thus","common curse of mankind","wench","perchance","hereafter","besmirch","hither","whence","betroth","Lord","Lady MacBeth","Calphurnia","Earl of Cambridge","Canterbury","With mirth and laughter let old wrinkles come", "Shall I compare thee to a summer\'s day?","too often is his gold complexion dimm\'d","eternal lines to time thou growest","conscience doth make cowards of us all","Et tu, Brute?","O serpent heart hid with a flowering face","This goodly frame, the earth, seems to me a sterile promontory","thou art a very ragged Wart","sweet are the uses of adversity","which, like the toad, ugly and venomous","to entertain these fair well-spoken days","to beguile the time","eye of newt","toe of frog","wool of bat","tongue of dog","double, double toil and trouble","you are thought here to the most senseless and fit man for the job","most wonderful","not deck\'d with diamonds","I do repent it from my very soul","I can call spirits from the vasty deep","no beast so fierce but knows some touch of pity"]
};

	//The form is submitted and the default page refresh is prevented
	$('form').on('submit', function(event) {
		event.preventDefault();

		//We store the user's text and size choices in variables
		var userTextChoice = $('input[name=textChoice]:checked').val();
		console.log(userTextChoice);
		var userSizeChoice = $('input[name=sizeChoice]:checked').val();
		console.log(userSizeChoice);

		//If the userTextChoicei is "mix", the two arrays (onlyDrake and onlyShakespeare) are combined using .concat
		var matchedTextChoice;
		if (userTextChoice === "mix") {
			matchedTextChoice = textChoice.onlyDrake.concat(textChoice.onlyShakespeare);
		}
		else {
	 		matchedTextChoice = textChoice[userTextChoice];
			
		}

		//The paragraph size choices are defined here
		var matchedSizeChoice;
		if (userSizeChoice === "short") {
			matchedSizeChoice = 25;
		}
		else if (userSizeChoice === "medium") {
			matchedSizeChoice = 50;
		}
		else {
			matchedSizeChoice = 100;
		}

		//An empty array is where the randomized words will be placed
		var groupWords = [];

		//This for loop iterates as many times as there are words in matchedSizeChoice. 
		for (var i = 0; i < matchedSizeChoice; i++) {
			//We pull a random number from 0 to the length of the matchedTextChoice array. This will correspond to the index number in that array
			var randomNumber = Math.floor(Math.random() * matchedTextChoice.length);

			//Then we create a variable that stores the string that matches the randomNumber (i.e. random index number)
			var randomWord = matchedTextChoice[randomNumber];
			console.log(randomWord);

			//We push the randomWord into groupWords
			groupWords.push(randomWord);

		}

		//We convert the array into a single string and store it in a variable
		var generatedText = groupWords.join(" ");

		console.log(generatedText);

		//We place the generatedText into the .textBox in the HTML
		$('.textBox').html('<p>' + generatedText + '.</p>');
		// $('.textBox').find('p').css('text-transform', 'uppercase');

	});

	//The user has the option to copy the text from .textBox to their clipboard for further use
	new Clipboard('.btn');

	$('button').on('click',function(){
		$(".copied").text("Copied to clipboard").show().fadeOut(1200);
	})

})