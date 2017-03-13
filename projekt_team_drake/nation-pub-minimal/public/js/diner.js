/* global sharedVueStuff, Vue, socket */
'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getOrderNumber() {
  // It's probably not a good idea to generate a random order number, client-side.
  // A better idea would be to let the server decide.
  return "#" + getRandomInt(1, 1000000);
}
new Vue({
  el: '#container',//id of intrest
  mixins: [sharedVueStuff], // include stuff that goes to both diner and kitchen
  methods: {
    placeOrder: function() {
      console.log(food_or());
      // create an array of checked items to order
    // var orderItems = [].filter.call(document.getElementById("order_list"), function(i) {
    //    return true;/*food_or()!=="";*/
    // }).map(function(i) {
    //   return i.value;
    // });
    var orderItems = food_or();
      socket.emit('order', {orderId: getOrderNumber(), orderItems: orderItems});
  }
  }
});
