// import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../../components/Loading';
import { AuthContext } from '../../contexts/AuthProvider';

const SearchBooks = () => {
    const {searchText} = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [searchBooks, setSearchBooks] = useState([]);

    console.log("inside searchBooks", searchText);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:5000/categories/products/${searchText}`)
        .then(res => {
            console.log(res);
            setSearchBooks(res?.data?.data)
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false)
        })
    }, [searchText])

    
    return (
        <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="mt-16 flex justify-center">
              <div className="mb-20">
                {
                  searchBooks.length && <h1 className='text-3xl font-semibold mb-4'>Best match for your search</h1>
                }
                <div className="md:flex flex-wrap gap-4 justify-center">
                  {
                    !searchBooks.length ? <p className='text-3xl font-semibold text-center w-3/6'>Sorry, there is no data matched. Please, search book by book category name or book name. Thank you.</p>
                    :
                    searchBooks?.map((product) => {
                        return (
                          <div
                            key={product._id}
                            className="card w-96 h-80 bg-base-100 shadow-xl border border-info md:mt-0"
                          >
                            <div className="pl-4">
                              <h2 className="card-title">{product?.bookName}</h2>
                              <p>Location: {product.location}</p>
                            </div>
                            <div className=''>
                              <img
                                className="h-40 w-full absolute bottom-0 rounded-b-xl"
                                src={product?.bookImgUrl}
                                alt=""
                              />
                            </div>
                          </div>
                        );
                      })
                  }
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
};

export default SearchBooks;