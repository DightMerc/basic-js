module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const year = 3600;
    const power = 2;
    const turns = Math.pow(power, disksNumber);
    const seconds = (Math.pow(power, disksNumber)) / (turnsSpeed / year);

    return {
        turns,
        seconds
    };

}