import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input  
                    type="text"
                    placeholder="some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

            <textarea
                placeholder="what happened today"
                className="notes__textarea">

            </textarea>

            <div className="notes__image">
                <img 
                    src="https://ichef.bbci.co.uk/news/640/cpsprodpb/F403/production/_109476426_jheison3.png"
                    alt="imagen"
                />
            </div>

            </div>
        </div>
    )
}
