import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';


export const NotesAppBar = () => {

    const dispatch = useDispatch();

    const { active } = useSelector(state => state.notes);

    const handleSave = () => {
        dispatch( startSaveNote(active) );
    }

    const handlePictureUpload = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file){
            dispatch( startUploading(file) );
        }
    }

    return (
        <div className="notes__appbar">
            <span>28 de febrero de 2021</span>

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{display: 'none'}}
                onChange={handleFileChange}
            />
            <div>
                <button className="btn"
                    onClick= {handlePictureUpload}
                >Picture</button>

                <button 
                    className="btn"
                    onClick={ handleSave }
                >Save</button>
            </div>
        </div>
    )
}
