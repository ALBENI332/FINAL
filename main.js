document.querySelectorAll('.faq__question').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      const icon = item.querySelector('.faq__icon');
      answer.classList.toggle('active');
      icon.textContent = answer.classList.contains('active') ? '−' : '+';
    });
  });

  document.querySelectorAll('.mission__dec-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('.mission__dec-icon');
      
      content.classList.toggle('active');
      
      icon.textContent = content.classList.contains('active') ? '−' : '+';
    });
  });

  document.querySelectorAll('.category').forEach(category => {
    const button = category.querySelector('.toggle-btn');
    const description = category.nextElementSibling;

    category.addEventListener('click', () => {
        if (description.classList.contains('open')) {
            description.classList.remove('open');
            button.textContent = '+';
        } else {
            description.classList.add('open');
            button.textContent = '-';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.header__mark');

  navItems.forEach(item => {
      item.addEventListener('click', () => {
          const text = item.textContent.trim();
          let targetSection;

          switch (text) {
              case 'Главная':
                  targetSection = document.querySelector('.hero');
                  break;
              case 'О нас':
                  targetSection = document.querySelector('.info');
                  break;
              case 'Программа':
                  targetSection = document.querySelector('.programs');
                  break;
              case 'Поступление':
                  targetSection = document.querySelector('.process');
                  break;
              default:
                  return;
          }

          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
      });
  });


  const callUsButton = document.querySelector('.header__btn');
  callUsButton.addEventListener('click', () => {
      const phoneNumber = '996552510543'; 
      const whatsappUrl = `https://wa.me/${phoneNumber}`;
      window.open(whatsappUrl, '_blank'); 
  });
});

const callUsButton = document.querySelector('.hero__btn ');
  callUsButton.addEventListener('click', () => {
      const phoneNumber = '996552510543'; 
      const whatsappUrl = `https://wa.me/${phoneNumber}`;
      window.open(whatsappUrl, '_blank'); 
  });

