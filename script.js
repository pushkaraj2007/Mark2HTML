const copyBtn = document.getElementById('copy-btn');
const markdownInput = document.getElementById('markdown');
const htmlOutput = document.getElementById('html-output');
const livePreview = document.getElementById('live-preview');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const downloadBtn = document.getElementById('download-btn');

function markdownToHtml(markdown) {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(markdown);
    return html;
}

markdownInput.addEventListener('input', () => {
    const markdown = markdownInput.value;
    const htmlCode = markdownToHtml(markdown);
    htmlOutput.innerText = htmlCode;
    livePreview.innerHTML = htmlCode;
});

copyBtn.onclick = () => {
    navigator.clipboard.writeText(htmlOutput.innerText);

    copyBtn.innerText = 'Copied!'

    setTimeout(() => {
        copyBtn.innerText = 'Copy code'
    }, 2000);
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

downloadBtn.addEventListener('click', () => {
    const htmlCode = htmlOutput.innerText;
    const blob = new Blob([htmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'output.html';
    a.click();
    URL.revokeObjectURL(url);
});
