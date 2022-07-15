//interssection
interface Point {
    x: number;
    y: number;
};

interface Point {
    z: number;
};

type Named = {
    name: string;
};


//JUNTANDO NAMED E POINT
type NamedPoint = Point & Named;
const namedPoint: NamedPoint = {
    name: "",
    x: 13,
    y: 20,
    z: 30
};
