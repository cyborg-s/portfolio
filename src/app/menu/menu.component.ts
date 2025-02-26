import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
