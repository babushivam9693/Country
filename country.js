let mainBody=document.querySelector('.mainBody')
let fetching = async()=>{
    let resp= await fetch(`https://restcountries.com/v3.1/all`)
    let date = await resp.json()
    console.log(date);
    date.map((obj)=>{
        createCard (obj)
    })
}
let createCard=(obj)=>{
    console.log(obj);

    let newCard=document.createElement('div')
    newCard.innerHTML=`
     <main class="cardMain">
        <section>
       
            <h1 class="countryName">${obj.name.common}</h1>
           <div class="countryFlag">
        <img src="${obj.flags.png}" alt="" width="200px" height="150px">
                 </div>
             </section>
        <section class="country">
            <h3 class="capital">${obj.capital[0]}</h3>
            <a href="${obj.maps.googleMaps}" class="location" target="_blank">Location</a>
            <div class="area">${obj.area}</div>
            <div class="continent">${obj.continents[0]}</div>
        
            <div class="population">${obj.population}</div>
        </section>
      </main>
    `
    mainBody.append(newCard)
}
fetching()

