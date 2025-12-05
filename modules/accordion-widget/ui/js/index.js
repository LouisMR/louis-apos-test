const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item, index) => {
    const uniqueId = `collapse-${index}`; // Create a unique ID for each item

    // Assign ID to the collapsible content
    const collapseContent = item.querySelector('.accordion-collapse');
    collapseContent.id = uniqueId;

        // Update the button's data-bs-target and aria-controls
    const accordionButton = item.querySelector('.accordion-button');
    accordionButton.setAttribute('data-bs-target', `#${uniqueId}`);
    accordionButton.setAttribute('aria-controls', uniqueId);
});
