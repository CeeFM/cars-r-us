const database = {
    paint: [
        {
            id: 1,
            color: "Silver",
            price: 350
        },

        {
            id: 2,
            color: "Midnight Blue",
            price: 450
        },

        {
            id: 3,
            color: "Firebrick Red",
            price: 500
        },

        {
            id: 4,
            color: "Spring Green",
            price: 550
        }
    ],

    interior: [
        {
            id: 1,
            fabric: "Beige Fabric",
            price: 500
        },

        {
            id: 2,
            fabric: "Charcoal Fabric",
            price: 550
        },
        {
            id: 3,
            fabric: "White Leather",
            price: 700
        },
        {
            id: 4,
            fabric: "Black Leather",
            price: 700
        }
        
    ],

    technology: [
        {
            id: 1,
            package: "Basic Package (Basic Sound System)",
            price: 1500
        },
        {
            id: 2,
            package: "Navigation Package (Includes Integrated Navigation Controls)",
            price: 2500
        },
        {
            id: 3,
            package: "Visibility Package (Includes Side and Rear Cameras)",
            price: 5000
        },
        {
            id: 4,
            package: "Ultra Package (Includes Navigation and Visibility Packages)",
            price: 7000
        }
    ],

    wheels: [
        {
            id: 1,
            type: "17-inch Pair Radial",
            price: 1000

        },
        {
            id: 2,
            type: "17-inch Pair Radial Black",
            price: 1250
        },
        {
            id: 3,
            type: "18-inch Pair Spoke Silver",
            price: 1750
        },
        {
            id: 4,
            type: "18-inch Pair Spoke Black",
            price: 1850
        }
    ],

    customOrders: [
        {
            id: 1,
            paintId: 1,
            interiorId: 2,
            techId: 3,
            wheelId: 4,
            timestamp: 1695758804432
        }
    ],

    orderBuilder: {

    }
}

export const getPaint = () => {
    return database.paint.map(paint => ({...paint}))
}

export const getInterior = () => {
    return database.interior.map(int => ({...int}))
}

export const getTech = () => {
    return database.technology.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInt = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    //Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    //Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1;
    newOrder.id = database.customOrders[lastIndex].id + 1;

    //Add a timestamp to the order
    newOrder.timestamp = Date.now();

    //Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}