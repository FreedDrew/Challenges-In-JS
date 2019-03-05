let SequenceSum = (function() {
    function SequenceSum() {}

    SequenceSum.showSequence = function(count) {
        let sum = 0;
        let str = "";
        if (count === 0) {
            return "0=0";
        } else if (count < 0) {
            return count + "<0";
        } else {
            for (let i = 0; i < count; i++) {
                sum += i;
                str += i + "+";
            }
            sum += count;
            str += count + " = " + sum;
            return str;
        }
    };

    return SequenceSum;

})();