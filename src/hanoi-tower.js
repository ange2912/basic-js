module.exports = function calculateHanoi(disksNumber, turnsSpeed){
        let qt_turns = 2 ** disksNumber -1;
        let timeSec = qt_turns / (turnsSpeed / 3600);
        return {turns: qt_turns, seconds: timeSec}
}