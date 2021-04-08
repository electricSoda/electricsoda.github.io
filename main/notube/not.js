var v1 = ['Red', 'Bombshell', 'Black', 'Green', 'Yellow', 'Circus', 'Blue', 'Chinchilla', 'Indigo', 'Brown', 'Concocted', 'Turkish', 'Terrible', 'Laughing', 'Orange', 'Purple', 'Pink', 'Surrendered', 'Cheese-colored'];
var v2 = 'NoTube';

var ran = Math.round(Math.random() * 10);
document.title = v1[ran] + ' ' + v2;

//puppeteer
const puppeteer = require('puppeteer');

async function scraperesults(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  browser.close();
};

//query
function query() {
  //get query
  var search = document.getElementById('search').value;

  var urlS = 'https://www.youtube.com/results?search_query='+search;

  //call function
  scraperesults(urlS);
}
