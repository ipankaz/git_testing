const AdjName = [
    'pankaj',
    'ankush',
    'shilpa',
    'sahil',
    'shweta',
    'hunny',
    'princy',
    'mohit',
    'rohit',
    'rashmi',
    'harshit',
    'bhavna',
    'preeti',
    'ranjhana',
    'akshit',
    'ramesh'
]

const AdjObj = [
    'bed',
    'chair',
    'pillow',
    'car',
    'belt',
    'laptop',
    'shirt',
    'deo',
    'perfume',
    'mobile',
    'gadget',
    'headphone',
    'blanket',
    'naruto',
    'disk'
]

function RandomUsernameGenerator(){
return `${AdjName[Math.floor(Math.random()*15)]}.${AdjObj[Math.floor(Math.random()*15)]}${Math.floor(Math.random()*100)}`
}

module.exports = {
    RandomUsernameGenerator
}

