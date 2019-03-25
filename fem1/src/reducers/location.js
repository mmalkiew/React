export default function loacitonReducer(state, action) {
    // const newState = Object.assign({}, state, { location: action.paylod });
    // return newState;

    if (action.type === 'SET_LOCATION') {
        return action.payload;
    } else {
        return state;
    }
}