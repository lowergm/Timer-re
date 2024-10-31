export default {
  data(){
    return {
      contagem: 0
    }
  },
  template: `
  <button @click="contagem--">
    -
  </button>
  <span>{{ contagem }}</span>
  <button @click="contagem++">
    +
  </button>
  `
}
