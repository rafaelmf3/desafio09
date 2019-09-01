import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 960px;
  margin: 50px auto;
  padding: 0 30px;

  .loading {
    display: flex;
    justify-content: center;
  }
`;

export const Details = styled.div`
  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    h1 {
      color: #fff;
      font-weight: bold;
      font-size: 28px;
    }

    nav {
      display: flex;
    }

    button {
      border-radius: 4px;
      border: 0;
      padding: 8px 12px;
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 14px;
      color: #fff;
      margin-left: 10px;
      transition: background 0.3s;

      &.edit {
        background: #40c7ef;
        &:hover {
          background: ${darken(0.03, '#40C7ef')};
        }
      }

      &.cancel {
        background: #f54d6a;
        &:hover {
          background: ${darken(0.03, '#f54d6a')};
        }
      }

      svg {
        margin-right: 6px;
      }
    }
  }

  .image-wrapper {
    overflow: hidden;
    background: rgba(0, 0, 0, 0.045);
    height: 0;
    width: 100%;
    padding-top: 300px;
    position: relative;

    img {
      display: block;
      max-width: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }

  p {
    margin-top: 20px;
    font-size: 16px;
    color: #fff;
  }

  .data-local {
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    padding-top: 20px;

    p {
      color: #ccc;
      display: flex;
      align-items: center;
      margin-right: 20px;

      svg {
        margin-right: 8px;
        color: #ccc;
      }
    }
  }
`;
