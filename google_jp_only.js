// ==UserScript==
// @name         JP Only Google
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically append &tbs=lr:lang_1ja&lr=lang_ja to Google search results.
// @author       Uchagi
// @include      *://www.google.*/search*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const url = new URL(window.location.href);

    if (!url.searchParams.has("tbs") || !url.searchParams.has("lr")) {
        url.searchParams.set("tbs", "lr:lang_1ja");
        url.searchParams.set("lr", "lang_ja");
        window.location.replace(url.toString()); 
    }
})();