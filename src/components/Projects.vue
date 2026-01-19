<template>
   <div class="projects-content" id="projects">
      <h1>MEUS <span>PROJETOS</span></h1>

      <div class="projects">

         <div class="projects-item"><a href="https://victorbatista2020.github.io/calculadora-imc/" target="blank">
               <h2><span>Calculadora IMC</span></h2>
               <img src="@/components/imgs/projects/calculadora-imc.png">
               <p class="text"> É útilizada para calcular o seu imc e verificar qual é o seu grau de obesidade</p>
               <p class="second-text"> Tecnologias usadas : Javascript, HTML, CSS </p>
            </a>
         </div>

         <div class="projects-item"><a href="https://victorbatista2020.github.io/lojatemplate/" target="blank">
               <h2><span>Salão Template</span></h2>
               <img src="@/components/imgs/projects/salao-template.png">
               <p class="text"> Landing page montada para um salao de beleza fazer propaganda do seu negocio nas redes socias</p>
               <p class="second-text"> Tecnologias usadas : VUE.JS </p>
            </a>
         </div>

      </div>
   </div>
</template>

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
</style>