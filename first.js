/* var collection = {
    '2548': {
        'album': 'Slippery When Wet',
        'artist': 'bon jovi',
        'tracks': [
            'let it rock', 'you give love a bad name'
        ]
    },
    '2468': {
        'album': '1999',
        'artist': 'prince',
        'tracks': [
            'little red covette'
        ]
    },
    '1245': {
        'artist': "rahu",
        'tracks': []
    },

    '5439': {
        'album' : 'Abba Gold'
    }
};

var collectioncopy = collection;

function updateRecors(id, prop, value){
    if (value === ''){
        delete collection[id][prop];
    }

    else if(prop === 'tracks'){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }

    else{
        collection[id][prop] = value;
    }
    return collection;
}

console.log(collectioncopy);
console.log('\n');
updateRecors(2468, 'tracks', 'test');
console.log(updateRecors(5439, 'artist', 'abba')); 



 */


var contactList = {
    '1':{
        'name' : 'Asha',
        'age'  : 25,
        'hobby': ['music','reading book'],
        'status': 'single'
    },
    '2':{
        'name' : 'Rajib',
        'age'  : 27,
        'hobby': ['music', 'movie'],

    },

    '3':{
        'name' : 'Rakib',
        'age' : 18,
        'status': 'single'
    }
}

function updateRecors(id, prop, value){
    if(value == ''){
        delete contactList[id][prop];
    }
    else if(prop == "hobby"){
        contactList[id][prop] = contactList[id][prop] || [];
        contactList[id][prop].push(value);
    }
    else{
        contactList[id][prop] = value;
    }
    return contactList;
}

console.log(updateRecors(2, 'status', 'single'));
console.log(updateRecors(3, 'hobby', 'cricket'));
console.log(updateRecors(3, 'hobby', 'football'));
console.log(updateRecors(3, 'status', ''));
