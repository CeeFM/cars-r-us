import { getWheels, setWheels } from "./database.js";

const wheels = getWheels();

export const wheelsHtml = () => {
    let html = `<div class="car-stuff">
    <h2>Wheels</h2>
    <select id="wheels">
        <option value="0">Select Your Wheels</option>`

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.type}</option>`
    }

    html += `</select>
    </div>`
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            const chosenOption = changeEvent.target.value;
            const matchingWheel = wheels.find(
                (wheel) => {
                    return wheel.id === parseInt(chosenOption)
                }
            )
            setWheels(parseInt(chosenOption))
        }
})