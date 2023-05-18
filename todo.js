const ibox = document.getElementById('i-box')
const list = document.getElementById('list-container')

addtask = () => {
    if (ibox.value == '') {
        alert('You must write something!')
    } else {
        let li = document.createElement('li')
        li.textContent = ibox.value
        list.appendChild(li);
        let span = document.createElement('span')
        span.textContent = "\u00d7"
        li.appendChild(span)
    }
    document.getElementById('i-box').value = ''
    save()
}

list.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        save()
    }
    else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
        save()
    }
}, false)

save = () => {
    localStorage.setItem('data', list.innerHTML)
}

show = () => {
    list.innerHTML = localStorage.getItem('data')
}
show()
