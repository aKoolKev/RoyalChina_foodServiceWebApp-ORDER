
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

//print shopping cart when an item is added
function displayShoppingCart(){
    //show Order object in shopping cart
    shoppingCartContentContainer.innerHTML = ''; //clear anything in the cart before

    //display an empty cart
    if (shoppingCart.length <= 0){
        const liEl = document.createElement('li');
        liEl.appendChild(document.createTextNode('Start by adding an item from a category!'));
        shoppingCartContentContainer.appendChild(liEl); 
    }

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
    getGrandTotal(getSubTotal()); //show $0
    displayShoppingCart(); //show empty cart
}

//send all orders in the shopping cart to firebase
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
            getGrandTotal(getSubTotal());  //clear total
            displayShoppingCart(); //display the empty shopping cart
            alert('Order submitted successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your order.');
        });

    
}

function clearRender(){
    let renderItemName_el = document.getElementById('render-item-name');
    renderItemName_el.innerHTML = "Name";
    let renderItemContainer_el = document.getElementById('render-item-table');
    renderItemContainer_el.innerHTML = '';
}

function renderTable_noSizes(itemName, itemNameArr, itemPriceArr){
    clearRender();

    let displayItemNameEl = document.getElementById('render-item-name');    
    displayItemNameEl.innerText = itemName

    let tableEl = document.getElementById('render-item-table'); //get table

    for (let i=0; i<itemNameArr.length; i++){
        //row to hold one item info
        let newTrEl = document.createElement('tr');
        newTrEl.className = 'single-item-tr';

        //item name
        let name_tdEl = document.createElement('td');
        name_tdEl.className = 'name-td';
        if (itemName!== "Beef" && itemName !== "Chicken"){
            name_tdEl.innerText = itemNameArr[i].replace(itemName, '');
        } else {
            name_tdEl.innerText = itemNameArr[i];
        }

        //item price
        let price_tdEl = document.createElement('td');
        price_tdEl.className = 'price-td';
        price_tdEl.innerText = '$ ' + itemPriceArr[i].toFixed(2);

        //item quanity
        let quanity_tdEl = document.createElement('td');
        quanity_tdEl.className = 'quanity-td';

        let quanity_spanEl = document.createElement('span');
        quanity_spanEl.id = itemNameArr[i]; //how to access the quanity value
        quanity_spanEl.innerText = '0';
        quanity_tdEl.append(document.createTextNode('['), quanity_spanEl, document.createTextNode(']'));
        
        //item quanity buttons
        let quanityButton_tdEl = document.createElement('td');
        quanityButton_tdEl.className = 'quanity-button-td';

        //INCREMENT button
        let incrementButton = document.createElement('button');
        incrementButton.innerText = '+';
        incrementButton.className = "increment-quanity-button";
        incrementButton.addEventListener('click', ()=>{
            //map the increment button to the respective item's name
            const mappedTo = itemNameArr[i];
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
            document.getElementById(mappedTo).innerText = currQuanity+1;
        });

        // item DECREMENT button
        const decrementButton = document.createElement('button');
        decrementButton.innerText = '-';
        decrementButton.className = "decrement-quanity-button";
        decrementButton.addEventListener('click', ()=>{
            //map the increment button to the respective item's name
            const mappedTo = itemNameArr[i];
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
        
            //non-negative quanity
            if(currQuanity > 0)
                document.getElementById(mappedTo).innerText = currQuanity-1;
        });

        //add buttons to button td
        quanityButton_tdEl.append(incrementButton,decrementButton);

        

        //add to cart button
        let addButton_td = document.createElement('td');
        addButton_td.className = 'add-button-td';
        
        let addButton_el = document.createElement('button');
        addButton_el.innerText = 'ADD';
        addButton_el.addEventListener('click', ()=>{addItemToShoppingCart(itemNameArr[i],itemNameArr[i],itemPriceArr[i])});

        addButton_td.appendChild(addButton_el);


        newTrEl.append(name_tdEl, price_tdEl, quanity_tdEl, quanityButton_tdEl, addButton_td);
        tableEl.appendChild(newTrEl);
    }

}

