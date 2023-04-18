//You manage a grocery store and need to keep track of the inventory of 
//various items. You will use arrays to store the data and various functions
//to manipulate and analyze the data. 
//Create an array containing the names of all items in the inventory
//maximum of 10.
let inventoryItems = ['apple', 'banana', 'orange', 'grapes', 'carrot', 
                       'milk', 'bread', 'cheese', 'chicken'];
console.log(inventoryItems);

//Create a separate array with the corresponding stock quantities of each 
//item maximum of 10.
let stockQuantities = [70, 55, 48, 75,112, 96, 68, 56, 77];
console.log(stockQuantities);


//Write a function to add a new item to the inventory, updating both arrays.
function addItem(itemName, quantity) {
    if (inventoryItems.length < 10) {
      inventoryItems.push(itemName);
      stockQuantities.push(quantity);
      console.log(inventoryItems);
      console.log(stockQuantities)
      console.log(`${itemName} has been added by ${quantity}`);
    } else {
      console.log(`Inventory is full`);
    }
  }
addItem('Potato', 60);


//Write a function to update the stock quantity of an existing item.
function updateQuantity(itemName,quantity) {
    let index =inventoryItems.indexOf(itemName)
    if(index !== -1) {
        stockQuantities[index] = quantity;
        console.log(inventoryItems);
        console.log(stockQuantities);
        console.log(`stock quantity of ${itemName} updated to ${quantity}`);
      }
       else {
        console.log(`no update`); 
      }
  }
  (updateQuantity('apple',82));


//Write a function to calculate the total number of items in the inventory.
function getTotalItems() {
    let total = 0;
    for (let quantity of stockQuantities) {
      total += quantity;
    }
    return total;
  }
  console.log(getTotalItems());


//Write a function to find the item with the lowest stock quantity.
function findLowestStockItem() {
  let lowestStock = 0;
  let lowestStockItem = '';
  for (let i = 0; i < inventoryItems.length; i++) {
    if (stockQuantities[i] < lowestStock) {
      lowestStock = stockQuantities[i];
      lowestStockItem = inventoryItems[i];
    }
  }
  return lowestStockItem;
}
console.log(findLowestStockItem());
      