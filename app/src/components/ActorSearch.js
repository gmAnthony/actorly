import * as React from 'react';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import CheckIcon from '@mui/icons-material/Check';

import { actorList } from '../data/actors';

import { Label } from './shared/Label';
import { InputWrapper } from './shared/InputWrapper';
import { RootWrapper } from './shared/RootWrapper';
import { StyledTag } from './shared/StyledTag';
import { Listbox } from './shared/Listbox';

export function ActorSearch() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'actor-search',
    defaultValue: [],
    multiple: true,
    options: actorList,
    getOptionLabel: (option) => option.name,
  });

  return (
    <RootWrapper>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>Actor(s)</Label>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option, index) => (
            <StyledTag label={option.name} {...getTagProps({ index })} />
          ))}

          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.name}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </RootWrapper>
  );
}