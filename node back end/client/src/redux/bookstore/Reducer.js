import * as Actions from './Actions';

export const booksFeatureKey ="books";
let initialState ={
    errorMessage:"",
    books:[],
    book:{}
}

const Reducer=(state=initialState,action)=>{
    let {type,payload}=action;
    switch(type)
    {
        //get all books
        case Actions.get_all_books:
            return   {...state}
            

            //get all books success
            case Actions.get_all_books_success:
                return {
                    ...state,
                    books:payload
                }

           //get all books failure

           case Actions.get_all_books_failure:
                return {
                    ...state,
                    errorMessage:payload
                }


                //get  book
        case Actions.get_book:
            return   {...state}
            

            //get  book success
            case Actions.get_book_success:
                return {
                    ...state,
                    book:payload
                }

           //get  book failure

           case Actions.get_book_failure:
                return {
                    ...state,
                    errorMessage:payload
                }
  


                //create  book
        case Actions.create_book:
            return   {...state}
            

            //create  book success
            case Actions.create_book_success:
                return {
                    ...state
                
                }

           //create  book failure

           case Actions.create_book_failure:
                return {
                    ...state
                    
                }


                //update input
                case Actions.update_input:
                    return{
                        ...state,
                        book:{
                            ...state.book,
                            [payload.key]:payload.value
                        }
                    }


                    //update  book
        case Actions.update_book:
            return   {...state,}
            

            //update  book success
            case Actions.update_book_success:
                return {
                    ...state,
                
                }

           //update  book failure

           case Actions.update_book_failure:
                return {
                    ...state,
                    
                }


                //delete  book
        case Actions.delete_book:
            return   {...state}
            

            //delete  book success
            case Actions.delete_book_success:
                return {
                    ...state,
                
                }

           //delete  book failure

           case Actions.delete_book_failure:
                return {
                    ...state,
                    
                }
                

                default :
                return state;
            

    }
}

export {Reducer}