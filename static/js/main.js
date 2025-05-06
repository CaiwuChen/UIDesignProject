$(document).ready(function () {
  const svgObject = document.getElementById('chinaMap');

  const provinceInfo = {
    Sichuan: {
      text: "Located in the Sichuan Basin, this inland province's humid climate encourages the use of bold spices and Sichuan peppercorns.",
      image: "/static/images/sichuan.jpg"
    },
    Guangdong: {
      text: "Situated in southern coastal China, Guangdong benefits from abundant seafood and a subtropical climate.",
      image: "/static/images/guangdong.jpg"
    },
    Fujian: {
      text: "Fujian’s long coastline and mountainous terrain yield both seafood and herbs. A cuisine of balance and depth.",
      image: "/static/images/fujian.jpeg"
    },
    Shandong: {
      text: "Northern and coastal, Shandong cuisine thrives on grains and seafood, celebrated for rich soups and bold stir-fries.",
      image: "/static/images/shandong.png"
    }
  };

  if (svgObject) {
    svgObject.addEventListener('load', function () {
      const svgDoc = svgObject.contentDocument;
      const sichuan = svgDoc.getElementById('Sichuan');
      const guangdong = svgDoc.getElementById('Guangdong');
      const fujian = svgDoc.getElementById('Fujian');
      const shandong = svgDoc.getElementById('Shandong');

      const infoPanel = $('#infoPanel');
      infoPanel.hide(); // Hide initially

      function setupHover(region, name, color, url) {
        if (!region) return;
        const originalFill = region.getAttribute('fill');

        region.addEventListener('mouseenter', function () {
          region.setAttribute('fill', color);
          region.style.cursor = 'pointer';
          infoPanel.html(`
            <strong>${name}</strong><br>
            <img src="${provinceInfo[name].image}" alt="${name}" style="width: 100%; border-radius: 6px; margin: 10px 0;">
            ${provinceInfo[name].text}
          `);
          
          infoPanel.show();
        });

        region.addEventListener('mouseleave', function () {
          region.setAttribute('fill', originalFill);
          infoPanel.hide();
        });

        region.addEventListener('click', function () {
          window.location.href = url;
        });
      }

      setupHover(sichuan, 'Sichuan', '#ff7043', '/sichuan/learn');
      setupHover(guangdong, 'Guangdong', '#dcedc1', '/yue/learn');
      setupHover(fujian, 'Fujian', '#6495ED', '/min/learn');
      setupHover(shandong, 'Shandong', '#8B4513', '/lu/learn');
    });
  }
});
