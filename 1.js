/**
 * Below are three different implementations of a function
 * that tells you what is for lunch based on what day it is.
 */

const whatsForLunchIfThen = day => {
    const lowerDay = day.toLowerCase();
    let lunch;
    if (lowerDay === 'monday') {
        lunch = 'noodles';
    } else if (lowerDay=== 'tuesday') {
        lunch = 'broth';
    } else if (lowerDay === 'wednesday') {
        lunch = '6 minute egg';
    } else if (lowerDay === 'thursday') {
        lunch = 'pork';
    } else if (lowerDay === 'friday') {
        lunch = 'sriracha';
    } else if (lowerDay === 'saturday') {
        lunch = 'soy sauce';
    } else if (lowerDay === 'sunday') {
        lunch = 'communion wafers';
    } else {
        lunch === 'nothing because you submitted an invalid day';
    }

    return lunch;
};

const whatsForLunchSwitch = day => {
    const lowerDay = day.toLowerCase();
    let lunch;

    switch (lowerDay) {
        case 'monday':
            lunch = 'noddles';
            break;
        case 'tuesday':
            lunch = 'broth';
            break;
        case 'wednesday':
            lunch = 'chicken';
            break;
        case 'thursday':
            lunch = 'popcorn';
            break;
        case 'friday':
            lunch = 'tobasco';
            break;
        case 'saturday':
            lunch = 'noddles again';
            break;
        case 'sunday':
            lunch = 'still noddles';
            break;
        default:
            lunch = 'hamburger helper';
    }

    return lunch;
};

const whatsForLunchDictionary = day => {
    // I'm using a JS object as a 'dictionary' because all js objects are also dictionaries
    // A 'dictionary' in this context is a data structure that allows us to associate 'keys'
    // with 'values', or to make 'keys' 'point to' 'values', so that when we submit a key,
    // we can retrieve its value, if that key has been given a value; its also called a 
    // 'lookup table', which is the general purpose of it, or a 'hash map/hash table' which refers
    // to how it is implemented behind the scenes/in the code that makes javscript work.
    const dayLunches = {
        monday: 'noodles',
        tuesday: 'oats',
        wednesday: 'greens',
        thursday: 'ketchup',
        friday: 'money?',
        saturday: 'black eyed peas',
        'sunday': 'a meal that shows that you can also add keys to a dictionary/object using quotes',
        'leap day': 'and that doing so allows you to use spaces in the key',
    };

    const lowerDay = day.toLowerCase();
    const maybeLunch = dayLunches[lowerDay];

    if (!maybeLunch) {
        // If the day passed to this function doesnt exist in our dictionary,
        // maybeLunch will just be 'undefined', which evaluates to 'false' in 
        // an if/then statement
        return 'who knows?';
    } else {
        return maybeLunch;
    }
};

console.log(whatsForLunchIfThen('monday'));
console.log(whatsForLunchSwitch('tuesday'));
console.log(whatsForLunchDictionary('monday'));
