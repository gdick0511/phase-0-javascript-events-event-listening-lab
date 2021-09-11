function addingEventListener() {
    const input = document.getElementById('input');
    function clickArlert() {
        alert('I was called!');
    }
    input.addEventListener('click',clickArlert);
}

addingEventListener(); clickArlert;