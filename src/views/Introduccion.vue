<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade")
      .col-lg-6.mb-0(data-aos="fade-left")
        img.img-a.img-t(src="@/assets/curso/temas/1.png")
      .col-lg-6
        p La interpretación de prendas infantiles para niñas se orienta al análisis y aplicación de transformaciones sobre el patrón base, con el propósito de construir blusas, camisas, camisetas, chaquetas y variaciones creativas. Cada interpretación brinda a la persona en formación la posibilidad de desarrollar competencias técnicas que le permitan transformar un molde inicial en diseños concretos, incorporando recursos como pinzas, vistas, bolsillos, cuellos y mangas, elementos que aportan carácter y valor agregado a las prendas. 
        .row.align-items-center
          .col-lg-auto.my-0.my-md-4.my-sm-4(data-aos="fade-right")
            img.img-a.img-t(src="@/assets/curso/temas/3.svg")
          .col-lg(data-aos="fade-left")
            p.mb-0 La importancia de este proceso radica en que la interpretación de diseños trasciende lo meramente estético: se constituye en una estrategia metodológica que permite comprender cómo un patrón puede adaptarse a diferentes necesidades, estilos y contextos de uso. De este modo, se fortalece la capacidad de análisis, la destreza en el trazo y la visión integral del diseño infantil como un campo de aplicación con gran proyección en la industria de la confección. 
    
    .bg-color-1.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-center
        .col-lg-auto.my-0.my-md-4.my-sm-4(data-aos="fade-right")
          img.img-a.img-t(src="@/assets/curso/temas/2.svg")
        .col-lg(data-aos="fade-left")    
          p.mb-0 La formación en interpretación de prendas superiores infantiles para niñas, dentro de la oferta de formación complementaria del SENA, contribuye a la cualificación del talento humano en áreas específicas del sistema moda; este proceso ofrece herramientas prácticas y aplicables que potencian tanto las competencias técnicas individuales como el fortalecimiento del sector productivo. A su vez, fomenta la inserción laboral, estimula el emprendimiento y asegura que las personas aprendices respondan de manera pertinente a las demandas actuales de la industria de la moda infantil en Colombia.  

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/u1ic0rg8Epc?si=VpEEWU_SWrKgXCXP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        caption Video. Interpretación de prendas superiores infantiles para niñas



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
