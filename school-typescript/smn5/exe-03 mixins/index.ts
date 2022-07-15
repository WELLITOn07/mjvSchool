//mixins
type Constructor <T = {}> = new (...args: any[]) => T;


function identifiable <Tbase extends Constructor>(base: Tbase) {
    return class extends base {
        id = Math.round(Math.random() * 9999999)
    }
};

const identifiableDate = identifiable(Date)

const identifiableDateOK = new identifiableDate()
identifiableDateOK.getFullYear()
