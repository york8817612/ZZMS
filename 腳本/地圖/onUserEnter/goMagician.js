/*
 Author: Pungin
 */
var status = -1;

function start() {
    ms.lockUI(true);
    ms.disableOthers(true);
    ms.showWZEffect("Effect/Direction3.img/magician/Scene" + (ms.isQuestFinished(32214) ? "0" : "1"));
    ms.dispose();
}