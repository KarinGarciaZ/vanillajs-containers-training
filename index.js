let boxes = [];
const container = document.querySelector('.container');
const collapseButton = document.querySelector('.btn-collapse');
const randomButton = document.querySelector('.btn-random');
const generateButton = document.querySelector('.btn-generate');

generateButton.onclick = e => {
  generateBoxes();
  loadBoxesToDom();
}

collapseButton.onclick = e => {
  container.classList.contains('boxes-left') ?
    container.classList.remove('boxes-left') :
    container.classList.add('boxes-left');
}

randomButton.onclick = e => {
  orderBoxes();
  loadBoxesToDom();
}

const generateBoxes = () => {
  boxes = [];
  const randomNumberOfBoxes = Math.ceil(Math.random() * 20);

  for (let i = 0; i < randomNumberOfBoxes; i++) {
    boxes.push(`Box ${i + 1}`)
  }
}

const loadBoxesToDom = () => {
  container.innerHTML = "";

  boxes.forEach( box => {
    const div = document.createElement("div");
    div.className = "box";
    div.appendChild(document.createTextNode(box));
    container.appendChild(div);
  })
}

const orderBoxes = () => {
  let newOrder = [];

  for (let i = 0; i < boxes.length; i++) {
    if ( boxes.length - newOrder.length > 1 ) {
      newOrder.push(boxes[i]);
      newOrder.push(boxes[boxes.length - 1 - i]);
    } else if ( boxes.length - newOrder.length === 1 ) {
      newOrder.push(boxes[i]);
    } else {
      break;
    }
  }

  boxes = newOrder;
}

generateBoxes();
loadBoxesToDom();