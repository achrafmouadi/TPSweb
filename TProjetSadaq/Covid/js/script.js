var countries = document.getElementById("countries");
var ctx = document.getElementById('myChart').getContext('2d');
var payz = document.getElementsByClassName("listItem");

function chartUpdate(data){
  let title = data[0].Country;
  console.log(title);
  let labels = data.map(e=>{
    let dateAsLabel = new Date(e.Date);
    return  `${dateAsLabel.getDate()}/${dateAsLabel.getMonth()+1}`
    });
  let confirmed = data.map(e=>e.Confirmed)
  let active = data.map(e=>e.Active)
  let deaths = data.map(e=>e.Deaths)
  let recovered = data.map(e=>e.Recovered)

  let datasets = [{
    label:"Confirmed",
    data:confirmed,
    borderColor:"orange",
    },{
    label:"Active",
    data:active,
    borderColor:"yellow",
    },{
    label:"Deaths",
    data:deaths,
    borderColor:"red"
    },{
    label:"Recovred",
    data:recovered,
    borderColor:"green",
 
    }];
  myChart.data.labels=labels;
  myChart.data.datasets=datasets;
  myChart.options.plugins.title.text=title;


  myChart.update();
}

function countryClicked(e){
  let countrie
  if(e!=null) countrie = e.target.id;
  else countrie = "MA";
  let zhu = new XMLHttpRequest();
  zhu.open("GET", "https://api.covid19api.com/total/country/"+countrie, true);
  zhu.onreadystatechange= function(){
    if (zhu.readyState == XMLHttpRequest.DONE && zhu.status==200) {
      console.log(zhu.readyState);
      let resp = JSON.parse(zhu.response)
      chartUpdate(resp);
    }
  }
  zhu.send();


};

//First request to get countries //
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.covid19api.com/countries", true);
xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        let raw = xhr.response;
        let resp = JSON.parse(raw);
        resp = resp.sort((a, b) => a.Country > b.Country ? 1 : -1);

        //adding countries to the page //
        resp.forEach((item) => {
          let pays = document.createElement("div")
          pays.innerHTML = item.Country;
          pays.setAttribute("id", item.ISO2);
          pays.setAttribute("class", "listItem")
          //sending the country to another request to get its data
          pays.addEventListener("click",countryClicked);
          countries.appendChild(pays);
          });
          countryClicked(null);

}}
xhr.send()

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Confirmed","Active","Deaths","Recovered"],
        datasets: [{
            label:"",
            data:[],
          }]
    },
    options: {
      plugins: {
          title: {
              display: true,
              text: 'Morocco',
              padding: {
                  top: 10,
                  bottom: 30
              }
          }
      },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
