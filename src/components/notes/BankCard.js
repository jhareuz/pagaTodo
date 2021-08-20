import React from 'react';
import { useHistory } from 'react-router-dom';
import { DeatilsTable} from '../../actions/table';
import { useDispatch } from 'react-redux';

export const BankCard = ({
age,
bankName, 
description, 
url,
}) => {
    const dispatch = useDispatch();

    const history = useHistory();

    const hanleChangueView = () => {
            let payload = {
                age,
                bankName,
                description,
                url
            }
            dispatch(DeatilsTable(payload))
            history.push(`/journal/details`);
    }
    
    return (
        <div className="my-card animate__animated animate__fadeI" onClick={ hanleChangueView }>
            <img src={'http://www.rubiabogados.com/wp-content/uploads/2020/03/bancos-800x636.jpg'} className="img img-responsive"/>
            <div className="profile-name">{bankName}</div>
            <div className="profile-position">{description}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>Age: {age}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}