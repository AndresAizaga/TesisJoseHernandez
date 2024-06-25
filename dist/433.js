"use strict";(self.webpackChunkblack_dashboard_pro_angular=self.webpackChunkblack_dashboard_pro_angular||[]).push([[433],{9433:function(y,s,t){t.r(s),t.d(s,{ChartsModule:function(){return v}});var l=t(8551),c=t(6213),p=t(6267),C=t(9808),h=t(8332),i=t.n(h),e=t(971),f=[{path:"",children:[{path:"",component:function(){var a=function(){return(0,l.Z)(function o(){(0,c.Z)(this,o)},[{key:"ngOnInit",value:function(){var r;this.canvas=document.getElementById("chartSimpleWithGradient"),this.ctx=this.canvas.getContext("2d"),(r=this.ctx.createLinearGradient(0,230,0,50)).addColorStop(1,"rgba(72,72,176,0.4)"),r.addColorStop(.8,"rgba(72,72,176,0.2)"),r.addColorStop(0,"rgba(119,52,169,0)"),new(i())(this.ctx,{type:"line",responsive:!0,data:{labels:["CVE-2024-3094","CVE-2024-3400","CVE-2024-1709","CVE-2024-0185","CVE-2024-0100","CVE-2024-0054"],datasets:[{label:"Data",fill:!0,backgroundColor:r,borderColor:"#f4d7d7",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#be55ed",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#be55ed",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[62,45,45,50,40,70]}]},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(186,84,245,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(186,84,245,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}}),this.canvas=document.getElementById("chartWithNumbersAndGrid"),this.ctx=this.canvas.getContext("2d"),(r=this.ctx.createLinearGradient(0,230,0,50)).addColorStop(1,"rgba(0,135,191,0.2)"),r.addColorStop(.8,"rgba(0,135,191,0.1)"),r.addColorStop(0,"rgba(0,84,119,0)"),new(i())(this.ctx,{type:"line",responsive:!0,data:{labels:["Cerberus (ex-Amnesia)","CoralRaider","LabHost","KageNoHitobito","Mallox","SideCopy"],datasets:[{label:"Data",fill:!0,backgroundColor:r,borderColor:"#2380f7",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#2380f7",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#2380f7",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[320,450,270,380,320,480]}]},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}}),this.canvas=document.getElementById("BarChart"),this.ctx=this.canvas.getContext("2d"),(r=this.ctx.createLinearGradient(0,230,0,50)).addColorStop(1,"rgba(253,93,147,0.8)"),r.addColorStop(0,"rgba(253,93,147,0)"),new(i())(this.ctx,{type:"bar",responsive:!0,data:{labels:["JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"Data",fill:!0,backgroundColor:r,hoverBackgroundColor:r,borderColor:"#ff5991",borderWidth:2,borderDash:[],borderDashOffset:0,data:[80,100,70,80,120,80]}]},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}}),this.canvas=document.getElementById("MultipleBarsChart"),this.ctx=this.canvas.getContext("2d"),new(i())(this.ctx,{type:"bar",responsive:!0,data:{labels:["JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"Data",fill:!0,backgroundColor:"#ff8a76",hoverBackgroundColor:" #ff8a76",borderColor:"#ff8a76",borderWidth:2,borderDash:[],borderDashOffset:0,data:[80,100,70,80,120,80]},{label:"Data",fill:!0,backgroundColor:"#2782f0",hoverBackgroundColor:" #2782f0",borderColor:"#2782f0",borderWidth:2,borderDash:[],borderDashOffset:0,data:[60,110,90,70,90,100]}]},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}}),this.canvas=document.getElementById("PieChart"),this.ctx=this.canvas.getContext("2d"),new(i())(this.ctx,{type:"pie",data:{labels:[1,2],datasets:[{label:"Emails",pointRadius:0,pointHoverRadius:0,backgroundColor:["#00c09d","#e2e2e2"],borderWidth:0,data:[60,40]}]},options:{cutoutPercentage:70,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{display:0,ticks:{display:!1},gridLines:{drawBorder:!1,zeroLineColor:"transparent",color:"rgba(255,255,255,0.05)"}}],xAxes:[{display:0,barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent"},ticks:{display:!1}}]}}}),this.canvas=document.getElementById("PieChartGradient"),this.ctx=this.canvas.getContext("2d"),new(i())(this.ctx,{type:"pie",data:{labels:[1,2,3],datasets:[{label:"Emails",pointRadius:0,pointHoverRadius:0,backgroundColor:["#ff8779","#2a84e9","#e2e2e2"],borderWidth:0,data:[60,40,20]}]},options:{cutoutPercentage:70,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{display:0,ticks:{display:!1},gridLines:{drawBorder:!1,zeroLineColor:"transparent",color:"rgba(255,255,255,0.05)"}}],xAxes:[{display:0,barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent"},ticks:{display:!1}}]}}})}}])}();return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-charts"]],decls:84,vars:0,consts:[[1,"content"],[1,"text-center"],[1,"category","text-center"],[1,"row","mt-5"],[1,"col-md-5","ml-auto"],[1,"card","card-chart"],[1,"card-header"],[1,"card-category"],[1,"card-title"],[1,"tim-icons","icon-chart-bar-32","text-primary"],[1,"card-body"],[1,"chart-area"],["id","chartSimpleWithGradient"],[1,"col-md-5","mr-auto"],[1,"tim-icons","icon-send","text-info"],["id","chartWithNumbersAndGrid"],[1,"row"],[1,"tim-icons","icon-shape-star","text-danger"],["id","BarChart"],[1,"tim-icons","icon-time-alarm","text-warning"],["id","MultipleBarsChart"],[1,"card","card-chart","card-chart-pie"],[1,"col-6"],["id","PieChart"],[1,"tim-icons","icon-trophy","text-success"],[1,"category"],["id","PieChartGradient"],[1,"tim-icons","icon-tag","text-warning"]],template:function(n,g){1&n&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"An\xe1lisis de los informes generados"),e.qZA(),e.TgZ(3,"p",2),e._uU(4," A continuaci\xf3n se presenta unos gr\xe1ficos como resultado del an\xe1lisis de cada uno de los informes que han sido generados por la plataforma. "),e.qZA(),e.TgZ(5,"div",3)(6,"div",4)(7,"div",5)(8,"div",6)(9,"h5",7),e._uU(10,"Vulnerabilidades mas activas"),e.qZA(),e.TgZ(11,"h3",8),e._UZ(12,"i",9),e._uU(13," 55 promedio "),e.qZA()(),e.TgZ(14,"div",10)(15,"div",11),e._UZ(16,"canvas",12),e.qZA()()()(),e.TgZ(17,"div",13)(18,"div",5)(19,"div",6)(20,"h5",7),e._uU(21,"Amenazas m\xe1s activas (3 \xfaltimos meses)"),e.qZA(),e.TgZ(22,"h3",8),e._UZ(23,"i",14),e._uU(24," 430 promedio "),e.qZA()(),e.TgZ(25,"div",10)(26,"div",11),e._UZ(27,"canvas",15),e.qZA()()()()(),e.TgZ(28,"div",16)(29,"div",4)(30,"div",5)(31,"div",6)(32,"h5",7),e._uU(33,"Gradient Bar Chart"),e.qZA(),e.TgZ(34,"h3",8),e._UZ(35,"i",17),e._uU(36," 1,000,000\xa3 "),e.qZA()(),e.TgZ(37,"div",10)(38,"div",11),e._UZ(39,"canvas",18),e.qZA()()()(),e.TgZ(40,"div",13)(41,"div",5)(42,"div",6)(43,"h5",7),e._uU(44,"Multiple Bars Chart With Grid"),e.qZA(),e.TgZ(45,"h3",8),e._UZ(46,"i",19),e._uU(47," 130,000$ "),e.qZA()(),e.TgZ(48,"div",10)(49,"div",11),e._UZ(50,"canvas",20),e.qZA()()()()(),e.TgZ(51,"div",16)(52,"div",4)(53,"div",21)(54,"div",6)(55,"h5",7),e._uU(56,"Simple Pie Chart"),e.qZA()(),e.TgZ(57,"div",10)(58,"div",16)(59,"div",22)(60,"div",11),e._UZ(61,"canvas",23),e.qZA()(),e.TgZ(62,"div",22)(63,"h4",8),e._UZ(64,"i",24),e._uU(65," 10.000$ "),e.qZA(),e.TgZ(66,"p",25),e._uU(67,"A total of $54000"),e.qZA()()()()()(),e.TgZ(68,"div",13)(69,"div",21)(70,"div",6)(71,"h5",7),e._uU(72,"Multiple Pie Chart"),e.qZA()(),e.TgZ(73,"div",10)(74,"div",16)(75,"div",22)(76,"div",11),e._UZ(77,"canvas",26),e.qZA()(),e.TgZ(78,"div",22)(79,"h4",8),e._UZ(80,"i",27),e._uU(81," 130,000 "),e.qZA(),e.TgZ(82,"p",25),e._uU(83,"Feedback from 20.000 users"),e.qZA()()()()()()()())},encapsulation:2}),a}()}]}],v=function(){var a=(0,l.Z)(function o(){(0,c.Z)(this,o)});return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[C.ez,p.Bz.forChild(f)]]}),a}()}}]);