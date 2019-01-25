import { Component, Input } from "@angular/core";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() color: string;
  @Input() dragged;


  onClick(){
    if(this.dragged){
      return null;
    }
    console.log(this.color)
  }
}
