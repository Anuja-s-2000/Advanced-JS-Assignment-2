class QueenAttack {
	constructor(p1, p2) {
		if (p1 >= 0 && p1 <= 7 && p2 >= 0 && p2 <= 7) {
			this.p1 = p1
			this.p2 = p2
		}
		else {
			throw 'position should have value between 0 and 7'
		}
	}
	canAttack(queen) {
		if (this.p1 == queen.p1) return true;
		if (this.p2 == queen.p2) return true;
		if (Math.abs(this.p1 - queen.p1) == Math.abs(this.p2 - queen.p2)) return true;
		return false;
	}
}

try {
	let q1 = new QueenAttack(1,1)
	let q2 = new QueenAttack(5,7)
	console.log("Queen 1 position:(",q1.p1,",",q1.p2,")")
	console.log("Queen 2 position:(",q2.p1,",",q2.p2,")")
	if (q1.canAttack(q2))
		console.log("Queens can attack: Yes");
	else
		console.log("Queens can attack: No");
}
catch (err) {
	console.log(err)
}