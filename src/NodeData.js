import LoopData from "./LoopData";
import getRandomWord from "./randomWords";

export default class NodeData {

    constructor(x=100, y=100) {
        this.name = getRandomWord();
        this.x = x;
        this.y = y;
        this.loops = [];
        this.contents = "CONTENTS";

        this.addLoop();
        this.addLoop();
        this.addLoop(getRandomWord(),"output");
    }

    addLoop(name, type, knot) {
        const newLoop = new LoopData(name, type, knot);
        this.loops.push(newLoop);
    }

    connect(knot) {
		this.loops[0].knot = knot;
		this.loops[0].knot.x = this.x;
		this.loops[0].knot.y = this.y;
	}

}
