var html_chart = {
  chart:
    {height: 200, widht:200, type: 'radialBar'},
    series: [50],labels: ['HTML'],
    colors: [function({ value, seriesIndex, w }) {
    if(value < 40) {
        return '#777'
    } else if (value >= 40 && value < 80) {
        return '#555'
    } else {
        return '#343434'
    }
    }]}

var css_chart =
  {chart:
    {height: 200, widht:200, type: 'radialBar'},
    series: [50],labels: ['CSS'],
    colors: [function({ value, seriesIndex, w }) {
    if(value < 40) {
        return '#777'
    } else if (value >= 40 && value < 80) {
        return '#555'
    } else {
        return '#343434'
    }
    }]}

var javas_chart =
  {chart:
    {height: 200, widht:200, type: 'radialBar'},
    series: [30],labels: ['JS'],
    colors: [function({ value, seriesIndex, w }) {
    if(value < 40) {
        return '#777'
    } else if (value >= 40 && value < 80) {
        return '#555'
    } else {
        return '#343434'
    }
    }]}

var boot_chart =
  {chart:
    {height: 200, widht:200, type: 'radialBar'},
    series: [50],labels: ['Bootstap'],
    colors: [function({ value, seriesIndex, w }) {
      if(value < 40) {
        return '#777'
    } else if (value >= 40 && value < 80) {
        return '#555'
    } else {
        return '#343434'
    }
    }]}

var pascal_chart =
  {chart:
    {height: 200, widht:200, type: 'radialBar'},
    series: [80],labels: ['Pascal'],
    colors: [function({ value, seriesIndex, w }) {
      if(value < 40) {
        return '#777'
    } else if (value >= 40 && value < 80) {
        return '#555'
    } else {
        return '#343434'
      }
    }]}

var java_chart =
  {chart:
    {height: 200, widht:200, type: 'radialBar'},
    series: [30],labels: ['Java'],
    colors: [function({ value, seriesIndex, w }) {
    if(value < 40) {
        return '#777'
    } else if (value >= 40 && value < 80) {
        return '#555'
    } else {
        return '#343434'
    }
    }]}

var hchart = new ApexCharts(document.querySelector("#HTML"), html_chart);
var cchart = new ApexCharts(document.querySelector("#CSS"), css_chart);
var jschart = new ApexCharts(document.querySelector("#JavaScript"), javas_chart);
var bchart = new ApexCharts(document.querySelector("#Bootstrap"), boot_chart);
var pchart = new ApexCharts(document.querySelector("#Pascal"), pascal_chart);
var jchart = new ApexCharts(document.querySelector("#Java"), java_chart);

hchart.render();
cchart.render();
jschart.render();
bchart.render();
pchart.render();
jchart.render();
