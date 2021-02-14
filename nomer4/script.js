let data = {
    id: 1,
    name: 'Leane Graham',
    username: 'Bret',
    email: 'sincere@april.biz',
    address:
    {
        street: 'Kulas, Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
}

// Spread Operator
let newData = {
    ...data,
    name:'Abu Dzar Al-Ghifari',
    username:'abudzr',
    email:'abudzaralghifari8@gmail.com'
    
}


// console.log(data);
console.log(newData);

// destructing : mengambil data street dan city
const {street,city} = data.address

console.log('======================');
console.log(street);
console.log(city);