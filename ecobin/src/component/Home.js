import React from 'react';
import p1 from './p1.jpeg';
import P2 from './P2.jpeg';
import './Home.css'; // Import your CSS file

function Home() {
    return (
        <body>
            <main>
                <div className='container'>

                    <h1>Bienvenue sur ECOBIN</h1>

                    <h2>Une approche moderne de la gestion des déchets</h2>

                    <p style={{ textAlign: 'justify' }}>
                        La gestion traditionnelle des déchets présente des lacunes qui entraînent souvent des inefficacités opérationnelles et des coûts supplémentaires. Les méthodes conventionnelles telles que la collecte régulière basée sur un horaire fixe, le dépôt en vrac dans des conteneurs communs et le dépôt dans des sites de décharge non contrôlés peuvent conduire à des problèmes de gestion tels que des débordements, des dépôts sauvages et des risques pour la santé publique.
                    </p>

                    <div style={{ textAlign: 'center' }}>
                        <img src={P2} style={{ width: '20%', height: '20%' }} alt="Gestion traditionnelle des déchets" />
                    </div>
                    <br />
                    <br />

                    <p style={{ textAlign: 'justify' }}>
                        L'introduction de l'Internet des objets (IoT) et des systèmes embarqués dans la gestion des déchets représente une approche moderne visant à remédier à ces lacunes. En surveillant en temps réel le niveau de remplissage des conteneurs à déchets à l'aide de capteurs IoT et en optimisant les itinéraires de collecte grâce à des systèmes embarqués, il est possible de rendre les processus de collecte et de transport plus efficaces, durables et économiques. Ces technologies offrent également la possibilité d'impliquer activement la communauté dans la gestion des déchets, en favorisant une sensibilisation accrue et en encourageant des comportements plus durables. En combinant l'efficacité des données fournies par l'IoT avec les fonctionnalités des systèmes embarqués, il est ainsi possible de mettre en œuvre des pratiques de gestion des déchets plus efficaces et respectueuses de l'environnement.
                    </p>
                    <br />
                    <br />

                    <div style={{ textAlign: 'center' }}>
                        <img src={p1} alt="Gestion moderne des déchets" />
                    </div>
                    <br />
                    <br />

                </div>
            </main>
        </body>
    );
}

export default Home;
