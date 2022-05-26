import counterReducer from './shared/reducers/counter.reducer';

const rootReducer = {
  counter: counterReducer,
};

const getRootReducer = () => rootReducer;

export default getRootReducer;
