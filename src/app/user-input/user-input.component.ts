import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
  standalone: true
})
export class UserInputComponent {

  // constructor() {}
  // ngOnInit(): void {}

  @Output() buttonSend = new EventEmitter<string>;

  onSubmitWord(inputWord: string) {
    this.buttonSend.emit(inputWord);
  }

  
}
