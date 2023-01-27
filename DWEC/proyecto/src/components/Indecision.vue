<template>
    <img v-if="img" v-bind:src="img" alt="imagen"/>
    <div class="bg-dark"></div>
    <div class="indecision-container">
        <h1>Indecision App</h1>
        <input v-on:keypress.enter="muestraError" v-model="question" type="text" placeholder="Hazme una pregunta"/>
        <p v-if="error">Tienes que acabar la pregunta con "?"</p>
        <div v-if="isvalidQuestion">
            <h2>{{question}}</h2>
            <h1>{{answer==='yes' ? 'si':'no'}}</h1>
        </div>

    </div>
</template>

<script>
 export default{
    data(){
        return{
            question: null,
            answer: null,
            img: null,
            isvalidQuestion: false,
            error:false,
        }
    },
    methods: {
        async getAnswer() {
        this.answer="Pensando..."
        const {answer, image} = await fetch("https://yesno.wtf/api").then((res)=>res.json()
        )
            this.answer= answer
            this.img=image
    },
    muestraError(){
        this.error=true
    }
    },

    watch:{
        question(value, oldvalue){
        this.isvalidQuestion= false
        console.log(value, oldvalue)
        if (!value.includes("?")) return
        this.getAnswer()
        this.isvalidQuestion= true
        this.error=false
        },    
    },
}
</script>


<style>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  margin: 20px;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>