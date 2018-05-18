// var all= document.body.querySelectorAll('*')

var ele=document.getElementById('slider')
ele.addEventListener('click',onToggle)

function onToggle() {
    chrome.tabs.executeScript({
        code:'onChange()'
    },_=>{
        let e = chrome.runtime.lastError;
    if(e !== undefined){
        console.log( _, e);
    }
})
}

