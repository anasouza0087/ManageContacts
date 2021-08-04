import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    nomes: function (state, action) {
        return {
            nome: 'Ricardo'
        }
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig