export default {
  data() {
    return {
      horas: 0,
      minutos: 0,
      segundos: 0,
      intervalo: null,
      rodando: false,
    }
  },
  methods: {
    iniciar() {
      if (!this.rodando){
        this.rodando = true;
        this.segundos = 0;
        this.minutos = 0;
        this.horas = 0;
        this.intervalo = setInterval(()=>{
          this.segundos += 1;
          if (this.segundos == 60){
            this.segundos = 0;
            this.minutos += 1;
          }
  
          if (this.minutos == 60){
            this.minutos = 0;
            this.horas += 1;
          }
        }, 1000);
      }
    },
    parar() {
      if (this.rodando){
        clearInterval(this.intervalo);
      this.rodando = false;
      }
    },
    resetar() {
      this.horas = 0;
      this.minutos = 0;
      this.segundos = 0;
    }
  },
  beforeDestroy() {
    this.parar();
  },
  template: `
  <div>
    <h1>Timer-re</h1>
    <p><span>{{ String(horas).padStart(2, "0") }}:{{ String(minutos).padStart(2, "0") }}:{{ String(segundos).padStart(2, "0") }}</span></p>
    <button @click="iniciar">Iniciar</button>
    <button @click="parar">Parar</button>
    <button @click="resetar">Resetar</button>
  </div>
  `,
}
