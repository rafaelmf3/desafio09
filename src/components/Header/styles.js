import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Content = styled.div`
  padding: 15px 0;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 35px;
    width: auto;
  }

  aside {
    display: flex;
    justify-content: column;
    text-align: right;
    align-items: center;
    div {
      margin-right: 20px;

      p {
        color: #fff;
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: bold;
      }

      a {
        color: #515363;
      }
    }

    button {
      margin: 5px 0 0;
      height: 35px;
      width: 60px;
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
`;
