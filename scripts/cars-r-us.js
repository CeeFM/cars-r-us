import { intHtml } from "./interior.js";
import { paintHtml } from "./paint.js";
import { techHtml } from "./tech.js";
import { wheelsHtml } from "./wheels.js";
import { Orders } from "./orders.js";
import { addCustomOrder } from "./database.js";

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const carsRUs = () => {
    return `
    <h1>Cars R Us!</h1>
    <h3>We ain't even kidding, bro. We got them thangs thangin' up in here!</h3>
    <div>
    ${intHtml()}
    ${paintHtml()}
    ${techHtml()}
    ${wheelsHtml()}
    </div>
    <br>
    <article>
    <button id="orderButton">Create Custom Order</button>
    </article>
    <br>
    ${Orders()}` 
}