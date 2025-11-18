<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 A continuación, se presenta un esquema que sintetiza los elementos clave del componente formativo interpretación de prendas superiores infantiles para niñas. El organigrama representa la interpretación de prendas superiores para niñas a partir del patronaje, mostrando diferentes tipologías que se pueden desarrollar. Desde la categoría principal se desprenden seis tipos de prendas: blusa tipo marinero, blusa con cuello bebé y manga bombacha, camisera, blusa con manga raglán, jardinera, chaqueta casual y camiseta o camisilla básica. La estructura esquemática organiza de manera jerárquica los estilos de prendas, facilitando la comprensión de las variaciones de diseño que se trabajan en el patronaje infantil. 
    
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis presentada organiza el tema de la interpretación de prendas superiores infantiles para niñas a partir del patronaje como eje central, destacando diversas tipologías que permiten aplicar transformaciones al patrón base. Entre estas se incluyen la blusa tipo marinero, la blusa cuello bebé con manga bombacha, la camisera, la blusa con manga raglán, la jardinera, la chaqueta casual y la camiseta o camisilla básica, todas ellas concebidas como alternativas técnicas y creativas que fortalecen el aprendizaje en el diseño y confección de moda infantil.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
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
