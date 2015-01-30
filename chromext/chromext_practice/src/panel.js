/**
 * Created by j1mw3i on 28/01/15.
 */

function init() {
    //console.log("panel loaded ...")
    var queryBtn = document.querySelector('#query-button');
    queryBtn.addEventListener('click', onQueryBtnClick);
}

function onQueryBtnClick() {
    //console.log("Search button clicked ...");
    var port = chrome.runtime.connect({name: "imageSearch"});
    port.postMessage({xpath: "Test"});
}