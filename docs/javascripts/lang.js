function language_selector() {
    const regex = new RegExp(`${window.location.host}(/pt-br|/de|/es|/id)*`);
    const onlyCurrentLangRegex = /\/(en|pt-br|de|es|id)\//;

    // fetch current lang from local storage
    let currentLang = localStorage.getItem('lang');
    //console.log(currentLang)

    // changes language
    const languageLinks = document.getElementsByClassName('language-select-link');
    for (const link of languageLinks) {
        if (link instanceof HTMLAnchorElement) {
            if (link.hreflang !== 'en') {
                link.href = window.location.href.replace(regex, window.location.host + '/' + link.hreflang);
            } else {
                // if the language is english, don't append /en/ to url
                link.href = window.location.href.replace(regex, window.location.host);
            }
        }
    }

    // matches the language from the url into an array
    // ex: learnjapanese.moe/es/kanji/ will return ['/es/', 'es'];
    let currentUrlLang = onlyCurrentLangRegex.exec(window.location.href);
    //console.log(currentUrlLang)

    // only update local storage when language changes
    if (currentUrlLang && window.location.href.includes(currentUrlLang[0]) && currentLang !== currentUrlLang[1]) {
        localStorage.setItem('lang', currentUrlLang[1]);
    } else if (!currentUrlLang && window.location.href !== window.location.origin) {
        localStorage.setItem('lang', 'en');
    }

    // select all anchor labels inside the left navbar
    const leftNavAnchors = document.querySelectorAll('.md-nav.md-nav--primary a');
    // select specific top nav links + logo
    const topNavLogoLink = document.querySelector('.md-header__button.md-logo')
    const topNavDiscordLink = document.querySelector('a[href*="/join"]')
    const topNavDonateLink = document.querySelector('a[href*="/donate"]')
    // console.log(topNavLogoLink)


    // pushes all anchors into one array to iterate over
    const anchors = [...leftNavAnchors, topNavLogoLink, topNavDiscordLink, topNavDonateLink];

    for (const a of anchors) {
        if (a instanceof HTMLAnchorElement) {
            let modifiedUrl;
            let urlArray = a.href.split('/').filter((segment) => segment !== '');
            let currentAnchorSegment = `${urlArray[urlArray.length - 1]}`;
            if ((a.href == `${window.location.origin}/` || a.href == window.location.origin)) {
                if (currentLang !== 'en' && !a.href.includes(`/${currentLang}/`)) {
                    modifiedUrl = `${window.location.origin}/${currentLang}/`
                }
                else modifiedUrl = `${window.location.origin}/`
            }
            else if (currentLang !== 'en' && !a.href.includes(`/${currentLang}/`) && currentAnchorSegment !== currentLang && !a.href == `${window.location.origin}/`) {
                modifiedUrl = `${window.location.origin}/${currentLang}/${currentAnchorSegment}/`;
            }
            else if (currentLang !== 'en' && currentAnchorSegment !== currentLang) {
                modifiedUrl = `${window.location.origin}/${currentLang}/${currentAnchorSegment}/`;
            }

            else modifiedUrl = `${window.location.origin}/${currentAnchorSegment}/`;
            a.href = modifiedUrl
        }
    }
}

const observer = new MutationObserver(function (mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList' || mutation.type === 'subtree') {
            language_selector();
        }
    }
});

const observerConfig = { childList: true, subtree: true };

document$.subscribe(() => {
    observer.observe(document.documentElement, observerConfig);
});
