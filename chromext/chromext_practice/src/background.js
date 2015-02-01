/**
 * Created by j1mw3i on 30/01/15.
 */
chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
        console.log('Received msg from devtools page');
        var response;
        if (msg.xpath.length == 0) {
            response = {correct: false, message: 'XPath expression is empty, please input first.'};
        } else {
            response = {correct: true, xpath: msg.xpath};
        }
        port.postMessage(response);
    });
});