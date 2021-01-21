import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture"
                style={ { 
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://st3.depositphotos.com/3203307/18596/i/600/depositphotos_185963658-stock-photo-unicorn-nebula-background.jpg)'
                 } }
            >

            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>

                <p className="journal__entry-content">
                    Un parrafo de un journal entry
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Martes</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
