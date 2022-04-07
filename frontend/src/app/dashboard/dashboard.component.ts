import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from 'app/model/client';
import { Fournisseur } from 'app/model/fournisseur';
import { Produit } from 'app/model/produit';
import { ClientService } from 'app/service/client.service';
import { CommandeAchatService } from 'app/service/commandeAchat.service';
import { FournisseurService } from 'app/service/fournisseur.service';
import { ProduitService } from 'app/service/produit.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private produitService: ProduitService, private commandeAchatService: CommandeAchatService, private fournisseurService: FournisseurService,private clientService:
		ClientService) { }
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };

  public clients: Client[] = [];
  public getClient(): void {
		this.clientService.getClient().subscribe(
		(response: Client[]) => {
		this.clients = response;
		console.log(this.clients);
		},
		(error: HttpErrorResponse) => {
		alert(error.message);
		}
		);
		}

  public benefice : number = 0;
  
  public getBenefice(): any {
    return this.commandeAchatService.getBenefice().subscribe(
      (response: number) => {
        this.benefice = response;
        console.log(this.benefice);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public nbreArt : number = 0;
  public getNumberArticle(): any {
    return this.commandeAchatService.getNumberArticle().subscribe(
      (response: number) => {
        this.nbreArt = response;
        console.log(this.nbreArt);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public produit: Produit ;

  public getTheMostExpensive(): void {
    this.produitService.getTheMostExpensive().subscribe(
      (response: Produit) => {
        this.produit = response;
        console.log(this.produit);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public k: Produit ;
  public getTheMostChepar(): void {
    this.produitService.getTheMostChepar().subscribe(
      (response: Produit) => {
        this.k = response;
        console.log(this.k);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public fournisseurs: Fournisseur[] = [];
  public getFournisseur(): void {
    this.fournisseurService.getFournisseur().subscribe(
      (response: Fournisseur[]) => {
        this.fournisseurs = response;
        console.log(this.fournisseurs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  ngOnInit() {
      
    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
      this.getFournisseur();
      this.getBenefice();
      this.getTheMostExpensive();
      this.getTheMostChepar();
      this.getNumberArticle();
      this.getClient();
     

      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var datawebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
  }
  
}
