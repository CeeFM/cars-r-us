import { getInterior, setInt } from "./database.js";

const interiors = getInterior();

export const intHtml = () => {
    let html = `<div class="car-stuff">
    <h2>Interiors</h2>
    <select id="int">
    <option value="0">Select an Interior Fabric</option>`

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.fabric}</option>`
    }

    html += `</select>
    </div>`
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "int") {
            const chosenOption = changeEvent.target.value;
            const matchingInt = interiors.find(
                (interior) => {
                    return interior.id === parseInt(chosenOption)
                }
            )
            setInt(parseInt(chosenOption))
        }
})