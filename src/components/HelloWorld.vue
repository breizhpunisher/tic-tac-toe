
<template>
<h1>{{ msg }}</h1>
  <div class="hello">
    <div class="joueurs" v-if="tab==false">
   <div class="joueur_1" >
    joueur 1 
    <label for="pseudo">choisissez votre pseudo:</label>
    <input type="text" name="" id="pseudo"/> <br>
     <p>
       <label for="symbole">choisissez votre symbole:</label><br />

       <select v-model="this.joueurs[1]">
           <option v-for="(symbole1) of selectionp1" :value="symbole1" :key="symbole1">{{symbole1}}</option>        
       </select>
   </p>
    </div> 

   <div class="joueur_2" >
    joueur 2 
    <label for="pseudo1">choisissez votre pseudo:</label>
    <input type="text" name="" id="pseudo1"/> <br>
     <p>
       <label for="symbole">choisissez votre symbole:</label><br />

       <select v-model="this.joueurs[0]">
        
           <option v-for="(symbole2, index) of selectionp2" :value="symbole2" :key="index">{{symbole2}}</option>  
       </select>
   </p>
   </div>
   <div class="vs"> {{this.joueurs[1]}} VS {{this.joueurs[0]}}</div>
   </div>
   
   <div class="board" v-if= "tab!=false">
   <div class="case" v-for="i in 9" :data-index="i" :key="i" v-on:click="gestionClicCase($event)"></div>
   <div class="vs2"> {{this.joueurs[1]}} VS {{this.joueurs[0]}}</div>
  </div>

</div>


   <input type="button" value="règles">
   <input type="button" value="let's play">
   <input type="button" value="chgt page" v-on:click="gestionChgtPage()">
  
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      tourJeu: 1,
      tab: false,
      s1: undefined,
      s2: undefined,
      symboles: ['','♔', '♕', '♖', '♗', '♘', '♙'],
      index0:1,
      joueurs: [[],[]],
    }
  },
 computed: {
/* cette section contrôle le choix des symboles
en retirant du menu déroulant de chaque celui choisi par l'adversaire*/ 
    selectionp1(){
      let v = [...this.symboles]
      if(this.joueurs[1]){
        let s2 = this.joueurs[0]
        v.splice(v.findIndex((elt) => elt ==s2), 1)
      }
     return v
    },
    
    selectionp2(){
      let t = [...this.symboles]
      if(this.joueurs[0]){
        let s1 = this.joueurs[1]
        t.splice(t.findIndex((elt) => elt ==s1), 1)
      } 
      
     return t
    }
    
  },
  methods: {
    /* cette fonction permet d'afficher alternativement les symboles de chaque joueurs*/
gestionClicCase(event){ 
  let val= this.tourJeu %2 
  event.target.innerHTML=this.joueurs[val];
  this.tourJeu= this.tourJeu + 1;
},
/*cette fonction permet via le bouton chgt de page de passer de la page d'acceuil
à la page de jeu*/
gestionChgtPage(){
let tableau = [];
  for (let index = 1; index <= 100; index++)
  tableau[index]=index;

   if (tableau [this.index0] % 2 != 0)
  { this.tab = true;}
  else
  {this.tab = false;}
   this.index0=this.index0+1;
}

  }
}
</script>

<style scoped>

.hello{
  display: flex;
}
.joueurs{  
display: inline-flex;
justify-content: space-around;
align-content: center;
  width:100vw;
}

 .board{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 270px;
    margin: auto;
    border: 1px solid black;  
    }
    .case{ 
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: xx-large;
      border: 1px solid black;
      height: 90px;    
      background-color: rgb(111, 198, 134);
    }
    .case:hover{
      background-color: rgb(55, 198, 100);
    }
    .vs{
      display: flex;
      text-align: center;
    }

</style>
