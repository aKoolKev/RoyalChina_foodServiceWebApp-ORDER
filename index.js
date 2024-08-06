
let shoppingCart = []; //holds Order object
const shoppingCartContentContainer = document.getElementById("shopping-cart-content-container");

const appetizerNames = ["Spring Roll", "Roast Pork Egg Roll", "Chicken Teriyaki", "Fried Dumpling", "Steam Dumpling", "Crab Rangoon (x5)", "Crab Rangoon (x10)", "Boneless Spare Ribs", "Chicken Nuggets", "Sugar Biscuit", "Fried Wonton", "Fried Baby Shrimp", "Mozarella Cheese Sticks", "Crab Stick"];
const appetizerPrices = [1.95, 1.85, 9.85, 8.45, 8.45, 5.95, 9.10, 10.95, 5.85, 6.75, 6.95, 8.35, 5.85, 8.35];

const soupNames = ['Wonton Soup', 'Egg Drop Soup', 'Wonton Egg Drop Soup', 'Hot & Sour Soup'];
const soupSmallPrices = [4.35, 3.85, 4.65, 4.55];
const soupLargePrices = [5.25, 4.95, 5.65, 5.95];

const friedRiceNames = ["Plain Fried Rice", "Vegetable Fried Rice", "Roast Pork Fried Rice", "Chicken Fried Rice", "Shrimp Fried Rice", "Beef Fried Rice", "House Special Fried Rice"];
const friedRiceSmallPrices = [6.45, 6.95, 7.45, 7.45, 7.75, 7.75, 8.10];
const friedRiceLargePrices = [8.25, 9.50, 10.25, 10.25, 10.65, 10.65, 11.25];

const chowMeinNames = ["Vegetable Chow Mein", "Roast Pork Chow Mein", "Chicken Chow Mein", "Shrimp Chow Mein", "Beef Chow Mein", "House Special Chow Mein"];
const chowMeinSmallPrices = [7.25, 7.50, 7.50, 7.95, 7.95, 8.25];
const chowMeinLargePrices = [10.15, 10.25, 10.25, 10.85, 10.85, 11.15];

const chopSueyNames = ["Vegetable Chop Suey", "Roast Pork Chop Suey", "Chicken Chop Suey", "Shrimp Chop Suey", "Beef Chop Suey", "House Special Chop Suey"];
const chopSueySmallPrices = [6.95, 7.50, 7.50, 8.10, 8.10, 0];
const chopSueyLargePrices = [10.35, 10.95, 10.95, 11.95, 11.95, 12.95];

const chowMeiFunNames = ["Roast Pork Chow Mei Fun", "Chicken Chow Mei Fun", "Shrimp Chow Mei Fun", "Beef Chow Mei Fun", "Singapore Style Chow Mei Fun", "House Special Chow Mei Fun"];
const chowMeiFunPrices = [11.15, 11.15, 11.95, 11.95, 12.75, 12.75];

const loMeinNames = ["Plain Lo Mein", "Vegetable Lo Mein", "Roast Pork Lo Mein", "Chicken Lo Mein", "Shrimp Lo Mein", "Beef Lo Mein", "House Special Lo Mein"];
const loMeinSmallPrices = [6.95, 7.35, 7.95, 7.95, 8.15, 8.15, 8.55];
const loMeinLargePrices = [9.50, 9.95, 10.50, 10.50, 10.95, 10.95, 11.65];

const beefNames = ["Pepper Steak w. Onion", "Beef w. Broccoli", "Beef w. Mushroom", "Sha Cha Beef", "Beef w. Snow Peas", "Beef w. Mix Vegetable"];
const beefSmallPrices = [8.25, 8.25, 8.25, 8.25, 8.45, 0];
const beefLargePrices = [11.75, 11.75, 11.75, 11.75, 11.95, 12.75];

