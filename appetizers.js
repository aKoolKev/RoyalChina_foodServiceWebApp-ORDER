const appetizerNames = ["Spring Roll", "Roast Pork Egg Roll", "Chicken Teriyaki", "Fried Dumpling", "Steam Dumpling", "Crab Rangoon (x5)", "Crab Rangoon (x10)", "Boneless Spare Ribs", "Chicken Nuggets", "Sugar Biscuit", "Fried Wonton", "Fried Baby Shrimp", "Mozarella Cheese Sticks", "Crab Stick"];
const appetizerPrices = [1.95, 1.85, 9.85, 8.45, 8.45, 5.95, 9.10, 10.95, 5.85, 6.75, 6.95, 8.35, 5.85, 8.35];

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
    loadItem_withNoPrice("Appetizers", appetizerNames, appetizerPrices);
}