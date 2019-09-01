import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.3);
      border: 0;
      border-radius: 4px;
      height: 48px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      transition: box-shadow 0.2s;

      &:focus {
        box-shadow: 0 0 3px rgba(93, 97, 164, 0.35);
      }

      &::placeholder {
        color: #999;
      }
    }

    span {
      display: block;
      color: #e65175;
      margin: -5px 0 10px;
      font-weight: bold;
      text-align: left;
    }

    hr {
      border: 0;
      margin: 25px 0 0;
    }
    div {
      display: flex;
      justify-content: flex-end;

      button {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 10px 0 0;
        height: 35px;
        width: 130px;
        background: #f54d6a;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#F54D6A')};
        }
      }
    }
  }
`;
