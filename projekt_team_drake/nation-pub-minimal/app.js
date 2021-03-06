/* jslint node: true */
'use strict';

// Require express, socket.io, and vue
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

// Pick arbitrary port
var port = 3000;
app.set('port', (process.env.PORT || port));

//var getMenu = function() {
//  var menu = require(path.join(__dirname, "views/menu.json"));
//  return menu;
//};

// Store orders in a an anonymous class for now.
var orders = function() {
  var orders = {};

  var addOrder = function(dish) {
    orders[dish.orderId] ={};
    orders[dish.orderId].orderItems = dish.orderItems;
    orders[dish.orderId].done = false;
  };

  var getAll = function() {
    return orders;
  };

  var markDone = function(orderId) {
    orders[orderId].done = true;
  };

  //expose functions
  return {
    addOrder : addOrder,
    getAll : getAll,
    markDone : markDone
  };
}(); // instantiate the class immediately

// Serve static assets from public/
app.use(express.static(path.join(__dirname, 'public/')));
// Serve vue from vue/ directory
app.use('/vue', express.static(path.join(__dirname, '/node_modules/vue/dist/')));

// Serve diner.html as root page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/diner.html'));
});
// Serve kitchen.html as subpage
app.get('/kitchen', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/kitchen.html'));
});

io.on('connection', function(socket) {
  // Send list of orders and the menu when a client connects
  //io.emit('initialize', { orders: orders.getAll(),
  //                        menu: getMenu() });

  // When someone orders something
  socket.on('order', function(dish) {
    orders.addOrder(dish);
    io.emit('currentQueue', orders.getAll());
  });

  socket.on('orderDone', function(orderId) {
    orders.markDone(orderId);
    io.emit('currentQueue', orders.getAll());
  });
});

http.listen(app.get('port'), function() {
  console.log('Server listening on port ' + app.get('port'));
});
