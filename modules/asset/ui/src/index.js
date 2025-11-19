import 'bootstrap';
export default () => {
  // Your own project level JS may go here
  // eslint-disable-next-line no-console
  console.log('Hello World');

};

    const myCollapseElement = document.getElementById('collapseOne');
    const bsCollapse = new bootstrap.Collapse(myCollapseElement, { toggle: false }); // toggle: false prevents automatic toggling on creation
    bsCollapse.toggle();