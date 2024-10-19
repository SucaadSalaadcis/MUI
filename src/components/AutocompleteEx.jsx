import TextField from '@mui/material/TextField'; // For input field
import Autocomplete from '@mui/material/Autocomplete'; // For autocomplete dropdown

// Sample data: A simple list of fruits
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Mango', 'Orange'];

export default function AutocompleteEx() {
    return (
        <Autocomplete
            disablePortal
            // disableCloseOnSelect , clearOnEscape ,  disableClearable , includeInputInList,  autoComplete , readOnly

            options={fruits} // List of fruits as the dropdown options
            sx={{ width: 300 }} // Set width for the component
            renderInput={(params) => (
                // Render a TextField as the input for the autocomplete
                <TextField {...params} label="Select a Fruit" variant="outlined" />
            )}
        />
    );
}