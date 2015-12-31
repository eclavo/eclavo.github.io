 function each(collection, action) {
     if (Array.isArray(collection) || typeof collection === 'string'){
         for (var i = 0; i < collection.length; i++) {
             action(collection[i], i, collection);
         }
     } else {
         for(var key in collection) {
             action(collection[key], key, collection)
         }
     }
 }
 
 function map(collection, test) {
     var output = [];
 }