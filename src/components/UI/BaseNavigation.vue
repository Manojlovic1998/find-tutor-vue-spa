<template>
  <nav class="row">
    <div class="col-12 d-flex">
      <div class="nav-logo">
        <router-link to="/">
          <img src="../../assets/nav-logo.svg" alt="" class="h-100" />
        </router-link>
      </div>
      <ul
        class="nav-links list-unstyled d-flex my-auto ms-auto justify-content-end"
      >
        <li><router-link to="/">All Tutors</router-link></li>
        <li class="ms-5">
          <router-link to="/requests">Requests</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  padding: 21px 13px;
  min-height: 60px;
  height: 100%;
}

.nav-logo {
  height: 2rem;
}

.router-link-active {
  text-decoration: none;
  font-weight: 600;
  color: #222222;
}
</style>
