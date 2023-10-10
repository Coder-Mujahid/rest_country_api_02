function loaddata() {
  fetch("https://restcountries.com/v3.1/all")
    .then((Response) => Response.json())
    .then((apidata) => displayData(apidata));
}
function displayData(apidata) {
  const display = document.getElementById("display");
  apidata.forEach((data) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card card-compact bg-base-100 shadow-xl shadow-blue-200 w-full h-full md:h-96 mb-5 lg:mb-0">
                <figure class="border-b-2 border-slate-500 rounded-md mb-1"><img src="${data.flags.png}" class="w-full" alt="Shoes" /></figure>
            <div class="card-body">
            <h2 class="text-center text-lg md:text-2xl font-bold uppercase text-blue-700">${data.name.common}</h2>
            <p class="text-center font-medium px-5">If you want to know more details about this country then click on the button below</p>
                <div class="card-actions justify-end">
                <button class="duration-500 btn-primary py-2 w-full rounded-lg text-xl font-semibold capitalize shadow-sm shadow-black text-black bg-blue-400 hover:bg-blue-500" onclick="showModal('${data.name.common}')" > Details</button>
                </div>
            </div>
        </div>

        `;
    display.appendChild(div);
  });
}
const Details=document.getElementById('Details')
const div =document.createElement('div')

function showModal(data){
    fetch(`https://restcountries.com/v3.1/name/${data}`)
    .then(Response=>Response.json())
    .then(singledata=>{
        div.innerHTML=`
        <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure class="md:w-[500px]"><img class="h-full rounded-xl" src="${singledata[0].flags.png}" alt="Album"/></figure>
        <div class="card-body">
        <h2 class="text-2xl md:text-5xl text-blue-500 text-center font-semibold capitalize md:py-5">${singledata[0].name.common}</h2>
        <h2 class="text-sm lg:text-xl font-semibold capitalize">official name:-<span class="text-red-500">${singledata[0].name.official}</span> </h2>
        <h2 class="text-sm lg:text-xl font-semibold capitalize">continents:-<span class="text-red-500">${singledata[0].continents}</span> </h2>
        <h2 class="text-sm lg:text-xl font-semibold capitalize">region:-<span class="text-red-500">${singledata[0].region}</span> </h2>
        <h2 class="text-sm lg:text-xl font-semibold capitalize">independent Status:-<span class="text-red-500">${singledata[0].independent}</span> </h2>
        <h2 class="text-sm lg:text-xl font-semibold capitalize">common name:- <span class="text-red-500">${singledata[0].name.common}</span></h2>
        <h2 class="text-sm lg:text-xl font-semibold capitalize">capital City:- <span class="text-red-500">${singledata[0].capital[0]}</span></h2>
        <h2 class="text-sm lg:text-xl font-semibold capitalize">population:-<span class="text-red-500"> ${singledata[0].population}</span></h2>

          <div class="card-actions justify-end">
          <a target="_blank" class="w-full" href="${singledata[0].maps.googleMaps}"><button class="btn-active w-full py-2 rounded-lg text-xl font-semibold capitalize shadow-sm shadow-black duration-500 bg-blue-400 hover:bg-blue-500">view location</button></a>
          </div>
        </div>
        </div>
        `
        window.scroll({
            top: 100,
            left: 0,
            behavior: "smooth",
          });
        Details.appendChild(div)

    })
}


loaddata();
