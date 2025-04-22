$(document).ready(function () {
  $('#startBtn').click(function () {
    $('#startScreen').fadeOut(1000, function () {
      $('#mapLayer').fadeIn(1000);

      // Wait for the SVG to fully load
      const svgObject = document.getElementById('chinaMap');
      svgObject.addEventListener('load', function () {
        const svgDoc = svgObject.contentDocument;
        const sichuan = svgDoc.getElementById('Sichuan');

        if (sichuan) {
          // Hover effect
          sichuan.addEventListener('mouseenter', function () {
            sichuan.setAttribute('fill', '#ff7043');
            sichuan.style.cursor = 'pointer';
          });

          sichuan.addEventListener('mouseleave', function () {
            sichuan.setAttribute('fill', '#cccccc');
          });

          // Click handler
          sichuan.addEventListener('click', function () {
            window.location.href = '/sichuan/learn';
          });
        }
      });
    });
  });
});
