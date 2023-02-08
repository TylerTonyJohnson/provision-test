export default class LoopData {
    
    constructor(name = "Hide Ho", type = "input", knot) {
        this.name = name;
        this.type = type;
        this.knot = knot;
    }

    // --- Methods ---

    connect(knot)  {
        this.knot = knot;
    }
}