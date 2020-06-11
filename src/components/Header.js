import React from 'react';

// função exportada que dar acesso as propriedades do componente Header//
// incluir variavel uma uma função dentro do html usa-se chave {}//
 // pegando apenas a propriedade title //
  // children é uma props que pega todo o conteudo que o componente Header recebeu // 
export default function Header({title}){ 
return (
  <header>
    <h1>{title}</h1> 
  </header>
  );
}

