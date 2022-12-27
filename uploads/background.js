function copyMag() {

    var myhtml = document.documentElement;
    var magnetLink = [...document.querySelectorAll('a[href]')].find(e => e.href.includes('magnet'));
    var magVal = magnetLink.attributes.href.nodeValue;

    var temp = document.createElement("input");
    temp.value = magVal;
    temp.id = "magV"
    document.body.appendChild(temp);

    document.execCommand('copy', false, document.getElementById('magV').select());

    console.log(`MagnetLink: ${magVal}`)

    document.body.removeChild(temp);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Magnet link copied!',
      showConfirmButton: false,
      timer: 1250,
      timerProgressBar: true
    })

}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['inject.js']
  });
});

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: copyMag
    });
});