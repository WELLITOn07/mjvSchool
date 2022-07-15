"use strict";
;
let a = [1,'..'];
a.map((item) => {
    item.age = 2
    item.name = 'oi'
    console.log('--', item.age);
    return item;
});