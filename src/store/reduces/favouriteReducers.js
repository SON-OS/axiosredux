const intialState=[]
const favouriteReducers = (state = intialState, action) => {
    switch (action.type) {
      case "ADD_TO_FAVOURITES":
        if (!state.find((obj) => obj.id === action.payload.id)) {

        return [...state, action.payload  ]
        }else {
          return [...state];}
        default:
            return state;
        }
      };
      
export default favouriteReducers;
      