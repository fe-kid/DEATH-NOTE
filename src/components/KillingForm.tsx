import { ChangeEvent, FormEvent, useRef } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  background-color: #111;
  width: 90%;
  height: 80px;
  position: relative;

  input {
    background-color: transparent;
    resize: none;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    font-size: 1.4rem;
    border: none;
    outline: none;
  }
  div {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  button {
    &:first-of-type {
      margin-right: 10px;
    }
    background-color: #333;
    border: 2px solid #777;
    font-size: 1.2rem;
    padding: 8px 16px;
    cursor: pointer;
  }
  span {
    position: absolute;
    top: 105%;
    right: 5px;
  }
`;

const KillingForm: React.FC<{
  onSubmit: (e: FormEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSkip: () => void;
  text: string;
}> = ({ onSubmit, onChange, onSkip, text }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputFocusHander = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <input
        placeholder="범죄자의 이름을 적으세요..."
        onChange={onChange}
        value={text}
        ref={inputRef}
      />
      <div>
        <button
          type="button"
          onClick={() => {
            onSkip();
            inputFocusHander();
          }}
        >
          Skip
        </button>
        <button type="submit" onClick={inputFocusHander}>
          Done
        </button>
      </div>
      <span>ESC : Skip / ENTER : Done</span>
    </StyledForm>
  );
};

export default KillingForm;
