import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateVariant from "redux-immutable-state-invariant";

export default function configureStore(initalState){
    //support redux dev tools
    const composeEnhncers =
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
                        rootReducer,
                        initalState,
                        //Apply middle ware reduximmutablestatevariant to warn us if we acccidentaly mutate redux state
                        //in store
                        composeEnhncers(applyMiddleware(reduxImmutableStateVariant()))
        );
}