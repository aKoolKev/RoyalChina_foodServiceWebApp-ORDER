
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

const chefSpecialtiesNames = ["Happy Family", "Seafood Delight", "Walnut Shrimp", "Bourbon Chicken", "Sesame Chicken", "General Tso's Chicken", "Beijing Beef", "Black Pepper Steak", "Shrimp w. Garlic Sauce", "Dragon Meets Phoenix", "Four Seasons", "Lemon Chicken", "Triple Hunan", "Hot & Spicy Shrimp", "Hot & Spicy Shredded Beef", "Chicken w. Garlic Sauce", "Mongolian Chicken", "Mongolian Beef", "Hunan Chicken", "Hunan Pork", "Szechuan Chicken", "Szechuan Pork", "Hunan Beef", "Szechuan Beef", "Orange Chicken", "Beef w. Garlic Sauce", "Szechuan Shrimp", "General Tso's Shrimp", "Black Pepper Chicken", "Orange Beef", "Pineapple Chicken", "Kung Pao Beef"];
const chefSpecialtiesPrices = [14.95, 14.95, 12.95, 12.95, 12.55, 12.55, 12.85, 12.85, 13.45, 14.95, 14.45, 11.75, 13.65, 12.95, 12.85, 12.65, 12.65, 12.85, 12.65, 12.65, 12.65, 12.65, 12.85, 12.85, 12.55, 12.85, 13.15, 12.95, 12.15, 12.85, 12.65, 12.85];

const sideOrdersNames = ["White Rice", "Fortune Cookies (10)", "General Tso's Sauce", "Brown Gravy", "Red Sweet & Sour Sauce"];
const sideOrdersSmallPrices = [3.75, 1.50, 1.50, 1.50, 0.50];
const sideOrdersLargePrices = [4.75, 0, 0, 0, 0];

const combinationDishesNames = ["Chicken Chow Mein", "Shrimp Chow Mein", "Roast Pork Egg Foo Young", "Roast Pork w. Chinese Veg.", "Roast Pork Lo Mein",
                                "Chicken Lo Mein", "Chicken w. Broccoli", "Moo Goo Gai Pan", "Shrimp w. Broccoli", "Beef w. Broccoli", "Pepper Steak", 
                                "Sweet & Sour Chicken", "Sweet & Sour Pork", "Hunan Chicken", "General Tso's Chicken", "Chicken w. Garlic Sauce", 
                                "Beef w. Garlic Sauce", "Kung Pao Chicken", "Mongolian Beef", "Sesame Chicken", "Beef Hunan Style", "Chicken w. Cashew Nuts", 
                                "Mixed Vegetable", "Hot Braised Chicken", "Black Pepper Steak", "Boneless Rib", "Szechuan Chicken", "Szechuan Beef", "Honey Chicken", 
                                "Orange Chicken", "Chicken Teriyaki", "Bourbon Chicken", "Chicken w. Mushroom", "Beef w. Mushroom", "Chicken w. Mixed Veg.", 
                                "Beef w. Mixed Veg.", "Shrimp w. Garlic Sauce", "Szechuan Shrimp", "Beijing Beef", "Pineapple Chicken", "Black Pepper Chicken"];
const combinationPrice = 10.95;

const lunchDishesNames = ["Chicken Chow Mein", "Shrimp Chow Mein", "Moo Goo Gai Pan", "Chicken w. Broccoli", "Sweet & Sour Chicken", "Sweet & Sour Pork", 
                          "Chicken w. Garlic Sauce", "Beff w. Garlic Sauce", "Hunan Chicken", "Kung Pao Chicken", "Chicken w. Cashew Nuts", 
                          "Pepper Chicken", "General Tso's Chicken", "Sesame Chicken", "Beef w. Broccoli", "Pepper Steak", "Mongolian Beef", 
                          "Mongolian Chicken", "Shrimp w. Broccoli", "Black Pepper Steak", "Shrimp w. Garlic Sauce", "Mixed Vegetable", 
                          "Broccoli w. Garlic Sauce", "Orange Chicken", "Hot Braised Chicken", "Hot Braised Pork", "Szechuan Beef", 
                          "Roast Pork w. Broccoli", "Mushroom Chicken", "Mushroom Beef", "Chicken Lo Mein", "Pork Lo Mein", 
                          "Chicken w. Mixed Vegetable", "Beef w. Mixed Vegetable"];
