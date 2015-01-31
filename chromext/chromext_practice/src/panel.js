/**
 * Created by j1mw3i on 28/01/15.
 */

function init() {
    //console.log("panel loaded ...")
    var queryBtn = document.querySelector('#query-button');
    queryBtn.addEventListener('click', onQueryBtnClick);
}

function updateHistory(history) {
    var historyUl = document.querySelector('#history-list');
    var html = '<li class="xpath-item"><label class="xpath-item-tag tag hit">4</label>' + history +'</li>';
    historyUl.innerHTML.appendChild(document.createElement(html));
}

function render(message) {
    console.log(message);
    var msgDiv = document.querySelector("#message");
    msgDiv.innerHTML = "received message from background.";
}

function onQueryBtnClick() {
    console.log("Search button clicked ...");
    port.postMessage({xpath: "//div"});
}

onload = function() {
    init()
};