const getFibonacci = (index) => {
    index = parseInt(index, 10);
    if (!index)
        return 0

    let a = 0, b = 1;
    let temp
  
    for (let i = 1; i < index; i++) {
        temp = a + b
        a = b
        b = temp
    }

    return b;
}

module.exports = getFibonacci