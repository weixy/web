/**
 * Created by y981821 on 27/01/15.
 */

chrome.devtools.panels.create("Image Search",
    "ImageSearchIcon.png",
    "panel.html",
    function(panel) {
        var port = chrome.runtime.connect({name: "chromext_practice"});
        port.onMessage.addListener(function(msg) {
            console.log(msg);
        });

        panel.onShown.addListener(function lstn(win) {
            panel.onShown.removeListener(lstn);
            _window = win;
            _window.port = port;
        });
    }
);
