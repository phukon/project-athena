export default {
    title: 'blog',
    name: 'blog',
    type: 'document',
    fields: [
    {
        name: 'title',
        title: 'title',
        type: 'string'
    },
    {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
    },
    {
        name: 'roles',
        title: 'roles',
        type: 'string'
    },
    {
        name: 'college',
        title: 'college',
        type: 'string'
    },
    {
        name: 'description',
        title: 'Description',
        type: 'text'
    }
    ]
  }