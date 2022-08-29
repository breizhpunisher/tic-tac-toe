
<template>
<h1>{{ msg }}</h1>
  <div class="hello">
    <div class="joeurs" v-if="tab==false">
   <div class="joueur_1" >
    joueur 1 
    <label for="pseudo">choisissez votre pseudo:</label>
    <input type="text" name="" id="pseudo"/> <br>
     <p>
       <label for="symbole">choisissez votre symbole:</label><br />

       <select v-model="s1">
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

       <select v-model="s2">
        
           <option v-for="(symbole2, index) of selectionp2" :value="symbole2" :key="index">{{symbole2}}</option>  
       </select>
   </p>
   </div>
   <p> {{s1}} VS {{s2}}</p>
   </div>
   
   <div class="board" v-if= "tab!=false">
   <div class="case" v-for="i in 9" :data-index="i" :key="i" v-on:click="gestionClicCase($event)"></div>
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
      tab: false,
      s1: undefined,
      s2: undefined,
      symboles: ['','♔', '♕', '♖', '♗', '♘', '♙']
       
    }
  },
 computed: {
 
    selectionp1(){
      let v = [...this.symboles]
      if(this.s2){
        let s2 = this.s2
        v.splice(v.findIndex((elt) => elt ==s2), 1)
      }
     return v
    },
    
    selectionp2(){
      let t = [...this.symboles]
      if(this.s1){
        let s1 = this.s1
        t.splice(t.findIndex((elt) => elt ==s1), 1)
      } 
      
     return t
    }
    
  },
  methods: {
gestionClicCase(event){
  this.s1 = '♔'
  event.target.innerHTML=this.s1
},
gestionChgtPage(){
let tableau = [];
  for (let index = 1; index <= 100; index++) if (tableau.filter((index) => index % 2 != 0)) 
  {
    this.tab = true;}else{this.tab = false;}
   console.log(tableau.index) 
}

  }
}
</script>

<style scoped>

.hello{
  display: flex;

}
.joueurs{  
display: flex;
  width:100vw;
}
.joueur_1{
  justify-content: center;
}  
 .board{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 270px;
    margin: auto;
    border: 1px solid black;  
    }
    .case{ 
      margin-top: auto;
      border: 1px solid black;
      height: 90px;    
       background-color: rgb(111, 198, 134);
    }
    .case:hover{
      background-color: rgb(55, 198, 100);
    }

</style>
