let restaurantName = "Sree Divya Hotel";
let foodItemName = "Chicken Biriyani";
let price = 350;
let quantity = 2;
let customerName = "Anil";
let deliveryNeeded=true;
let totalPrice = price* quantity;
function MyRestaurant(){
    console.log("Restaurant Name",restaurantName);
    console.log("Customer: ",customerName);
    console.log("Price: ",price)
    console.log("Item: ",foodItemName);
    console.log("Quantity:",quantity);
    console.log("Price per item: ",price);
    console.log("Total price: ",totalPrice);
    if(deliveryNeeded===true){
        console.log("Delivery Needed: Yes");
    }
}
MyRestaurant();