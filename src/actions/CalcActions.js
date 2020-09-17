const LCM = (dispatch, array) => {
        const result = array[0];
        let max = 1;
        let min = 1;
        let product = 1;  
        array.map((value) => {
        if (result > value) {
            max = result;
            min = value;
          } else {
            min = result;
            max = value;
          }
        while (max % min !== 0) {
            const temp = min;
            min = max % min;
            max = temp;
          }
          product *= value;
          return min;
        });
        const lcm = product / min;
        dispatch({ type: 'result', payload: lcm });
};
const GCD = (dispatch, array) => {
    const result = array[0];
    let max = 1;
    let min = 1;
    array.map((value) => {
    if (result > value) {
        max = result;
        min = value;
      } else {
        min = result;
        max = value;
      }
    while (max % min !== 0) {
        const temp = min;
        min = max % min;
        max = temp;
      }
      return min;
    });
    dispatch({ type: 'result', payload: min });
};
const CD = (dispatch, array) => {
    let temp = Number(array[0]);
    let factor = new Object();
    let prev = '1';
    let fact = '';
    let i = 2;
    while (temp > 1) {
      if (temp % i === 0) {
      if (prev !== i) {
        factor = { ...factor, [i]: '1' };
        prev = String(i);
      } else {
        factor[String(i)] = String(Number(factor[String(i)]) + 1);
    }
    temp /= i;
  } else {
    i += 1;
  }
  fact += Object.keys(factor).map((key,index) => (`${key}:${factor[key]}, `));
}
dispatch({ type: 'result', payload: fact });
};
const TS = (dispatch, array) => {
    dispatch({ type: 'result', payload: 4 });
};
export const calculation = (array, picker) => (dispatch) => { 
    switch (picker) {
        case 'lcm':
            LCM(dispatch, array);
            break;
        case 'gcd':
            GCD(dispatch, array);
            break;
        case 'cd':
            CD(dispatch, array);
            break;
        case 'ts':
            TS(dispatch, array);
            break;
        default:
            break;
    }
};
