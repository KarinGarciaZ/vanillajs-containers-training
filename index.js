const boxes = [];
const container = document.querySelector('.container');

const randomNumberOfBoxes = Math.random() * 19 + 1;

for (let i = 0; i < randomNumberOfBoxes; i++) {
  boxes.push(`
    <div class="box">Box ${i + 1}</div>
  `)
}

container.innerHTML = boxes.join(" ");
