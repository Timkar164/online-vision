import { Component, OnInit } from '@angular/core';
import { GazeDetectorService } from 'src/app/shared/services/gaze-detector';

@Component({
  selector: 'app-collibrate',
  templateUrl: './collibrate.component.html',
  styleUrls: ['./collibrate.component.scss']
})
export class CollibrateComponent implements OnInit {

  constructor(
    private gaze: GazeDetectorService
  ) { }

  ngOnInit(): void {

    this.gaze.startDetection()

  }

  end() {
    this.gaze.endDetection();
  }

}
