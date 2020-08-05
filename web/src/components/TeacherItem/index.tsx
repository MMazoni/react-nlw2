import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/37179593?s=460&u=49c29fed6531de1a1e09fed0ff13d2582033d060&v=4" alt="Matheus Mazoni"/>
                        <div>
                            <strong>Matheus Mazoni</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos vero sit dignissimos non fuga. Autem optio exercitationem aperiam ducimus obcaecati tenetur, accusantium enim reprehenderit ea accusamus molestiae! Vitae, quasi.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 50,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;