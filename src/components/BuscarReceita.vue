<template>
  <button class="botao-buscar">Buscar receitas!</button>
</template>

<style scoped>
.botao-buscar {
  background-color: var(--laranja, #f0633c);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 70px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.botao-buscar:hover {
  background-color: #d9542f;
}
</style>