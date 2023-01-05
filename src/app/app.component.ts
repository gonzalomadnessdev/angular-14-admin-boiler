import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TITLE } from 'brand/const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = TITLE;

  public constructor(private titleService: Title) {
    titleService.setTitle(this.title)
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
