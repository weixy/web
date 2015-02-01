/**
 * Created by j1mw3i on 27/01/15.
 */

chrome.devtools.panels.create("XPath Helper", "icons/icon.png", "panel.html", function(panel) {
        var _window;
        var data = [];

        var port = chrome.runtime.connect({name: "xpathHelper"});
        port.onMessage.addListener(function(resp) {
            if (_window) {
                _window.render(resp);
            } else {
                data.push(resp);
            }
        });

        panel.onShown.addListener(function tmp(win) {
            panel.onShown.removeListener(tmp);
            _window = win;
            _window.port = port;
        });
    }
);
