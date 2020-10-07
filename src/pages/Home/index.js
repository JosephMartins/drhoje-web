import React from 'react';

import './styles.css';

const Home = () => {
  return (
    <>
    

    <div className="container">

    <form action="" className="form">
      <input placeholder="Digite o nome da escola" type="text"/>
      <a href="escola/cadastro">Adicionar</a>
    </form>
      <section className="box__card">
        <article className="card">
          <div className="card__info"> 
            <h3>Centro de ensino médio 03</h3>
            <p>Tipo :  <span>Fundamental</span></p>
            <p>Cep: <span>72215063</span></p>
          </div>
          <div className="card__buttons">
            <button style={{background: '#b52e2e'}}>Excluir</button>
            <button className="button__red">Alterar</button>
            <div className="card__link">
            </div>
          </div>
        </article>
      </section>

      <section className="box__card">
        <article className="card">
          <div className="card__info"> 
            <h3>Centro de ensino médio 03</h3>
            <p>Tipo :  <span>Fundamental</span></p>
            <p>Cep: <span>72215063</span></p>
          </div>
          <div className="card__buttons">
            <button style={{background: '#b52e2e'}}>Excluir</button>
            <button className="button__red">Alterar</button>
            <div className="card__link">
            </div>
          </div>
        </article>
      </section><section className="box__card">
        <article className="card">
          <div className="card__info"> 
            <h3>Centro de ensino médio 03</h3>
            <p>Tipo :  <span>Fundamental</span></p>
            <p>Cep: <span>72215063</span></p>
          </div>
          <div className="card__buttons">
            <button style={{background: '#b52e2e'}}>Excluir</button>
            <button className="button__red">Alterar</button>
            
          </div>
        </article>
      </section><section className="box__card">
        <article className="card">
          <div className="card__info"> 
            <h3>Centro de ensino médio 03</h3>
            <p>Tipo :  <span>Fundamental</span></p>
            <p>Cep: <span>72215063</span></p>
          </div>
          <div className="card__buttons">
            <button style={{background: '#b52e2e'}}>Excluir</button>
            <button className="button__red">Alterar</button>
            <div className="card__link">
            </div>
          </div>
        </article>
      </section>
      
    </div>
    </>
  )
}

export default Home;
