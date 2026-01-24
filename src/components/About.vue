<template>
  <div class="about-content" id="about">
    <h2>Oi TUDO BEM,<br><span>SOU VICTOR BATISTA</span></h2>
    <div class="about">

      Meu nome é Victor Batista, tenho graduação em Ciencia da Computação na Universidade Paulista (UNIP),
      sou desenvolvedor <span><b>Full Stack( Front-end + back-end)</b></span>, tenho habiliades com o
      ,<span><b>VUE.JS</b></span> para desenvolvedor projetos Front-end,
      e utilizo o <span><b>JAVA</b></span> para criar os projetos de back-end


    </div>
    <div class="social-buttons">
      <a href="https://www.linkedin.com/in/victor-batista-446a99192/" target="_blank" class="social-btn">
        <i class="bi bi-linkedin" />
      </a>
      <a href="https://wa.me/5511940430289?text=Ol%C3%A1%2C%20vi%20o%20seu%20portfolio%2C%20quero%20te%20contratar"
        target="_blank" class="social-btn">
        <i class="bi bi-whatsapp" />
      </a>
    </div>

  </div>
</template>


<script lang="ts">
</script>

<style scoped>
.about-content {
  padding: 90px 5%;
  margin: 0 5px;
  padding-top: 100px;
  background-color: rgb(8, 7, 7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  font-size: 20px;
}

.about-content .about {
  padding-top: 30px;
}

.social-buttons {
  padding-top: 50px;
  display: flex;
  gap: 15px;
  justify-content: left;
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
