<template>
  <div class="about-content" id="about">

    <div class="top-selects">
      <!--
      <select  class="darklight-select">
        <option value="Dark">Dark</option>
        <option value="light">Light</option>
      </select>
      -->

      <select v-model="language" class="language-select">
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </div>

    <h2 v-html="texts[language].about.title"/>

    <div class="about" v-html="texts[language].about.description"/>

    <div class="resume-container">
      <a :href="language === 'pt'
        ? '/portfolio-vue/curriculo-Victor-Batista.pdf'
        : '/portfolio-vue/resume-Victor-Batista.pdf'" download class="resume-btn">
        {{ texts[language].about.resumeButton }}
      </a>
    </div>

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

</style>