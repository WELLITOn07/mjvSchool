// Melhore esse tipo utilizando uma união discriminada de tipos mais específicos OK
export type CarEletric = {
    type: 'eletric';
    automatic?: boolean;
    battery: number;
};
export type CarGasoline = {
    type: 'gasoline';
    tank: number;  
};

type Car = CarEletric | CarGasoline;

function calculateAutonomy(car: Car) {
   const autonomy_fuel = 10;
    if (car.type === 'gasoline') {
        return car.tank * autonomy_fuel;
    }
    return null;
};

