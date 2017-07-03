// Go to: http://unicode.org/emoji/charts/full-emoji-list.html

// Run:

let emojis = [];

Array.from(document.querySelectorAll("tr")).forEach(e => {
    let code = e.querySelector("td.code");
    if (code) {
        let unicode = code.querySelector("a").innerText.replace(/U\+/g, "\\");
        let td = e.querySelector("td.name").innerText.toLowerCase().split(":");
        let name = td[0].replace(/ /g, "-");
        let tone;
        if (td.length === 2)
            tone = td[1].replace(" skin tone", "").trim();

        emojis.push({name, tone, code: unicode});
    }
});

let css = "";
emojis.forEach(emoji => {
    css += "[emoji='" + emoji.name + "']" + (emoji.tone ? "[emoji-tone='" + emoji.tone + "']" : "") + ":after { content: '" + emoji.code + "'; }\n";
});
console.log(css);