export default class Paddle {
   constructor(height, x ,control) {
      this.width = 5;
      this.height = 35;
      this.x = x;
      this.y = (height / 2) - (this.height / 2);
      this.speed = 15;
      this.maxHight = height;

      document.addEventListener('keydown', event => {
           switch (event.keyCode) {
               case control.up:
                   this.y = Math.max(
                       0,
                       this.y - this.speed
                   );
                   console.log('up');
                   break;
               case control.down:
                   this.y = Math.min(
                       this.maxHeight - this.height,
                       this.y + this.speed
                   );
                   console.log('down');
                   break;
           }
       });

   }
   render(ctx) { // What is ctx? Where does it come from?
     ctx.fillStyle = 'grey';
      ctx.fillRect(
         this.x, this.y,
         this.width, this.height
      );
   }
}
