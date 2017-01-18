interface IArtist {
    readonly id: number;
    name: string;
    nationality?: string;
    age?: number;
}

interface IVynilRecord {
    readonly id: number | string;
    readonly creationTimestamp: Date;
    name: string;
    stock: number;
    available: boolean;
    artists: IArtist[];
    rating?: number;
}

const vinylRecord_1: IVynilRecord = {
    id: 1,
    creationTimestamp: new Date(),
    name: 'some album',
    stock: 12345,
    available: true,
    artists: [
        { id: 1, name: 'Mr. Mercury', nationality: 'British' }
    ]
};

const vinylRecord_2: IVynilRecord = {
    id: 'a3s2d11q5w3dfgas1a3-4',
    creationTimestamp: new Date(),
    name: 'some other album',
    stock: null,
    available: false,
    artists: [
        { id: 2, name: 'Mr. Rose' },
        { id: 3, name: 'Mr. Slash?', age: 51 }
    ],
    rating: 5
};