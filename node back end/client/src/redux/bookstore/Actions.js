import Axios from "axios";


export const get_all_books='get_all_books';
export const get_all_books_success='get_all_books_success';
export const get_all_books_failure='get_all_books_failure';

export const get_book='get_book';
export const get_book_success='get_book_success';
export const get_book_failure='get_book_failure';


export const create_book='create_book';
export const create_book_success='create_book_success';
export const create_book_failure='create_book_failure';

export const update_book='update_book';
export const update_book_success='update_book_success';
export const update_book_failure='update_book_failure';

export const delete_book='delete_book';
export const delete_book_success='delete_book_success';
export const delete_book_failure='delete_book_failure';

export const update_input='update_input';
export const update_input_success='update_input_success';
export const update_input_failure='update_input_failure';






// get all books

export const getallbooks=()=>{
    return async(dispatch)=>{
        try{
            dispatch({type:get_all_books});
            let dataUrl=`http://localhost:3031/api/books`;
            let response= await Axios.get(dataUrl);
            dispatch({type:get_all_books_success,  payload:response.data});
        }
        catch(error)
        {
            dispatch({type:get_all_books_failure,   payload:error});
        }
    }
}


// get single book

export const getbook=(bookId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:get_book});
            let dataUrl=`http://localhost:3031/api/books/${bookId}`;
            let response= await Axios.get(dataUrl);
            dispatch({type:get_book_success,  payload:response.data});
        }
        catch(error)
        {
            dispatch({type:get_book_failure,    payload:error});
        }
    }
}


// create new book

export const createBook=(book)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:create_book});
            let dataUrl='http://localhost:3031/api/createbook';
            let response= await Axios.post(dataUrl,book);
            dispatch({type:create_book_success,  payload:response.data});
        }
        catch(error)
        {
            dispatch({type:create_book_failure,   payload:error});
        }
    }
}

// update input

export const updateinput=(key,value)=>{
    return {
        type:update_input,
        payload:{key,value}
    }
}

// update book

export const updatebook=(bookId,book)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:update_book});
            let dataUrl=`http://localhost:3031/api/books/${bookId}`;
            let response= await Axios.put(dataUrl,book);
            dispatch({type:update_book_success,  payload:response.data});
        }
        catch(error)
        {
            dispatch({type:update_book_failure,  payload:error});
        }
    }
}

// delete book

export const deletebook=(bookId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:delete_book});
            let dataUrl=`http://localhost:3031/api/books/${bookId}`;
            let response= await Axios.delete(dataUrl);
            dispatch({type:delete_book_success, payload:response.data});
            dispatch(getallbooks())

        }
        catch(error)
        {
            dispatch({type:delete_book_failure, payload:error});
        }
    }
}



