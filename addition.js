document.addEventListener("DOMContentLoaded", () => {

    let opacitySettings = [localStorage.getItem('opacitySettings') ?? '1 , 0.1'];

    function getStyle() {
        let [text, canvas] = opacitySettings[0].split(',');
        return `
          .textLayer > span {
            color: black;
          }
          .textLayer{
              opacity: ${text};
          }
          .canvasWrapper{
              opacity: ${canvas};
          } 
      
          #changeAdditionStyle.toolbarButton::before {
              content: url(images/toolbarButton-search.png);
          }
          #toggleAdditionStyle.toolbarButton::before {
              content: url(images/secondaryToolbarButton-rotateCcw.png);
          }
        `
    }

    document.head.insertAdjacentHTML('beforeEnd', `
        <style id=additionStyle>
            ${getStyle()}
        </style>
    `);

    document.querySelector("#viewAttachments").insertAdjacentHTML('afterEnd', `
        <button id="changeAdditionStyle" class="toolbarButton" title="Change Addition Style" tabindex="5">
            <span>Addition Style</span>
        </button>

        <button id="toggleAdditionStyle" class="toolbarButton" title="Toggle Addition Style" tabindex="6">
            <span>Addition Style</span>
        </button>
    `);

    document.querySelector("#changeAdditionStyle").onclick = function (event) {
        let inputStr = prompt('opacity: text,image', opacitySettings[0]);
        if (!inputStr) {
            return
        }
        opacitySettings[0] = inputStr;
        localStorage.setItem('opacitySettings', opacitySettings[0]);
        document.querySelector("#additionStyle").innerHTML = getStyle();
    };

    let oldSettings = ['1 , 0.1'];
    document.querySelector("#toggleAdditionStyle").onclick = function (event) {
        if (opacitySettings[0] !== '0 , 1') {
            oldSettings[0] = opacitySettings[0];
            opacitySettings[0] = '0 , 1';
        } else {
            opacitySettings[0] = oldSettings[0];
        }
        document.querySelector("#additionStyle").innerHTML = getStyle();
    };

    function webViewerOpenFileViaURL(file) {
        if (file && file.lastIndexOf("file:", 0) === 0) {
            PDFViewerApplication.setTitleUsingUrl(file);
            const xhr = new XMLHttpRequest();

            xhr.onload = function () {
                PDFViewerApplication.open(new Uint8Array(xhr.response));
            };

            xhr.open("GET", file);
            xhr.responseType = "arraybuffer";
            xhr.send();
            return;
        }

        if (file) {
            PDFViewerApplication.open(file);
        }
    };

    function processSearch() {
        var search = window.location.search
        var smap = {}
        if (search) {
            search = search.slice(1).split('&')
            search.forEach(function (v) {
                var vs = v.split('=')
                // .map(function(u){return decodeURIComponent(u)});
                if (vs.length == 1) { smap[''] = vs[0]; smap[vs[0]] = ''; }
                else smap[vs[0]] = vs[1];
            });
        }
        if (smap['open']) {
            webViewerOpenFileViaURL(smap['open']);
        }
    }

    processSearch();


});