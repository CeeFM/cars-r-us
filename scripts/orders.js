import { getInterior, getPaint, getTech, getWheels, getOrders } from "./database.js";

const buildOrderListItem = (order) => {
    const ints = getInterior()
    const paints = getPaint()
    const techs = getTech()
    const wheels = getWheels()

    const foundInt = ints.find(
        (int) => {
            return int.id === order.interiorId
        }
    )

    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )

    const foundTech = techs.find(
        (tech) => {
            return tech.id === order.techId
        }
    )

    const foundWheel = wheels.find (
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    let totalCost = foundInt.price
    totalCost += foundPaint.price
    totalCost += foundTech.price
    totalCost += foundWheel.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    ${foundPaint.color} car with ${foundWheel.type} wheels, ${foundInt.fabric} interior, and the ${foundTech.package} for a total cost of ${costString}. 
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = `<h2>Custom Car Orders</h2>
    <ul>`

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}