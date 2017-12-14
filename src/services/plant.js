const plants = [
  {
    id: 0,
    name: 'Irene',
    image: 'https://images.unsplash.com/photo-1491147334573-44cbb4602074?auto=format&fit=crop&w=668&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
  },
  {
    id: 1,
    name: 'Lucy',
    image: 'https://images.unsplash.com/photo-1459664018906-085c36f472af?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
  },
]

export default {
  getAll: function () {
    return plants
  },
  getById: function (id) {
    var plant = plants.find(plant => {
      return plant.id == id
    })
    return plant
  },
}
