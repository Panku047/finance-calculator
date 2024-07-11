import React, {useState} from "react";
import TextField from '@mui/material/TextField';

const InputYearComponent = ({onInputChange}) =>{
    const [years, setYears] = useState('');
    const handleYearChange = (event) => {
        const { value } = event.target;
        if (/^\d*$/.test(value) && Number(value) <= 100) {
          setYears(value);
          onInputChange(value)
        }
      };
    return(
        <TextField
            label="Years"
            variant="outlined"
            value={years}
            onChange={handleYearChange}
      />
    );
}
export default InputYearComponent;