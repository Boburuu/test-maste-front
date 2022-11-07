<template>
  <div class="row border-bottom mb-4 pb-4">
    <div class="col-lg-2">
      <img
        :src="artist.photo"
        :alt="artist.prenom + ' ' + artist.nom"
        class="img-thumbnail"
      />
      <span
        class="badge badge-secondary mr-2 mt-1"
        v-for="tag in artist.tags"
        :key="tag"
      >
        {{ tag }}
      </span>
    </div>
    <div class="col-lg-7">
      <h3>
        {{ artist.prenom }} {{ artist.nom }}
        <span class="text-muted">({{ artist.age }} ans)</span>
      </h3>
      <p>
        {{ artist.bio }}
      </p>
    </div>
    <div class="col col-lg-3">
      <div class="list-group">
        <h5 class="list-group-item list-group-item-primary">
          {{ artist.styleMusical }}
        </h5>
        <template v-if="artistsSimilaires.length">
          <router-link
            v-for="artistSimilaire in artistsSimilaires"
            :to="{ name: 'artist', params: { id: artistSimilaire._id } }"
            :key="artistSimilaire._id"
            class="list-group-item"
            >{{ artistSimilaire.prenom }} {{ artistSimilaire.nom }}</router-link
          >
        </template>
        <template v-else>
          <a class="list-group-item disabled" href="#"
            >Seul(e) artiste de {{ artist.styleMusical }} connu(e)</a
          >
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    artist: {},
    artistsSimilaires: {},
  },
};
</script>
