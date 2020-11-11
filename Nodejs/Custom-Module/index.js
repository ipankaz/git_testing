console.log('This is index');

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length
}

module.exports = {
    avg:average,
    name:'pankaj',
    age:21
}