import { getTech, setTech } from "./database.js";

const techs = getTech();

export const techHtml = () => {
    return `<div class="car-stuff">
    <h2>Technologies</h2>
        <select id="tech">
            <option value="0">Select a Tech Package</option>
            ${
                techs.map(
                    (tech) => {
                        return `<option value="${tech.id}">${tech.package}</option>`
                    }
                ).join("")
            }
        </select>
        </div>
    `
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            const chosenOption = changeEvent.target.value;
            const matchingTech = techs.find(
                (tech) => {
                    return tech.id === parseInt(chosenOption)
                }
            )

            setTech(parseInt(chosenOption))
        }
})