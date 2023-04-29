const copyBtn = document.getElementById('copy-btn');
const markdownInput = document.getElementById('markdown');
const htmlOutput = document.getElementById('html-output');

function markdownToHtml(markdown) {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(markdown);
    return html;
}
markdownInput.addEventListener('input', () => {
    const markdown = markdownInput.value;
    const htmlCode = markdownToHtml(markdown);
    htmlOutput.innerText = htmlCode;
});

copyBtn.onclick = ()=>{
    navigator.clipboard.writeText(htmlOutput.innerText);

    copyBtn.innerText = 'Copied!'

    setTimeout(() => {
        copyBtn.innerText = 'Copy code'
    }, 2000);
}