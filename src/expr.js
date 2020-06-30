class Add {
    constructor(expr1, expr2) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }

    value() {
        return this.expr1.value() + this.exper2.value()
    }
}
class Sub {
    constructor(expr1, expr2) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }

    value() {
        return this.expr1.value() - this.exper2.value()
    }
}
class Mul {
    constructor(expr1, expr2) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }

    value() {
        return this.expr1.value() * this.exper2.value()
    }
}

class Div {
    constructor(expr1, expr2) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }

    value() {
        return this.expr1.value() / this.exper2.value()
    }
}

class Num{
    constructor(val) {
        this.val = val
    }

    value() {
        return this.val;
    }
}