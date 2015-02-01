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
    var exist_history = historyUl.innerHTML;
    historyUl.innerHTML = html + exist_history;
}

function render(resp) {
    //console.log(resp);
    var msgDiv = document.querySelector("#message");
    if (resp.correct) {
        msgDiv.innerHTML = "Please input xpath expression:";
        updateHistory(resp.xpath);
    } else {
        msgDiv.innerHTML = resp.message;
    }
}

function onQueryBtnClick() {
    console.log("Search button clicked ...");
    var input = document.querySelector("#xpath-exp");
    port.postMessage({xpath: input.value});
}

onload = function() {
    init()
};