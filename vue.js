// a vue instance with data and methods sections
const app = Vue.createApp({
  mounted() {
    this.$refs.instructions.focus();
  },
// is for variables
  data() {
    return {
      instructionVisibilty: true,
      gameVisibility: false,
      xAxisLeft: 157.22, //left side of the princess
      yAxisTop: 231.035, 
     
    };
  },
  

//   Put functions/tasks below
  methods: {
    
    gameFocus() {
      let gameElem = document.querySelector("#gameScreen");
      window.addEventListener("keydown", function (e) {
        gameElem.focus();
      });
    },
    
// // this code prevents the down arrow to scroll the page down
//       navigateDown() {
//         window.addEventListener("keydown", function(e) {
//           if (e.code === "ArrowDown") {
//             e.preventDefault();
//           }
//         }, false);
//       },
    
     moveXaxisRight() {
        this.xAxisLeft = this.xAxisLeft + 50;
        let xAxisRight = this.xAxisLeft + 85.265;
       let yAxisBottom = this.yAxisTop + 85.265
       
      const message = new SpeechSynthesisUtterance();
      const speechSynthesis = window.speechSynthesis; 
       
       
  // // right boundary of rectangle 1
      if (xAxisRight >= (146.562 + 106.581) && this.yAxisTop <= 534.165 && this.xAxisLeft <= (660.436)) {
      this.xAxisLeft = (145 + 106.581) - 85.265;
        
      message.text = "You hit the wall, keep going down";
      speechSynthesis.speak(message)
    }
     
     
       
//     right boundary of the right upward rectangle !!!! start from here, what is missing is the princess cross the last 
//        rectangle right
       
       if (xAxisRight >= (660.436 + 127.897) && yAxisBottom >= (414.507 + 128.659))  {
         this.xAxisLeft = 659 + 127.897 - 85.265;
         
         message.text = "You hit the wall, keep going up"
         speechSynthesis.speak(message)
       }
       
       if (xAxisRight >=1000) {
         this.xAxisLeft = 999;
         message.text = "You reached the frog! You may now kiss him and live happily ever after"
         speechSynthesis.speak(message)
       }
       
    },
    
    moveXaxisLeft() {
  
      this.xAxisLeft = this.xAxisLeft - 50;
      let yAxisBottom = this.xAxisTop + 85.265;
      // Speech synthesis API: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
      // https://www.shecodes.io/athena/33755-how-to-add-text-to-speech-to-an-html-page
      const message = new SpeechSynthesisUtterance();
      const speechSynthesis = window.speechSynthesis; 
     


//       the left boundary of the 1st rectangle
      if (this.xAxisLeft <= 146.562) {
        this.xAxisLeft = 147; 
        
        
//         Text to speech providing additional instructions that the screen reader can't       
      
        message.text = "You hit the wall, keep going down";
      // start speaking
        speechSynthesis.speak(message);
      }
     
      
       // code the left boundaries for the right upward rectangle
        
    if (this.xAxisLeft <= 660.436 && this.xAxisLeft > (146.562 + 106.571) && this.yAxisTop <= 543.165) {
        this.xAxisLeft =  661;
       message.text = "You hit the wall, keep going up";
      // start speaking
        speechSynthesis.speak(message);
      
      }
      
      
    },
    
    moveYaxisUp() {
      this.yAxisTop = this.yAxisTop - 50;
        let xAxisRight = this.xAxisLeft + 85.265;
      
      const message = new SpeechSynthesisUtterance();
      const speechSynthesis = window.speechSynthesis; 
    
//       upper boundary from bottom large rectangle
      if (this.yAxisTop <= 543.165 && xAxisRight >= (146.562 + 106.581)  && this.xAxisLeft <= 660.436)  {
        this.yAxisTop =  542;
         message.text = "You hit the wall, keep going right"
         speechSynthesis.speak(message)
      }
       
//       upper boundary from last rectange
      
      if (this.yAxisTop <= 414.507) {
        this.yAxisTop = 415;
         message.text = "You hit the wall, keep going right"
         speechSynthesis.speak(message)
      }
       

    
    },
    
    moveYaxisDown() {
     this.yAxisTop = this.yAxisTop + 50;
    let yAxisBottom = this.yAxisTop + 85.265;
      
      const message = new SpeechSynthesisUtterance();
      const speechSynthesis = window.speechSynthesis; 
     
//     bottom boundary of large rectangle
      
     if (yAxisBottom >= (543.165 + 100.871)) {
        this.yAxisTop =  (542 + 100.871) - 85.265;
       
       message.text = "You hit the wall, keep going right"
         speechSynthesis.speak(message)
      }

      
   // bottom boundary of last rectange

       if (yAxisBottom >= (414.507 + 128.659) && this.xAxisLeft >= (660.436+127.897)) {
       this.yAxisTop = (415 + 100) - 85.265;
         message.text = "You hit the wall, keep going right"
         speechSynthesis.speak(message)
       }
     
      
    }
    
  }
});

app.mount("#app");




