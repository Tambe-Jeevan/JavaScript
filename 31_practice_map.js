// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);
/* Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
} */

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
/* IN :- India
USA :- United States of America
Fr :- France*/