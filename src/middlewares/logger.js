export default store => next => action => {
    console.log('Before: ', store.getState());
    console.log('Action', action);
    next(action);
    console.log('After', store.getState());
}