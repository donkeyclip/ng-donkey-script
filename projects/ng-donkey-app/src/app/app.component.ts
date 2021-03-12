import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-donkey-app';

  clipId = '87eF81C7-3f44';
  baseUrl = 'staging-api.donkeyclip.com';
  branch = undefined;
  width = undefined;
  height = undefined;
  theme = undefined;
  preview = false;
  showVolume = false;
  showIndicator = false;
  controls = true;
  autoplay = false;
  scaleToFit = false;
  loop = true;
  pointerEvents = false;
  muted = false;
  isInteractive = true;

  speed = undefined;
  volume = undefined;
  params = undefined;
}
