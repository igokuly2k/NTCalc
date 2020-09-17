const INITIAL_STATES = { error: '', number: '', picker: 'lcm', array: [], length: 0 };
export default (state = INITIAL_STATES, actions) => {
    switch (actions.type) {
        case 'Value_Change':
            if (actions.payload.props === 'picker') {
                return { ...INITIAL_STATES, picker: actions.payload.value };
            }
             return { ...state, [actions.payload.props]: actions.payload.value, error: '' };
        case 'Add_Array':
            return { ...state, 
                 array: state.array.concat(actions.payload.value), 
                    length: actions.payload.length + 1, 
                    error: '', 
                    number: '' };
        case 'Error':
            return { ...state, error: 'Only Integer Allowed', number: '' };
        case 'Length_Exceed':
            return { ...state, error: 'Length Exceeded', number: '' };
        case 'Value_Exceed':
            return { ...state, error: 'Value Exceeded', number: '' };
        default:
            return state;
    }
};
