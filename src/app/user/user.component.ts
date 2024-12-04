import {Component, computed, EventEmitter, input, Input, output, Output, signal} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

type User = {
  name: string,
  avatar: string,
  id: string,
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required: true}) user!: User
  @Output() select = new EventEmitter<string>()

   get imagePath(): string {
     return '/assets/users/' + this.user.avatar
   }

  onSelectUser() {
    this.select.emit(this.user.id);
  }


}
