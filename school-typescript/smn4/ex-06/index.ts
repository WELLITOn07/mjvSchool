//DESCRIMINATE UNIONS
type Square = {
    type: 'square';
    width: number;
};

type Circle = {
    type: 'circle';
    radius: number
};

type Shape = Square | Circle;

function calculateArea (shape: Shape) {
    switch (shape.type) {
        case 'circle': {
            return shape.radius * Math.PI * 2
        }
        case 'square': {
            return shape.width * shape.width
        }
    }
};