new Vue({
   
   el: '#app',

   data: {
      message: 'Where do you belong .... ?',

      randomHouse: '',

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
			  ],

		Questions: [

	    { 
	      text: 'What is your favorite color?',
	      answers: [
	        {
	          text: 'Scarlet',
	          house: 'Gryffindor'
	        },
	        {
	          text: 'Yellow',
	          house: 'Hufflepuff'
	        },
	        {
	          text: 'Blue',
	          house: 'Ravenclaw'
	        },
	        {
	          text: 'Green',
	          house: 'Slytherin'
	        }
	      ]
	    },
	    { 
	      text: 'What is your favorite animal?',
	      answers: [
	        {
	          text: 'Lion',
	          house: 'Gryffindor'
	        },
	        {
	          text: 'Badger',
	          house: 'Hufflepuff'
	        },
	        {
	          text: 'Eagle',
	          house: 'Ravenclaw'
	        },
	        {
	          text: 'Snake',
	          house: 'Slytherin'
	        }
	      ]
	    },
	    { 
	      text: 'What kind of person do you try to be?',
	      answers: [
	        {
	          text: 'Brave',
	          house: 'Gryffindor'
	        },
	        {
	          text: 'Loyal',
	          house: 'Hufflepuff'
	        },
	        {
	          text: 'Witty',
	          house: 'Ravenclaw'
	        },
	        {
	          text: 'Cunning',
	          house: 'Slytherin'
	        }
	      ]
	    },
	    { 
	      text: 'Who is your favorite witch or wizard?',
	      answers: [
	        {
	          text: 'Albus Dumbledore',
	          house: 'Gryffindor'
	        },
	        {
	          text: 'Newt Scamander',
	          house: 'Hufflepuff'
	        },
	        {
	          text: 'Garrick Ollivander',
	          house: 'Ravenclaw'
	        },
	        {
	          text: 'Tom Riddle',
	          house: 'Slytherin'
	        }
	      ]
	    },
	    { 
	      text: 'What is your favorite Berty Bott\'s flavor?',
	      answers: [
	        {
	          text: 'Grape',
	          house: 'Gryffindor'
	        },
	        {
	          text: 'Horseradish',
	          house: 'Hufflepuff'
	        },
	        {
	          text: 'Roast Beef',
	          house: 'Ravenclaw'
	        },
	        {
	          text: 'Spinach',
	          house: 'Slytherin'
	        }
	      ]
	    }

	  ]		  
   },

   methods: {

   		randomizeHouse: function () {
   			var randomNumber = Math.floor(Math.random() * (this.houses.length));
   			this.randomHouse = this.houses[randomNumber].name;
   			alert('You are in ' + randomHouse.name + '!');


   		}

   }

});