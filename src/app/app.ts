import { Name } from './../../node_modules/ajv/lib/compile/codegen/code';



import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ssr-challenge');

    switchLang(locale: string) {
    // Assumes your localized builds are served at /en/ and /fr/
    const path = window.location.pathname.replace(/^\/(en|fr)/, '');
    window.location.pathname = `/${locale}${path}`;
  }

  get name(): string {
    return this.title();
  }
}
