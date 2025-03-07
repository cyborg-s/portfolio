import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abaout-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abaout-me.component.html',
  styleUrl: './abaout-me.component.scss'
})
export class AbaoutMeComponent {
  languageService = inject(LanguageService);
}
