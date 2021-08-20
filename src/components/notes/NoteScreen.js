import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchApi} from '../../actions/table';
import { startLogout } from '../../actions/auth';
import { BankCard } from './BankCard';

export const NoteScreen = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const { name } = useSelector( state => state.auth );

    const [ table, setTable ] = useState([]);

    useEffect(() => {
        if(!JSON.parse(localStorage.getItem('data'))){
            console.log('1')
            dispatch( fetchApi('https://api.jsonbin.io/b/604006e581087a6a8b95b784') )
                .then(data => {
                
                setTable(data);

                localStorage.setItem('data', JSON.stringify(data))
                });
        }else{
            console.log('2')
            let persist = JSON.parse(localStorage.getItem('data'))

            setTable(persist);
            
        }
        
    }, [dispatch])


    const hanleLogout = () => {
        localStorage.clear();
        dispatch( startLogout() )
    }

    return (
        <div className="notes__main-content">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> { name }</span>
                </h3>

                <button 
                    className="btn"
                    onClick={ hanleLogout }
                >
                    Logout
                </button>
            </div>
            <div className="animate__animated animate__fadeIn">
                {
                    table.map( (hero, index) => (
                        <BankCard 
                            key={ index }
                            { ...hero }
                        >
                        </BankCard>
                    ))
                }
            </div>

        </div>
    )
}
