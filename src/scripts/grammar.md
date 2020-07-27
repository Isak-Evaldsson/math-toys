The grammar can be described in the following way:
expr ::= term {("+"|"-") term}
term ::= factor {("*"|"/") factor}
factor ::= number | "(" expr ")"