/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from '../../styles/card.module.css'; // Asegúrate de que el path sea correcto

interface Property {
  id: number;
  description: string;
  type: string; // Asegúrate de incluir este campo
  price: number;
  bedrooms: number;
  bathrooms: number; // Asegúrate de incluir este campo
  area: number;
  imageUrl: string;
  typeSale: string;
}

interface CardProps {
  property: Property;
}

const Card: React.FC<CardProps> = ({ property }) => {
  return (
    <div className={styles.card}>
      <img src={property.imageUrl} alt={property.description} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{property.description}</h2>
        <p className={styles.cardType}>Tipo: {property.type}</p>
        <p className={styles.cardInfo}>Precio: ${property.price}</p>
        <p className={styles.cardInfo}>Habitaciones: {property.bedrooms}</p>
        <p className={styles.cardInfo}>Baños: {property.bathrooms}</p>
        <p className={styles.cardInfo}>Área: {property.area} m²</p>
        <p className={styles.cardInfo}>Tipo de venta: {property.typeSale}</p>
      </div>
    </div>
  );
};
export default Card;
