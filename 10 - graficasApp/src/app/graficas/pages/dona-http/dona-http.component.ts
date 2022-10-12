import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {



  public doughnutChartLabels: string[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [

        ],
        backgroundColor: ['#6405F0', '#0724E3', '#05A0F0'] //Ya no es un arreglo de Color
      }                                                   //sino de string y va directamente
      //en los datasets
    ]
  };


  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales().subscribe(data => {
    //   //console.log(data);
    //   const labels = Object.keys(data);
    //   const values = Object.values(data);
    //   //console.log(labels);
    //   this.doughnutChartData = {
    //     labels: Object.keys(data),
    //     datasets: [{ data: Object.values(data) }]
    //   }
    // });

    this.graficasService.getUsuariosRedesSocialesDonaData()
    .subscribe(({labels, values}) => {
    

    this.doughnutChartData = {
         labels,
         datasets: [{ data: values }]
        }

  })

}

}
