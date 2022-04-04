// import 'splitting/dist/splitting.css';
// import 'splitting/dist/splitting-cells.css';
 import Splitting from '../node_modules/splitting/dist/splitting';


console.clear();

Splitting({
  target: '.tiler',
  by: 'cells',
  rows: 3,
  columns: 3,
  image: true
}); //Image('.tiler-overlay', { rows: 3, cols: 3 });

