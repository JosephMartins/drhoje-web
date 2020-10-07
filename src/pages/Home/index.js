import React, {useState, useEffect} from 'react';

import Modal from '../../components/Modal';

import api from '../../services/api';

import './styles.css';

const Home = () => {
  const [modal, setModal] = useState(null);
  const [escolas, setEscolas] = useState([]);

  useEffect(() =>  {
    api.get('/escola').then(response => setEscolas(response.data));

  }, []);


   return (
    <>
    <div className="container">

      <div className="form">
      <input placeholder="Digite o nome da escola" type="text"/>
      <button onClick={() => setModal(true)}>Adicionar</button>
      <Modal modal={modal} setModal={setModal}></Modal>
      </div>
      
      {escolas.map(({nome, ensino, cep, id}) => (
      <section className="box__card" key={id}>
        <article className="card">
          <div className="card__info"> 
            <h3>{nome}</h3>
            <p>Tipo :  <span>{ensino}</span></p>
            <p>Cep: <span>{cep}</span></p>
          </div>
          <div className="card__buttons">
            <button style={{background: '#b52e2e'}}>Excluir</button>
            <button className="button__red">Alterar</button>
            <div className="card__link">
            </div>
          </div>
        </article>
      </section>
      ))}
      
    </div>
    </>
  )
}

export default Home;
