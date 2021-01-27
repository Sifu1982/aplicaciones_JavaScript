function cero(v1, v2, v3) {
    if (v1 == 0 && v2 == 0 && v3 == 0) return true;
};

function positivas(v1, v2, v3) {
    if (v1 > 0 && v2 > 0 && v3 > 0) return true;
};

function mismoSigno(v1, v2, v3) {
    if (v1 > 0 && v2 > 0 && v3 > 0 || v1 < 0 && v2 < 0 && v3 < 0) return true;
};

function todosSusValoresDistintos(v1, v2, v3) {
    if (v1 != v2 && v1 != v3 && v2 != v3) return true;
};

function dosValoresCoinciden(v1, v2, v3) {
    if (v1 == v2 || v1 == v3 || v2 == v3) return true;
};

function maximoDosValoresCoinciden(v1, v2, v3) {
    if ((v1 == v2 && v1 != v3) || (v1 == v3 && v1 != v2) || (v2 == v3 && v1 != v2)) return true;
};

function v2ComprendidoEntrev1Yv3(v1, v2, v3) {
    if (((v1 > v2 && v2 > v3) || (v3 > v2 && v2 > v1))) return true
};