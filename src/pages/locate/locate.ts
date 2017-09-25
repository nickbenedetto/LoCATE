import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-locate',
  templateUrl: 'locate.html'
})
export class LocatePage {
@ViewChild('barCanvas') barCanvas;
@ViewChild('bubbleCanvas') bubbleCanvas;
 
    barChart: any;
    bubbleChart: any;
 
    constructor(public navCtrl: NavController) {
 
    }
 
    ionViewDidLoad() {
 		
        this.bubbleChart = new Chart(this.bubbleCanvas.nativeElement, {
        type: 'bubble',
 		data: {
      labels: "Africa",
      datasets: [
        {
          label: ["China"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: 7126901,
            y: 5.245,
            r: 15
          }]
        }, {
          label: ["Denmark"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 258702,
            y: 7.526,
            r: 10
          }]
        }, {
          label: ["Germany"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: 3979083,
            y: 6.994,
            r: 10
          }]
        }, {
          label: ["Japan"],
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            x: 4931877,
            y: 5.921,
            r: 15
          }]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Location on 3rd floor ISAT'
      },
      scales: {
                yAxes : [{
                    ticks : {
                        max : 100,    
                        min : 0
                    }
                }],
                xAxes : [{
                    ticks : {
                        max : 100,    
                        min : 0
                    }
                }]
            }
    }
});

 
	}
}


