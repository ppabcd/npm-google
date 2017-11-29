"use strict"

module.exports = function google(sentence, callback){
    return new Promise((resolve, reject) => {
        if (sentence === "Hello") {
            reject('You Say Hello');
            return callback('Hello World');
        }
    });
}
