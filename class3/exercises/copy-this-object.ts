/* copy "original" into a completly new object (no references attached) */
export const original: any = {
    someNumber: 1,
    someList: [1, 2, 3],
    objectList: [
        { id: 1 }
    ]
}

export function copySomeObject(objectToCopy: any): any {
    let copy: any = { ...original };
    copy.someList = [...copy.someList];
    copy.objectList = copy.objectList.map(item => { return { ...item } });
    
    /*
    let a: any = { ...objectToCopy };
    a.someList = [...a.someList];
    a.objectList = [{ ...a.objectList[0] }];
    */
    return copy;
}