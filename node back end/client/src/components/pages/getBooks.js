 import {useDispatch,useSelector} from 'react-redux';
import { useEffect } from 'react';
import {getallbooks} from '../../redux/bookstore/Actions';
import {booksFeatureKey } from '../../redux/bookstore/Reducer';
import { Link } from "react-router-dom";
import './style.css'
 
const GetBooks = () => {
    let dispatch=useDispatch();
    let bookInfo =useSelector((state)=>{
        return state[booksFeatureKey];
    })
   let {books}=bookInfo;
    useEffect(() => {
        dispatch(getallbooks())
        },[]);

    return (
        <>
            <div className="container">
                {/* <pre className="p-3 m-3">{JSON.stringify(books)}</pre> */}
                <div className="row">
                    <div className="col">
                        {books.length > 0 ? (
                            <>
                                {
                                books.map((book) => {
                                    return (
                                        <div className="card p-3 m-3" key={book._id}>
                                            <div className="card-body img">
                                                <h5 className="card-title bg-dark text-light p-3 m-3"><span className="fw-bold"> Title :</span>{book.title}</h5>
                                                <p className="card-text"> <span className="fw-bold">ISBN: </span>{book.isbn}</p>
                                                <p className="card-text"> <span className="fw-bold">SubTitle: </span>{book.subTitle}</p>
                                                <p className="card-text"> <span className="fw-bold">Author: </span>{book.author}</p>
                                                <p className="card-text"> <span className="fw-bold">PublishDate: </span>{book.publishDate}</p>
                                                <p className="card-text"> <span className="fw-bold">Publisher: </span>{book.publisher}</p>
                                                <p className="card-text"> <span className="fw-bold">Pages: </span>{book.pages}</p>
                                                <p className="card-text"> <span className="fw-bold">Price: </span>{book.price}</p>

                                                
                                                <p className="card-text"> <span className="fw-bold">Description: </span>{book.description}</p>
                                                <Link to="/" className="btn btn-primary">More details</Link>
                                            </div>
                                        </div>

                                    );

                                })

                                }
                            </>
                        ) : null}

                    </div>
                </div>
            </div>

        </>

    )
}
export default GetBooks;