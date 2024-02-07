import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-valentine-buttons',
  templateUrl: './valentine-buttons.component.html',
  styleUrls: ['./valentine-buttons.component.css']
})
export class ValentineButtonsComponent {
  public showLoveText = false;
  public noButtonCount = 1;
  public noButtonTexts = ['No','Are you sure?', 'Really sure?', 'Are you positive?', 'Like, really positive?', 'Think about this','Just think about this', 'If you say no, I\'ll be very sad', 'Like, really sad', 'Really really sad :(', 'Fine, you win', 'Just kidding, say yes', 'Please say yes', 'Look over there', 'It\s a pretty button', 'Click him, not me', 'Dont click me','Please stop', 'You know I have to type this all out', 'It gets hard okay', 'Okay, im done now', 'I give up', 'STOP CLICKING ME', 'Seriously, stop', 'I\'ll never win :(','No','No','No','NO','NOOOOOO','Why are you still clicking me?','OKay, im done for real now haha','I\'m serious', 'Just click yes','Bye',' ',' ',' ',' ...why?','Just click yes, im out of ideas haha']
  public yesButtonSize = 40;
  public minButtonSize = 40;
  public showQuestion = true;
  public showGif = false;
  public gifUrl = 'https://media1.tenor.com/m/u1OqA3bNXyQAAAAC/hi-waving.gif';


  @ViewChildren('noButton, yesButton') buttons: QueryList<ElementRef>;

  constructor() {
    this.buttons = new QueryList<ElementRef>();
  }

  public onNoClick(): void {
    this.noButtonCount++;
    this.yesButtonSize = Math.max(this.noButtonCount * 30, this.minButtonSize);
    this.buttons.forEach(button => {
      if (button.nativeElement.tagName === 'BUTTON' && button.nativeElement.id === 'yesButton') {
        button.nativeElement.style.fontSize = this.yesButtonSize + 'px';
      }
    });
  }

  public onYesClick(): void {
    this.showQuestion = false;
    this.showGif = true;
    this.showLoveText = true;
    
  }
  public get noButtonText(): string {
    return this.noButtonTexts[this.noButtonCount - 1];
}}