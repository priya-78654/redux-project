import { addToCart} from '../Constants'
const initialState ={
    cardData:[]
}
export default function cartitems(state=initialState,action){
    switch(action.type){
        case addToCart :
            return{
                ...state,
                cardData:action.data
            }
            break;
            default:
                return state
    }
  

}