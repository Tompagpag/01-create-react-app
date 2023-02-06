// Chargement des dépendances (librairie React ici)
import React from 'react';

// Chargement du composant React représentant un message texte
import { Message } from './Message';
import Input from './Input'

// Composant React de type classe.
export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "Joahanna"
        }
    }

    render() {
        const setFirstname = (value) => {
            this.setState({
                firstname: value
            });
        }

        return (
            <section>
                <h2>Ceci est construit avec React en écrivant du JSX</h2>
                <Message firstname={this.state.firstname} />
                <p>Autre paragraphe de texte après le composant Message</p>
                <Input setFirstname={setFirstname} />
                {/* Ceci est un commentaire JSX. Les accolades rappellent les templates Twig avec Symfony */}
            </section>
            /*
             * Il n'est pas possible d'avoir plusieurs balises JSX frères/soeurs :
             * il faut toujours un parent, ici par exemple une <section>
             */
        );
    }
}
