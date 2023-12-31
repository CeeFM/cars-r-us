import { intHtml } from "./interior.js";
import { paintHtml } from "./paint.js";
import { techHtml } from "./tech.js";
import { wheelsHtml } from "./wheels.js";
import { Orders } from "./orders.js";
import { addCustomOrder } from "./database.js";
import { Types } from "./types.js";

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
    <h1>Cars 'R Us: Personal Car Builder</h1>
    <h3>We ain't even kidding, bro. We got them thangs thangin' up in here!</h3>
    <div class="car-container">
    ${paintHtml()}
    ${intHtml()}
    ${wheelsHtml()}
    ${techHtml()}
    </div>
    <br>
    ${Types()}
    <article>
    <button id="orderButton">Place Car Order</button>
    </article>
    <br>
    <div class="orders">
    ${Orders()}
    </div>` 
}