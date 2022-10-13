const INIT_STATE ={
    housesData:[]
};

export const cartreducer =(state=INIT_STATE, action) =>{
    switch(action.type){
        
        case "ADD_CART":
            const ItemIndex = state.housesData.findIndex((item)=> item.id=== action.payload.id);

            if(ItemIndex>=0){
                state.housesData[ItemIndex].qnty +=1
            }else{
                const temp= {...action.payload , qnty:1}
                return{
                    ...state,
                    housesData:[...state.housesData,temp]
                }
            }
           


            default:
                return state

    }
}