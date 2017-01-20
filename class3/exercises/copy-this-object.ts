/* copy "original" into a completly new object (no references attached) */
const original: any = {
    someNumber: 1,
    someList: [1, 2, 3],
    objectList: [{ id: 1 }]
}
// answer to the right -->                                                                                                                  //let copy: any = { ...original };
// answer to the right -->                                                                                                                  //copy.someList = [...copy.someList];
// answer to the right -->                                                                                                                  //copy.objectList = copy.objectList.map(item => { return { ...item } });
