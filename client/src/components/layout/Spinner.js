import React, {Fragment} from 'react';
import spinner from './spinner.gif';

const Spinner = (props) => <>
    <img src={spinner}
         alt='Loading...'
         style={{width: '200px', margin: 'auto', display: 'block'}}/>
</>


export default Spinner;