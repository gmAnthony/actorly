
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { actorList } from '../data/actors';

export function ActorSearch2({ searchTerm }) {
  return (
    <Autocomplete
      multiple
      autoSelect
      id="tags-standard"
      options={actorList}
      getOptionLabel={(option) => option.name}
      defaultValue={[]}
      onChange={(event, newValue) => {
        searchTerm(newValue);
        console.log(newValue)
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Actor(s)"
          placeholder="Actorly Davis"
        />
      )}
    />
  );
}