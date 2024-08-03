
let shoppingCart = []; //holds Order object

const appetizerNames = ["Spring Roll", "Roast Pork Egg Roll", "Chicken Teriyaki", "Fried Dumpling", "Steam Dumpling", "Crab Rangoon (x5)", "Crab Rangoon (x10)", "Boneless Spare Ribs", "Chicken Nuggets", "Sugar Biscuit", "Fried Wonton", "Fried Baby Shrimp", "Mozarella Cheese Sticks", "Crab Stick"];
const appetizerPrices = [1.95, 1.85, 9.85, 8.45, 8.45, 5.95, 9.10, 10.95, 5.85, 6.75, 6.95, 8.35, 5.85, 8.35];

const shoppingCartContentContainer = document.getElementById("shopping-cart-content-container");

//populate the appetizers item
function loadAppetizers(){
    //retrieve respected containers
    const appetizerContainer = document.getElementById("Appetizers-name-container");
    const appetizerPriceContainer = document.getElementById("Appetizers-price-container");
    const appetizerDisplayQuanityContainer = document.getElementById("Appetizers-quanity-display-container");
    const appetizerQuanityButtonContainer = document.getElementById("Appetizers-quanity-button-container");
    const appetizerAddButtonContainer = document.getElementById("Appetizers-add-button-container");


    for (let i=0; i<appetizerNames.length;i++){

        //initialize appetizer name
        const name_liEl = document.createElement('li');
        name_liEl.innerText = appetizerNames[i];
        appetizerContainer.appendChild(name_liEl); //add the appetizer to appetizer container
    
        //initialize appetizer price
        const price_liEl = document.createElement('li');
        price_liEl.innerText = "$ " + appetizerPrices[i].toFixed(2);
        appetizerPriceContainer.appendChild(price_liEl);

        //display quanity 
        const quanity_spanEl = document.createElement('span');
        quanity_spanEl.className = "Appetizers-display-quanity";
        quanity_spanEl.id = appetizerNames[i]; //id is appetizer's name
        quanity_spanEl.innerText = '0';
        const leftBracket_spanEl = document.createElement('span');
        leftBracket_spanEl.innerText = '[';
        const rightBracket_spanEl = document.createElement('span');
        rightBracket_spanEl.innerText = ']';
        
        const quanity_liEl = document.createElement('li');
        quanity_liEl.append(leftBracket_spanEl, quanity_spanEl, rightBracket_spanEl);
        appetizerDisplayQuanityContainer.appendChild(quanity_liEl);
    



        // quanity buttons

        //increment
        const incrementQuanity_buttonEl = document.createElement('button');
        incrementQuanity_buttonEl.innerText = "+";
        incrementQuanity_buttonEl.className = "increment-quanity-button";
        incrementQuanity_buttonEl.addEventListener('click', ()=>{
            //map the increment button to the respective appetizer
            const mappedTo = appetizerNames[i];
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
            document.getElementById(mappedTo).innerText = currQuanity+1;

            // 

        });

        const decrementQuanity_buttonEl = document.createElement('button');
        decrementQuanity_buttonEl.innerText = "-";
        decrementQuanity_buttonEl.className = "decrement-quanity-button";
        decrementQuanity_buttonEl.addEventListener('click', ()=>{
            //map the increment button to the respective appetizer
            const mappedTo = appetizerNames[i];
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
            
            //non-negative quanity
            if(currQuanity > 0)
                document.getElementById(mappedTo).innerText = currQuanity-1;
        });

        //decrement
        const quanityButtons_liEl = document.createElement('li');
        quanityButtons_liEl.append(incrementQuanity_buttonEl, decrementQuanity_buttonEl);
        appetizerQuanityButtonContainer.appendChild(quanityButtons_liEl);
    
        //add order button
        const add_buttonEl = document.createElement('button'); //make button
        add_buttonEl.innerText = "ADD"; //button name
        add_buttonEl.addEventListener('click', ()=>{addItemToShoppingCart(appetizerNames[i],appetizerNames[i],appetizerPrices[i])});
    
        const addButton_liEl = document.createElement('li');
        addButton_liEl.appendChild(add_buttonEl);
        appetizerAddButtonContainer.appendChild(addButton_liEl);
    }
}

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
const chowMeiFunLargePrices = [11.15, 11.15, 11.95, 11.95, 12.75, 12.75];

