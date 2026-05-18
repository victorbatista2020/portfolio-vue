<template>
    <div class="skills-content" id="skills">
        <h1 class="h1">{{ texts[language].skills.title.split(" ")[0] }} <span>{{ texts[language].skills.title.split(" ").slice(1).join(" ") }}</span></h1>

        <div class="skills">
            <div class="skills-item">
                <h2><span>Vue.js</span></h2>
                <img src="@/components/imgs/skills/vue.png">
                <p class="text"> {{ texts[language].skills.vue.text }}</p>
            </div>

            <div class="skills-item">
                <h2><span>JAVA</span></h2>
                <img src="@/components/imgs/skills/java.png">
                <p class="text"> {{ texts[language].skills.java.text }}s </p>
            </div>

            <div class="skills-item">
                <h2><span>PostGreSQL</span></h2>
                <img src="@/components/imgs/skills/postgree.png">
                <p class="text"> {{ texts[language].skills.postgresql.text }} </p>
            </div>

            <div class="skills-item">
                <h2><span>VSCODE</span></h2>
                <img src="@/components/imgs/skills/vscode.png">
                <p class="text"> {{ texts[language].skills.vscode.text }} </p>
            </div>

            <div class="skills-item">
                <h2><span>Eclipse</span></h2>
                <img src="@/components/imgs/skills/eclipse.png">
                <p class="text"> {{ texts[language].skills.eclipse.text }} </p>
            </div>

            <div class="skills-item">
                <h2><span>Intellij</span></h2>
                <img src="@/components/imgs/skills/intellij.png">
                <p class="text"> {{ texts[language].skills.intellij.text }} </p>
            </div>

          
        </div>

      <h2 class="extra"><span>{{ texts[language].skills.second_title }}</span></h2>
        <div class="skills-extra">
            
            <div class="skills-item">
                <h2><span>HTML</span></h2>
                <img src="@/components/imgs/skills/html.png">
                <p class="text"> {{ texts[language].skills.html.text }} </p>
            </div>

            <div class="skills-item">
                <h2><span>CSS</span></h2>
                <img src="@/components/imgs/skills/css.png">
                <p class="text"> {{ texts[language].skills.css.text }} </p>
            </div>

            <div class="skills-item">
                <h2><span>JavaScript</span></h2>
                <img src="@/components/imgs/skills/javascript.png">
                <p class="text"> {{ texts[language].skills.javascript.text }} </p>
            </div>

            <div class="skills-item">
                <h2><span>Sony Vegas Pro</span></h2>
                <img src="@/components/imgs/skills/sony_vegas.png">
                <p class="text">{{ texts[language].skills.vegas.text }}</p>
            </div>

            <div class="skills-item">
                <h2><span>Photoshop CS6</span></h2>
                <img src="@/components/imgs/skills/photoshop.png">
                <p class="text"> {{ texts[language].skills.photoshop.text }} </p>
            </div>

            <div class="skills-item">
                <h2><span>{{ texts[language].skills.learning.title }}</span></h2>
                <img src="">
                <p class="text"> {{ texts[language].skills.learning.text }} </p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { texts } from './locales/texts';
import { language } from "./locales/language";
</script>
<style scope>

.skills-content h2 {
    text-align: center;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: justify;
    padding-top: 40px;
}

.skills-item {
    flex: 1 1 calc(33.333% - 10px);
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
    border: 1px solid #f30000;
    border-radius: 5px;
    min-width: 250px;
    max-height: 550px;
    min-height: 150px;
}

.skills-item img {
    padding: 10px;
    max-height: 150px;
    min-width: 150px;
}

.skills-item:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px #e24d4d;
}

.extra{
    padding-top: 30px;
}

.skills-extra {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding-top: 30px;
}

@media (max-width: 768px) {
    .skills-item {
        flex: 1 1 calc(50% - 10px);
    }
}

@media (max-width: 480px) {
    .skills-item {
        flex: 1 1 100%;
    }
}
</style>