import getRandomWord from "./randomWords";

export default class LoopData {
    
    constructor(name = getRandomWord(), type = "input", knot) {
        this.name = name;
        this.type = type;
        this.knot = knot;
    }

    // --- Methods ---

    connect(knot)  {
        this.knot = knot;
        this.knot.x
    }
}