const loMeinNames = ["Plain Lo Mein", "Vegetable Lo Mein", "Roast Pork Lo Mein", "Chicken Lo Mein", "Shrimp Lo Mein", "Beef Lo Mein", "House Special Lo Mein"];
const loMeinSmallPrices = [6.95, 7.35, 7.95, 7.95, 8.15, 8.15, 8.55];
const loMeinLargePrices = [9.50, 9.95, 10.50, 10.50, 10.95, 10.95, 11.65];

//populate the soups items
// function loadSoups(){
//     //soup container
//     const soupContainer = document.getElementById('Soup-name-container');
//     const smallSoupQuanityDisplayContainer = document.getElementById('Soup-small-quanity-display-container');
//     const largeSoupQuanityDisplayContainer = document.getElementById('Soup-large-quanity-display-container');
//     const smallSoupQuanityButtonContainer = document.getElementById('Soup-small-quanity-button-container');
//     const largeSoupQuanityButtonContainer = document.getElementById('Soup-large-quanity-button-container');
//     const smallSoupAddButtonContainer = document.getElementById('Soup-small-add-button-container');
//     const largeSoupAddButtonContainer = document.getElementById('Soup-large-add-button-container');

    

//     for(let i=0; i<soupNames.length; i++){
//         //add soup name
//         let soupName_liEl = document.createElement('li');
//         soupName_liEl.appendChild(document.createTextNode(soupNames[i]));
//         soupContainer.appendChild(soupName_liEl);

//         //add small soup price
//         let smallSoupPrice_liEl = document.createElement('li');
//         smallSoupPrice_liEl.appendChild(document.createTextNode('$ ' + soupSmallPrices[i]));
//         document.getElementById('Soup-small-size-price-container').appendChild(smallSoupPrice_liEl);

//         //display small soup quanity
//         const smallSoupQuanity_spanEl = document.createElement('span');
//         smallSoupQuanity_spanEl.className = "small-soup-display-quanity";
//         smallSoupQuanity_spanEl.id = soupNames[i] + '-small'; //id is soup's name
//         smallSoupQuanity_spanEl.innerText = '0';
//         // [0]
//         const leftBracket_spanEl = document.createElement('span');
//         leftBracket_spanEl.innerText = '[';
//         const rightBracket_spanEl = document.createElement('span');
//         rightBracket_spanEl.innerText = ']';
        
//         const smallSoupQuanity_liEl = document.createElement('li');
//         smallSoupQuanity_liEl.append(leftBracket_spanEl, smallSoupQuanity_spanEl, rightBracket_spanEl);
//         smallSoupQuanityDisplayContainer.appendChild(smallSoupQuanity_liEl);
    
//         // small quanity buttons

//         //small soup increment
//         const smallSoupIncrementQuanity_buttonEl = document.createElement('button');
//         smallSoupIncrementQuanity_buttonEl.innerText = "+";
//         smallSoupIncrementQuanity_buttonEl.className = "increment-quanity-button";
//         smallSoupIncrementQuanity_buttonEl.addEventListener('click', ()=>{
//             //map the increment button to the respective appetizer
//             const mappedTo = soupNames[i]+'-small';
//             let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
//             document.getElementById(mappedTo).innerText = currQuanity+1;
//         });

//         //small soup decrement
//         const smallSoupDecrementQuanity_buttonEl = document.createElement('button');
//         smallSoupDecrementQuanity_buttonEl.innerText = "-";
//         smallSoupDecrementQuanity_buttonEl.className = "decrement-quanity-button";
//         smallSoupDecrementQuanity_buttonEl.addEventListener('click', ()=>{
//             //map the increment button to the respective appetizer
//             const mappedTo = soupNames[i] + '-small';
//             let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
            
