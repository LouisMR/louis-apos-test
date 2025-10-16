export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Section'
  },
  // The widget type's field schema
  fields: {
    add: {
      // Section content
      sectionContent: {
        type: 'area',
        label: 'Section Content',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            '@apostrophecms/video': {},
            '@apostrophecms/html': {},
            'two-column': {},
            'accordion': {},
          },
        }
      },
        backgroundColor: {
        type: 'color',
        label: 'Background Color',
        help: 'Select a background color for this widget.',
        // Optional: Set a default value
        def: '#ffffff'
      },
      // backgroundImage: {
      //   type: 'relationship',
      //   withType: '@apostrophecms/image',
      //   label: 'Background Image',
      //   max: 1 // Only allow one image
      // }
    }
  }
};