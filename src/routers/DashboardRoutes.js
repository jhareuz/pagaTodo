import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { JournalScreen } from '../components/journal/JournalScreen';
import { Details } from '../components/journal/Details';

export const DashboardRoutes = () => {


    return (
        <>

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/journal/journalScreen" component={ JournalScreen } />
                    <Route exact path="/journal/details" component={ Details } />

                    <Redirect to="/journal/journalScreen" />
                </Switch>
            </div>


        </>
    )
}