import React, { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { ControlWrapper, InputWrapper, ButtonWrapper } from './styled';

export const Control = ({ handleSumbitСontent }) => {
  const [inputText, setInputText] = useState('');

  const handleContent = () => {
    if (inputText) {
      handleSumbitСontent(inputText);
    }
    setInputText('');
  };
  const handleText = e => {
    setInputText(e.target.value);
  };

  const handleEnterDown = e => {
    if (e.key === 'Enter') {
      handleContent();
    }
  };

  return (
    <ControlWrapper>
      <ButtonWrapper>
        <Button variant='success' onClick={handleContent}>
          Добавить задачу
        </Button>
      </ButtonWrapper>
      <InputWrapper>
        <FormControl
          placeholder='Введите задачу'
          onChange={handleText}
          value={inputText}
          onKeyDown={handleEnterDown}
        />
      </InputWrapper>
    </ControlWrapper>
  );
};
