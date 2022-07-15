"use strict";
function identifiable(base) {
    return class extends base {
        constructor() {
            super(...arguments);
            this.id = Math.round(Math.random() * 9999999);
        }
    };
}
;
const identifiableDate = identifiable(Date);
const identifiableDateOK = new identifiableDate();
identifiableDateOK.getFullYear();
