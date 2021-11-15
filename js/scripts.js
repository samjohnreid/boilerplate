const accordionItems = document.querySelectorAll('.accordion__item');

const toggleAccordion = (event) => {
    const item = event.currentTarget;

    const summary = item.children[0];
    const content = item.children[1];
    
    // Get start height of element
    const startHeight = `${summary.offsetHeight}px`;

    // Get the open height of the element
    item.open = true;
    const endHeight = `${content.offsetHeight}px`;

    console.log('startHeight', startHeight);
    console.log('endHeight', endHeight);

    if (item.open) {
        console.log('item is open!');
    } else {
        console.log('item is closed!');
    }
}

accordionItems.forEach((el) => {
    el.addEventListener('click', toggleAccordion);
});


// const startHeight = `${this.el.offsetHeight}px`;