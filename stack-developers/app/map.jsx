'use client';

import { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const UkraineMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [geoData, setGeoData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('./ukraine-map.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setGeoData(data);
        console.log(data); // Додайте цей рядок
      })
      .catch((error) => {
        console.error('Помилка завантаження GeoJSON:', error);
        setError('Не вдалося завантажити мапу. Спробуйте оновити сторінку.');
      });
  }, []);

  const regionsData = {
    'Хмельницька область': {
      schools: 1,
      roads: '0 км',
      hospitals: 0,
      residential: '0 млн кв.м',
    },
    'Київська область': {
      schools: 5,
      roads: '120 км',
      hospitals: 2,
      residential: '1.5 млн кв.м',
    },
    // Додайте інші області...
  };

  if (error) {
    return <div className='text-red-500 p-4'>{error}</div>;
  }

  if (!geoData) {
    return <div className='p-4'>Завантаження мапи...</div>;
  }

  return (
    <div className='relative w-full h-[60vh]'>
      <ComposableMap
        projection='geoMercator'
        projectionConfig={{
          center: [31, 48.5], // Оптимізований центр
          scale: 2500, // Оптимізований масштаб
        }}
        width={1000} // Додано фіксовану ширину
        height={1000} // Додано фіксовану висоту
      >
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              //   const regionName = geo.properties.NAME_1;
              const regionName = geo.properties.VARNAME_1;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => setSelectedRegion(regionName)}
                  style={{
                    default: {
                      fill:
                        selectedRegion === regionName ? '#003366' : '#6B8ED6',
                      outline: 'none', // Прибираємо outline
                      stroke: '#FFFFFF',
                      strokeWidth: 0.5,
                    },
                    hover: {
                      fill: '#003366',
                      cursor: 'pointer',
                      outline: 'none', // Прибираємо outline
                      stroke: '#FFFFFF',
                      strokeWidth: 0.5,
                    },
                    pressed: {
                      fill: '#001F3F',
                      outline: 'none', // Прибираємо outline
                      stroke: '#FFFFFF',
                      strokeWidth: 0.5,
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {selectedRegion && (
        <div className='absolute bottom-4 left-4 bg-white p-4 shadow-lg rounded-lg max-w-xs border border-gray-200'>
          <h3 className='text-lg font-bold mb-2'>{selectedRegion}</h3>
          <div className='space-y-1'>
            {regionsData[selectedRegion] ? (
              <>
                <p className='flex items-center gap-2'>
                  <span></span>
                  <span>Школи: {regionsData[selectedRegion].schools}</span>
                </p>
                <p className='flex items-center gap-2'>
                  <span></span>
                  <span>Дороги: {regionsData[selectedRegion].roads}</span>
                </p>
                <p className='flex items-center gap-2'>
                  <span></span>
                  <span>Лікарні: {regionsData[selectedRegion].hospitals}</span>
                </p>
                <p className='flex items-center gap-2'>
                  <span></span>
                  <span>
                    Житлова площа: {regionsData[selectedRegion].residential}
                  </span>
                </p>
              </>
            ) : (
              <p>У цій області допомоги не потрібно</p>
            )}
          </div>
          <button
            onClick={() => setSelectedRegion(null)}
            className='mt-3 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
          >
            Закрити
          </button>
        </div>
      )}
    </div>
  );
};

export default UkraineMap;
