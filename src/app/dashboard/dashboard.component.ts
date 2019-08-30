import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/services/data.service';
import {Chart} from 'chart.js';
// import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  LineChart:any=[];
  LineChart1:any=[];
  BarChart:any=[];
  tableDetail;
  jsonData;
  fullData:any;


  constructor(public dataService:DataService) { }

  contents:any=[
    {ID:"#320",Assignee:"Mark C.Diaz",TaskDetails:"Support of thteme",PaymentMethod:"Credit card",PaymentStatus:"Approved",Amount:"$12,245",TrackingNumber:"JPBBN435893458" },
    {ID:"#321",Assignee:"Jose D 	",TaskDetails:"Verify your email address !",PaymentMethod:"Internet banking",PaymentStatus:"Pending",Amount:"$12,245",TrackingNumber:"BDYBN435893325" },
    {ID:"#322",Assignee:"Philips T",TaskDetails:"Item support message send",PaymentMethod:"Credit card",PaymentStatus:"Approved",Amount:"$12,245",TrackingNumber:"JSNTN435884258" },
    {ID:"#323",Assignee:"Luke Pixel",TaskDetails:"New submission on website",PaymentMethod:"Cash on delivery",PaymentStatus:"Rejected",Amount:"$12,245",TrackingNumber:"JPABT435893678" }
  ];
  head=[
    "ID","Assignee","Task Details","Payment Method","Payment Status","Amount","Tracking Number"
  ];

  ngOnInit() {

    this.LineChart=new Chart('lineChart',{
      type:'line',
      data:{
        labels:["2013","2014","2014","2015","2016","2017","2018"],
        datasets:[{
          data:[300,400,300,440,700,550,730],
          // fill:false,
          lineTension:0.3,
          borderColor:"blue",
          // backgroundColor:"light-gray ",
          borderWidth:1,
         
        },{
      data:[150,200,150,200,350,320,400],
      // fill:false,
      lineTension:0.3,
      borderColor:"blue",
      backgroundColor:"light-blue",
      borderWidth:1
    }]
      },
      options:{
        title:{
          text:"Line Chart",
          display:false
        },
        legend:{
          display:false
        },
        scales:{
          yAxes:[{
            display:false
          }],
          xAxes:[{
            display:false
          }]
        }
      }
    });

    this.BarChart=new Chart('barChart',{
      type:'bar',
      data:{
        labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
        datasets:[{
          data:[330,380,230,400,309,530,340],
          fill:false,
          lineTension:0.2,
          backgroundColor:"blue",
          borderWidth:1
        }]
      },
      options:{
        title:{
          text:"Bar Chart",
          display:false
        },
        legend:{
          display:false
        },
        scales:{
          yAxes:[{
            
            display:false
          }],
          xAxes:[{
            gridLines:{
              display:false
            }
            
          }]
        }
      }
    });


    this.LineChart1=new Chart('lineChart1',{
      type:'line',
      data:{
        labels:["2007","2008","2009","2010","2011","2012"],
        datasets:[{
          data:[0,78,10,50,98,60],
          fill:false,
          lineTension:0.3,
          borderColor:"gray",
          backgroundColor:"gray",
          borderWidth:2.5
        },{
      data:[50,70,26,30,73,76],
      fill:false,
      lineTension:0.3,
      borderColor:"blue",
      backgroundColor:"blue",
      borderWidth:2.5
    }]
      },
      options:{
        title:{
          text:"Line Chart",
          display:false
        },
        legend:{
          display:false
        },
        scales:{
          yAxes:[{
            gridLines:{
              display:false
            }
          }],
          xAxes:[{
            gridLines:{
              display:false
            }
          }]
        }
      }
    });

    
    this.dataService.getData().subscribe(data => {
      this.jsonData = data;
      this.tableDetail=this.jsonData.tableDetails;
    })

    this.dataService.getData1().subscribe(data=>{
      this.fullData=data;
    })
  }



}
