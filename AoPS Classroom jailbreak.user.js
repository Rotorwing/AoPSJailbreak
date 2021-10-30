// ==UserScript==
// @name         AoPS Classroom jailbreak
// @version      0.1
// @description  Allow acess to all JS variables.
// @author       You
// @match        https://artofproblemsolving.com/classroom/room/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at        document-start
// ==/UserScript==

(function() {
    'use strict';

    let clientKiller = document.createElement('SCRIPT')
    clientKiller.id = 'killer';
    clientKiller.innerText = "new MutationObserver((_, observer) => {const jqueryScriptTag = document.querySelector('title+script');if (jqueryScriptTag) {console.log('Found client script tag; now removing it!');jqueryScriptTag.src='http://192.168.0.46/files/student-client.js';observer.disconnect();}}).observe(document.documentElement, { childList: true, subtree: true });"
    document.head.prepend(clientKiller);

    let allowHTTP = document.createElement('meta');
    allowHTTP.httpEquiv="Content-Security-Policy";
    allowHTTP.content="upgrade-insecure-requests";
    document.head.prepend(allowHTTP);
})();

/*

// This is the userscript code, which runs at the beginning of pageload
                              // Say we wanted to prevent the loading of the jQuery script tag below:
                              new MutationObserver((_, observer) => {
                              const jqueryScriptTag = document.querySelector('title+script');
                              if (jqueryScriptTag) {
                                console.log('Found client script tag; now removing it!');
                                jqueryScriptTag.remove();
                                // We've done what we needed to do, no need for the MutationObserver anymore:
                                observer.disconnect();
                              }
                            }).observe(document.documentElement, { childList: true, subtree: true });
                              */