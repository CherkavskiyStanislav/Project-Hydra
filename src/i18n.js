import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
      translation: {
        //Navbar
        'navbar-menu-about': 'ABOUT',
        'navbar-menu-services': 'SERVICES',
        'navbar-menu-tech': 'TECHNOLOGIES',
        'navbar-menu-how': 'HOW TO',
        'navbar-buttons-contact': 'CONTACT US',
        'navbar-buttons-join': 'JOIN HYDRA',
        //Main-section
        'main-section__right-sidebar': 'Dive Into The Depths Of Virtual Reality',
        'main-section__right-text':'We invite you on an exhilarating journey where you can forget the limitations of the physical world and gradually explore the virtual realms. Experience how your senses absorb captivating visual effects, vibrant colors, and enthralling details that transform ordinary reality into a marvelous world of fantasies and incredible possibilities.',
        'main-section__right-sidebar__btn': 'BUILD YOUR WORLD',
        //Contact-section
        'address': 'Pay Us a Visit',
        'phone': 'Give Us a Call',
        'email': 'Send Us a Message',
        //About
        'about__introduction-h2': 'INTRODUCTION',
        'about__introduction-h3': 'TO HYDRA VR',
        'about__introduction-p': 'Welcome to the world of HYDRA VR, where innovation meets immersion. Prepare to embark on a thrilling adventure into the realm of virtual reality like never before. With state-of-the-art technology and cutting-edge experiences, HYDRA VR redefines your perception of reality. Discover a captivating universe filled with mind-bending visuals, interactive environments, and limitless possibilities. Get ready to redefine your reality with HYDRA VR.',
        'about__info-h2':'ABOUT',
        'about__info-h3':'HYDRA VR',
        'about__info-p':'At HYDRA VR, we are passionate about pushing the boundaries of what\'s possible in virtual reality. With a dedicated team of visionaries and experts, we strive to deliver the most captivating and immersive VR experiences. Our mission is to create a bridge between the real and virtual worlds, providing an escape into a realm where imagination knows no limits. By harnessing the power of cutting-edge technology, we unlock new dimensions of entertainment, education, and creativity. HYDRA VR caters to all interests and age groups, offering a diverse range of content and experiences. Join us on this extraordinary journey as we continue to pioneer the future of virtual reality. Together, let\'s redefine reality and unlock the true potential of this remarkable technology.',
        'about__info-btn':'LET\'S GET IN TOUCH',
        //Build
        'build__why-h2': 'WHY BUILD',
        'build__why-h3': 'WITH HYDRA?',
        'build__why-p': 'With a diverse range of content and experiences, HYDRA VR caters to all interests and age groups. From breathtaking adventures to educational simulations and artistic expressions, our platform offers a vast collection of experiences that cater to every taste and preference.',
        'build__why-btn': 'TRY IT NOW',
        //Technologies
        'technologies-first-h':'TECHNOLOGIES & HARDWARE',
        'technologies-second-h':'USED BY HYDRA VR.',
        //Process
        'process-h2':'HOW WE BUILD',
        'process-h3':'WITH HYDRA VR?',
        'process-p':'We place special emphasis on quality and innovation in the creation process. Our team of talented developers, designers and technical experts work together to deliver the most extraordinary and immersive virtual experiences.',
        'cards-first-p': '3D Conception',
        'cards-first-p2': '& Design',
        'cards-second-p': 'Interaction',
        'cards-second-p2': 'Design',
        'cards-tird-p': 'VR World',
        'cards-tird-p2': 'User Testing',
        'cards-fourth-p': 'Hydra',
        'cards-fourth-p2': 'VR Deploy',
        //Registration
        'form__title-h2':'JOIN HYDRA',
        'form__title-h3':'Let’s Build Your VR Experience',
        'form__title-btn':'SEND TO HYDRA',
        //Footer
        'footer_nav_link1':'ABOUT',
        'footer_nav_link2':'SERVICES',
        'footer_nav_link3':'TECHNOLOGIES',
        'footer_nav_link4':'HOW TO',
        'footer_nav_link5':'JOIN HYDRA',
        'footer_bar_link1':'F.A.Q',
        'footer_bar_link2':'SITEMAP',
        'footer_bar_link3':'CONDITIONS',
        'footer_bar_link4':'LICENSES',
        'footer_media_h2':'SOCIALIZE WITH HYDRA',
        'footer_media_btn':'BUILD YOUR WORLD',
      },
    },
    ua: {
      translation: {
        // Navbar
        'navbar-menu-about': 'ПРО',
        'navbar-menu-services': 'СЕРВІСИ',
        'navbar-menu-tech': 'ТЕХНОЛОГІЇ',
        'navbar-menu-how': 'ЯК ВИКОРИСТОВУВАТИ',
        'navbar-buttons-contact': 'ЗВ\'ЯЖІТЬСЯ З НАМИ',
        'navbar-buttons-join': 'ПРИЄДНАЙСЯ ДО HYDRA',    
        //Main-section
        'main-section__right-sidebar': ' Пориньте в глибини  віртуальної реальності',
        'main-section__right-text':'Запрошуємо вас на захоплюючу подорож, де ви зможете забути про обмеження фізичного світу та покроково відкривати віртуальні грані. Відчуйте, як ваші сенсори поглинають захоплюючі візуальні ефекти, яскраві кольори та захоплюючі деталі, що перетворюють звичайну реальність на дивовижний світ фантазій та неймовірних можливостей.',
        'main-section__right-sidebar__btn': 'БУДУЙ СВІЙ СВІТ',
        //Contact-section
        'address': 'Завітайте до нас',
        'phone': 'Зателефонуйте нам',
        'email': 'Надішліть нам повідомлення',
        //About
        'about__introduction-h2': 'ЗНАЙОМСТВО',
        'about__introduction-h3': 'З HYDRA VR',
        'about__introduction-p': 'Ласкаво просимо у світ HYDRA VR, де інновація зустрічається з поглинанням. Підготуйтеся до захоплюючої подорожі у світ віртуальної реальності, як ніколи раніше. Завдяки передовій технології та передовим досвідам, HYDRA VR переосмислює ваше сприйняття реальності. Відкрийте захоплюючий всесвіт з фантастичними візуальними ефектами, інтерактивними середовищами та безмежними можливостями. Нехай починається подорож!',
        'about__info-h2':'ПРО',
        'about__info-h3':'HYDRA VR',
        'about__info-p':'В HYDRA VR ми пристрасно працюємо над розширенням меж того, що можливо у віртуальній реальності. За допомогою присвяченої команди візіонерів та експертів, ми прагнемо створювати найзахоплюючіші та поглинаючі віртуальні досвіди. Наша місія полягає у створенні моста між реальним і віртуальним світами, надаючи можливість перебувати у світі, де уява знаходиться без меж. Завдяки передовій технології ми розкриваємо нові горизонти розваг, освіти та творчості. HYDRA VR відповідає на потреби різних інтересів та вікових груп, пропонуючи різноманітні контент і досвіди. Приєднуйтесь до нас у цій неймовірній подорожі, коли ми продовжуємо піонерську роль у майбутньому віртуальної реальності. Разом змінимо світосприйняття та розкриємо справжній потенціал цієї надзвичайної технології.',
        'about__info-btn': 'БУДЕМО НА ЗВ\'ЯЗКУ',
        //Build
        'build__why-h2': 'ЧОМУ БУДУЄМО',
        'build__why-h3': 'З HYDRA?',
        'build__why-p': 'Завдяки різноманітному вмісту та досвіду, HYDRA VR задовольняє всі інтереси та вікові групи. Від захоплюючих пригод до освітніх симуляцій і мистецьких виразів наша платформа пропонує величезну колекцію вражень на будь-який смак і вподобання.',
        'build__why-btn': 'СПРОБУЙ ЗАРАЗ',
        //Technologies
        'technologies-first-h':'ТЕХНОЛОГІЇ ТА ЗАБЕЗПЕЧЕННЯ',
        'technologies-second-h':'ЯКІ ВИКОРИСТОВУЄ HYDRA VR.',
        //Process
        'process-h2':'ВИ ДОСІ БУДУЄТЕ',
        'process-h3':'З HYDRA VR?',
        'process-p':'Ми покладаємо особливий акцент на якість та інновації у процесі створення. Наша команда талановитих розробників, дизайнерів та технічних експертів працює разом, щоб забезпечити найбільш надзвичайні та захоплюючі віртуальні досвіди.',
        'cards-first-p': '3D Концепція',
        'cards-first-p2': '& Дизайн',
        'cards-second-p': 'Взаємодія',
        'cards-second-p2': 'Дизайн',
        'cards-tird-p': 'VR Тестування',
        'cards-tird-p2': 'Користувача',
        'cards-fourth-p': 'Hydra VR',
        'cards-fourth-p2': 'Розгортання',
        //Registration
        'form__title-h2':'ПРИЄДНУЙСЯ ДО HYDRA',
        'form__title-h3':'Давайте створимо ваш досвід VR',
        'form__title-btn':'ВІДПРАВИТИ',
        //Footer
        'footer_nav_link1':'ПРО',
        'footer_nav_link2':'ПОСЛУГИ',
        'footer_nav_link3':'ТЕХНОЛОГІЇ',
        'footer_nav_link4':'ЯК',
        'footer_nav_link5':'ПРИЄДНАТИСЬ',
        'footer_bar_link1':'F.A.Q',
        'footer_bar_link2':'КАРТА САЙТУ',
        'footer_bar_link3':'УМОВИ',
        'footer_bar_link4':'ЛІЦЕНЗІЇ',
        'footer_media_h2':'СОЦІАЛІЗУЙТЕСЬ З HYDRA',
        'footer_media_btn':'БУДУЙ СВІЙ СВІТ',
      },
    },
  };
  
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      keySeparator: false,
      interpolation: {
        escapeValue: false,
      },
    });
  
  export default i18n;