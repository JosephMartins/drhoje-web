import React from 'react';

import './styles.css';


const Header  = ({title}) => {
  return (
    <header className="header">
      <nav>
        <h3>Logo</h3>
        <ul>
          <li><a href="forgot">Escolas</a></li>
          <li><a href="forgot">Turmas</a></li>
          <li><a href="forgot">Alunos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;