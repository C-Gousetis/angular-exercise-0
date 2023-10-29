import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInputComponent } from './user-input/user-input.component';
import { EvenLengthWordsComponent } from './even-length-words/even-length-words.component';
import { OddLengthWordsComponent } from './odd-length-words/odd-length-words.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [UserInputComponent, EvenLengthWordsComponent, OddLengthWordsComponent]
})
export class AppComponent {

    word: string = "";
    sentWord(word: string) {
      this.word = word;
    }
  


}
