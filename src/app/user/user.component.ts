import {Component, computed, EventEmitter, input, Input, output, Output, signal} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  @Input() id!: string;
  @Input({required: true}) avatar!: string
  @Input({required: true}) name!: string
  // @Output() select = new EventEmitter()
  // new way of
  select = output<string>()

   get imagePath(): string {
     return '/assets/users/' + this.avatar
   }

  onSelectUser() {
    this.select.emit(this.id);
  }


}
