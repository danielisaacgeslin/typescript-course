/* union types */
let people: string | string[]; // either string or string[]. Can only access methods/properties both types have
let morePeople: string & string[]; //both string and string[]. Can access all methods/properties both types have

/* type aliases */
type stock = number;
type people = string | string[];
