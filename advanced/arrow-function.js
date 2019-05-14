const people = [{
    name: 'Kama',
    age: 29
},
{
    name: 'Ulya',
    age: 32
},
{
    name: 'Samra',
    age: 26
}]

const under30 = people.filter(p => p.age < 30)
console.log(under30)