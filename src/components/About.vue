<template>
  <div class="about-content" id="about">

    <select v-model="language" class="language-select">
      <option value="en">English</option>
      <option value="pt">Português</option>
      
    </select>

    <h2 v-html="texts[language].about.title"></h2>

    <div class="about" v-html="texts[language].about.description"></div>

    <div class="social-buttons">
      <a href="https://www.linkedin.com/in/victor-batista-446a99192/" target="_blank" class="social-btn">
        <i class="bi bi-linkedin" />
      </a>
      <a href="https://wa.me/5511940430289?text=Ol%C3%A1%2C%20vi%20o%20seu%20portfolio%2C%20vamos%20conversar"
        target="_blank" class="social-btn">
        <i class="bi bi-whatsapp" />
      </a>
      <a href="https://github.com/victorbatista2020?tab=repositories" target="_blank" class="social-btn">
          <i class="bi bi-github" />
        </a>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { texts } from "./locales/texts";
import { language } from "./locales/language";

export default defineComponent({
  setup() {

    return {
      language,
      texts
    };
  }
});
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

.language-select {
  align-self: flex-end;
  width: 150px;
  margin-bottom: 20px;
  padding: 5px;
  border-radius: 10px;
  border-color: red;
  background-color: black;
  color: white;
  
}
</style>