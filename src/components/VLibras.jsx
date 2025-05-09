import { useEffect } from 'react';

const VLibrasWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;

    script.onload = () => {
      if (window.VLibras && !window.vlibrasLoaded) {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
        window.vlibrasLoaded = true; // evitar carregar múltiplas vezes
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div vw="true" className="enabled">
      <div vw-access-button="true" className="active"></div>
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
};

export default VLibrasWidget;
