export default {
    title: 'PDFs',
    name: 'pdfs',
    type: 'document',
    fields: [
    {
        name: 'name',
        title: 'Name',
        type: 'string'
    },
    {
        name: 'type',
        title: 'Type',
        type: 'string'
    },
    {
        name: 'college',
        title: 'College',
        type: 'string'
    },
    {
        title: 'File',
        name: 'file',
        type: 'file',
    },
    {
        name: 'description',
        title: 'Description',
        type: 'text'
    }
    ]
  }