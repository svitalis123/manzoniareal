export const initialState={
    basket:[],
    user:null
}
export const getProductTotal=(basket)=>(
    basket?.reduce((initial, item)=>item.price+initial,0)
)
const reducer=(state, action)=>{
    switch(action.type){
        
        case "Add_To_Basket":
            return {
                ...state,
                basket : [...state.basket, action.item],
            }
            case 'Set_User':
                return{
                    ...state,
                    user:action.user
                }
             case 'Delete_basket':
                 return{
                     ...state,
                     basket:[],
                 }   
        case 'Remove_From_Basket':
            const index =state.basket.findIndex(
                (basketitem)=>basketitem.id === action.id
                )
                const newBasket=[...state.basket];

                if(index >=0){
                    newBasket.splice(index,1);
                }else{
                    console.warn(`the basket ${action.id} you want to delete is deleted and no more action can happen `)
                }    
                return {
                ...state,
                basket:newBasket,
                  }     
                               
                default:
                     return state
    }
}
export default reducer;