function renderTable_withSizes(itemName, itemNameArr, itemSmallPriceArr, itemLargePriceArr){
    clearRender();

    let displayItemNameEl = document.getElementById('render-item-name');
    displayItemNameEl.innerText = itemName;

    let tableEl = document.getElementById('render-item-table'); //get table

    for (let i=0; i<itemNameArr.length;i++){
        //row to hold one item info
        let newTrEl = document.createElement('tr');
        newTrEl.className = 'single-item-tr';

        //name
        let name_tdEl = document.createElement('td');
        name_tdEl.className = 'name-td';
        if (itemName!== "Beef" && itemName !== "Chicken"){
            name_tdEl.innerText = itemNameArr[i].replace(itemName, '');
        } else {
            name_tdEl.innerText = itemNameArr[i];
        }
        
        let hasSmallSize;

        //small price
        let smPrice_tdEl = document.createElement('td');
        smPrice_tdEl.className = 'price-td';
        if (itemSmallPriceArr[i] > 0){
            smPrice_tdEl.innerText = itemSmallPriceArr[i].toFixed(2);
            hasSmallSize = true;
        } else {
            smPrice_tdEl.innerText = '-';
            hasSmallSize = false;
        }
    

        //small price quanity
        let smQuanity_tdEl = document.createElement('td');
        smQuanity_tdEl.className = 'quanity-td';

        let smQuanity_spanEl = document.createElement('span');

        if (hasSmallSize){
            smQuanity_spanEl.id = itemNameArr[i] + '-small'; //how to access the quanity value
            smQuanity_spanEl.innerText = '0';
            smQuanity_tdEl.append(document.createTextNode('['), smQuanity_spanEl, document.createTextNode(']'));
        }
        else{
            smQuanity_spanEl.innerText = '-';
            smQuanity_tdEl.appendChild(smQuanity_spanEl);
        }
        
        //small price buttons
        let smQuanityButton_tdEl = document.createElement('td');
        smQuanityButton_tdEl.className = 'quanity-button-td';
        
        let smIncrementButton, smDecrementButton;
        
        if (hasSmallSize){
            //INCREMENT button
            const smIncrementButton = document.createElement('button');
            smIncrementButton.innerText = '+';
            smIncrementButton.className = "increment-quanity-button";
            smIncrementButton.addEventListener('click', ()=>{
                //map the increment button to the respective item's name
                const mappedTo = itemNameArr[i] + '-small';
                let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
                document.getElementById(mappedTo).innerText = currQuanity+1;
            });

            //DECREMENT button
            const smDecrementButton = document.createElement('button');
            smDecrementButton.innerText = '-';
            smDecrementButton.className = "decrement-quanity-button";
            smDecrementButton.addEventListener('click', ()=>{
                //map the increment button to the respective item's name
                const mappedTo = itemNameArr[i] + '-small';
                let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
            
                //non-negative quanity
                if(currQuanity > 0)
                    document.getElementById(mappedTo).innerText = currQuanity-1;
            });
            //add buttons to button td
            smQuanityButton_tdEl.append(smIncrementButton, smDecrementButton);
        } else {
            smQuanityButton_tdEl.appendChild(document.createTextNode('-'));
        }

        //add small item to cart
        let smAddButton_tdEl = document.createElement('td');
        smAddButton_tdEl.className = 'add-button-td';

        if(hasSmallSize){
            let smAddButton_el = document.createElement('button');
            smAddButton_el.innerText = 'ADD';
            smAddButton_el.addEventListener('click', ()=>{
                //these item does not have a small size
                const noSmallSize = ["Fortune Cookies (10)", "General Tso's Sauce", "Brown Gravy", "Red Sweet & Sour Sauce"];
                if(noSmallSize.findIndex(currItem => currItem === itemNameArr[i]) > -1) //found...do not print "small"
                    addItemToShoppingCart(itemNameArr[i]+'-small', itemNameArr[i], itemSmallPriceArr[i], '', '', '');
                else
                    addItemToShoppingCart(itemNameArr[i]+'-small', itemNameArr[i], itemSmallPriceArr[i], 'small', '', '');
            });
            smAddButton_tdEl.appendChild(smAddButton_el);
        } else {
            smAddButton_tdEl.append(document.createTextNode('-'));
        }
    

        let hasLargePrice; 

        //large price
        let lgPrice_tdEl = document.createElement('td');
        lgPrice_tdEl.className = 'price-td';
        if (itemLargePriceArr[i]>0){
            lgPrice_tdEl.innerText = itemLargePriceArr[i].toFixed(2);
            hasLargePrice = true;
        } else {
            lgPrice_tdEl.appendChild(document.createTextNode('-'));
            hasLargePrice = false;
        }

        //large price quanity
        let lgQuanity_tdEl = document.createElement('td');
        lgQuanity_tdEl.className = 'quanity-td';

        let lgQuanity_spanEl = document.createElement('span');

        if (hasLargePrice){
            lgQuanity_spanEl.id = itemNameArr[i] + '-large'; //how to access the quanity value
            lgQuanity_spanEl.innerText = '0';
            lgQuanity_tdEl.append(document.createTextNode('['), lgQuanity_spanEl, document.createTextNode(']'));
        }
        else{
            lgQuanity_spanEl.innerText = '-';
            lgQuanity_tdEl.appendChild(lgQuanity_spanEl);
        }

        //large price buttons
        let lgQuanityButton_tdEl = document.createElement('td');
        lgQuanityButton_tdEl.className = 'quanity-button-td';
        
        let lgIncrementButton, lgDecrementButton;
        
        if (hasLargePrice){
            //INCREMENT button
            const lgIncrementButton = document.createElement('button');
            lgIncrementButton.innerText = '+';
            lgIncrementButton.className = "increment-quanity-button";
            lgIncrementButton.addEventListener('click', ()=>{
                //map the increment button to the respective item's name
                const mappedTo = itemNameArr[i] + '-large';
                let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
                document.getElementById(mappedTo).innerText = currQuanity+1;
            });

            //DECREMENT button
            const lgDecrementButton = document.createElement('button');
            lgDecrementButton.innerText = '-';
            lgDecrementButton.className = "decrement-quanity-button";
            lgDecrementButton.addEventListener('click', ()=>{
                //map the increment button to the respective item's name
                const mappedTo = itemNameArr[i] + '-large';
                let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
            
                //non-negative quanity
                if(currQuanity > 0)
                    document.getElementById(mappedTo).innerText = currQuanity-1;
            });
            //add buttons to button td
            lgQuanityButton_tdEl.append(lgIncrementButton, lgDecrementButton);
        } else {
            lgQuanityButton_tdEl.appendChild(document.createTextNode('-'));
        }

        //add large item to cart
        let lgAddButton_tdEl = document.createElement('td');
        lgAddButton_tdEl.className = 'add-button-td';

        if(hasLargePrice){
            let lgAddButton_el = document.createElement('button');
            lgAddButton_el.innerText = 'ADD';
            lgAddButton_el.addEventListener('click', ()=>{addItemToShoppingCart(itemNameArr[i]+'-large', itemNameArr[i], itemLargePriceArr[i], 'large', '', '')});
            lgAddButton_tdEl.appendChild(lgAddButton_el);
        } else {
            lgAddButton_tdEl.append(document.createTextNode('-'));
        }

        
        newTrEl.append(name_tdEl, 
            smPrice_tdEl, smQuanity_tdEl, smQuanityButton_tdEl, smAddButton_tdEl,
            lgPrice_tdEl, lgQuanity_tdEl, lgQuanityButton_tdEl, lgAddButton_tdEl);

        tableEl.appendChild(newTrEl);
    }
}

