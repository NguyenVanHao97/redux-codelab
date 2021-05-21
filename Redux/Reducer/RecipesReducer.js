const stateRecipes ={
    Recipes:
        {
            id:'1',
            name:'lorem'   
    }
}

export const RecipesReducer = (state = stateRecipes, action) => {
    switch(action.type)
    {
        case 'ADD_RECIPES' : {
            // let SaveUpdate = {...state.Recipes};
            state.Recipes.push(action.RecipesItem)
            state.Recipes = SaveUpdate;
            return state
        }
    }
    return {...state}
}