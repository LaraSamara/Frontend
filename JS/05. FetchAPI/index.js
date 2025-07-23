const element = document.querySelector('.wrapper .row');
const input = document.querySelector('section input.form-control');
const button = document.querySelector('button.search');

input.addEventListener('input', (e) => {
    renderForecast(e.target.value)
});

button.addEventListener('click', () => {
    renderForecast(input.value)
});

const renderForecast = async (search = 'cairo') => {
        const data = await fetchForecast(search);
        const htmlData = data.forecast.forecastday.map((dayData, index) => {

            const date = new Date(dayData.date);
            const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
            const monthName = date.toLocaleDateString("en-US", { month: "long" });
            const HtmlDate = `<span>${date.getDate()} ${monthName}</span>`;

            return index == 0 ? `
                        <div class="card col-md-4 clo-sm-12">
                        <div class="card-header d-flex justify-content-between align-content-center">
                            <span>${dayName}</span>
                            ${HtmlDate}
                        </div>
                        <div class="card-body d-flex align-items-start justify-content-between flex-column gap-3">
                            <span>${data.location.name}</span>
                            <span class="temp text-white">${dayData.day.avgtemp_c}oC</span>
                            <img src="https:${dayData.day.condition.icon}" alt="icon">
                            <span class="status">${dayData.day.condition.text}</span>
                            <div class="icons d-flex align-items-center justify-content-between w-100">
                                <div>
                                    <img class="w-25"
                                        src="https://routeweather.netlify.app/images/icon-umberella@2x.png" alt="">
                                    <span>20%</span>
                                </div>
                                <div>
                                    <img class="w-25" src="https://routeweather.netlify.app/images/icon-wind@2x.png"
                                        alt="">
                                    <span>18km/h</span>
                                </div>
                                <div>
                                    <img class="w-25" src="https://routeweather.netlify.app/images/icon-compass@2x.png"
                                        alt="">
                                    <span>East</span>
                                </div>
                            </div>
                        </div>
                    </div>
            `: `
                    <div class="card col-md-4 clo-sm-12">
                        <div class="card-header d-flex justify-content-center align-content-start">
                            ${dayName}
                        </div>
                        <div class="card-body d-flex align-items-center justify-content-center flex-column">
                            <img src="https://${dayData.day.condition.icon}" alt="icon">
                            <div class="d-flex align-items-center justify-content-center flex-column my-3">
                                <span class=" text-white">${dayData.day.avgtemp_c}oC</span>
                                <span>${dayData.day.mintemp_c}o</span>
                            </div>
                            <span class="status">${dayData.day.condition.text}</span>
                        </div>
                    </div>
            `
        }).join('');
        
        element.innerHTML = htmlData;
}

const fetchForecast = async(search) =>{
        try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=aff7657c393846b7bc443955232509&q=${search}&days=3&aqi=no&alerts=no`);
        const data = await response.json();
        return data;
        }catch{
        }
}


renderForecast();