function renderTable_comboLunch(lunchCombo, itemNameArr, itemPrice){
    clearRender();

    let displayItemNameEl = document.getElementById('render-item-name');    
    displayItemNameEl.innerText = lunchCombo === "Lunch" ? "Lunch Specials" : "Combination Dishes"

    let tableEl = document.getElementById('render-item-table'); //get table

    for (let i=0; i<itemNameArr.length; i++){
        //row to hold one item info
        let newTrEl = document.createElement('tr');
        newTrEl.className = 'single-item-tr';

        //item name
        let name_tdEl = document.createElement('td');
        name_tdEl.className = 'name-td';
        name_tdEl.innerText = itemNameArr[i];

        //item quanity
        let quanity_tdEl = document.createElement('td');
        quanity_tdEl.className = 'quanity-td';

        let quanity_spanEl = document.createElement('span');
        quanity_spanEl.id = itemNameArr[i] + '-' + lunchCombo; //how to access the quanity value
        quanity_spanEl.innerText = '0';
        quanity_tdEl.append(document.createTextNode('['), quanity_spanEl, document.createTextNode(']'));
        
        //item quanity buttons
        let quanityButton_tdEl = document.createElement('td');
        quanityButton_tdEl.className = 'quanity-button-td';

        //INCREMENT button
        let incrementButton = document.createElement('button');
        incrementButton.innerText = '+';
        incrementButton.className = "increment-quanity-button";
        incrementButton.addEventListener('click', ()=>{
            //map the increment button to the respective item's name
            const mappedTo = itemNameArr[i] + '-' + lunchCombo;
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
            document.getElementById(mappedTo).innerText = currQuanity+1;
        });

        // item DECREMENT button
        const decrementButton = document.createElement('button');
        decrementButton.innerText = '-';
        decrementButton.className = "decrement-quanity-button";
        decrementButton.addEventListener('click', ()=>{
            //map the increment button to the respective item's name
            const mappedTo = itemNameArr[i] + '-' + lunchCombo;
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
        
            //non-negative quanity
            if(currQuanity > 0)
                document.getElementById(mappedTo).innerText = currQuanity-1;
        });

        //add buttons to button td
        quanityButton_tdEl.append(incrementButton,decrementButton);

    
        //CR quanity
        let crQuanity_tdEl = document.createElement('td');
        crQuanity_tdEl.className = 'quanity-td';

        let crQuanity_spanEl = document.createElement('span');
        crQuanity_spanEl.id = itemNameArr[i] + '-' + lunchCombo + '-CR'; //how to access the quanity value
        crQuanity_spanEl.innerText = '0';
        crQuanity_tdEl.append(document.createTextNode('CR: ['), crQuanity_spanEl, document.createTextNode(']'));
        
        //CR quanity buttons
        let crQuanityButton_tdEl = document.createElement('td');
        crQuanityButton_tdEl.className = 'quanity-button-td';

        // CR INCREMENT button
        let crIncrementButton = document.createElement('button');
        crIncrementButton.innerText = '+';
        crIncrementButton.className = "increment-quanity-button";
        crIncrementButton.addEventListener('click', ()=>{
            //map the increment button to the respective item's name
            const mappedTo = itemNameArr[i] + '-' + lunchCombo + '-CR';
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
            document.getElementById(mappedTo).innerText = currQuanity+1;
        });

        // CR DECREMENT button
        const crDecrementButton = document.createElement('button');
        crDecrementButton.innerText = '-';
        crDecrementButton.className = "decrement-quanity-button";
        crDecrementButton.addEventListener('click', ()=>{
            //map the increment button to the respective item's name
            const mappedTo = itemNameArr[i] + '-' + lunchCombo + '-CR';
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
        
            //non-negative quanity
            if(currQuanity > 0)
                document.getElementById(mappedTo).innerText = currQuanity-1;
        });

         //add CR buttons to CR button td
        crQuanityButton_tdEl.append(crIncrementButton, crDecrementButton);


        //ER quanity
        let erQuanity_tdEl = document.createElement('td');
        erQuanity_tdEl.className = 'quanity-td';

        let erQuanity_spanEl = document.createElement('span');
        erQuanity_spanEl.id = itemNameArr[i] + '-' + lunchCombo + '-ER'; //how to access the quanity value
        erQuanity_spanEl.innerText = '0';
        erQuanity_tdEl.append(document.createTextNode('ER: ['), erQuanity_spanEl, document.createTextNode(']'));
        
        //ER quanity buttons
        let erQuanityButton_tdEl = document.createElement('td');
        erQuanityButton_tdEl.className = 'quanity-button-td';

        // ER INCREMENT button
        let erIncrementButton = document.createElement('button');
        erIncrementButton.innerText = '+';
        erIncrementButton.className = "increment-quanity-button";
        erIncrementButton.addEventListener('click', ()=>{
            //map the increment button to the respective item's name
            const mappedTo = itemNameArr[i] + '-' + lunchCombo + '-ER';
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
            document.getElementById(mappedTo).innerText = currQuanity+1;
        });

        // ER DECREMENT button
        const erDecrementButton = document.createElement('button');
        erDecrementButton.innerText = '-';
        erDecrementButton.className = "decrement-quanity-button";
        erDecrementButton.addEventListener('click', ()=>{
            //map the increment button to the respective item's name
            const mappedTo = itemNameArr[i] + '-' + lunchCombo + '-ER';
            let currQuanity = parseInt(document.getElementById(mappedTo).innerText);
        
            //non-negative quanity
            if(currQuanity > 0)
                document.getElementById(mappedTo).innerText = currQuanity-1;
        });

         //add ER buttons to ER button td
        erQuanityButton_tdEl.append(erIncrementButton, erDecrementButton);



        //add to cart button
        let addButton_td = document.createElement('td');
        addButton_td.className = 'add-button-td';
        
        let addButton_el = document.createElement('button');
        addButton_el.innerText = 'ADD';
        addButton_el.addEventListener('click', ()=>{
            const numCR = parseInt(document.getElementById(itemNameArr[i]+'-'+lunchCombo+'-CR').innerText);
            const numER = parseInt(document.getElementById(itemNameArr[i]+'-'+lunchCombo+'-ER').innerText);
            const numItem = parseInt(document.getElementById(itemNameArr[i]+'-'+lunchCombo).innerText);
            
            if ( (numCR+numER) === numItem ){
                addItemToShoppingCart(itemNameArr[i] + '-' + lunchCombo, itemNameArr[i], itemPrice, '', numCR > 0 ? numCR : '', numER > 0 ? numER : '');
                document.getElementById(itemNameArr[i]+'-'+lunchCombo+'-CR').innerText = '0';
                document.getElementById(itemNameArr[i]+'-'+lunchCombo+'-ER').innerText = '0';
            } else {
                alert("Number of CR and ER does not match number of combo/lunch!");
            }

        });

        addButton_td.appendChild(addButton_el);


        newTrEl.append(name_tdEl, quanity_tdEl, quanityButton_tdEl, 
                       crQuanity_tdEl, crQuanityButton_tdEl, erQuanity_tdEl, erQuanityButton_tdEl, 
                       addButton_td);
        tableEl.appendChild(newTrEl);
    }

    
}


