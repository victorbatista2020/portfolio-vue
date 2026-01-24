<template>
  <div class="contact-content" id="contact">
    <h1>MEUS <span>CONTATOS</span></h1>

    <div class="whatsapp">

    </div>

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
.contact-content h1 {
  text-align: center;
  padding-top: 20px;
}

.contact-content {
  text-align: center;
  margin-right: 5px;
  margin-left: 5px;
  padding-bottom: 50px;
  padding-top: 10px;
  background-color: rgb(24, 20, 20);
}

.whatsapp {
  margin-top: 20px;
}

.whatsapp-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background-color: #036b29;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.whatsapp-button:hover {
  background-color: #1ebe5d;
}

.whatsapp-button img {
  width: 24px;
  height: 24px;
}

.social-buttons {
  padding-top: 50px;
  display: flex;
  gap: 15px;
  justify-content: center;
}

.social-btn {
  background-color: red;
  color: rgb(2, 2, 2);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  transition: background-color 0.3s, transform 0.3s;
}

.social-btn:hover {
  background-color: darkred;
  transform: scale(1.1);
}
</style>