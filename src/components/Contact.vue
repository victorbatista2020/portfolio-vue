<template>
  <div class="contact-content" id="contact">
    <h1>MEUS <span>CONTATOS</span></h1>

    <div class="social-media">
      <p> Para mais informações sobre os meus projetos e quais tecnologias foram utilizadas, basta acessar o meu
        <span>Repositorio</span> no github</p>
      E para entrar em contato comigo basta clicar em um dos links abaixo que eu estarei a sua disposição
      <div class="social-buttons">
        <a href="https://www.linkedin.com/in/seu-usuario" target="_blank" class="social-btn">
          <i class="bi bi-linkedin" />
        </a>
        <a href="https://wa.me/5511940430289?text=Ol%C3%A1%2C%20vi%20o%20seu%20portfolio%2C%20quero%20te%20contratar"
          target="_blank" class="social-btn">
          <i class="bi bi-whatsapp"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

.social-media{
  padding-top: 10px;
}

.contact-content {
  text-align: center;
  margin-right: 5px;
  margin-left: 5px;
  padding-bottom: 50px;
  padding-top: 20px;
  background-color: rgb(24, 20, 20);
}

</style>