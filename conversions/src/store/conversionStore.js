export default class ConversionStore {
    state = {
        inputAmount: null,
        inputType: null,
        outputType: null,      
        types: [],
        result: null
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
        },
        updateTypes (state, types) {
            state.types = types  
        },    
    };
}