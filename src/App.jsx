import React from 'react'
import AutocompleteEx from './components/AutocompleteEx'
import ButtonsEx from './components/ButtonsEx'
import CheckBoxEx from './components/CheckBoxEx'
import RatingEx from './components/RatingEx'
import SelectEx from './components/SelectEx'
import SliderEx from './components/SliderEx'
import SwitchEx from './components/SwitchEx'
import TextFieldEx from './components/TextFieldEx'
import AvatarEx from './components/AvaterEx'


export default function App() {
  return (
    <>
      <div style={{ display: 'flex', gap: '10px' }}>

        <AutocompleteEx />
        <ButtonsEx />
        <CheckBoxEx />

      </div>

      <div style={{ display: 'flex', gap: '6px' }}>
        <RatingEx />
        <SelectEx />
        <SliderEx />
        <SwitchEx />
        <TextFieldEx />
      </div>
      <div style={{ display: 'flex', gap: '6px' }}>
        <AvatarEx />
      </div>

    </>
  )
}

