import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd-length-words',
  templateUrl: './odd-length-words.component.html',
  styleUrls: ['./odd-length-words.component.css'],
  standalone: true
})
export class OddLengthWordsComponent {

  @Input() sentWord: string = "No odd words";

  oddWords: string[] = [];

  calculateWordLength(sentWord: string) {
    if (sentWord.length % 2 === 1) {
      this.oddWords.push(sentWord);
    }
  }

}
