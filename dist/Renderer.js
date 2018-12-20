class Renderer {
    renderData(allCityData) {
        $("#weather-info").empty()
        let source = $("#weather-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template({ allCityData })
        $("#weather-info").append(newHTML)
    }
}


