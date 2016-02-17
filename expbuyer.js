/* EXP Buyer
NPC: Random/Any

Author: Remi/KingJoker

 */

var status;

function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		else if (status == 1) {
			if (selection == 1) {
				if (cm.getMeso() >= 100000000) { //This is how much meso they need
					cm.gainMeso(-100000000);
					cm.gainExp(100000000); //This is how much EXP you get
					cm.dispose();
				} else {
					cm.sendOk("You don't have enough Mesos");
					cm.dispose();
				}
			} else if (selection == 2) {
				if (cm.getMeso() >= 500000000) { //This is how much meso they need
					cm.gainMeso(-500000000);
					cm.gainExp(500000000); //This is how much EXP you get
					cm.dispose();
				} else {
					cm.sendOk("You don't have enough Mesos");
					cm.dispose();
				}
			} else if (selection == 3) {
				if (cm.haveItem(4000313, 1)) {
					cm.gainItem(4000313, -1);
					cm.gainExp(999999999); //This is how much EXP you get
					cm.dispose();
				} else {
					cm.sendOk("You don't have enough Mesos");
					cm.dispose();
				}
			}
		} else {
			cm.dispose();
		}
	}
}