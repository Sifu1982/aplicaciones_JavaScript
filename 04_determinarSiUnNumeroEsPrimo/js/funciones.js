function numeroPrimo(pNum) {
    for (let i = 2; i < pNum; i++) {
        if (pNum % i == 0) return false
    }
};