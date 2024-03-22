function language_selector() {
    let language_links = document.getElementsByClassName("language-select-link");
    for (let i = 0; i < language_links.length; i++) {
        let element = language_links[i];
        const regex = new RegExp(`${window.location.host}(/en|/pt-br|/de|/es|/id)*`);
        element.href = window.location.href.replace(regex, window.location.host + "/" + element.hreflang)
    }

    // let anchors = document.getElementsByTagName("a");
    // console.log(anchors)
    // for (let i = 0; i < anchors.length; i++) {
    //     let element = anchors[i];
    //     const regex = new RegExp(`${window.location.host}(/en|/pt-br|/de|/es|/id)*`);
    //     let base_link = window.location.href.match(regex)[0]
    //     element.href = window.location.href.replace(regex, base_link)
    // }
}

const observer = new MutationObserver(function(mutationsList, observer) {
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
