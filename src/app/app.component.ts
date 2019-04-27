import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   quotes = [
      new Quote(1, 'Our greatest glory is not in never falling, but in rising every time we fall.','~ Confucius' ,new Date(2019,10,14)),
      new Quote(2, 'Everything you’ve ever wanted is on the other side of fear.','~ George Addair',new Date(2019,10,14)),
      new Quote(3, 'Hardships often prepare ordinary people for an extraordinary destiny.','~ C.S. Lewis',new Date(2019,10,14)),
      new Quote(4, 'Your true success in life begins only when you make the commitment to become excellent at what you do.','~ Brian Tracy',new Date(2019,10,14)),
      new Quote(5, 'If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles.','~ Wayne Dyer',new Date(2019,10,14)),
      new Quote(6, 'Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for the highest that is in us, becoming all that we can be.','~ Zig Ziglar',new Date(2019,10,14)),
      new Quote(7, 'If you set goals and go after them with all the determination you can muster, your gifts will take you places that will amaze you.','~ Les Brown',new Date(2019,10,14)),
      new Quote(8, 'Whatever you hold in your mind on a consistent basis is exactly what you will experience in your life.','~ Tony Robbins',new Date(2019,10,14)),
      new Quote(9, 'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.','~ Dale Carnegie',new Date(2019,10,14)),
      new Quote(10,'The future belongs to those who believe in the beauty of their dreams.','~ Franklin D. Roosevelt',new Date(2019,10,14)),
      new Quote(11,'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.','~ Pele',new Date(2019,10,14)),
      new Quote(12,'The best decisions aren’t made with your mind, but with your instinct.','~ Lionel Messi',new Date(2019,10,14)),
      new Quote(13,'If you don’t like something, change it. If you can’t change it, change your attitude.','~ Maya Angelou',new Date(2019,10,14)), 
      new Quote(14,'Staying positive does not mean that things will turn out okay. Rather it is knowing that you will be okay no matter how things turn out.','~ Unknown',new Date(2019,10,14)),
      new Quote(15,'You control your future, your destiny. What you think about comes about. By recording your dreams and goals on paper, you set in motion the process of becoming the person you most want to be. Put your future in good hands – your own.','~ Mark Victor Hansen',new Date(2019,10,14)),
  
   ]
  
}
