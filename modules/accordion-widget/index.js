export default {
extend: '@apostrophecms/widget-type',
  options: {
    label: 'Edit Accordion',
  },
  fields: {
    add: {
      accordionItems: {
        type: 'array',
        label: 'Accordion Item',
        fields: { 
          add: {
            // Section content
            title: {
              type: 'string',
              label: 'Accordion Title',
              required: true,
              options: {
                textarea: true
              }
            },
            content: {
              type: 'area',
              label: 'Accordion Content',
              options: {
                widgets: {
                  '@apostrophecms/rich-text': {},
                  '@apostrophecms/html': {},
                },
              }
            }
          }
        }
      }
    },
  },
};