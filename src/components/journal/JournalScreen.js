import React from 'react';
import { NoteScreen } from '../notes/NoteScreen';


export const JournalScreen = () => {



    return (
        <div 
            className="journal__main-content animate__animated animate__fadeIn animate__faster"
        >
            <main>

             <NoteScreen /> 

            </main>

        </div>
    )
}