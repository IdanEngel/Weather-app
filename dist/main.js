let renderer = new Renderer()
let tempManager = new TempManager()


const handleSearch = function () {
    $(".btn").on("click", async function () {
        await tempManager.getCityData($('#input').val())
        console.log(tempManager.cityData)
        renderer.renderData(tempManager.cityData)
    })
}
handleSearch()


// const saveButton = function () {
// }


$("body").on("click", "#save" ,function () {
    console.log($(this).siblings("#name").text())
    tempManager.saveCity($(this).siblings("#name").text())
    // saveButton()
})

const loadPage = function () {
    tempManager.getDataFromDB()
       console.log(tempManager.cityData)
}
loadPage()