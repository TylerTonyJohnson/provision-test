import LoopData from "./LoopData";

export default class NodeData {

    constructor(x=100, y=100) {
        this.name = "Tootles";
        this.x = x;
        this.y = y;
        this.loops = [];
        this.contents = "CONTENTS";

        // this.addLoop();
        // this.addLoop("Tester","input");
        // this.addLoop("Testest","output");
    }

    addLoop(name, type, knot) {
        const newLoop = new LoopData(name, type, knot);
        this.loops.push(newLoop);
    }

}
