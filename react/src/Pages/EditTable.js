import React , {useState , useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch , useSelector } from 'react-redux';
import history from '../Utility/history';
import {requestEditUserTable} from '../Redux/Home/action';

const EditTablePage = (props) => {

    const [userName , setName] = useState('');
    const [startLocation , setStartLocation] = useState('');
    const [endLocation , setEndLocation] = useState('');

    const dispatch = useDispatch(); // Work as mapDispatchToProps

    // const userId = props.match.params.id ;

    // Getting state value based on redirection of route
    const requestedData = props.history.location?.state?.results;


    useEffect(() => {
        setName(requestedData.name);
        setStartLocation(requestedData.startLocation);
        setEndLocation(requestedData.endLocation);
    },[requestedData])

    //For save changes in edit module
    const saveEditData = () => {
        const reqObj = {
            name: userName,
            startLocation: startLocation,
            endLocation: endLocation,
            id: requestedData.id
        }
        
        dispatch(requestEditUserTable(reqObj)); //use dispatch as a mapDispatchtoProps
    }

    return (
        <div className='formControl'>
            <div>
                <label>
                    Name :
                </label>
                <input className='editTextField' type="text" value={userName} name="userName" onChange={(e) => setName(e.target.value) } />
            </div>

            <div>
                <label>
                    StartLocation :
                </label>
                <input className='editTextField' value={startLocation} name="startLocation" onChange= {(e) => setStartLocation(e.target.value)}/>
            </div>

            <div>
                <label>
                    EndLocation :
                </label>
                <input className='editTextField'value={endLocation} name='endLocation' onChange={(e) => setEndLocation(e.target.value)} />
            </div>
            <div style={{marginTop: '30px', textAlign: 'center'}}>
                <button onClick={saveEditData} style={{marginRight: '15px'}}>Save</button>
                <button onClick={() => history.push('/')}>Back</button>
            </div>
        </div>
    )
}



export default EditTablePage;