const chickenNames = ["Honey Chicken", "Moo Goo Gai Pan", "Chicken w. Broccoli", "Chicken w. Green Pepper", "Curry Chicken", "Kung Pao Chicken", "Chicken w. Cashew Nuts", "Chicken w. Snow Peas", "Hot Braised Chicken", "Chicken w. Mixed Vegetable", "Chicken w. Mushroom"];
const chickenSmallPrices = [8.10, 8.10, 8.10, 8.10, 0, 0, 0, 8.25, 8.10, 0, 8.10];
const chickenLargePrices = [11.35, 11.35, 11.35, 11.35, 11.85, 11.85, 11.85, 11.85, 11.35, 12.15, 11.35];

const seafoodNames = ["Shrimp w. Lobster Sauce", "Shrimp w. Broccoli", "Shrimp w. Chinese Veg", "Shrimp w. Black Bean Sauce", "Shrimp w. Snow Peas", "Baby Shrimp w. Cashew Nuts", "Shrimp w. Mix Vegetable"];
const seafoodSmallPrices = [8.45, 8.45, 8.45, 8.45, 8.65, 8.65, 0];
const seafoodLargePrices = [12.75, 12.75, 12.75, 12.75, 12.85, 12.85, 13.55];

const sweetAndSourNames = ["Sweet & Sour Pork", "Sweet & Sour Chicken", "Sweet & Sour Shrimp"];
const sweetAndSourSmallPrices = [8.10, 8.10, 0];
const sweetAndSourLargePrices = [11.35, 11.35, 12.15];

const eggFooYoungNames = ["Pork Egg Foo Young", "Chicken Egg Foo Young", "Shrimp Egg Foo Young", "Beef Egg Foo Young", "House Egg Foo Young"];
const eggFooYoungPrices = [11.10, 11.10, 11.50, 11.50, 11.95];

const vegetableDishesNames = ["Mixed Vegetable", "Broccoli Garlic Sauce", "Sauteed Broccoli"];
const vegetableDishesPrices = [10.25, 10.25, 10.25];

const stPaulSandwichNames = ["Chicken St. Paul", "Pork St. Paul", "Beef St. Paul", "Shrimp St. Paul", "House Special St. Paul",];
const stPaulSandwichPrices = [6.75, 6.75, 6.95, 6.95, 7.15];

