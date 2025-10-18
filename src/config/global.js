export default {
  global: {
    Name: 'Interpretación de prendas superiores infantiles para niñas ',
    Description:
      'El componente “Interpretación de prendas superiores infantiles para niñas” busca desarrollar competencias en el análisis y transformación del patrón básico, aplicado a blusas, camisas, camisetas y chaquetas infantiles. Permite que la persona en formación adquiera habilidades técnicas para adaptar moldes a diferentes diseños y contextos, fortaleciendo así su capacidad en patronaje infantil. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Patronale de prendas superiores para niñas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Blusa tipo marinero',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Blusa cuello bebe manga bombacha',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Camisera para niña',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Blusa con manga ranglan',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Jardinera para niña',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Chaqueta casual para niña',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Camiseta y camisilla básica para niña',
            hash: 't_1_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Patronaje de prendas superiores para niñas. ',
      referencia:
        'Servicio Nacional de Aprendizaje, SENA. (2021).  Interpretación prenda superior.  Ecosistema de recursos educativos.  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=10wM7sYr3wM&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
  ],
  glosario: [
    {
      termino: 'Abotonadura',
      significado:
        'abertura en el centro delantero o en otra parte de la prenda, reforzada para colocar botones y ojales.',
    },
    {
      termino: 'Bolsillo aplicado',
      significado:
        'pieza de tela añadida sobre el delantero o trasero de la prenda, con función decorativa o utilitaria.',
    },
    {
      termino: 'Camisa infantil',
      significado:
        'prenda superior estructurada, generalmente con cuello, puños y abotonadura frontal, adaptada a la morfología de las niñas.',
    },
    {
      termino: 'Camiseta',
      significado:
        'prenda básica de punto, con escote redondo o en V, manga corta o larga, utilizada en contextos casuales.',
    },
    {
      termino: 'Camisilla',
      significado:
        'prenda sin mangas, ajustada o suelta, usada como prenda interior o como prenda superior ligera.',
    },
    {
      termino: 'Chaqueta con cierre lateral',
      significado:
        'prenda superior con cruce desplazado hacia un costado, cerrada con cremallera o botones, de uso casual o semiformal.',
    },
    {
      termino: 'Escote',
      significado:
        'abertura superior de la prenda que rodea el cuello, puede variar en forma, profundidad y estilo.',
    },
    {
      termino: 'Hombro',
      significado:
        'línea inclinada que conecta el escote con la sisa, fundamental en el ajuste y caída de la prenda.',
    },
    {
      termino: 'Jardinera',
      significado:
        'prenda que combina un corpiño superior con tirantes y una falda o pantalón, de uso infantil y casual.',
    },
    {
      termino: 'Manga básica',
      significado:
        'molde inicial de la manga, construido a partir de un rectángulo y curvas de copa, que sirve de base para variaciones.',
    },
    {
      termino: 'Manga raglán',
      significado:
        'tipo de manga que se prolonga hasta el cuello mediante una línea curva, ofreciendo mayor movilidad.',
    },
    {
      termino: 'Pinza',
      significado:
        'doblez cosido en la prenda que permite dar forma y ajuste al contorno del cuerpo.',
    },
    {
      termino: 'Puño',
      significado:
        'terminación de la manga en la zona de la muñeca, puede ser recto, ajustado o decorativo.',
    },
    {
      termino: 'Sisa',
      significado:
        'abertura curva que conecta hombro y costado, destinada a la unión con la manga.',
    },
    {
      termino: 'Vista',
      significado:
        'pieza interior de refuerzo que se dobla hacia adentro en bordes como escote, sisa o abotonadura.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aldrich, W. (2009). <i>Metric pattern cutting for children’s wear and babywear: From birth to 14 years (4th ed.)</i>. Wiley-Blackwell.',
    },
    {
      referencia:
        'Bunka Fashion College. (2007). <i>Children clothes (Bunka Fashion Series: Garment Design Textbook 8)</i>. Bunka Publishing Bureau. ',
    },
    {
      referencia:
        'Cooklin, G. (1991). <i>Pattern grading for children’s clothes: The technology of sizing</i>. Wiley-Blackwell / BSP Professional Books.',
    },
    {
      referencia:
        'Crim, C. H. (2014). <i>Pattern making for kids’ clothes: All you need to know about designing, adapting, and customizing sewing patterns for children’s clothing</i>. Barron’s.',
    },
    {
      referencia:
        'Crim, C. H. (2015).<i> Patronaje de moda para niños: Todo lo que necesita saber para diseñar, adaptar y personalizar los patrones de costura</i>. Promopress.',
    },
    {
      referencia:
        'Donnanno, A. (2014). <i>Técnicas de patronaje de prendas infantiles de moda</i>. Promopress.',
    },
    {
      referencia:
        'Donnanno, A. (2021). <i>Fashion patternmaking techniques for children’s clothing: Dresses, shirts, bodysuits, trousers, jackets and coats</i>. Hoaki Books. ',
    },
    {
      referencia:
        'Ebele, L. (2021).<i> Modelagem infantil: Modele</i>. Amoler.',
    },
    {
      referencia:
        'Morgan, P. (1973). <i>Designing and pattern cutting for children’s clothes</i>. B. T. Batsford.',
    },
    {
      referencia:
        'Mukai, M. (2018). <i>Modelagem prática especial infantil</i>. (Autoedición.).',
    },
    {
      referencia:
        'Rohr, M. (1963). <i>Pattern drafting: Children’s garment design</i>. M. Rohr.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2023). <i>Normas gráficas para la señalización de patrones</i> (Boletín técnico). SENA.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: ' ',
          cargo: ' ',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: ' ',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
