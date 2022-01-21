const {addNoteHandler, getNoteHandler, getNoteByIdHandler} = require('./handler');

const routes =[
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getNoteHandler,
    },
    {
        method:'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
]

module.exports = routes;