window.onload = function(){

    const toggleCategoryButton = document.getElementById('hide-categories-button');

    //new condititonal rendering
    const appetizer_RenderButtonEl = document.getElementById('appetizers-render-button');
    appetizer_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click();
        renderTable_noSizes("Appetizers", appetizerNames, appetizerPrices);
    });

    const chowMeiFun_RenderButtonEl = document.getElementById('chow-mei-fun-render-button');
    chowMeiFun_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_noSizes("Chow Mei Fun", chowMeiFunNames, chowMeiFunPrices);
    });

    const eggFooYoung_RenderButtonEl = document.getElementById('egg-foo-young-render-button');
    eggFooYoung_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_noSizes("Egg Foo Young", eggFooYoungNames, eggFooYoungPrices);
    });

    const vegetableDishes_RenderButtonEl = document.getElementById('vegetable-dishes-render-button');
    vegetableDishes_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_noSizes("Vegetable Dishes", vegetableDishesNames, vegetableDishesPrices);
    });

    const stPaulSandwich_RenderButtonEl = document.getElementById('st-paul-sandwich-render-button');
    stPaulSandwich_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_noSizes("St. Paul", stPaulSandwichNames, stPaulSandwichPrices);
    });

    const chefSpecialties_RenderButtonEl = document.getElementById('chef-specialties-render-button');
    chefSpecialties_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_noSizes("Chef Specialties", chefSpecialtiesNames, chefSpecialtiesPrices);
    });

    const soup_RenderButtonEl = document.getElementById('soup-render-button');
    soup_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_withSizes("Soup", soupNames, soupSmallPrices, soupLargePrices);
    });

    const friedRice_RenderButtonEl = document.getElementById('fried-rice-render-button');
    friedRice_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_withSizes("Fried Rice", friedRiceNames, friedRiceSmallPrices, friedRiceLargePrices);
    });

    const chowMein_RenderButtonEl = document.getElementById('chow-mein-render-button');
    chowMein_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_withSizes("Chow Mein", chowMeinNames, chowMeinSmallPrices, chowMeinLargePrices);
    });

    const loMein_RenderButtonEl = document.getElementById('lo-mein-render-button');
    loMein_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_withSizes("Lo Mein", loMeinNames, loMeinSmallPrices, loMeinLargePrices);
    });

    const chopSuey_RenderButtonEl = document.getElementById('chop-suey-render-button');
    chopSuey_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_withSizes("Chop Suey", chopSueyNames, chopSueySmallPrices, chopSueyLargePrices);
    });

    const beef_RenderButtonEl = document.getElementById('beef-render-button');
    beef_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_withSizes("Beef", beefNames, beefSmallPrices, beefLargePrices);
    });

    const chicken_RenderButtonEl = document.getElementById('chicken-render-button');
    chicken_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_withSizes("Chicken", chickenNames, chickenSmallPrices, chickenLargePrices);
    });

    const seafood_RenderButtonEl = document.getElementById('seafood-render-button');
    seafood_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_withSizes("Seafood", seafoodNames, seafoodSmallPrices, seafoodLargePrices);
    });

    const sweetSour_RenderButtonEl = document.getElementById('sweet&sour-render-button');
    sweetSour_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_withSizes("Sweet & Sour", sweetAndSourNames, sweetAndSourSmallPrices, sweetAndSourLargePrices);
    });
    
    const sideOrders_RenderButtonEl = document.getElementById('side-orders-render-button');
    sideOrders_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_withSizes("Side Orders", sideOrdersNames, sideOrdersSmallPrices, sideOrdersLargePrices);
    });

    const combinationDish_RenderButtonEl = document.getElementById('combination-dish-render-button');
    combinationDish_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_comboLunch("Combination", combinationDishesNames, combinationPrice);
    });
    
    const lunchSpecial_RenderButtonEl = document.getElementById('lunch-specials-render-button');
    lunchSpecial_RenderButtonEl.addEventListener('click', () => {
        toggleCategoryButton.click(); 
        renderTable_comboLunch("Lunch", lunchDishesNames, lunchPrice);
    });


    const clearButtonEl = document.getElementById('clear-shopping-cart-button').addEventListener('click', clearCart);
    const sumbitOrderButtonEl = document.getElementById('submit-order-button').addEventListener('click', submitOrder);

    //button to toggle the display of the category nav bar
    const showCategoriesButtonEl = document.getElementById('show-categories-button').addEventListener('click', ()=>{
        document.querySelector('.shortcut-buttons-container').classList.add('show');
        document.querySelector('.shortcut-buttons-container').classList.remove('hide');
    });

    const hideCategoriesButtonEl = document.getElementById('hide-categories-button').addEventListener('click', ()=>{
        document.querySelector('.shortcut-buttons-container').classList.toggle('hide');
        document.querySelector('.shortcut-buttons-container').classList.remove('show');
    });
    

    displayShoppingCart(); //should display the text "empty"
}