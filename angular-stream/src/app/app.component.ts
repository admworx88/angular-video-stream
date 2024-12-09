import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VideoplayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-stream';
}
