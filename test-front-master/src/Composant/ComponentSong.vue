<template>
  <div v-if="artist">
    <div class="row mb-4 border-bottom mb-4 pb-4">
      <div class="col-lg-2">
        <img
          src="http://localhost:8085/img/album/No-album-art.png"
          :alt="artist.prenom + ' ' + artist.nom"
          class="img-thumbnail"
        />
        <h5>
          Intitulé de l'album
          <span class="text-muted">05/11/2021</span>
        </h5>
      </div>
      <div class="col-lg-7">
        <table class="table">
          <tbody>
            <tr v-for="index in [0, 1, 2, 4, 5, 6]" :key="index">
              <td class="align-middle">Titre de la chanson</td>
              <td class="text-right align-middle">2:45</td>
              <td class="text-right align-middle">1 548</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row mb-4 border-bottom mb-4 pb-4">
      <div class="col-lg-2">
        <img
          src="http://localhost:8085/img/album/No-album-art.png"
          :alt="artist.prenom + ' ' + artist.nom"
          class="img-thumbnail"
        />
        <h5>
          Intitulé de l'album
          <span class="text-muted">05/11/2021</span>
        </h5>
      </div>
      <div class="col-lg-7">
        <table class="table">
          <tbody>
            <tr v-for="index in [0, 1, 2, 4]" :key="index">
              <td class="align-middle">Titre de la chanson</td>
              <td class="text-right align-middle">2:45</td>
              <td class="text-right align-middle">1 548</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-center" v-else>
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    artist: {},
  },
};
</script>
