<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
    >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link to="/">
        <a class="nav-item nav-link">Home</a>
      </router-link>

      <router-link to="/lagu">
        <a class="nav-item nav-link">Lagu</a>
      </router-link>

      <router-link to="/film">
        <a class="nav-item nav-link">Film</a>
      </router-link>

      <router-link to="/seniman">
        <a class="nav-item nav-link">Seniman</a>
      </router-link>

      <router-link to="/visualisasi">
        <a class="nav-item nav-link">Visualisasi</a>
      </router-link>
    </div>
  </div>
</nav>
</template>

<style scoped>
#brand {
  color: rgb(235, 14, 14);
}

#navbarNavAltMarkup a {
  font-size: 30px;
}
</style>
