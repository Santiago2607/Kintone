(function() {
    'use strict';
  
    var ITEMS_APP_ID = 6; 
    var handler = function(event) {
      console.log(event);
      var record = event.record;
      var itemCode = record.item_code.value;
      var updatedStock = record.updated_stock.value;
    //   return kintone.api(kintone.api.url('https://x26zuy4h5ul8.kintone.com/k/v1/record.json', true), 'PUT', {
    //   return kintone.api(kintone.api.url('x26zuy4h5ul8', true), 'PUT', {
      // return kintone.api(kintone.api.url('https://x26zuy4h5ul8.kintone.com/k/6/?q&view=7577832#sort_0=f7577783&order_0=DESC', true), 'PUT', {

      return kintone.api(kintone.api.url('x26zuy4h5ul8.kintone.com', true), 'PUT', {

        app: ITEMS_APP_ID,
        updateKey: {
          field: 'item_code',
          value: itemCode
        },
        record: {
          stock: {
            value: updatedStock
          }
        }
      }).then(function(response) {
        console.log(response);
        return event;
      }).catch(function(error) {
        console.log(error);
        var message = 'Error Occurred';
        event.error = event.error ? event.error + message : message;
        return event;
      });
    };
  
    kintone.events.on([
      'app.record.create.submit',
      'app.record.edit.submit',
      'app.record.index.edit.submit',
    ], handler);  
})();