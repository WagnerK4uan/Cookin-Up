<template>
  <footer class="rodape">
    <div class="rodape__conteudo">
      <div class="rodape__texto">
        <p>Projeto criado por Wagner Kauan para fins de estudo.</p>
        <p>© 2025 Cookin' Up.</p>
      </div>
      <nav class="rodape__navegacao"></nav>
    </div>
  </footer>
</template>

<style scoped>
.rodape {
    background-color:var(--verde-escuro, #263A29);;
    color: var(--cinza-escuro, #ffffff);
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-top: 1px solid var(--cinza, #ddd);
    text-align: center;
}

.rodape__conteudo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rodape__texto {
  font-size: 0.875rem;
}

.rodape__navegacao {
  display: flex;
  gap: 1.5rem;
}

.rodape__link {
  color: var(--verde-medio, #3d6d4a);
  text-decoration: none;
  font-size: 0.875rem;
}

.rodape__link:hover {
  text-decoration: underline;
}
</style>
