const container = document.querySelector('#target')
const viewer = new Kaleidoscope.Image({
  source: 'example.jpg', containerId: '#target'
})

const {height, width} = container.getBoundingClientRect();

viewer.render({
  height,
  width
})
viewer.setSize({
  height,
  width
})

window.addEventListener('resize', () => {
  const {height, width} = container.getBoundingClientRect();
  viewer.setSize({
    height,
    width
  })
})