import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './carousel.css';
import { Pagination, Navigation } from 'swiper/modules';

const items = [
  { id: 1, image: "src/assets/Foto.png", title: 'Pipoca (P)', price: 'R$ 11,99', description: 'Nada diz "cinema" como o aroma inconfundível de pipoca estourando. E quando se trata de uma porção de pipoca pequena, a magia se torna ainda mais irresistível. Imagine uma explosão de sabores em miniatura, onde cada grão é um pedacinho de felicidade.' },
  { id: 2, image: "src/assets/Foto.png", title: 'Pipoca (G)', price: 'R$ 13,99', description: 'No reino da experiência cinematográfica, uma rainha reina supremamente: a pipoca grande, uma verdadeira protagonista em cada tela de prata. Ela transcende o mero lanche e se transforma em uma jornada culinária que rivaliza com as tramas mais emocionantes.' },
  { id: 3, image: "src/assets/Promo.png", title: 'Duo Pipoca (M) + Refri', price: 'R$ 16,99', description: 'O "Duo Pipoca + Refri" é mais do que um lanche; é uma tradição que traz à tona as melhores lembranças de ir ao cinema. Compartilhado entre amigos, dividido com a família ou desfrutado em momentos de autocuidado, este combo é um símbolo da felicidade encontrada nos momentos mais simples.' },
];

export function Carousel() {
  const swiperRef = useRef(null); // Cria a referência para o Swiper

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="slider-container">
      <button onClick={handlePrev} className='prev'>
        <img src="src/assets/Left.svg" alt="Anterior" />
      </button>
      <Swiper
        ref={swiperRef} // Passa a referência para o Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {items.map(item => (
          <SwiperSlide key={item.id}>
            <div className='fundo'>
              <img src={item.image} alt={item.title} />
              <div className='textos'>
                <h1>{item.title}</h1>
                <h2>{item.price}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={handleNext} className='next'>
        <img src="src/assets/Right.svg" alt="Próximo" />
      </button>
    </div>
  );
}

