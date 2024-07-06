function getAPIData() {
    var search= document.getElementById("search")
    console.log(search);
    if(!search.value)
        var name ="bharat"
    else
    var name = search.value
    search.value  = ""


    let request = new XMLHttpRequest()
    request.open("get","https://restcountries.com/v3.1/name/"+name)
    request.send()


    request.addEventListener("load",()=>{
        let data = JSON.parse(request.responseText)[0]
        document.getElementById("nam").innerHTML=data.name.official
        document.getElementById("capital").innerHTML=data.capital
        document.getElementById("flags").src = data.flags.png
        document.getElementById("population").innerHTML=data.population
        document.getElementById("area").innerHTML=data.area
        document.getElementById("region").innerHTML=data.region
        document.getElementById("subregion").innerHTML=data.subregion
        document.getElementById("unMember").innerHTML=data.unMember
        document.getElementById("landloked").innerHTML=data.landlocked
        document.getElementById("timezone").innerHTML=data.timezones
        document.getElementById("borders").innerHTML=data.borders
        document.getElementById("independent").innerHTML=data.independent
        document.getElementById("maps").href=data.maps.googleMaps
        // document.getElementById("languages").innerHTML=data.languages[0]
        document.getElementById("startOfWeek").innerHTML=data.startOfWeek
    })
}
getAPIData()