// populate an specified item 
function loadItem(itemContainerName, nameArr, smallPriceArr, largePriceArr){
    //item container
    const itemContainer = document.getElementById(itemContainerName + '-name-container');
    const largeItemQuanityDisplayContainer = document.getElementById(itemContainerName + '-large-quanity-display-container');
    const smallItemQuanityDisplayContainer = document.getElementById(itemContainerName + '-small-quanity-display-container');
    const smallItemQuanityButtonContainer = document.getElementById(itemContainerName + '-small-quanity-button-container');
    const largeItemQuanityButtonContainer = document.getElementById(itemContainerName + '-large-quanity-button-container');
    const smallItemAddButtonContainer = document.getElementById(itemContainerName + '-small-add-button-container');
    const largeItemAddButtonContainer = document.getElementById(itemContainerName + '-large-add-button-container');

    for(let i=0; i<nameArr.length; i++){
        //add item name
        let itemName_liEl = document.createElement('li');
        itemName_liEl.appendChild(document.createTextNode(nameArr[i]));
        itemContainer.appendChild(itemName_liEl);
        
        if (smallPriceArr !== ''){ //check if small price array exists for this item
            let hasSmallPrice = true; //assume the item has a small price
            
            //SMALL PRICE 
            let smallItemPrice_liEl = document.createElement('li');

            if (smallPriceArr[i] !== 0){
                smallItemPrice_liEl.appendChild(document.createTextNode('$ ' + (smallPriceArr[i]).toFixed(2)));
            } else {         // price is zero
                hasSmallPrice = false; //this item has no small price
                smallItemPrice_liEl.appendChild(document.createTextNode('-')); //insert place holder
            }
            //add the small price
            document.getElementById(itemContainerName + '-small-size-price-container').appendChild(smallItemPrice_liEl);
            
            
            //DISPLAY SMALL ITEM QUANITY
            const smallItemQuanity_spanEl = document.createElement('span');
            
            if (!hasSmallPrice){ //does not have small price...just display '-'
                smallItemQuanity_spanEl.innerText = '-';
                const smallItemQuanity_liEl = document.createElement('li');
                smallItemQuanity_liEl.append( smallItemQuanity_spanEl);
                smallItemQuanityDisplayContainer.appendChild(smallItemQuanity_liEl);
            } else { // has small price...display [0]
                smallItemQuanity_spanEl.className = "small-" + itemContainerName + "-display-quanity";
                smallItemQuanity_spanEl.id = nameArr[i] + '-small'; //id is item's name and it's size
                smallItemQuanity_spanEl.innerText = '0';
                // [0]
                const leftBracket_spanEl = document.createElement('span');
                leftBracket_spanEl.innerText = '[';
                const rightBracket_spanEl = document.createElement('span');
                rightBracket_spanEl.innerText = ']';

                //adds small item quanity
                const smallItemQuanity_liEl = document.createElement('li');
                smallItemQuanity_liEl.append(leftBracket_spanEl, smallItemQuanity_spanEl, rightBracket_spanEl);
                smallItemQuanityDisplayContainer.appendChild(smallItemQuanity_liEl);
            }
            
                
        
            //SMALL QUANITY BUTTONS
            if (!hasSmallPrice){
                const placeHolder_liEl = document.createElement('li');
                placeHolder_liEl.style.textAlign = 'center';
                placeHolder_liEl.append(document.createTextNode('-'));
                smallItemQuanityButtonContainer.appendChild(placeHolder_liEl);
            } else{
                //small item increment
                const smallItemIncrementQuanity_buttonEl = document.createElement('button');
                smallItemIncrementQuanity_buttonEl.innerText = "+";
                smallItemIncrementQuanity_buttonEl.className = "increment-quanity-button";
                smallItemIncrementQuanity_buttonEl.addEventListener('click', ()=>{
                    //map the increment button to the respective item
                    const mappedTo = nameArr[i]+'-small';
                    let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
                    document.getElementById(mappedTo).innerText = currQuanity+1;
                });

                //small item decrement
                const smallItemDecrementQuanity_buttonEl = document.createElement('button');
                smallItemDecrementQuanity_buttonEl.innerText = "-";
                smallItemDecrementQuanity_buttonEl.className = "decrement-quanity-button";
                smallItemDecrementQuanity_buttonEl.addEventListener('click', ()=>{
                    //map the increment button to the respective item
                    const mappedTo = nameArr[i] + '-small';
                    let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
                    
                    //non-negative quanity
                    if(currQuanity > 0)
                        document.getElementById(mappedTo).innerText = currQuanity-1;
                });

                // add increment and decrement button
                const smallItemQuanityButtons_liEl = document.createElement('li');
                smallItemQuanityButtons_liEl.append(smallItemIncrementQuanity_buttonEl, smallItemDecrementQuanity_buttonEl);
                smallItemQuanityButtonContainer.appendChild(smallItemQuanityButtons_liEl);
            }


            if (!hasSmallPrice){
                const placeHolder_liEl = document.createElement('li');
                placeHolder_liEl.style.textAlign = 'center';
                placeHolder_liEl.append(document.createTextNode('-'));
                smallItemAddButtonContainer.appendChild(placeHolder_liEl);
            } else {
                //sumbit small item add button
                const addSmallItem_buttonEl = document.createElement('button'); //make button
                addSmallItem_buttonEl.innerText = "ADD"; //button name
                addSmallItem_buttonEl.addEventListener('click', ()=>{addItemToShoppingCart(nameArr[i] + '-small',nameArr[i],smallPriceArr[i],'small')});
            
                const addSmallItemButton_liEl = document.createElement('li');
                addSmallItemButton_liEl.appendChild(addSmallItem_buttonEl);
                smallItemAddButtonContainer.appendChild(addSmallItemButton_liEl);
            }
            
        } //end of if there exists a smallPriceArr

        // LARGE Item

        //add large item price 
        let largeItemPrice_liEl = document.createElement('li');
        largeItemPrice_liEl.appendChild(document.createTextNode('$ ' + (largePriceArr[i]).toFixed(2)));
        document.getElementById(itemContainerName + '-large-size-price-container').appendChild(largeItemPrice_liEl);

        //display large soup quanity
        const largeItemQuanity_spanEl = document.createElement('span');
        largeItemQuanity_spanEl.className = "small-" + itemContainerName + "-display-quanity";
        largeItemQuanity_spanEl.id = nameArr[i] + '-large'; //id is soup's name
        largeItemQuanity_spanEl.innerText = '0';
        // [0]
        const leftBracket2_spanEl = document.createElement('span');
        leftBracket2_spanEl.innerText = '[';
        const rightBracket2_spanEl = document.createElement('span');
        rightBracket2_spanEl.innerText = ']';
        
        const largeItemQuanity_liEl = document.createElement('li');
        largeItemQuanity_liEl.append(leftBracket2_spanEl, largeItemQuanity_spanEl, rightBracket2_spanEl);
        largeItemQuanityDisplayContainer.appendChild(largeItemQuanity_liEl);
    

        // large quanity buttons

        //large item increment
        const largeItemIncrementQuanity_buttonEl = document.createElement('button');
        largeItemIncrementQuanity_buttonEl.innerText = "+";
        largeItemIncrementQuanity_buttonEl.className = "increment-quanity-button";
        largeItemIncrementQuanity_buttonEl.addEventListener('click', ()=>{
            //map the increment button to the respective item
            const mappedTo = nameArr[i]+'-large';
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
            document.getElementById(mappedTo).innerText = currQuanity+1;
        });

        //large item decrement
        const largeItemDecrementQuanity_buttonEl = document.createElement('button');
        largeItemDecrementQuanity_buttonEl.innerText = "-";
        largeItemDecrementQuanity_buttonEl.className = "decrement-quanity-button";
        largeItemDecrementQuanity_buttonEl.addEventListener('click', ()=>{
            //map the increment button to the respective item
            const mappedTo = nameArr[i] + '-large';
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
            
            //non-negative quanity
            if(currQuanity > 0)
                document.getElementById(mappedTo).innerText = currQuanity-1;
        });

        const largeItemQuanityButtons_liEl = document.createElement('li');
        largeItemQuanityButtons_liEl.append(largeItemIncrementQuanity_buttonEl, largeItemDecrementQuanity_buttonEl);
        largeItemQuanityButtonContainer.appendChild(largeItemQuanityButtons_liEl);

        //add large item button
        const addLargeItem_buttonEl = document.createElement('button'); //make button
        addLargeItem_buttonEl.innerText = "ADD"; //button name
        addLargeItem_buttonEl.addEventListener('click', ()=>{addItemToShoppingCart(nameArr[i] + '-large',nameArr[i],largePriceArr[i],'large')});
    
        const addLargeItemButton_liEl = document.createElement('li');
        addLargeItemButton_liEl.appendChild(addLargeItem_buttonEl);
        largeItemAddButtonContainer.appendChild(addLargeItemButton_liEl);

    }
}

