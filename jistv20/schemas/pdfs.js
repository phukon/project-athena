export default {
    title: 'question papers',
    name: 'question_papers',
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