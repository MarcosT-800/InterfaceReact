import React from 'react';

interface CardProps {
  title: string; // Título do card
  content: string; // Conteúdo do card
  imageSrc?: string; // URL da imagem do card (opcional)
  onClick?: () => void; // Função de clique do card (opcional)
  variant?: 'default' | 'primary' | 'secondary'; // Variante do card (opcional)
}

const Card: React.FC<CardProps> = ({ title, content, imageSrc, onClick, variant = 'default' }) => {
  const cardStyle: React.CSSProperties = {
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#fff',
    transition: 'box-shadow 0.3s ease',
    cursor: 'pointer',
    border: variant === 'primary' ? '2px solid #007bff' : variant === 'secondary' ? '2px solid #6c757d' : 'none',
    boxShadow: variant === 'primary' ? '0 4px 8px rgba(0, 123, 255, 0.2)' : variant === 'secondary' ? '0 4px 8px rgba(108, 117, 125, 0.2)' : 'none'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: 'lightblack'
  };

  const textStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#666'
  };

  return (
    <div className="card" style={cardStyle} onClick={onClick}>
      {imageSrc && <img src={imageSrc} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title" style={titleStyle}>{title}</h2>
        <p className="card-text" style={textStyle}>{content}</p>
      </div>
    </div>
  );
};

export default Card;