//print shopping cart when an item is added
function displayShoppingCart(){
    //show Order object in shopping cart
    shoppingCartContentContainer.innerHTML = ''; //clear anything in the cart before

    for(const order of shoppingCart){
        const order_liEl = document.createElement('li');

        // remove button
        const remove_buttonEl = document.createElement('button');
        remove_buttonEl.innerHTML = "X";
        remove_buttonEl.className = "remove-item-button";
        remove_buttonEl.value = order.id;
        remove_buttonEl.addEventListener('click', removeItemFromShoppingCart);

        // display item name, quanity, and size
        order_liEl.append(remove_buttonEl, document.createTextNode(order.name), document.createTextNode(' [' + order.quanity + ']'));
        
        if (order.size != '')
            order_liEl.append(document.createTextNode(' (' + (order.size).toUpperCase() + ')'));
        shoppingCartContentContainer.appendChild(order_liEl);
    }
}

//adds an item to the shopping cart
function addItemToShoppingCart(itemID, itemName, itemPrice, size){

    let itemQuanityContainer = document.getElementById(itemID);
    
    //first check if item already exists in the shopping cart
    if (shoppingCart.findIndex(order => order.id === itemID) != -1){
        let orderObj = shoppingCart.find(order => order.id === itemID);
        let prevQuanity = orderObj.quanity;
        orderObj.quanity = prevQuanity + parseInt(itemQuanityContainer.innerText);
        itemQuanityContainer.innerText = 0; //reset quanity selector
        displayShoppingCart();
        getGrandTotal(getSubTotal());
        return; //no need to make new object, just update the quanity
    }    

    // new item in shopping cart...create Order object
    const order = {
        id: itemID,
        name: itemName,
        price: itemPrice,
        quanity: parseInt(itemQuanityContainer.innerText),
        size: size ? size : '' //if no size, empty string, else the size of the order
    }

    //only add item with a valid quanity
    if(order.quanity>0){
        //add Order object to shopping cart
        shoppingCart.push(order);

        //reset the quanity selector to 0 after adding item to cart
        itemQuanityContainer.innerText = 0;

        //display added item in shopping cart
        displayShoppingCart();

        //get new price of order in cart
        getGrandTotal(getSubTotal());
    }
}

