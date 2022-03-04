import { Component } from "react";



class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    return(
      <section className='Content'>
        {conteudos.map((element, index) => {
          return(
            <p key={element.conteudo} >
            O conteudo é: {element.conteudo} <br />
            bloco: {element.bloco} <br />
            status: {element.status}
            </p>
          )
        } )}
      </section>
    )
  }
}

export default Content;