//             //non-negative quanity
//             if(currQuanity > 0)
//                 document.getElementById(mappedTo).innerText = currQuanity-1;
//         });

//         const smallSoupQuanityButtons_liEl = document.createElement('li');
//         smallSoupQuanityButtons_liEl.append(smallSoupIncrementQuanity_buttonEl, smallSoupDecrementQuanity_buttonEl);
//         smallSoupQuanityButtonContainer.appendChild(smallSoupQuanityButtons_liEl);

//         //add small soup button
//         const addSmallSoup_buttonEl = document.createElement('button'); //make button
//         addSmallSoup_buttonEl.innerText = "ADD"; //button name
//         addSmallSoup_buttonEl.addEventListener('click', ()=>{addItemToShoppingCart(soupNames[i] + '-small',soupNames[i],soupSmallPrices[i],'small')});
    
//         const addSmallSoupButton_liEl = document.createElement('li');
//         addSmallSoupButton_liEl.appendChild(addSmallSoup_buttonEl);
//         smallSoupAddButtonContainer.appendChild(addSmallSoupButton_liEl);


//         // LARGE SOUP

//         //add large soup price 
//         let largeSoupPrice_liEl = document.createElement('li');
//         largeSoupPrice_liEl.appendChild(document.createTextNode('$ ' + soupLargePrices[i]));
//         document.getElementById('Soup-large-size-price-container').appendChild(largeSoupPrice_liEl);

//         //display large soup quanity
//         const largeSoupQuanity_spanEl = document.createElement('span');
//         largeSoupQuanity_spanEl.className = "small-soup-display-quanity";
//         largeSoupQuanity_spanEl.id = soupNames[i] + '-large'; //id is soup's name
//         largeSoupQuanity_spanEl.innerText = '0';
//         // [0]
//         const leftBracket2_spanEl = document.createElement('span');
//         leftBracket2_spanEl.innerText = '[';
//         const rightBracket2_spanEl = document.createElement('span');
//         rightBracket2_spanEl.innerText = ']';
        
//         const largeSoupQuanity_liEl = document.createElement('li');
//         largeSoupQuanity_liEl.append(leftBracket2_spanEl, largeSoupQuanity_spanEl, rightBracket2_spanEl);
//         largeSoupQuanityDisplayContainer.appendChild(largeSoupQuanity_liEl);


//         // large quanity buttons

//         //large soup increment
//         const largeSoupIncrementQuanity_buttonEl = document.createElement('button');
//         largeSoupIncrementQuanity_buttonEl.innerText = "+";
//         largeSoupIncrementQuanity_buttonEl.className = "increment-quanity-button";
//         largeSoupIncrementQuanity_buttonEl.addEventListener('click', ()=>{
//             //map the increment button to the respective appetizer
//             const mappedTo = soupNames[i]+'-large';
//             let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
//             document.getElementById(mappedTo).innerText = currQuanity+1;
//         });

//         //large soup decrement
//         const largeSoupDecrementQuanity_buttonEl = document.createElement('button');
//         largeSoupDecrementQuanity_buttonEl.innerText = "-";
//         largeSoupDecrementQuanity_buttonEl.className = "decrement-quanity-button";
//         largeSoupDecrementQuanity_buttonEl.addEventListener('click', ()=>{
//             //map the increment button to the respective appetizer
//             const mappedTo = soupNames[i] + '-large';
//             let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
            
//             //non-negative quanity
//             if(currQuanity > 0)
//                 document.getElementById(mappedTo).innerText = currQuanity-1;
//         });