//remove an item from the shopping cart
function removeItemFromShoppingCart(e){

    //item to remove
    const itemToRemove = e.target.value;

    //remove the item
    let filteredCart = shoppingCart.filter(item => item.id != itemToRemove);
    shoppingCart = filteredCart;

    //display the shopping cart with the item removed
    getGrandTotal(getSubTotal());
    displayShoppingCart();
}

//displays and returns the subtotal of items in the shopping cart
function getSubTotal(){
    //compute the cost in the shopping cart
    const displaySubtotal = document.getElementById("display-subtotal");
   
    let subtotal = 0;
    
    for(const item of shoppingCart){
        subtotal += item.price * item.quanity;
    }

    displaySubtotal.innerHTML = subtotal.toFixed(2);
    return(subtotal);
}

//compute and display grand total
function getGrandTotal(subtotal){
    const displayGrandTotal = document.getElementById("display-grand-total");

    const salesTax = 0.08475;
    displayGrandTotal.innerHTML = ( (subtotal*salesTax) + subtotal).toFixed(2) ;
}

//clear all orders in the shopping cart
function clearCart(){
    shoppingCart.length=0; //empty cart
    displayShoppingCart(); //show empty cart
}

function submitOrder() {
    //insure there exists orders to submit
    if (shoppingCart.length === 0) {
        alert('Shopping Cart is empty!');
        return;
    }

    //orders -> {order, order, ...}
    const newOrderRef = database.ref('ORDERS').push();
    
    newOrderRef.set({ order: shoppingCart })
        .then(() => {
            console.log('Order submitted successfully!');
            shoppingCart = [];  // Clear the selection after submission
            displayShoppingCart(); //display the empty shopping cart
            alert('Order submitted successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your order.');
        });
}


