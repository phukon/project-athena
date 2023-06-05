export default {
    title: 'Eventpost',
    name: 'eventpost',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'title',
            type: 'string',
            description: 'Write a short title for the post. (Max 30 characters)',
            validation: Rule => Rule.max(30).warning('Shorter titles are usually better')
        },
        {
            name: 'description',
            title: 'Description',
            description: 'Write a short description for the post. (Max 100 characters)',
            type: 'text',
            validation: Rule => Rule.max(100).warning('Shorter descriptions are usually better')
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
            description: 'The URL-friendly identifier for the post. PLEASE HIT GENERATE and do not change afterwards',
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
            title: 'Posted at',
            name: 'postedAt',
            type: 'date'
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
        },
        {
            name: 'stats',
            title: 'stats',
            type: 'string',
            description: 'Hot/Top/Controversial/Rising/Best/None',
            validation: Rule => Rule.max(10).warning('Shorter status are usually better')
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
        }
    ]
  }