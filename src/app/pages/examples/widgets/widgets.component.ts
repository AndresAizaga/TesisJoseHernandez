import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

import Chart from "chart.js";

//(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: "app-widgets",
  templateUrl: "widgets.component.html",
  styleUrls:["widgets.component.scss"] 
})
export class WidgetsComponent implements AfterViewInit  {
  switch = true;
  showIframe = false;
  isLoading = false;
  today: Date = new Date();
  
  @ViewChild('chartCanvas', { static: true }) chartRef: ElementRef;

  chart: any;

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const canvas = this.chartRef.nativeElement;
    const ctx = canvas.getContext('2d');

    const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.4)');
    gradientStroke.addColorStop(0.8, 'rgba(72,72,176,0.2)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)');

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['CVE-2024-3094', 'CVE-2024-3400', 'CVE-2024-1709', 'CVE-2024-0185', 'CVE-2024-0100', 'CVE-2024-TESIS'],
        datasets: [
          {
            label: 'Data',
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#f4d7d7',
            borderWidth: 2,
            pointBackgroundColor: '#be55ed',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#be55ed',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [62, 45, 45, 50, 40, 70]
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  generateReport() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.showIframe = true;
    }, 3000);

    const canvas = this.chartRef.nativeElement;
    const chartImage = canvas.toDataURL('image/png');

    const documentDefinition = {
      content: [
        { text: 'Dynamic PDF with pdfMake', style: 'header' },
        { text: 'This is an example of a dynamically generated PDF using pdfMake and Angular.' },
        { text: 'You can add tables, images, and more to your PDF.' },
        {
          image: chartImage,
          width: 500
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        }
      }
    };

    pdfMake.createPdf(documentDefinition).open();
  }
}


