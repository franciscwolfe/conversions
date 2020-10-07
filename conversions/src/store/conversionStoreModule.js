export default class ConversionStoreModule {
    namespaced = true;
    state = {
        inputAmount: null,
        inputType: null,
        outputType: null,      
        types: [],
        result: null,
        loaded: false,
        message: null
    };
    mutations = {
        updateInputAmount (state, inputAmount) {
            state.inputAmount = inputAmount
        },
        updateInputType (state, inputType) {
            state.inputType = inputType
        },
        updateOutputType (state, outputType) {
            state.outputType = outputType
        },
        updateResult (state, result) {
            state.result = result
            state.message = null
        },
        updateMessage (state, message) {
            state.message = message
        },        
        updateTypes (state, types) {
            state.types = types
        },
        updateLoaded (state, loaded) {
            state.loaded = loaded  
        },   
    };
}