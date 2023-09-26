import { getPaint, setPaint } from "./database.js";

const paints = getPaint();

export const paintHtml = () => {
    let html = `<h2>Paints</h2>`

    html += `<select id="paint">`
    html += `<option value="0">Select a Paint Color</option>`

    const arrayOfPaints = paints.map (
        (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += arrayOfPaints.join("")
    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            const chosenOption = changeEvent.target.value;
            const matchingPaint = paints.find(
                (paint) => {
                    return paint.id === parseInt(chosenOption)
                }
            )
            setPaint(parseInt(chosenOption))
        }
})