weather = document.querySelector(".weather");

loadData = function () {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?zip=49685,us&appid=c3cccb8ac3c1e659c93d3826de9538ed`,
    true
  );

  xhr.onprogress = function () {};

  xhr.onload = function () {
    if (this.status === 200) {
      let output = "";
      const response = JSON.parse(this.responseText);
      let location = response.name;
      output += "<li>" + location + "</li>";
      let fahrenheit = response.main.temp * 1.8 - 459.67;
      output += "<li>" + Math.floor(fahrenheit) + "&#8457;" + "</li>";
      let description = response.weather.forEach((locale) => {
        output += "<li>" + locale.description + "</li>";
      });
      let icon = response.weather.forEach((icon) => {
        const weatherIcon = `https://openweathermap.org/img/wn/${icon.icon}@2x.png`;
        output += `<li><img src="${weatherIcon}" alt="weather icon" height="20px" width="auto"></li>`;
      });
      weather.innerHTML = `
      <ul class="weather-data">
      ${output}
      </ul>
      `;
    } else {
      console.log("There has been an error");
    }
  };

  xhr.send();
};

setInterval(loadData(), 10000);
