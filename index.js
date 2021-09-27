function addingEventListener() {
    const input = document.getElementById('input');
    function clickArlert() {
        alert('I was called!');
    }
    input.addEventListener('click',clickArlert);
}

addingEventListener(); clickArlert;

// function addEventListener(){
//     const input = document.getElementById('input');

//     function clickAlert() {
//    alert('I was clicked!');
//   }

//   input.addEventListener('click', clickAlert);
// }

// addEventListener(); clickAlert;