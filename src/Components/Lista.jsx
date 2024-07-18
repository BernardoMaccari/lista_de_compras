import React, { useState, useCallback } from 'react';

const ListaCompras = () => {
  const [compras, setCompras] = useState([]);
  const [newCompras, setNovaCompra] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const addCompra = useCallback(() => {
    if (newCompras.trim() !== '') {
      if (isEditing) {
        const updatedCompras = compras.map((compras, index) =>
          index === currentIndex ? newCompras : compras
        );
        setCompras(updatedCompras);
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        setCompras((prevCompras) => [...prevCompras, newCompras]);
      }
      setNovaCompra('');
    }
  }, [newCompras, isEditing, currentIndex, compras]);
  
  const removeCompras = useCallback((index) => {
    setCompras((prevCompras) => prevCompras.filter((_, i) => i !== index));
  }, []);

  const editCompra = useCallback((index) => {
      setNovaCompra(compras[index]);
      setIsEditing(true);
      setCurrentIndex(index);
    }, [compras]);


  return (
    <div>
      <h1>Lista de Compras</h1>
      <input
        type="text"
        value={newCompras}
        onChange={(e) => setNovaCompra(e.target.value)}
        placeholder="Nova compra"
      />
      <button onClick={addCompra}>
        {isEditing ? 'Salvar Alteração' : 'Adicionar Compra'}
      </button>
      <ul>
        {compras.map((compra, index) => (
          <li key={index}>
            {compra}
            <div>
              <button
                className='icon-button edit'
                onClick={() => editCompra(index)}
              >
                &#9998; 
              </button>
              <button
                className='icon-button delete'
                onClick={() => removeCompras(index)}
              >
                &#10006;
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCompras;