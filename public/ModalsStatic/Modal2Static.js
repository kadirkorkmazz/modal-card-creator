/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
function Pop(params) {
  let cssRuleFile = 'tobechanged/cssfileofmodal2';
  let lnk = document.createElement('link');
  lnk.setAttribute('rel', 'stylesheet');
  lnk.setAttribute('type', 'text/css');
  lnk.setAttribute('href', cssRuleFile);
  document.getElementsByTagName('head')[0].appendChild(lnk);

  let clickData = [];
  function positionSelector(position) {
    switch (position) {
      case 1:
        return 'transform-origin:top left; top:0; left:0';
      case 2:
        return 'transform-origin:top; top:0;';
      case 3:
        return 'transform-origin:top right; top:0; right:0';
      case 4:
        return 'transform-origin:left ; left:0;';
      case 6:
        return 'transform-origin:right ; right:0;';
      case 7:
        return 'transform-origin:bottom left ; bottom:0; left:0';
      case 8:
        return 'transform-origin:bottom ; bottom:0;';
      case 9:
        return 'transform-origin:bottom right ; bottom:0; right:0';
      default:
        return 'transform-origin:center';
    }
  }

  function handleScale(size, deviceType) {
    if (deviceType === 'mobile') {
      switch (size) {
        case 1:
          return 0.5;
        case 2:
          return 0.6;
        case 3:
          return 0.7;
        default:
          return 0.6;
      }
    } else {
      switch (size) {
        case 1:
          return 0.8;
        case 2:
          return 1;
        case 3:
          return 1.2;
        default:
          return 1;
      }
    }
  }

  this.init = function (params) {
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');

    overlay.addEventListener('click', (e) => {
      clickData.push(e.target);
      console.log(clickData);
    });

    let popup = document.createElement('div');
    popup.classList.add('popup');
    popup.style = positionSelector(params.position);
    popup.style.scale = handleScale(params.size, params.deviceType);

    let topContent = document.createElement('div');
    topContent.classList.add('topContent');

    topContent.innerHTML = ` <img
    src="${
      params.contentImg !== undefined && params.contentImg !== ''
        ? params.contentImg
        : 'https://upcdn.io/W142hJk6qgda4Fqv7fPahGX'
    }"
    alt="topContent"
    class="topContentImg"
  />`;

    let bottomContent = document.createElement('div');
    bottomContent.classList.add('bottomContent');

    let close = document.createElement('div');
    close.classList.add('close');

    document.body.appendChild(overlay);
    overlay.appendChild(popup);
    popup.appendChild(topContent);
    popup.appendChild(bottomContent);
    popup.appendChild(close);

    bottomContent.innerHTML = `<h3>${params.title}</h3>
    <p>${params.subtitle}</p> `;

    let button1 = document.createElement('button');
    let button2 = document.createElement('button');

    button1.style.backgroundColor = params.backgroundColor;
    button1.style.color = params.color;

    button1.innerHTML = params.button1;
    button2.innerHTML = params.button2;

    bottomContent.appendChild(button1);
    bottomContent.appendChild(button2);

    close.innerHTML = `<svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M18 3.00001C15.0333 3.00001 12.1332 3.87974 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2598C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33.0018 16.0297 32.6151 14.0783 31.8619 12.2576C31.1088 10.4369 30.004 8.78254 28.6107 7.3893C27.2175 5.99605 25.5632 4.89123 23.7424 4.13806C21.9217 3.38489 19.9704 2.99816 18 3.00001ZM18 30C15.6266 30 13.3066 29.2962 11.3332 27.9776C9.35977 26.6591 7.8217 24.7849 6.91345 22.5922C6.0052 20.3995 5.76756 17.9867 6.23058 15.6589C6.69361 13.3312 7.8365 11.193 9.51473 9.51473C11.193 7.8365 13.3312 6.69361 15.6589 6.23058C17.9867 5.76756 20.3995 6.0052 22.5922 6.91345C24.7849 7.8217 26.6591 9.35977 27.9776 11.3332C29.2962 13.3066 30 15.6266 30 18C29.9958 21.1813 28.7301 24.2311 26.4806 26.4806C24.2311 28.7301 21.1813 29.9958 18 30ZM23.385 10.5L18 15.885L12.615 10.5L10.5 12.615L15.885 18L10.5 23.385L12.615 25.5L18 20.115L23.385 25.5L25.5 23.385L20.115 18L25.5 12.615L23.385 10.5Z"
      fill="black"
    />
  </svg>`;

    close.addEventListener('click', () => {
      overlay.classList.remove('show');
      overlay.classList.add('showed');
    });

    if (params.afterSeconds !== null) {
      setTimeout(() => {
        overlay.classList.contains('showed')
          ? null
          : overlay.classList.add('show');
      }, params.afterSeconds * 1000);
    }

    if (params.afterScroll !== null) {
      let scrollDivisor = 100 / params.afterScroll;
      window.addEventListener('scroll', () => {
        if (
          window.scrollY + window.innerHeight >=
          (document.body.offsetHeight - 100) / scrollDivisor
        ) {
          overlay.classList.contains('showed')
            ? null
            : overlay.classList.add('show');
        }
      });
    }

    if (params.exitIntent) {
      document.addEventListener('mouseout', (e) => {
        if (!e.toElement && !e.relatedTarget) {
          document.querySelector('.overlay').classList.contains('showed')
            ? null
            : document.querySelector('.overlay').classList.add('show');
        }
      });
    }

    if (
      params.trafficSource !== null &&
      document.referrer !== params.trafficSource
    ) {
      document.querySelector('.overlay').classList.contains('showed')
        ? null
        : document.querySelector('.overlay').classList.add('showed');
    }
  };
}

window.start = new Pop();
