type damage  = number;

interface IZWarrior {
    readonly id: number | string;
    name: string;
    power: number;
    skills: string[];
    attack:(attackType: string)=> damage;
}