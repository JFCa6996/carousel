import React, { useState } from 'react';
import YesOrNot from './YesOrNot'; // Ajusta la ruta según tu estructura de carpetas

const App = () => {
    const [articles, setArticles] = useState([
        { id: 1, title: 'Artículo 1' },
        { id: 2, title: 'Artículo 2' },
        { id: 3, title: 'Artículo 3' }
    ]);

    const [articleToDelete, setArticleToDelete] = useState(null);

    const confirmDelete = (id) => {
        setArticleToDelete(id);
    };

    const handleDelete = () => {
        setArticles(articles.filter(article => article.id !== articleToDelete));
        setArticleToDelete(null);
    };

    return (
        <div>
            <h1>Lista de Artículos</h1>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        {article.title}
                        <button onClick={() => confirmDelete(article.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            {articleToDelete && (
                <YesOrNot
                    handle={handleDelete}
                    mensaje="¿Estás seguro de que deseas eliminar este artículo?"
                />
            )}
        </div>
    );
};

export default App;