//loads items that has only one size
function loadItem_withNoPrice(itemContainerName, itemNameArr, itemPriceArr){
    //grab all the necessary html elements
    const itemNameContainer = document.getElementById(itemContainerName + '-name-container');
    const itemPriceContainer = document.getElementById(itemContainerName + '-price-container');
    const itemQuanityContainer = document.getElementById(itemContainerName + '-quanity-display-container');
    const itemQuanityButtonContainer = document.getElementById(itemContainerName + '-quanity-button-container');
    const itemAddButtonContainer = document.getElementById(itemContainerName + '-add-button-container');


    for(let i=0; i<itemNameArr.length; i++){
        // append the item name
        let name_liEl = document.createElement('li');
        name_liEl.appendChild(document.createTextNode(itemNameArr[i]));
        itemNameContainer.appendChild(name_liEl);

        
        // append the item price
        let price_liEl = document.createElement('li');
        price_liEl.appendChild(document.createTextNode('$ ' + itemPriceArr[i].toFixed(2)));
        itemPriceContainer.appendChild(price_liEl);

        
        // display item quanity
        let leftBracket_spanEl = document.createElement('span');
        leftBracket_spanEl.innerText = '[';

        let rightBracket_spanEl = document.createElement('span');
        rightBracket_spanEl.innerText = ']';

        let quanity_spanEl = document.createElement('span');
        quanity_spanEl.innerText = '0';
        quanity_spanEl.id = itemNameArr[i];
            // contains [0]
        let quality_liEl = document.createElement('li');
        quality_liEl.append(leftBracket_spanEl, quanity_spanEl, rightBracket_spanEl);
        
        itemQuanityContainer.appendChild(quality_liEl);


        // item INCREMENT button
        const itemIncrementButton = document.createElement('button');
        itemIncrementButton.innerText = '+';
        itemIncrementButton.className = "increment-quanity-button";
        itemIncrementButton.addEventListener('click', ()=>{
            //map the increment button to the respective item's name
            const mappedTo = itemNameArr[i];
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
            document.getElementById(mappedTo).innerText = currQuanity+1;
        });

        // item DECREMENT button
        const itemDecrementButton = document.createElement('button');
        itemDecrementButton.innerText = '-';
        itemDecrementButton.className = "decrement-quanity-button";
        itemDecrementButton.addEventListener('click', ()=>{
            //map the increment button to the respective item's name
            const mappedTo = itemNameArr[i];
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
        
            //non-negative quanity
            if(currQuanity > 0)
                document.getElementById(mappedTo).innerText = currQuanity-1;
        });

        // add increment and decrement button
        const itemQuanityButtons_liEl = document.createElement('li');
        itemQuanityButtons_liEl.append(itemIncrementButton, itemDecrementButton);
        itemQuanityButtonContainer.appendChild(itemQuanityButtons_liEl);

        const add_buttonEl = document.createElement('button'); //make button
        add_buttonEl.innerText = "ADD"; //button name
        add_buttonEl.addEventListener('click', ()=>{addItemToShoppingCart(itemNameArr[i],itemNameArr[i],itemPriceArr[i])});

        const addButton_liEl = document.createElement('li');
        addButton_liEl.appendChild(add_buttonEl);
        itemAddButtonContainer.appendChild(addButton_liEl);
    }
}

window.onload = function(){
    const clearButtonEl = document.getElementById('clear-shopping-cart-button').addEventListener('click', clearCart);
    const sumbitOrderButtonEl = document.getElementById('submit-order-button').addEventListener('click', submitOrder);

    // loadAppetizers();
    loadItem("Soup", soupNames, soupSmallPrices, soupLargePrices);
    loadItem("Fried-Rice", friedRiceNames, friedRiceSmallPrices, friedRiceLargePrices);
    loadItem("Lo-Mein", loMeinNames, loMeinSmallPrices, loMeinLargePrices);
    loadItem("Chow-Mein", chowMeinNames, chowMeinSmallPrices, chowMeinLargePrices);
    loadItem("Chop-Suey", chopSueyNames, chopSueySmallPrices, chopSueyLargePrices);
    loadItem("Beef", beefNames, beefSmallPrices, beefLargePrices);   
    loadItem("Chicken", chickenNames, chickenSmallPrices, chickenLargePrices);   
    loadItem("Seafood", seafoodNames, seafoodSmallPrices, seafoodLargePrices);
    loadItem("Sweet&Sour", sweetAndSourNames, sweetAndSourSmallPrices, sweetAndSourLargePrices);
    
    loadItem_withNoPrice("Appetizers", appetizerNames, appetizerPrices);
    loadItem_withNoPrice("Chow-Mei-Fun", chowMeiFunNames, chowMeiFunPrices);
    loadItem_withNoPrice("Egg-Foo-Young", eggFooYoungNames, eggFooYoungPrices);
    loadItem_withNoPrice("Vegetable-Dishes", vegetableDishesNames, vegetableDishesPrices);
    loadItem_withNoPrice("St-Paul-Sandwich", stPaulSandwichNames, stPaulSandwichPrices);
}   