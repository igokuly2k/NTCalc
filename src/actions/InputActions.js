export const ValueChange = 
(props, value) => ({ type: 'Value_Change', payload: { props, value } });
function validate(value, picker, length) {
    //const pattern = new RegExp('/[^0-9]/g');
    //const check = pattern.exec(value);
    const re = /^\d+$/;
    const isnum = re.test(value);
    if (!isnum || value === '') {
        return 'Error';   
    } else if (length === 1 && (picker === 'cd' || picker === 'ts')) {
       return 'Length Exceed';
   } else if (length === 5) {
    return 'Length Exceed';
    }
        const val = Number(value);
        if (val > 99999) {
            return 'Value Exceed';
        }
            return 'Add Array';
}
export const AddArray = (value, picker, length) => (dispatch) => { 
    switch (validate(value, picker, length)) {
        case 'Error':
            dispatch({ type: 'Error' });
            break;
        case 'Length Exceed':
            dispatch({ type: 'Length_Exceed' });
            break;
        case 'Value Exceed':
            dispatch({ type: 'Value_Exceed' });
            break;
        case 'Add Array':
            dispatch({ type: 'Add_Array', payload: { value, length } });
            break;
        default:
            dispatch({ type: 'Error' });
            break;
    } 
};

