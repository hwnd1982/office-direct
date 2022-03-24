const yandexMap = () => {
  const mapElement = document.getElementById('map-element');
  const position = [56.47141610231651, 85.0466343051169];
  const getIconImageSize = () => window.innerWidth > 768 ?
    [0.036979 * window.innerWidth, 0.0515625 * window.innerWidth] :
    [0.1400625 * window.innerWidth, 0.2 * window.innerWidth];
  const getIconImageOffset = () => window.innerWidth > 768 ?
    [-(0.036979 * window.innerWidth) / 2, -(0.0515625 * window.innerWidth) / 1.1] :
    [-(0.1400625 * window.innerWidth) / 2, -(0.2 * window.innerWidth) / 2];
  const getCenter = position => [position[0] + mapElement.scrollHeight*0.266*0.00001055, position[1]];

  const init = () => {
    let map = new ymaps.Map('map-element', {
      center: window.innerWidth > 768 ? getCenter(position) : position,
      zoom: 16
    });

    let placemark = new ymaps.Placemark(position, {
      balloonContent: `
        <div class="map__balloon">Академгородок</div>
      `,
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map/img/placemark.svg',
      iconImageSize: getIconImageSize(),
      iconImageOffset: getIconImageOffset(),
      // hideIconOnBalloonOpen: false,
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты

    map.geoObjects.add(placemark);

    window.addEventListener('resize', () => {
      map.setCenter(window.innerWidth > 768 ? getCenter(position) : position);
      placemark.options.set({
        iconImageSize: getIconImageSize(),
        iconImageOffset: getIconImageOffset()
      });
    });
  }

  ymaps.ready(init);
};

export default yandexMap;