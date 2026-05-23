<template>
  <div class="contact-content" id="contact">
    <h1>{{ texts[language].contact.title.split(" ")[0] }}
      <span>{{ texts[language].contact.title.split(" ").slice(1).join(" ") }}</span></h1>

    <div class="social-media">
      <p>
        {{ texts[language].contact.text1 }}

        <span><a href="https://github.com/victorbatista2020?tab=repositories" target="_blank">{{ texts[language].contact.repo }}</a></span>

        {{ texts[language].contact.text2 }}
      </p>

      <p>
        {{ texts[language].contact.text3 }}
      </p>
      <div class="social-buttons">
        <a href="https://www.linkedin.com/in/victor-batista-446a99192/" target="_blank" class="social-btn">
          <i class="bi bi-linkedin" />
        </a>
        <a href="https://wa.me/5511940430289?text=Ol%C3%A1%2C%20vi%20o%20seu%20portfolio%2C%20vamos%20conversar"
          target="_blank" class="social-btn">
          <i class="bi bi-whatsapp"/>
        </a>
        <a href="https://github.com/victorbatista2020?tab=repositories" target="_blank" class="social-btn">
          <i class="bi bi-github" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { texts } from './locales/texts';
import { language } from "./locales/language";
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