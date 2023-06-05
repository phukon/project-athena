export default {
    title: 'Eventpost',
    name: 'eventpost',
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
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
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
        title: 'Body', 
        name: 'body',
        type: 'array', 
        of: [
            {type: 'block'},
            {
                type: 'image',
                fields: [
                  {
                    type: 'text',
                    name: 'alt',
                    title: 'Alternative text',
                    description: `A short description about the image.`,
                    options: {
                      isHighlighted: true
                    }
                  }
                ]
              }
        ]
      }
    ]
  }