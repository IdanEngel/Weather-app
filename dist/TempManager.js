class TempManager {
    constructor() {
        this.cityData = []
    }

    getDataFromDB() {
        $.get('/cities', function (data) {
            if (data) {
                this.cityData = data
            }
            console.log(this.cityData)
        })
    }

    async getCityData(cityName) {

        let data = await $.get(`/city/${cityName}`)
        this.cityData.push({
            name: data.location.name,
            updatedAt: data.current.last_updated,
            temperture: data.current.temp_c,
            condition: data.current.condition.text,
            conditionPic: data.current.condition.icon
        })
        console.log(this.cityData)
    }

    saveCity(cityName) {
        let data = this.cityData.find(f => f.name === cityName)
        console.log(data)
        $.post(`/city`, data, function () {
        })
    }

    removeCity(cityName) {
        $.ajax({
            method: "DELETE",
            url: `/city/${cityName}`,
            success: () => { }
        })
    }
}







