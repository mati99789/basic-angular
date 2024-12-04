import {Component, computed, EventEmitter, input, Input, output, Output, signal} from '@angular/core';
import {type User} from './user.model';


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
  @Input({required: true}) selected!: boolean

  get imagePath(): string {
    return '/assets/users/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }


}
