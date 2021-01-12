function multiplicacioMedianteSumasSucesivas(pNum1, pNum2) {
    total = 0;
    for (let i = 0; i < pNum2; i++) {
        total += pNum1;
    }
    return total;
} 