const lunchPrice = 8.95;

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
                addSmallItem_buttonEl.addEventListener('click', ()=>{
                    
                    //do not pass a size when handling these side orders 
                    let checkArr = ["Fortune Cookies (10)", "General Tso's Sauce", "Brown Gravy", "Red Sweet & Sour Sauce"];

                    if (checkArr.findIndex(item => item === nameArr[i]) === -1 ) //did NOT find
                        addItemToShoppingCart(nameArr[i] + '-small', nameArr[i], smallPriceArr[i], 'small');
                    else // found, don't print "small" on side orders with no size
                        addItemToShoppingCart(nameArr[i] + '-small', nameArr[i], smallPriceArr[i], '');
                });


            
                const addSmallItemButton_liEl = document.createElement('li');
                addSmallItemButton_liEl.appendChild(addSmallItem_buttonEl);
                smallItemAddButtonContainer.appendChild(addSmallItemButton_liEl);
            }
            
        } //end of if there exists a smallPriceArr

        // LARGE Item


        if (largePriceArr[i] > 0){
    
            //add large item price 
            let largeItemPrice_liEl = document.createElement('li');
            largeItemPrice_liEl.appendChild(document.createTextNode('$ ' + (largePriceArr[i]).toFixed(2)));
            document.getElementById(itemContainerName + '-large-size-price-container').appendChild(largeItemPrice_liEl);

            //display large soup quanity
    
            const largeItemQuanity_spanEl = document.createElement('span');
            largeItemQuanity_spanEl.className = "large-" + itemContainerName + "-display-quanity";
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
        } //end of if item has a large price
        //display nothing if item does not have a large
    } //end of for loop, looping through each item
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
        
        //size
        if (order.size !== ''){
            order_liEl.append(document.createTextNode(' (' + (order.size).toUpperCase() + ')'));
        }
       
        //sides
        if (order.numCR > 0){
            order_liEl.append(document.createTextNode( ' CR: x(' + order.numCR + ')') );
        }

        if (order.numER > 0){
            order_liEl.append(document.createTextNode( ' ER: x(' + order.numER + ')') );
        }


        shoppingCartContentContainer.appendChild(order_liEl);
    }
}

