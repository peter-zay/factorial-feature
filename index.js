const Calculate = {
    factorial: function(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * this.factorial(n - 1);
        }
    }
};
module.exports = Calculate;


