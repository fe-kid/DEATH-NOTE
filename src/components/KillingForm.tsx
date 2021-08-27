import { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  background-color: #111;
  width: 80%;
  height: 100px;
  position: relative;
  margin: 20px 0;

  input {
    background-color: transparent;
    resize: none;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    color: #fff;
    font-size: 24px;
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
    color: #fff;
    font-size: 20px;
    padding: 8px 20px;
    cursor: pointer;
  }
`;

const KillingForm: React.FC<{
  onSubmit: (e: FormEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSkip: () => void;
  text: string;
}> = ({ onSubmit, onChange, onSkip, text }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <input
        placeholder="범죄자의 이름을 적으세요..."
        onChange={onChange}
        value={text}
      />
      <div>
        <button type="button" onClick={onSkip}>
          Skip
        </button>
        <button type="submit">Done</button>
      </div>
    </StyledForm>
  );
};

export default KillingForm;
