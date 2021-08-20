import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

export const Details = ({ history }) => {

    const { table } = useSelector( state => state.table );

    const [data, setData] = useState({})

    useEffect(() => {

        setData(table)

    }, [])

    console.log('test', data)

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    return (
        <div className='containerDetails '>
            <h1>Details</h1>
            <div className="my-card2 animate__animated animate__fadeInLeft">
                <img src={'http://www.rubiabogados.com/wp-content/uploads/2020/03/bancos-800x636.jpg'} className="img img-responsive"/>
                <div className="profile-name">{data.bankName}</div>
                <div className="profile-position">{data.description}</div>
                <div className="profile-overview">
                    <div className="profile-overview">
                        <div className="row">
                            <div className="col-ms-4">
                                <h3>Age: {data.age}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button 
                className="btnR"
                onClick={ handleReturn }
            >
                Return
            </button>
        </div>
        
    )
}
