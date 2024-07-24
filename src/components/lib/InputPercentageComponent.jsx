import React, {useState} from "react";
import TextField from '@mui/material/TextField';

const InputPercantageComponent = ({labelName, onInputChange}) =>{
    const [initialValue, setInitialValue] = useState('');
    const handleNumberChange = (setter) => (event) => {
        const { value } = event.target;
        if (/^\d*$/.test(value)) {
          setter(value);
          onInputChange(value)
        }
    };
    return(
        <TextField
            label={labelName}
            variant="outlined"
            value={initialValue}
            onChange={handleNumberChange(setInitialValue)}
            fullWidth
      />
    );
}
export default InputPercantageComponent;