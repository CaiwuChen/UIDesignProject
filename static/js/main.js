$(document).ready(function () {
  const svgObject = document.getElementById('chinaMap');

  const provinceInfo = {
    Sichuan: "Famous for bold, spicy dishes like Mapo Tofu and Hotpot.",
    Guangdong: "Home of Cantonese cuisine—dim sum, roast meats, and soups.",
    Fujian: "Known for seafood, red yeast rice, and Buddha Jumps Over the Wall."
  };

  if (svgObject) {
    svgObject.addEventListener('load', function () {
      const svgDoc = svgObject.contentDocument;
      const sichuan = svgDoc.getElementById('Sichuan');
      const guangdong = svgDoc.getElementById('Guangdong');
      const fujian = svgDoc.getElementById('Fujian');

      const infoPanel = $('#infoPanel');

      function setupHover(region, name, color, url) {
        if (!region) return;

        region.addEventListener('mouseenter', function () {
          region.setAttribute('fill', color);
          region.style.cursor = 'pointer';
          infoPanel.html(`<strong>${name}</strong><br>${provinceInfo[name]}`);
        });

        region.addEventListener('mouseleave', function () {
          region.setAttribute('fill', '#fc0303');
          infoPanel.html(`<strong>Hover over a province</strong><br>to learn about its cuisine.`);
        });

        region.addEventListener('click', function () {
          window.location.href = url;
        });
      }

      setupHover(sichuan, 'Sichuan', '#ff7043', '/sichuan/learn');
      setupHover(guangdong, 'Guangdong', '#3498db', '/yue/learn');
      setupHover(fujian, 'Fujian', '#3498db', '/min/learn');
    });
  }
});
