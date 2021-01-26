import React from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';


export const NotesAppBar = ({date}) => {

    const dispatch = useDispatch();

    const noteDate = moment(date);

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
            <span>{ noteDate.format('LL')}  </span>
                
           

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
