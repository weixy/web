/**
 * Created by j1mw3i on 28/01/15.
 */

function init() {
    var queryBtn = document.querySelector('#query-button');
    queryBtn.addEventListener('click', onQueryBtnClick);
}

function onQueryBtnClick() {
    port.postMessage({xpath: "Test"});
}