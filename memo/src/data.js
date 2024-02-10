const cats = [{
    'id': 'YdAqiUkUoWA',
    'url': 'img/cats-1.jpg',
    'description': '',
  }, {
    'id': 'hX_hf2lPpUU',
    'url': 'img/cats-2.jpg',
    'description': '',
  }, {
    'id': 'w1JE5duY62M',
    'url': 'img/cats-3.jpg',
    'description': '',
  }, {
    'id': '3tYZjGSBwbk',
    'url': 'img/cats-4.jpg',
    'description': '',
  }, {
    'id': 'NoXUQ54pDac',
    'url': 'img/cats-5.jpg',
    'description': '',
  }, {
    'id': 'OZhYgZh0bAg',
    'url': 'img/cats-6.jpg',
    'description': '',
  }];
  
  const cars = [{
    'id': 'YdAqiUkUoWA',
    'url': 'img/cars-1.jpg',
    'description': '',
  }, {
    'id': 'hX_hf2lPpUU',
    'url': 'img/cars-2.jpg',
    'description': '',
  }, {
    'id': 'w1JE5duY62M',
    'url': 'img/cars-3.jpg',
    'description': '',
  }, {
    'id': '3tYZjGSBwbk',
    'url': 'img/cars-4.jpg',
    'description': '',
  }, {
    'id': 'NoXUQ54pDac',
    'url': 'img/cars-5.jpg',
    'description': '',
  }, {
    'id': 'OZhYgZh0bAg',
    'url': 'img/cars-6.jpg',
    'description': '',
  }];
  
  const flowers = [{
    'id': 'YdAqiUkUoWA',
    'url': 'img/flowers-1.jpg',
    'description': '',
  }, {
    'id': 'hX_hf2lPpUU',
    'url': 'img/flowers-2.jpg',
    'description': '',
  }, {
    'id': 'w1JE5duY62M',
    'url': 'img/flowers-3.jpg',
    'description': '',
  }, {
    'id': '3tYZjGSBwbk',
    'url': 'img/flowers-4.jpg',
    'description': '',
  }, {
    'id': 'NoXUQ54pDac',
    'url': 'img/flowers-5.jpg',
    'description': '',
  }, {
    'id': 'OZhYgZh0bAg',
    'url':  'img/flowers-6.jpg',
    'description': '',
  }];
  
  const imageCollection = {
    flowers, cats, cars,
  };
  
  export const results = [
    { name: 'Аня', stepsCount: 16 },
    { name: 'Вася', stepsCount: 12 },
    { name: 'Петя', stepsCount: 19 }
  ];
  
  
  
 export const getImages = (name) => {
    let originalImages;
    
    switch (name) {
      case 'cats': 
        originalImages = cats;
        break;
      case 'cars':
        originalImages = cars;
        break;
      case 'flowers':
        originalImages = flowers;
        break;
      default:
        return null;
    }
  
    
    const doubledImages = originalImages.flatMap(item => {
      const newItem = {...item}; 
      newItem.id = `${item.id}-unique`; 
      return [item, newItem];
    });
  
    doubledImages.sort((a, b) => Math.random() - 0.5)
    return doubledImages;
  };
  