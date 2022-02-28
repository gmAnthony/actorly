
import { useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import { actorList } from '../data/actors';

export function ActorSearch2({ inputValue }) {
  useEffect(() => {
    console.log(inputValue.current.value);
  }, [inputValue]);

  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={actorList}
      getOptionLabel={(option) => option.name}
      defaultValue={[]}
      renderInput={(params) => (
        <>
          {/* <TextField
            {...params}
            variant="standard"
            label="Actor(s)"
            placeholder="Actorly Davis"
          /> */}
          <Input {...params} ref={inputValue} />
        </>
      )}
    />
  );
}