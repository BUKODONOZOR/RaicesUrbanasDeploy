"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card/Cards"; // Ajusta el path si es necesario
import styles from '../styles/home.module.css';
import Chat from "components/chat/Chat";
import { apiUrl } from "./api/apiUrl";

interface Property {
  id: number;
  description: string;
  type: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  typeSale: string;
}

const HomePage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    minArea: "",
  });
  const [visibleCount, setVisibleCount] = useState(9); // Controlar la cantidad de propiedades visibles

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://${apiUrl}/RaicesUrbanas/properties/readAll`
        );

        // Obtener imágenes aleatorias de Pexels para todas las propiedades
        const pexelsImages = await fetchPexelsImages(response.data.length);

        const propertiesWithImages = response.data.map((property: Property, index: number) => ({
          ...property,
          imageUrl: pexelsImages[index], // Asignar imagen a cada propiedad
          description: property.description ?? "Propiedad sin descripción",
        }));

        setProperties(propertiesWithImages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Función para obtener múltiples imágenes aleatorias de Pexels
  const fetchPexelsImages = async (count: number) => {
    try {
      const apiKey = "ENpjlWKY6m7ZOCx7c0vVsdYrn08uc0QZEg4I45RPGirQiXcCTNJIfPW0"; // Reemplaza con tu API key de Pexels
      const response = await axios.get(
        `}`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
      
      // Extraer las URLs de las imágenes
      return response.data.photos.map((photo: any) => photo.src.large);
    } catch (error) {
      console.error("Error fetching images from Pexels:", error);
      // Si ocurre un error, devuelve una lista de imágenes predeterminadas
      return Array(count).fill("default-image-url");
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Aplicar los filtros y búsqueda
  const filteredProperties = properties.filter((property) => {
    const matchesDescription = property.description.toLowerCase().includes(searchTerm);
    const matchesPrice =
      (!filters.minPrice || property.price >= Number(filters.minPrice)) &&
      (!filters.maxPrice || property.price <= Number(filters.maxPrice));
    const matchesBedrooms = !filters.minBedrooms || property.bedrooms >= Number(filters.minBedrooms);
    const matchesArea = !filters.minArea || property.area >= Number(filters.minArea);

    return matchesDescription && matchesPrice && matchesBedrooms && matchesArea;
  });

  const loadMoreProperties = () => {
    setVisibleCount((prevCount) => prevCount + 9); // Incrementar el número de propiedades visibles
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.content_page}>
      <div className={styles.hero}>
        <h1 className={styles.title_hero}>Encuentra tu <span className={styles.span_hero}>hogar</span> perfecto</h1>
      </div>
      <div className={styles.flex}>
        {/* Sidebar de Filtros */}
        <div className={styles.sidebar}>
          <h2 className={styles.title_side}>Filtrar por</h2>
          <div>
            {/* Filtro por Precio */}
            <div className={styles.input_side}>
              <label className={styles.label_side}>Precio mínimo:</label>
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                className={styles.input}
              />
            </div>
            <div className={styles.input_side}>
              <label className={styles.label_side}>Precio máximo:</label>
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                className={styles.input}
              />
            </div>

            {/* Filtro por Habitaciones */}
            <div className={styles.input_side}>
              <label className={styles.label_side}>Habitaciones mínimas:</label>
              <input
                type="number"
                name="minBedrooms"
                value={filters.minBedrooms}
                onChange={handleFilterChange}
                className={styles.input}
              />
            </div>

            {/* Filtro por Área */}
            <div className={styles.input_side}>
              <label className={styles.label_side}>Área mínima (m²):</label>
              <input
                type="number"
                name="minArea"
                value={filters.minArea}
                onChange={handleFilterChange}
                className={styles.input}
              />
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className={styles.main_content}>
          {/* Barra de búsqueda */}
          <div className={styles.search_bar}>
            <input
              type="text"
              placeholder="Buscar propiedades por descripción"
              className={styles.find_bar}
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          {/* Grid de propiedades */}
          <div className={styles.grid}>
            {filteredProperties.length > 0 ? (
              filteredProperties.slice(0, visibleCount).map((property) => (
                <Card key={property.id} property={property} />
              ))
            ) : (
              <div>No se encontraron propiedades.</div>
            )}
          </div>

          {/* Botón para cargar más propiedades */}
          {filteredProperties.length > visibleCount && (
            <div className={styles.load_more}>
              <button
                onClick={loadMoreProperties}
                className={styles.button_more_cards}
              >
                Cargar más propiedades
              </button>
            </div>
          )}
        </div>
        
      </div>

      {/* Componente de Chat */}
      <Chat />
      
    </div>
  );
};

export default HomePage;
