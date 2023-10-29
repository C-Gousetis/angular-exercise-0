import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-length-words',
  templateUrl: './even-length-words.component.html',
  styleUrls: ['./even-length-words.component.css'],
  standalone: true
})
export class EvenLengthWordsComponent {

  @Input() sentWord: string = "";

  evenWords: string[] = [];

  calculateWordLength(sentWord: string) {
    if (sentWord.length % 2 === 0) {
      this.evenWords.push(sentWord);
    }
  }
}
