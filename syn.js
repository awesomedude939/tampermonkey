// ==UserScript==
// @name         Fix Synapse X Website
// @namespace    https://x.synapse.to/
// @version      0.1
// @description  Remove useless
// @author       ilik
// @match        https://x.synapse.to/
// @icon         https://external-content.duckduckgo.com/ip3/x.synapse.to.ico
// @grant        none
// @updateURL    https://raw.githubusercontent.com/awesomedude939/tampermonkey/main/syn.js
// @downloadURL  https://raw.githubusercontent.com/awesomedude939/tampermonkey/main/syn.js
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById("site-fundraising").remove()
})();
