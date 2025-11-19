export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Accordion'
  },
  // The widget type's field schema
  fields: {
    add: {
      // Section content
      accordionContent: {
        type: 'area',
        label: 'Accordion Content',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/html': {},
          },
        }
      },
    }
  }
};