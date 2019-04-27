import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Our greatest glory is not in never falling, but in rising every time we fall.','~ Confucius'),
    new Quote(2, 'Everything you’ve ever wanted is on the other side of fear.','~ George Addair'),
    new Quote(3, 'Hardships often prepare ordinary people for an extraordinary destiny.','~ C.S. Lewis'),
    new Quote(4, 'Your true success in life begins only when you make the commitment to become excellent at what you do.','~ Brian Tracy'),
    new Quote(5, 'If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles.','~ Wayne Dyer'),
    new Quote(6, 'Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for the highest that is in us, becoming all that we can be.','~ Zig Ziglar'),
    new Quote(7, 'If you set goals and go after them with all the determination you can muster, your gifts will take you places that will amaze you.','~ Les Brown'),
    new Quote(8, 'Whatever you hold in your mind on a consistent basis is exactly what you will experience in your life.','~ Tony Robbins'),
    new Quote(9, 'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.','~ Dale Carnegie'),
    new Quote(10,'The future belongs to those who believe in the beauty of their dreams.','~ Franklin D. Roosevelt'),
    

 ]
 toogleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
  constructor() { }

  ngOnInit() {
  }

}
