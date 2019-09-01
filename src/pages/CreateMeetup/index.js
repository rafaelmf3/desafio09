import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdAddCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';

import BannerInput from '../../components/BannerInput';
import DatePicker from '../../components/DatePicker';

import { Container } from './styles';

export default function CreateMeetup() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    setLoading(true);

    try {
      const response = await api.post('meetups', data);
      toast.success('Meetup created successfully!');
      history.push(`/meetups/${response.data.id}`);
    } catch (err) {
      const errData = err.response.data;
      toast.error(
        errData && errData.error
          ? `Error creating meetup: ${errData.error}`
          : 'Error creating meetup, try again'
      );
      setLoading(false);
    }
  }

  const schema = Yup.object().shape({
    file_id: Yup.number()
      .transform(value => (!value ? undefined : value))
      .required('Banner is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    date: Yup.date().required('Date is required'),
    location: Yup.string().required('Location is required'),
  });

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />
        <Input name="title" placeholder="Título do meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <button type="submit" disabled={loading}>
          <MdAddCircleOutline size={22} color="#fff" />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
