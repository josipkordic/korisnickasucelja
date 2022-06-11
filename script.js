const prviBroj = document.getElementById('amount-one');
const drugiBroj = document.getElementById('amount-two');
const prvaValuta = document.getElementById('currency-one');
const drugaValuta = document.getElementById('currency-two');


function racun(){
    let prva = prvaValuta.value;
    let druga = drugaValuta.value;
    let rate = 0;
  fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data => {
        if (data.rates[druga] > data.rates[prva]){
            rate = data.rates[druga] / data.rates[prva];
            drugiBroj.value = (prviBroj.value * rate).toFixed(2);
        }else{
            rate = data.rates[prva] / data.rates[druga];
            drugiBroj.value = (prviBroj.value / rate).toFixed(2);
        }
      
      
    });
}
