<template>
   <div class="projects-content" id="projects">
      <h1>{{ texts[language].projects.title.split(" ")[0] }} <span>{{ texts[language].projects.title.split(" ").slice(1).join(" ") }}</span></h1>

      <div class="projects">

         <div class="projects-item"><a href="https://victorbatista2020.github.io/calculadora-imc/" target="blank">
               <h2><span>{{ texts[language].projects.imc.title }}</span></h2>
               <img src="@/components/imgs/projects/calculadora-imc.png">
               <p class="text"> {{ texts[language].projects.imc.text }}</p>
               <p class="second-text"> {{ texts[language].projects.imc.tech }} </p>
            </a>
            <a class="repo-button" href="https://github.com/seu-usuario/repositorio-imc" target="_blank"
            >{{ texts[language].projects.repo }}</a>
         </div>

         <div class="projects-item"><a href="https://victorbatista2020.github.io/lojatemplate/" target="blank">
               <h2><span>{{ texts[language].projects.salon.title }}</span></h2>
               <img src="@/components/imgs/projects/salao-template.png">
               <p class="text"> {{ texts[language].projects.salon.text }}</p>
               <p class="second-text"> {{ texts[language].projects.salon.tech }} </p>
            </a>
            <a class="repo-button" href="https://github.com/seu-usuario/repositorio-imc" target="_blank"
            >{{ texts[language].projects.repo }}</a>
         </div>

         <div class="projects-item"><a href="" target="blank">
               <h2><span>{{ texts[language].projects.coming.title }}</span></h2>
               <img src="">
               <p class="text"> {{ texts[language].projects.coming.text }} </p>
               <p class="second-text"> </p>
            </a>
            <a class="repo-button" href="" target="_blank"
            >{{ texts[language].projects.repo }}</a>
         </div>

         <div class="projects-item"><a href="" target="blank">
               <h2><span>{{ texts[language].projects.coming2.title }}</span></h2>
               <img src="">
               <p class="text">{{ texts[language].projects.coming2.text }}</p>
               <p class="second-text">  </p>
            </a>
            <a class="repo-button" href="" target="_blank"
            >{{ texts[language].projects.repo }}</a>
         </div>

      </div>
   </div>
</template>
<script setup lang="ts">
import { texts } from './locales/texts';
import { language } from "./locales/language";
</script>
<style scoped>
.second-text {
   text-align: left;
   padding-top: 20px;
}

.projects {
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
   justify-content: justify;
   padding-top: 40px;
}

.projects-content {
   padding: 90px 5%;
   margin: 0 5px;
   padding-top: 20px;
   background-color: rgb(0, 0, 0);
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size: 20px;
}

.projects-item {
   flex: 1 1 calc(33.333% - 10px);
   box-sizing: border-box;
   padding: 10px;
   padding-top: 30px;
   text-align: center;
   border: 1px solid #f30000;
   border-radius: 5px;
   min-width: 250px;
   max-height: 550px;
   min-height: 150px;
}

.projects-item:hover {
   transform: scale(1.05);
   box-shadow: 0 0 15px #e24d4d;
}

.projects-item img {
   padding: 10px;
   max-height: 200px;
   min-width: 200px;
}

.projects-item a {
   text-decoration: none;
   color: inherit;
   display: block;
}

.repo-button {
   margin-top: 15px;
   display: inline-block !important;
   padding: 10px 20px;
   background-color: #f30000;
   color: white !important;
   border-radius: 5px;
   font-weight: bold;
   transition: 0.3s;
}

.repo-button:hover {
   background-color: #ff4d4d;
   transform: scale(1.05);
}
</style>