const fontSizeSlider = document.getElementById('fontSizeSlider');
const sliderLabel = document.getElementById('sliderLabel');
const body = document.body;

fontSizeSlider.addEventListener('input', () => {
  let fontSize;
  let label;

  switch (fontSizeSlider.value) {
    case '1':
      fontSize = '14px';
      label = 'Small';
      break;
    case '2':
      fontSize = '16px';
      label = 'Medium';
      break;
    case '3':
      fontSize = '18px';
      label = 'Large';
      break;
  }

  body.style.fontSize = fontSize;
  sliderLabel.textContent = label;
});
