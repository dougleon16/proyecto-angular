const grid = document.querySelector('.grid__container'); 
let draggingImg = null;

grid.addEventListener('dragstart', event => { 
    if (event.target.tagName === 'IMG') { 
        draggingImg = event.target; 
        event.dataTransfer.setData('text/plain', event.target.alt);
         event.dataTransfer.effectAllowed = 'move'; 
         event.target.classList.add('dragging'); } });

grid.addEventListener('dragover', event => {
     event.preventDefault(); 
     if (event.target.tagName === 'IMG' && event.target !== draggingImg) { 
        const draggingImgIndex = [...event.target.parentNode.children].indexOf(draggingImg); 
        const targetImgIndex = [...event.target.parentNode.children].indexOf(event.target); 
        if (draggingImgIndex < targetImgIndex) { 
            event.target.parentNode.insertBefore(draggingImg, event.target.nextSibling); 
        } else { 
            event.target.parentNode.insertBefore(draggingImg, event.target); }
         } });

grid.addEventListener('dragend', event => {
     if (event.target.tagName === 'IMG') { 
        event.target.classList.remove('dragging'); draggingImg = null; }
     });