import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
 public currentLanguage: string = 'en'; // Standard-Sprache

  constructor() {
    // Falls noch keine Sprache gespeichert ist, setze Standardwert
    this.currentLanguage =  'en';
  }

  getLanguage(): string {
    return this.currentLanguage;
  }

  setLanguage(lang: string): void {
    this.currentLanguage = lang;
    // localStorage.setItem('language', lang);
  }
}