class crewMember {
	constructor(position) {
		this.position = position;
		if (!this.currentShip) {
			this.currentShip = "Looking for a Rig";
		}
	}
	
	engageWrapDrive(){
		if(this.currentShip == "Looking for a Rig"){
			return 'Not found';
		}
		else {
			if(this.position === 'Pilot') {
				this.currentShip.warpDrive = 'engaged!';
			}
		}
	}
	
	setsInvisibility(){
		if(this.currentShip == "Looking for a Rig") {
			return 'Not found';
		}
		else {
			if(this.position === 'Defender') {
				this.currentShip.cloaked = true;
			}
		}
	}
	
	chargePhasers() {
		if(this.currentShip == "Looking for a Rig") {
			return 'Not found';
		}
		else {
			if(this.position === "Gunner") {
				this.currentShip.phasersCharge = 'charged';
			}
		}
	}
}
