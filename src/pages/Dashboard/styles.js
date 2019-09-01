import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 50px auto;
  padding: 0 30px;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    h1 {
      color: #fff;
      font-weight: bold;
      letter-spacing: 0.5px;
      font-size: 28px;
    }

    a {
      background: #f54d6a;
      border-radius: 4px;
      padding: 10px 14px;
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 15px;
      color: #fff;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.03, '#f54d6a')};
      }

      svg {
        margin-right: 8px;
      }
    }
  }
`;

export const MeetupsList = styled.div`
  .empty {
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.15);
    padding: 15px;
    text-align: center;
    color: #fff;
  }

  .loading {
    display: flex;
    justify-content: center;
  }
`;

export const Meetup = styled(Link)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  opacity: ${props => (props.past ? 0.45 : 0.8)};
  transition: transform 0.3s, box-shadow 0.2s, opacity 0.2s;

  + a {
    margin-top: 10px;
  }

  > p {
    margin: 0;
    color: #fff;
    font-size: 20px;
  }

  aside {
    color: #fff;
    margin-left: 30px;

    p {
      display: flex;
      align-items: center;
      margin: 0;

      svg {
        margin-left: 15px;
      }
    }
  }

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
    box-shadow: 1px 2px 3px rgba(211, 211, 211, 0.3);
  }
`;
