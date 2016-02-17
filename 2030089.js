/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


///WIP

importPackage(Packages.net.sf.odinms.client);

var status;
var necklace = 4031058;
var crystal = 4005004;
var quest = 100102;

function start() {
    status = -1;
    action(1, 0, 0);
}

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
        cm.dispose();
    } else {
        status--;
        cm.dispose();
    }
    if (status === 0) {
        if (cm.haveItem(crystal, 1) || !cm.getQuestStatus(quest).equals(MapleQuestStatus.Status.STARTED)) {
            cm.sendNext("... ... ... If you want to test out your wisdom, then you'll have to offer #bDark Crystal#k as the sacrifice ... Are you ready to offer #bDark crystal#k and answer a set of questions from me?");
            cm.dipose();
        }
    } else if (status === 1) {
        if (cm.haveItem(crystal, 1)) {
            cm.sendNext("Alright ... I'll be testing out your wisdom here. Ansere all the questions correctly, and you will pass the test. BUT, if you even lie to me once, then you'll have to start over again... ok, here we go.");
            cm.dispose();
        }
        if (status === 2) {
            cm.sendSimple("Here's the 1st question. Which of these pairings of sickness/results resulted from a monsters attack does NOT match ...? #L0#State of darkness - decrease in accuracy #l \r\n #L1#state of being cursed - decrease in EXP earned#1\r\n #L2#State of weakness - decrease in speed#l\r\n #L3#State of being sealed up - unable to use skills#l\r\n #L4#State of being poiisoned - slow decrease in HP#l");
        } else if (status === 3) {
            if (slection === 0) {
                cm.sendOk("You are dead wrong, bye.");
                cm.dispose();
            } else if (selection === 1) {
                cm.sendOk("You are dead wrong, bye.");
                cm.dispose();
            } else if (selection === 2) { 
                cm.sendOk("Bye.");
                cm.dispose();
            } else if (selection === 3) {
                cm.sendOk("Bye.");
                cm.dispose();
            } else if (selection === 4) {
                cm.sendOk("Cool.");
                cm.dispose();
            }
            }
        }
}