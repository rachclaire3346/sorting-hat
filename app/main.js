new Vue({
   
   el: '#app',

   data: {
      message: 'Where do you belong .... ?',

      randomHouse: '',

      questionOne: '',

      questionTwo: '',

      questionThree: '',

      questionFour: '',

      questionFive: '',

      houses: [
				{
				name:'Gryffindor!'
				},
				{
				name:'Hufflepuff!'	
				},
				{
				name:'Ravenclaw!'	
				},
				{
				name:'Slytherin!'	
				}
			  ]		  
   },

   methods: {

   		randomizeHouse: function () {
   			var randomNumber = Math.floor(Math.random() * (this.houses.length));
   			this.randomHouse = this.houses[randomNumber].name;
   		},

   		answerQuestionOne: function () {
   			console.log(questionOne);
   			if (this.randomHouse.name === 'Gryffindor') {
   				this.questionOne = 'Scarlet';
   			}
   			if (this.randomHouse.name === 'Hufflepuff') {
   				this.questionOne = 'Yellow'
   			}
   			if (this.randomHouse.name === 'Ravelclaw') {
   				this.questionOne = 'Blue'
   			}
   			if (this.randomHouse.name === 'Slytherin') {
   				this.questionOne = 'Green'
   			}

   		},

   		answerQuestionTwo: function () {
   			if (this.randomHouse.name === 'Gryffindor') {
   				this.questionOne = 'Lion';
   			}
   			if (this.randomHouse.name === 'Hufflepuff') {
   				this.questionOne = 'Badger'
   			}
   			if (this.randomHouse.name === 'Ravelclaw') {
   				this.questionOne = 'Eagle'
   			}
   			if (this.randomHouse.name === 'Slytherin') {
   				this.questionOne = 'Snake'
   			}

   		},

   		answerQuestionThree: function () {
   			if (this.randomHouse.name === 'Gryffindor') {
   				this.questionOne = 'Brave';
   			}
   			if (this.randomHouse.name === 'Hufflepuff') {
   				this.questionOne = 'Loyal'
   			}
   			if (this.randomHouse.name === 'Ravelclaw') {
   				this.questionOne = 'Witty'
   			}
   			if (this.randomHouse.name === 'Slytherin') {
   				this.questionOne = 'Cunning'
   			}

   		},

   		answerQuestionFour: function () {
   			if (this.randomHouse.name === 'Gryffindor') {
   				this.questionOne = 'Albus Dumbledore';
   			}
   			if (this.randomHouse.name === 'Hufflepuff') {
   				this.questionOne = 'Newt Scamander'
   			}
   			if (this.randomHouse.name === 'Ravelclaw') {
   				this.questionOne = 'Garrick Ollivander'
   			}
   			if (this.randomHouse.name === 'Slytherin') {
   				this.questionOne = 'Tom Riddle'
   			}

   		},

   		answerQuestionFour: function () {
   			if (this.randomHouse.name === 'Gryffindor') {
   				this.questionOne = 'Grape';
   			}
   			if (this.randomHouse.name === 'Hufflepuff') {
   				this.questionOne = 'Horseradish'
   			}
   			if (this.randomHouse.name === 'Ravelclaw') {
   				this.questionOne = 'Roast Beef'
   			}
   			if (this.randomHouse.name === 'Slytherin') {
   				this.questionOne = 'Spinnach'
   			}

   		}

   }

});