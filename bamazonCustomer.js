var mysql = require("mysql");
var inquirer = require("inquirer");

//create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "",
  password: "",
  database: "bamazon"
});

//connect to mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  //console.log("connected as id " + connection.threadId);
  
});

//query to list items available for sale (with id, name, and price)
function displayItems() {
	console.log("Welcome to Bamazon! Here are our products available for sale:\n");
	connection.query("SELECT * FROM products", function(err, res) {
		if (err) throw err;

		for (var i = 0; i < res.length; i++) {
	      console.log(res[i].item_id + " | " + res[i].product_name + " | " + "$" + res[i].price);
	    }
	    console.log("-------------------------------------------------------------------");
	});
}

//function to ask the user the ID of the product they would like to buy and how many units they would like to buy
function buyAnItem () {
	inquirer
	    .prompt([
	    {
	      name: "itemID",
	      type: "input",
	      message: "What is the ID number of the product you would like to purchase?"
	    },
	    {
          name: "units",
          type: "input",
          message: "How many units would you like to purchase?"
        }
        ])

	    .then(function(input) {
	      var item = input.itemID;
	      var units = input.units;
	      var queryProducts = "SELECT * FROM products WHERE ?";

	      connection.query(queryProducts, {item_id: item}, function(err, res) {
	      	if (err) throw err;

	      	if (res.length===0) {
	      		console.log("The ID you have entered is invalid. Please enter a valid item ID.");
	      		displayItems();
	      		buyAnItem();
	      	}
	      	else {
	      		var getProduct = res[0];

	      		if (units <= getProduct.stock_quantity) {
	      			console.log("The item you have selected is in stock. Placing your order now...");
	      			//update the bamazon database accordingly

	      			connection.query("UPDATE products SET stock_quantity = " + (getProduct.stock_quantity - units) + " WHERE item_id = " + item, function(err, res) {
	      				if (err) throw err;
	      				console.log("-------------------------------------------------------------------");
	      				console.log("Congratulations, your order has been placed! Your total is $" + getProduct.price * units + ".");
	      				console.log("Thank you for your purchase! Come again soon!");
	      				console.log("-------------------------------------------------------------------");
	      				connection.end();
	      			})
	      		}
	      		else {
	      			console.log("Insufficient quantity!");
	      			console.log("Sorry, the item you are trying to purchase does not have enough product in stock. Please adjust your order.");
	      			console.log("-------------------------------------------------------------------");
	      			buyAnItem();
	      		}
	      	}
	    })
	});   
}

displayItems();
//function to start bamazon
function startBamazon() {
	buyAnItem();
}

startBamazon();