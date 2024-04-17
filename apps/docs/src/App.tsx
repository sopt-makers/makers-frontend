import { Test, TextField, TextArea, SearchField } from '@sopt-makers/ui';
import './App.css';
import { useState, ChangeEvent } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [textarea, setTextarea] = useState('');
  const [search, setSearch] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const inputValidation = (input: string) => {
    if (input && input.length > 10) return true;
    return false;
  }

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value);
  }

  const textareaValidation = (input: string) => {
    if (input && input.length > 10) return true;
    return false;
  }

  const handleTextareaSubmit = () => { console.log(textarea) }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleSearchSubmit = () => { console.log(search) }

  const handleSearchReset = () => { setSearch('') }

  return (
    <>
      <Test text="Test Component" size="big" color="blue" />
      <TextField<string> labelText="Label" placeholder="Placeholder..." required descriptionText="description" validationFn={inputValidation} value={input} onChange={handleInputChange} />
      <TextArea labelText="Label" placeholder="Placeholder..." required descriptionText="description" validationFn={textareaValidation} value={textarea} onChange={handleTextareaChange} onSubmit={handleTextareaSubmit} maxLength={300} />
      <SearchField placeholder="Placeholder..." value={search} onChange={handleSearchChange} onSubmit={handleSearchSubmit} onReset={handleSearchReset} />
    </>
  );
}

export default App;
