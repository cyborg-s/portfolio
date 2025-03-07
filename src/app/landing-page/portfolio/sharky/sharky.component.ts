import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';
@Component({
  selector: 'app-sharky',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sharky.component.html',
  styleUrl: './sharky.component.scss'
})
export class SharkyComponent {
  languageService = inject(LanguageService);
}
