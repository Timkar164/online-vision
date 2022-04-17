import { Injectable } from "@angular/core";

@Injectable()
export class GazeDetectorService {
    //@ts-ignore
    webgazer: any = window.webgazer;
    listener: any = this.webgazer.setGazeListener(
        (data: any, clock: any) => {
            // if (data == null) {
            //     return;
            // }
            // console.log(data, clock)
        }
    )

    startDetection() {
        // let start = this.webgazer.setGazeListener(
        //     (data: any, clock: any) => {
        //         if (data == null) {
        //             return;
        //         }
        //         console.log(data, clock)
        //     }
        // )
        this.listener.begin()
        // console.log(start)
        let prediction = this.webgazer.getCurrentPrediction();
        this.webgazer.util.bound(prediction);
        this.webgazer.showVideoPreview(false);
    }

    endDetection() {
        console.log(1)
        console.log(this.listener)
        this.listener.end()
    }

    pauseDetection() {
        this.webgazer.pause();
    }

    resumeDetectiomn() {
        this.webgazer.resume();
    }

    getPosition(): Promise<any> {
        return this.webgazer.getCurrentPrediction()
        
    }
}