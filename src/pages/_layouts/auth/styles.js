import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(34, 32, 44, 1),
    rgba(64, 40, 69, 1)
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      display: block;
      color: #e65175;
      margin: 5px 0 0;
      font-weight: bold;
      text-align: left;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
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

    p {
      margin-top: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: default;
      color: #777;
    }
    a {
      display: inline-block;
      color: #777;
      font-size: 15px;
      font-weight: bold;
      transition: color 0.2s;

      &:hover {
        color: ${lighten(0.9, '#777')};
      }
    }
  }
`;
