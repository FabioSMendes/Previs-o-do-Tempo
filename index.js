

const key = "91749e437a4a9decd47c4e561daec07b" /*Variavel com a chave do API que busca o tempo*/

function putDataScreen(data) { /*Função que pega os dados da minha API */
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "° C"
    document.querySelector(".text-pvs").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = `Umidade em ${data.main.humidity}%`
    document.querySelector(".img-temp").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector(".temp-min").innerHTML = `Min. ${Math.floor(data.main.temp_min)}° C`
    document.querySelector(".temp-max").innerHTML = `Max. ${Math.floor(data.main.temp_max)}° C`
    console.log(data)
}

async function searchCity(city) {/*Função assincrona da API que transforma no final os dados em Json */
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    putDataScreen(data)
}

function clickSearch() { /*Função que capitura os valores do input e envia para minha função assincrona para trazer o resultado pela API*/
    const city = document.querySelector(".input-city").value;

    searchCity(city)
}