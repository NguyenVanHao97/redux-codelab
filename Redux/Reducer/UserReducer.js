const userState ={
    User:
        {
            name: 'Nick Evans',
            bio:'Potato Master',
            email:'user@email.com',
            phone:'+1 234 567 89',
    }
}

export const userReducer = ( state = userState, action) => {
    // switch(action.type)
    // {
    //     case 'ADD_RECIPES' : {
    //         let SaveUpdate = {...state.Recipes};
    //         // let index = SaveUpdate.findIndex(item => item.id === action.recipes.id);
    //         state.Recipes = SaveUpdate;
    //         return state
    //     }
    // }
    return {...state}
}