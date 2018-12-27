var Parse = require('./parseSDK');

const UTILS = {};

UTILS.callAPI = function (apiName, paramsData) {
    return Parse.Cloud.run(apiName, paramsData);
}

UTILS.ParseLogIn = function (key) {
    return Parse.User.logIn(key, '1').then((user) => {
        const userJSON = user.toJSON();

        return Promise.resolve(userJSON);
    }).catch((error) => {
        console.log(error);
        return Promise.reject(error);
    });
}

UTILS.ParseLogOut = function () {
    return Parse.User.logOut();
}

UTILS.ParseUserBecome = function(ssTk) {
    return Parse.User.become(ssTk);
}

UTILS.GetCurrentUser = function () {
    return Parse.User.current() ? Parse.User.current().toJSON() : null;
}

UTILS.GetLiveCurrentUser = function () {
    const currUser = Parse.User.current();
    return currUser.fetch().then((res)=>{
        return res.toJSON();
    }, ()=>{
        return null;
    })
    
}

module.exports = UTILS;