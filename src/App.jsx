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
import BadgeEx from './components/BadgeEx'
import TooltipEx from './components/TooltipEx'
import TypographyEx from './components/TypographyEx'
import AlertEx from './components/AlertEx'


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
        <SwitchEx />
        <TextFieldEx />
      </div>
      <div style={{ display: 'flex', gap: '6px' }}>
        <SliderEx />
        <AvatarEx />
        <BadgeEx />
        <TooltipEx />
        <TypographyEx />
      </div>
        <AlertEx />

    </>
  )
}

