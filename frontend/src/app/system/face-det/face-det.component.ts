import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { GazeDetectorService } from 'src/app/shared/services/gaze-detector';

declare const faceapi: any;

@Component({
  selector: 'app-face-det',
  templateUrl: './face-det.component.html',
  styleUrls: ['./face-det.component.scss']
})
export class FaceDetComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private gaze: GazeDetectorService
  ) { }

  video: any = window.document.getElementById("vid")

  gender: any = "Male"
  age: any = "0"

  angry: any = ""
  disgusted: any = ""
  fearful: any = ""
  happy: any = ""
  neutral: any = ""
  sad: any = ""
  surprised: any = ""

  array: String[] = [
    "Пол",
    "Возраст",
    "Включить всё",
    "Эмоции",
    "Статистика",
    "Выключить всё"
  ]

    ngOnInit(): void {

      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('assets/models/'),
        faceapi.nets.faceLandmark68Net.loadFromUri('assets/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('assets/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('assets/models'),
        faceapi.nets.ageGenderNet.loadFromUri('assets/models')
      ]).then(this.startVideo)
    this.startVideo()

    this.faceDetection()
    this.getFaceExpressions()

    this.gaze.startDetection()
    this.detectGaz()
    }

startVideo = () => {
  navigator.mediaDevices.getUserMedia({
    video: true
  })
    .then(stream => {
      this.video = window.document.getElementById("vid")
      this.video.srcObject = stream
    })
}

faceDetection = () => {
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces
      (window.document.getElementById("vid"), new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();
    //@ts-ignore
    this.document.getElementById("cvs")?.innerHTML = faceapi.createCanvasFromMedia(window.document.getElementById("vid"));
    faceapi.matchDimensions(window.document.getElementById("cvs"), {
      width: 940,
      height: 650,
    })
    const resized = faceapi.resizeResults(detections, {
      width: 940,
      height: 650,
    });
    faceapi.draw.drawDetections(window.document.getElementById("cvs"), resized);
    faceapi.draw.drawFaceLandmarks(window.document.getElementById("cvs"), resized);
    faceapi.draw.drawFaceExpressions(window.document.getElementById("cvs"), resized);

  }, 100);
}

getFaceExpressions = async () => {
  setInterval(
    async () => {
      // console.log(await faceapi.detectAllFaces(window.document.getElementById("vid"), new faceapi.TinyFaceDetectorOptions())
      //   .withFaceExpressions()
      // )
      // console.log(await faceapi.detectSingleFace(window.document.getElementById("vid"), new faceapi.TinyFaceDetectorOptions())
      //   .withFaceLandmarks().withAgeAndGender().withFaceDescriptor()
      // )
      let res_1 = await faceapi.detectSingleFace(window.document.getElementById("vid"), new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks().withAgeAndGender().withFaceDescriptor()
      let res_2 = await faceapi.detectSingleFace(window.document.getElementById("vid"), new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions()
      this.gender = res_1.gender;
      this.age = Math.floor(res_1.age)
      if (res_2["expressions"]) {
        this.happy = res_2["expressions"].happy.toString().slice(0, 4)
        if (<Number>this.happy > 1) {
          this.happy = "0.0"
        }
        this.neutral = res_2["expressions"].neutral.toString().slice(0, 4)
        if (<Number>this.neutral > 1) {
          this.neutral = "0.0"
        }
        this.sad = res_2["expressions"].sad.toString().slice(0, 4)
        if (<Number>this.sad > 1) {
          this.sad = "0.0"
        }
        this.angry = res_2["expressions"].angry.toString().slice(0, 4)
        if (<Number>this.angry > 1) {
          this.angry = "0.0"
        }
        this.fearful = res_2["expressions"].fearful.toString().slice(0, 4)
        if (<Number>this.fearful > 1) {
          this.fearful = "0.0"
        }
        this.disgusted = res_2["expressions"].disgusted.toString().slice(0, 4)
        if (<Number>this.disgusted > 1) {
          this.disgusted = "0.0"
        }
        this.surprised = res_2["expressions"].surprised.toString().slice(0, 4)
        if (<Number>this.surprised > 1) {
          this.surprised = "0.0"
        }
      }
      console.log(res_2["expressions"])
    }, 3000
  )
}

detectGaz = () => {
  setInterval(
    () => {

      this.gaze.getPosition()
        .then(
          (data) => {
            let size = window.screen.width
            if (data) {
              if (data.x < size / 3 - 200) {
                alert("Left!")
              }
              else if (data.x > (size * 2 / 3 + 200)) {
                alert("Right!")
              }
            }
          }
        )


    }, 3000
  )
}

}
