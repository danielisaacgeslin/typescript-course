/* enums */
enum Direction {
    Up = 1, //default is 0, here is moved to 1
    Down, //2
    Left, //3
    Right //4, normaly would be 3 but the first value was 1 and not 0
}

/* extending an enum */
enum Direction {
    //Up, //invalid
    Center = 5
}

Direction.Down; // 2
Direction[Direction.Down]; //Down

/* const enum */

const enum Enum {
    A = 1,
    B = 2,
    C = A + B,
    D
}

Enum.A; //1 /* A */;
Enum.A + Enum.B; // 1 /* A */ + 2 /* B */;
Enum.C; //3 /* C */;
Enum.D; // 4 /* D */;