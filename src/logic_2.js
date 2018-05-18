var isChanged = false;

function onChange() {
    var all = document.body.querySelectorAll('*')
    all.forEach(node => {
        if (node.innerHTML)
        {
            node.innerHTML = !isChanged ? node.innerHTML.replace(/reposi/gi, 'lior') : node.innerHTML.replace(/lior/gi, 'reposi')

        }

    })
    isChanged = !isChanged;
}