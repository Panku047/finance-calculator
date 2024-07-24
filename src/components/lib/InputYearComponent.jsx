import React from "react";
import TextField from '@mui/material/TextField';

const InputYearComponent = ({labelName, onInputChange, currentValue}) =>{
    const handleYearChange = (event) => {
        const { value } = event.target;
        if (/^\d*$/.test(value) && Number(value) <= 100) {
          onInputChange(value)
        }
      };
    return(
        <TextField
            label={labelName}
            variant="outlined"
            value={currentValue}
            onChange={handleYearChange}
      />
    );
}
export default InputYearComponent;