import React from "react";

interface Property {
  id: number;
  description: string;
  type: string;        // Asegúrate de incluir este campo
  price: number;
  bedrooms: number;
  bathrooms: number;   // Asegúrate de incluir este campo
  area: number;
  imageUrl: string;
  typeSale: string;
}

interface CardProps {
  property: Property;
}

const Card: React.FC<CardProps> = ({ property }) => {
  return (
    <div className="card">
      <img src={property.imageUrl} alt={property.description} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{property.description}</h2>
        <p className="card-type">Tipo: {property.type}</p> {/* Asegúrate de tener el campo type */}
        <p className="card-info">Precio: ${property.price}</p>
        <p className="card-info">Habitaciones: {property.bedrooms}</p>
        <p className="card-info">Baños: {property.bathrooms}</p> {/* Asegúrate de tener el campo bathrooms */}
        <p className="card-info">Área: {property.area} m²</p>
        <p className="card-info">Tipo de venta: {property.typeSale}</p>
      </div>
    </div>
  );
};

export default Card;