//adds an item to the shopping cart
function addItemToShoppingCart(itemID, itemName, itemPrice, size, numCR, numER){

    let itemQuanityContainer = document.getElementById(itemID);
    
    //first check if item already exists in the shopping cart
    if (shoppingCart.findIndex(order => order.id === itemID) != -1){
        let orderObj = shoppingCart.find(order => order.id === itemID);

        let prevQuanity = orderObj.quanity;
        orderObj.quanity = prevQuanity + parseInt(itemQuanityContainer.innerText);

        itemQuanityContainer.innerText = 0; //reset quanity selector

        //update sides (crab rangoon or egg roll)
        if (  (orderObj.numCR + orderObj.numER) > 0){ //order is a combo/lunch
            orderObj.numCR += numCR;
            orderObj.numER += numER;
        } 


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
        size: size ? size : '',
        numCR: numCR ? numCR : 0, //if there is numCR, set it to that number. Else, no crab rangoon
        numER: numER ? numER : 0 //if there is numER, set it to that number. Else, no egg roll
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

    //display the shopping cart with the item add
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


//loads in the combination/lunch dishes
function loadCombinationLunchDish(comboOrLunch, dishNames, dishPrice){
    const nameContainer = document.getElementById(comboOrLunch + "-Dish-name-container");
    const priceContainer = document.getElementById(comboOrLunch + "-Dish-price-container");
    const quanityContainer = document.getElementById(comboOrLunch + "-Dish-quanity-container");
    const quanityButtonContainer = document.getElementById(comboOrLunch + "-Dish-quanity-button-container");
    const addButtonContainer = document.getElementById(comboOrLunch + "-Dish-add-button-container");
    const crabRangoonQuanityContainer = document.getElementById(comboOrLunch + "-Dish-crab-rangoon-quanity-container");
    const crabRangoonQuanityButtonContainer = document.getElementById(comboOrLunch + "-Dish-crab-rangoon-quanity-button-container");
    
    const eggRollQuanityContainer = document.getElementById(comboOrLunch + "-Dish-egg-roll-quanity-container");
    const eggRollQuanityButtonContainer = document.getElementById(comboOrLunch + "-Dish-egg-roll-quanity-button-container");
    

    for (let i=0; i<dishNames.length;i++){
        //display combination dish name
        let name_liEl = document.createElement('li');
        name_liEl.appendChild(document.createTextNode(dishNames[i]));
        nameContainer.appendChild(name_liEl);

        //display price
        let price_liEl = document.createElement('li');
        price_liEl.appendChild(document.createTextNode('$ ' + dishPrice));
        priceContainer.appendChild(price_liEl);

        //display combo quanity
            // [
        let leftBracket_spanEl = document.createElement('span');
        leftBracket_spanEl.innerText = '[';
            // ]
        let rightBracket_spanEl = document.createElement('span');
        rightBracket_spanEl.innerText = ']';

            // actual quanity
        let quanity_spanEl = document.createElement('span');
        quanity_spanEl.innerText = '0';
        quanity_spanEl.id = dishNames[i] + '-' + comboOrLunch; // unique id is dishName-Combination or dishName-Lunch

            //add [0]
        let quanity_liEl = document.createElement('li');
        quanity_liEl.append(leftBracket_spanEl, quanity_spanEl, rightBracket_spanEl);
        quanityContainer.appendChild(quanity_liEl);

        //display quanity buttons

            // increment button
        const itemIncrementButton = document.createElement('button');
        itemIncrementButton.innerText = '+';
        itemIncrementButton.className = "increment-quanity-button";
        itemIncrementButton.addEventListener('click', ()=>{
            //map the increment button to the respective combo's name
            const mappedTo = dishNames[i] + '-' + comboOrLunch;
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
            document.getElementById(mappedTo).innerText = currQuanity+1;
        });

            //  decrement button
        const itemDecrementButton = document.createElement('button');
        itemDecrementButton.innerText = '-';
        itemDecrementButton.className = "decrement-quanity-button";
        itemDecrementButton.addEventListener('click', ()=>{
            //map the increment button to the respective item's name
            const mappedTo = dishNames[i] + '-' + comboOrLunch;
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
        
            //non-negative quanity
            if(currQuanity > 0)
                document.getElementById(mappedTo).innerText = currQuanity-1;
        });

            // add increment and decrement button
        const itemQuanityButtons_liEl = document.createElement('li');
        itemQuanityButtons_liEl.append(itemIncrementButton, itemDecrementButton);
        quanityButtonContainer.appendChild(itemQuanityButtons_liEl);

      

        //display crab rangoon quanity
            // [
        let leftBracket2_spanEl = document.createElement('span');
        leftBracket2_spanEl.innerText = '[';
            // ]
        let rightBracket2_spanEl = document.createElement('span');
        rightBracket2_spanEl.innerText = ']';
            // actual quanity
        let crabRangoonQuanity_spanEl = document.createElement('span');
        crabRangoonQuanity_spanEl.innerText = '0';
        crabRangoonQuanity_spanEl.id = dishNames[i] + '-CR' + '-' + comboOrLunch; // unqiue id is <combinationDishName>-CR-Combination or <combinationDishName>-CR-Lunch

            //add [0]
        let crabRangoonQuanity_liEl = document.createElement('li');
        crabRangoonQuanity_liEl.append(leftBracket2_spanEl, crabRangoonQuanity_spanEl, rightBracket2_spanEl);
        crabRangoonQuanityContainer.appendChild(crabRangoonQuanity_liEl);

        //display crab rangoon buttons

            // increment button
        const crIncrementButton = document.createElement('button');
        crIncrementButton.innerText = '+';
        crIncrementButton.className = "increment-quanity-button";
        crIncrementButton.addEventListener('click', ()=>{
            //map the increment button to the respective <comboName>-CR
            const mappedTo = dishNames[i]+'-CR-' + comboOrLunch;
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
            document.getElementById(mappedTo).innerText = currQuanity+1;
        });
    
                //  decrement button
        const crDecrementButton = document.createElement('button');
        crDecrementButton.innerText = '-';
        crDecrementButton.className = "decrement-quanity-button";
        crDecrementButton.addEventListener('click', ()=>{
            //map the increment button to the respective <comboName>-CR
            const mappedTo = dishNames[i]+'-CR-' + comboOrLunch;
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
        
            //non-negative quanity
            if(currQuanity > 0)
                document.getElementById(mappedTo).innerText = currQuanity-1;
        });
    
            // add increment and decrement button
        const crQuanityButtons_liEl = document.createElement('li');
        crQuanityButtons_liEl.append(crIncrementButton, crDecrementButton);
        crabRangoonQuanityButtonContainer.appendChild(crQuanityButtons_liEl);


        //display egg roll quanity
            // [
        let leftBracket3_spanEl = document.createElement('span');
        leftBracket3_spanEl.innerText = '[';
            // ]
        let rightBracket3_spanEl = document.createElement('span');
        rightBracket3_spanEl.innerText = ']';
            // actual quanity
        let eggRollQuanity_spanEl = document.createElement('span');
        eggRollQuanity_spanEl.innerText = '0';
        eggRollQuanity_spanEl.id = dishNames[i] + '-ER' + '-' + comboOrLunch; // unqiue id is <combinationDishName>-ER-Combination or <combinationDishName>-ER-Lunch
    
                //add [0]
        let eggRollQuanity_liEl = document.createElement('li');
        eggRollQuanity_liEl.append(leftBracket3_spanEl, eggRollQuanity_spanEl, rightBracket3_spanEl);
        eggRollQuanityContainer.appendChild(eggRollQuanity_liEl);


        //display egg roll buttons

            // increment button
            const erIncrementButton = document.createElement('button');
            erIncrementButton.innerText = '+';
            erIncrementButton.className = "increment-quanity-button";
            erIncrementButton.addEventListener('click', ()=>{
                //map the increment button to the respective <comboName>-ER
                const mappedTo = dishNames[i]+'-ER-' + comboOrLunch;
                let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
                document.getElementById(mappedTo).innerText = currQuanity+1;
            });
        
                    //  decrement button
            const erDecrementButton = document.createElement('button');
            erDecrementButton.innerText = '-';
            erDecrementButton.className = "decrement-quanity-button";
            erDecrementButton.addEventListener('click', ()=>{
                //map the increment button to the respective <comboName>-CR
                const mappedTo = dishNames[i]+'-ER-' + comboOrLunch;
                let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
            
                //non-negative quanity
                if(currQuanity > 0)
                    document.getElementById(mappedTo).innerText = currQuanity-1;
            });
        
                // add increment and decrement button
            const erQuanityButtons_liEl = document.createElement('li');
            erQuanityButtons_liEl.append(erIncrementButton, erDecrementButton);
            eggRollQuanityButtonContainer.appendChild(erQuanityButtons_liEl);


        //add item to shopping cart button
        const add_buttonEl = document.createElement('button'); //make button
        add_buttonEl.innerText = "ADD"; //button name
        add_buttonEl.addEventListener('click', ()=>{
            let numComboDish = parseInt(quanity_spanEl.innerText);
            let numCR = parseInt(crabRangoonQuanity_spanEl.innerText);
            let numER = parseInt(eggRollQuanity_spanEl.innerText);
            
            if ( (numCR+numER) === numComboDish ) {
                addItemToShoppingCart(dishNames[i] + '-' + comboOrLunch, dishNames[i] + ' ' + comboOrLunch, dishPrice, '', numCR, numER);
                
                //reset the quanities
                crabRangoonQuanity_spanEl.innerText = '0';
                eggRollQuanity_spanEl.innerText = '0';
            }else{
                alert("Number of CR and ER does not match number of combination dishes selected!");
            }  
        });

        const addButton_liEl = document.createElement('li');
        addButton_liEl.appendChild(add_buttonEl);
        addButtonContainer.appendChild(addButton_liEl);
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
    loadItem("Side-Orders", sideOrdersNames, sideOrdersSmallPrices, sideOrdersLargePrices);
    
    loadItem_withNoPrice("Appetizers", appetizerNames, appetizerPrices);
    loadItem_withNoPrice("Chow-Mei-Fun", chowMeiFunNames, chowMeiFunPrices);
    loadItem_withNoPrice("Egg-Foo-Young", eggFooYoungNames, eggFooYoungPrices);
    loadItem_withNoPrice("Vegetable-Dishes", vegetableDishesNames, vegetableDishesPrices);
    loadItem_withNoPrice("St-Paul-Sandwich", stPaulSandwichNames, stPaulSandwichPrices);
    loadItem_withNoPrice("Chef-Specialties", chefSpecialtiesNames, chefSpecialtiesPrices);

    loadCombinationLunchDish("Combination", combinationDishesNames, combinationPrice);
    loadCombinationLunchDish("Lunch", lunchDishesNames, lunchPrice);
}   