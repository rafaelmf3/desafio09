import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { MdAddCircleOutline, MdKeyboardArrowRight } from 'react-icons/md';

import api from '../../services/api';

import { Container, MeetupsList, Meetup } from './styles';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const data = response.data.map(meetup => {
        return {
          ...meetup,
          dateFormatted: format(
            parseISO(meetup.date),
            "d 'de' MMMM', às 'HH'h'",
            { locale: pt }
          ),
        };
      });

      setMeetups(data);
      setLoading(false);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      {!loading && (
        <header>
          <h1>Meus meetups</h1>
          <Link to="meetups/create">
            <MdAddCircleOutline color="#fff" size={22} />
            Novo meetup
          </Link>
        </header>
      )}

      <MeetupsList>
        {loading && (
          <div className="loading">
            <Loader type="TailSpin" color="#fff" width={32} height={32} />
          </div>
        )}

        {!loading && !meetups.length && (
          <div className="empty">Você não tem meetups ainda.</div>
        )}

        {!loading &&
          meetups.map(meetup => (
            <Meetup
              to={`/meetups/${meetup.id}`}
              key={meetup.id}
              past={meetup.past ? 1 : 0}
            >
              <p>{meetup.title}</p>
              <aside>
                <p>
                  {meetup.dateFormatted}
                  <MdKeyboardArrowRight size={20} />
                </p>
              </aside>
            </Meetup>
          ))}
      </MeetupsList>
    </Container>
  );
}
