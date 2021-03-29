'use strict';

function dragAndDrop() {
  const fill = document.querySelector('.fill');
  const empties = document.querySelectorAll('.empty');

  function dragStart() {
    setTimeout(() => this.classList.add('hidden'), 0);
  }

  function dragEnd() {
    this.classList.remove('hidden');
  }

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add('enter');
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragLeave() {
    this.classList.remove('enter');
  }

  function drop() {
    fill.parentNode.innerHTML = '';
    this.classList.remove('enter');
    this.appendChild(fill);
  }

  fill.addEventListener('dragstart', dragStart);
  fill.addEventListener('dragend', dragEnd);

  empties.forEach(empty => {
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', drop);
  });
}

dragAndDrop();
