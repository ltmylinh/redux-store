export const initialState = {
  loading: false,
  loaded: false,
  data: [{label: 'Breadfast', complete: false}]
};

export function reducer(
  state = initialState,
  action: {type: string; payload: any}
){
    switch (action.type){
      case 'ADD_TODO':{
        const todo = action.payload;
        const todos = [...state.data, todo];
        return {
          ...state,
          data: todos
        }
      }
    }

    return state;
  }
