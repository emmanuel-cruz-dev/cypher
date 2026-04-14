import { Injectable, signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'en' | 'es';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly translate = inject(TranslateService);
  readonly currentLang = signal<Language>('es');

  constructor() {
    this.initLanguage();
  }

  private initLanguage() {
    const saved = localStorage.getItem('lang') as Language | null;
    const lang: Language = saved === 'en' || saved === 'es' ? saved : 'es';
    this.setLanguage(lang);
  }

  toggleLanguage() {
    this.setLanguage(this.currentLang() === 'es' ? 'en' : 'es');
  }

  private setLanguage(lang: Language) {
    this.currentLang.set(lang);
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }
}
