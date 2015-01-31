/**
 * Created by j1mw3i on 30/01/15.
 */
chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
        console.log('Received msg from devtools page');
        port.postMessage({syntax: "correct", xpath: msg.xpath});
    });
});