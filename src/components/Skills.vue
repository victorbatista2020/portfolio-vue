<template>
    <div class="skills-content" id="skills">
        <h1>PRINCIPAIS <span>HABILIDADES</span></h1>

        <div class="skills">
            <div class="skills-item">
                <h2><span>Vue.js</span></h2>
                <img src="@/components/imgs/skills/vue.png">
                <p class="text"> É  um framework JavaScript progressivo de código aberto, 
                    usado para criar interfaces de usuário (UI) e aplicações 
                    web de página única (SPAs) de forma eficiente e declarativa </p>
            </div>

            <div class="skills-item">
                <h2><span>JAVA</span></h2>
                <img src="@/components/imgs/skills/java.png">
                <p class="text"> É  uma linguagem de programação que serve para desenvolver uma vasta
                     gama de softwares e aplicativos para diversos sistemas operacionais
                      e dispositivos, incluindo aplicativos web, corporativos,
                       mobile (Android), desktop, jogos, e sistemas embarcados </p>
            </div>

            <div class="skills-item">
                <h2><span>PostGreSQL</span></h2>
                <img src="@/components/imgs/skills/postgree.png">
                <p class="text"> É  um banco de dados relacional de software livre com suporte de 30 anos de
                     desenvolvimento, sendo um dos bancos de dados 
                     relacionais mais estabelecidos disponíveis </p>
            </div>

            <div class="skills-item">
                <h2><span>VSCODE</span></h2>
                <img src="@/components/imgs/skills/vscode.png">
                <p class="text"> É  um editor de código-fonte gratuito e poderoso, desenvolvido pela Microsoft, 
                    que é leve, personalizável e está disponível para Windows, macOS e Linux </p>
            </div>

            <div class="skills-item">
                <h2><span>Eclipse</span></h2>
                <img src="@/components/imgs/skills/eclipse.png">
                <p class="text"> É um Ambiente de Desenvolvimento Integrado (IDE) livre e de código aberto,
                     criado pela IBM em 2001, que serve para ajudar programadores a escrever,
                      executar e depurar código em diversas linguagens de programação,
                       como Java, C++, PHP e Python, através de um sistema de plugins </p>
            </div>

            <div class="skills-item">
                <h2><span>Intellij</span></h2>
                <img src="@/components/imgs/skills/intellij.png">
                <p class="text"> É  um framework JavaScript progressivo de código aberto, 
                    usado para criar interfaces de usuário (UI) e aplicações 
                    web de página única (SPAs) de forma eficiente e declarativa </p>
            </div>

          
        </div>

      <h2 class="extra">HABILIDADES <span>EXTRAS</span></h2>
        <div class="skills-extra">
            
            <div class="skills-extra-item">
                <h2><span>HTML</span></h2>
                <img src="@/components/imgs/skills/html.png">
                <p class="text"> É a linguagem fundamental para criar e estruturar páginas web.
                     Ela não é uma linguagem de programação, mas sim uma linguagem de marcação
                      que usa tags para definir o conteúdo de um site </p>
            </div>

            <div class="skills-extra-item">
                <h2><span>CSS</span></h2>
                <img src="@/components/imgs/skills/css.png">
                <p class="text"> É  uma linguagem de estilo usada para descrever a aparência de documentos
                     escritos em HTML ou XML. Ela controla como os elementos são mostrados na tela,
                      papel ou em outras mídias, definindo cores, fontes, espaçamentos e layouts </p>
            </div>

            <div class="skills-extra-item">
                <h2><span>JavaScript</span></h2>
                <img src="@/components/imgs/skills/javascript.png">
                <p class="text"> É uma linguagem de programação usada para adicionar interatividade
                     e conteúdo dinâmico a páginas da web, como menus, formulários, animações e mapas
                      interativos, tornando a experiência do usuário mais rica e responsiva </p>
            </div>

            <div class="skills-extra-item">
                <h2><span>Sony Vegas Pro</span></h2>
                <img src="@/components/imgs/skills/sony_vegas.png">
                <p class="text"> É um software de edição de vídeo e áudio profissional que permite criar
                     projetos complexos e é adequado tanto para iniciantes quanto para editores experientes,
                      pois oferece um fluxo de trabalho intuitivo, personalizável 
                      e recursos avançados como edição baseada em texto com IA </p>
            </div>

            <div class="skills-extra-item">
                <h2><span>Photoshop CS6</span></h2>
                <img src="@/components/imgs/skills/photoshop.png">
                <p class="text"> É um Ambiente de Desenvolvimento Integrado (IDE) livre e de código aberto,
                     criado pela IBM em 2001, que serve para ajudar programadores a escrever,
                      executar e depurar código em diversas linguagens de programação,
                       como Java, C++, PHP e Python, através de um sistema de plugins </p>
            </div>

            <div class="skills-extra-item">
                <h2><span>Em Andamento</span></h2>
                <img src="">
                <p class="text"> Estou sempre aprendendo novas habilidades, muito em breve ela vai ser anunciada nesse campo </p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
</script>
<style scope>

.skills-content h1 {
    text-align: center;
    padding-top: 30px;
}

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

.text{
    text-align: left;
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

.skills-extra-item {
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

.skills-extra-item img {
    padding: 10px;
    max-height: 150px;
    min-width: 150px;
}

.skills-extra-item:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px #e24d4d;
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