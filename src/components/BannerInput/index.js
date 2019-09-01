import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import { MdCameraAlt } from 'react-icons/md';

import api from '../../services/api';

import { Container } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('banner');
  const { error } = useField('file_id');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    try {
      const response = await api.post('files', data);

      const { id, url } = response.data;

      setFile(id);
      setPreview(url);
    } catch (err) {
      const { data } = err.response;
      toast.error(
        `Error: ${
          data.error && data.error.message
            ? data.error.message
            : 'Internal server error'
        }`
      );
    }
  }

  return (
    <Container>
      <label htmlFor="banner">
        <img src={preview} alt="" />

        <div className="icon-add">
          <MdCameraAlt size={48} color="#999" />
          <p>Selecionar imagem</p>
        </div>

        {defaultValue && (
          <div className="overlay">
            <MdCameraAlt size={48} color="#999" />
          </div>
        )}

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>

      {error && <span>{error}</span>}
    </Container>
  );
}
