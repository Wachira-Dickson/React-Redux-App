const initState = {
    projects:[  
        {id: 1, title: 'I want money', content: 'I want to earn money', author: 'John Doe'},
        {id: 2, title: 'I want to travel', content: 'I want to travel the world', author: 'Jane Doe'},
        {id: 3, title: 'I want to learn', content: 'I want to learn new skills', author: 'Alice Smith'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
}

export default projectReducer