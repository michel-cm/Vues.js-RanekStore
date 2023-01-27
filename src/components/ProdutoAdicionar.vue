<template>
  <form class="adicionar-produto">
    <label for="nome">Nome</label>
    <input type="text" id="nome" name="nome" v-model="produto.nome" />
    <label for="preco">Preço ($S)</label>
    <input type="number" id="preco" name="preco" v-model="produto.preco" />
    <label for="fotoso">Fotos</label>
    <input type="file" id="fotoso" name="fotoso" ref="fotos" />
    <label for="descricao">Descricao</label>
    <textarea
      id="descricao"
      name="descricao"
      v-model="produto.descricao"
    ></textarea>
    <input
      class="btn"
      type="button"
      value="Adicionar Produto"
      @click.prevent="adicionarProduto"
    />
  </form>
</template>

<script>
import { api } from "@/services.js";

export default {
  nome: "ProdutoAdicionar",
  data() {
    return {
      produto: {
        nome: "",
        preco: "",
        descricao: "",
        fotos: null,
      },
    };
  },
  methods: {
    formatarProduto() {
      this.produto.usuario_id = this.$store.state.usuario.id;
    },
    adicionarProduto() {
      this.formatarProduto();
      api.post("/produto", this.produto).then(() => {
        this.$store.dispatch("getUsuarioProdutos");
      });
    },
  },
};
</script>

<style scoped>
.adicionar-produto {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>
