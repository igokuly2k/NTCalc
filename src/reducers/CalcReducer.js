const INITIAL_STATES = { result: 0 };
export default (state = INITIAL_STATES, actions) => {
    switch (actions.type) {
        case 'result':
            return { ...state, result: actions.payload };
        default:
            return state;
    }
};
