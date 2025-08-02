const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// myObject.game3 = 'ff';

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}