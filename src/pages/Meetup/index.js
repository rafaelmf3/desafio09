import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import {
  MdEdit,
  MdDeleteForever,
  MdDateRange,
  MdLocationOn,
} from 'react-icons/md';
import nl2br from 'react-nl2br';

import api from '../../services/api';
import history from '../../services/history';

import { Container, Details } from './styles';

export default function Meetup({ match }) {
  const { id } = match.params;

  const [loading, setLoading] = useState(true);
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`organizing/${id}`);
        console.tron.log(response.data);
        setMeetup({
          ...response.data.meetup,
          formattedDate: format(
            parseISO(response.data.meetup.date),
            "dd/MM/Y - HH'h'mm",
            { locale: pt }
          ),
        });

        setLoading(false);
      } catch (err) {
        console.tron.log(err);
        toast.error('Meetup not found');
        history.push('/');
      }
    }

    loadMeetup();
  }, [id]);

  function handleEdit() {
    history.push(`/meetups/${id}/edit`);
  }

  async function handleCancel() {
    try {
      await api.delete(`meetups/${id}`);
      toast.success('Meetup canceled succesfully!');
      history.push('/dashboard');
    } catch (err) {
      toast.error('Error canceling meetup, try again');
    }
  }

  return (
    <Container>
      {loading ? (
        <div className="loading">
          <Loader type="TailSpin" color="#fff" width={32} height={32} />
        </div>
      ) : (
        <Details>
          <header>
            <h1>{meetup.title}</h1>

            {!meetup.past && (
              <nav>
                <button type="button" className="edit" onClick={handleEdit}>
                  <MdEdit size={16} color="#fff" />
                  Editar
                </button>

                <button type="button" className="cancel" onClick={handleCancel}>
                  <MdDeleteForever size={20} color="#fff" />
                  Cancelar
                </button>
              </nav>
            )}
          </header>

          <div className="image-wrapper">
            <img src={meetup.banner.url} alt={meetup.title} />
          </div>

          <p>{nl2br(meetup.description)}</p>
          <p>
            Caso queira participar como palestrante do meetup envie um e-mail
            para {meetup.organizer.email}
          </p>
          <div className="data-local">
            <p>
              <MdDateRange size={18} color="#fff" />
              {meetup.formattedDate}
            </p>
            <p>
              <MdLocationOn size={18} color="#fff" />
              {meetup.location}
            </p>
          </div>
        </Details>
      )}
    </Container>
  );
}

Meetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
