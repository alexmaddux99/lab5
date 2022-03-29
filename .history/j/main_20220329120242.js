/**
 * main.js
 * The init script for this HTML5 Video Application
 * This app is used as a demo for creating a video application utilizing the video API
 * built into HTML5. It is inspired by Bruce Lawson's example hack for creating video captions.
 * I added the ability to associate custom callbacks with moments in time of the video.
 *
 * 
 * @NOTE: Mozilla released Popcorn and Butter for doing the same thing right after I got this working.
 * @UPDATE: Popcorn and Butter are dead. This is now useful again. I've updated it to be vanilla JS with no dependencies. by Troy Bennett 7-2010 (updated 12-2021)
 */

import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", (e) => {

    var myCues = [
        { seconds: 28, callback: func1 },
        { seconds: 38, callback: func2 },
        { seconds: 52, callback: func3 },
        { seconds: 97, callback: func4 },
        { seconds: 57,  callback: func5 },
        { seconds: 75,  callback: func6 },
        { seconds: 88,  callback: func7 },

    ];

    cueTimer.setup("vid", myCues);

    const vid = document.querySelector("#vid");
    const selectList = document.querySelector("#video_select");

    selectList.addEventListener("change", (e) => {
        selectVideo(e, vid);
    });

});



//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks

function func1() {
    document.querySelector("#web").src =
        "https://www.dictionary.com/browse/coupon";
}

function func2() {
    document.querySelector("#web").src =
        "https://spoonuniversity.com/lifestyle/free-food-on-your-birthday-chain-restaurants-that-offer";
}

function func3() {
    
    document.querySelector("#web").src =
        "https://www.merriam-webster.com/dictionary/happy%20hour";
}

function func4() {
    document.querySelector("#web").src =
        "https://blog.nationwide.com/tips-for-planting-garden/";
}

function func5() {
    document.querySelector("#web").src =
        "https://www.allrecipes.com/article/best-grocery-store-free-samples/";
}

function func6() {
    document.querySelector("#web").src =
        "https://www.merriam-webster.com/dictionary/soup%20kitchen";
}

function func7() {
    document.querySelector("#web").src =
        "https://morningchores.com/edible-wild-plants/";
}