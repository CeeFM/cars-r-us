import { carsRUs } from "./cars-r-us.js";

const mainContainer = document.querySelector(".container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carsRUs()
}

renderAllHTML();

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