//         const largeSoupQuanityButtons_liEl = document.createElement('li');
//         largeSoupQuanityButtons_liEl.append(largeSoupIncrementQuanity_buttonEl, largeSoupDecrementQuanity_buttonEl);
//         largeSoupQuanityButtonContainer.appendChild(largeSoupQuanityButtons_liEl);

//         //add small soup button
//         const addLargeSoup_buttonEl = document.createElement('button'); //make button
//         addLargeSoup_buttonEl.innerText = "ADD"; //button name
//         addLargeSoup_buttonEl.addEventListener('click', ()=>{addItemToShoppingCart(soupNames[i] + '-large',soupNames[i],soupLargePrices[i],'large')});
    
//         const addLargeSoupButton_liEl = document.createElement('li');
//         addLargeSoupButton_liEl.appendChild(addLargeSoup_buttonEl);
//         largeSoupAddButtonContainer.appendChild(addLargeSoupButton_liEl);

//     }
// }




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

        //add small item price
        if (smallPriceArr != ''){
            if (smallPriceArr[i] != 0){
                let smallItemPrice_liEl = document.createElement('li');
                smallItemPrice_liEl.appendChild(document.createTextNode('$ ' + (smallPriceArr[i]).toFixed(2)));
                document.getElementById(itemContainerName + '-small-size-price-container').appendChild(smallItemPrice_liEl);
                
                //display small item quanity
                const smallItemQuanity_spanEl = document.createElement('span');
                smallItemQuanity_spanEl.className = "small-" + itemContainerName + "-display-quanity";
                smallItemQuanity_spanEl.id = nameArr[i] + '-small'; //id is item's name and it's size
                smallItemQuanity_spanEl.innerText = '0';
                // [0]
                const leftBracket_spanEl = document.createElement('span');
                leftBracket_spanEl.innerText = '[';
                const rightBracket_spanEl = document.createElement('span');
                rightBracket_spanEl.innerText = ']';
                
                const smallItemQuanity_liEl = document.createElement('li');
                smallItemQuanity_liEl.append(leftBracket_spanEl, smallItemQuanity_spanEl, rightBracket_spanEl);
                smallItemQuanityDisplayContainer.appendChild(smallItemQuanity_liEl);
            
                // small quanity buttons

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

                const smallItemQuanityButtons_liEl = document.createElement('li');
                smallItemQuanityButtons_liEl.append(smallItemIncrementQuanity_buttonEl, smallItemDecrementQuanity_buttonEl);
                smallItemQuanityButtonContainer.appendChild(smallItemQuanityButtons_liEl);

                //add small item button
                const addSmallItem_buttonEl = document.createElement('button'); //make button
                addSmallItem_buttonEl.innerText = "ADD"; //button name
                addSmallItem_buttonEl.addEventListener('click', ()=>{addItemToShoppingCart(nameArr[i] + '-small',nameArr[i],smallPriceArr[i],'small')});
            
                const addSmallItemButton_liEl = document.createElement('li');
                addSmallItemButton_liEl.appendChild(addSmallItem_buttonEl);
                smallItemAddButtonContainer.appendChild(addSmallItemButton_liEl);
            }
        }
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

window.onload = function(){
    const clearButtonEl = document.getElementById('clear-shopping-cart-button').addEventListener('click', clearCart);
    const sumbitOrderButtonEl = document.getElementById('submit-order-button').addEventListener('click', submitOrder);

    loadAppetizers();
    loadItem("Soup", soupNames, soupSmallPrices, soupLargePrices);
    loadItem("Fried-Rice", friedRiceNames, friedRiceSmallPrices, friedRiceLargePrices);
    loadItem("Lo-Mein", loMeinNames, loMeinSmallPrices, loMeinLargePrices);
    loadItem("Chow-Mein", chowMeinNames, chowMeinSmallPrices, chowMeinLargePrices);
    loadItem("Chop-Suey", chopSueyNames, chopSueySmallPrices, chopSueyLargePrices);
    loadItem("Chow-Mei-Fun", chowMeiFunNames, '', chowMeiFunLargePrices);
}