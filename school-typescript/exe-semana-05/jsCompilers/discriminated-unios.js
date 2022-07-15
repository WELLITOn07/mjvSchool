"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateAutonomy(car) {
    const autonomy_fuel = 10;
    if (car.type === 'gasoline') {
        return car.tank * autonomy_fuel;
    }
    return null;
}
;
