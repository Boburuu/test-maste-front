<template>
  <div v-if="artist">
    <ComponentArtist
      :artist="artist"
      :artists-similaires="artistsSimilaires"
    ></ComponentArtist>
    <ComponentTitles
      :onclick-voir-plus="oneclickVoirPlus"
      :limit-affichage="limitAffichage"
      :text-voirplus="textVoirplus"
      :titres-populaires="titresPopulaires"
    ></ComponentTitles>
    <ComponentSong :artist="artist"></ComponentSong>
  </div>
</template>

<script>
import axios from "axios";
import ComponentArtist from "../Composant/ComponentArtist.vue";
import ComponentTitles from "../Composant/ComponentTitles.vue";
import ComponentSong from "../Composant/ComponentSong.vue";

// TODO : Séparer cette page monolithique en composants réutilisables

// TODO : Afficher les albums par ordre chronologique de sortie décroissant en bas de page
// TODO : Afficher la durée des musiques au format minutes:secondes
export default {
  name: "Artist",
  props: {
    id: {
      type: String,
      require: true,
    },
  },
  components: {
    ComponentArtist,
    ComponentTitles,
    ComponentSong,
  },
  data: function () {
    return {
      artist: null,
      artistsSimilaires: [],
      titresPopulaires: [],
      isVoirPlusClicked: false,
      textVoirplus: "Afficher plus de titres",
      limitAffichage: 5,
    };
  },
  async mounted() {
    const response = await axios.get("http://localhost:8085/artistes.json");

    for (var i in response.data) {
      if (response.data[i]._id === this.id) {
        this.artist = response.data[i];
      }
    }

    this.artistsSimilaires = [];
    for (var j in response.data) {
      if (
        response.data[j].styleMusical === this.artist.styleMusical &&
        response.data[j]._id !== this.artist._id
      ) {
        this.artistsSimilaires.push(response.data[j]);
      }
    }

    this.titresPopulaires = this.mostListenedSongs();
    this.titresPopulaires = this.orderedTitle(this.titresPopulaires);

    for (var k = 0; k < this.titresPopulaires.length; k++) {
      this.titresPopulaires[k].titre = this.firstLetter(
        this.titresPopulaires[k].titre
      );
      this.titresPopulaires[k].nombreEcoutes = this.numberWithSpaces(
        this.titresPopulaires[k].nombreEcoutes
      );
    }
  },
  // TODO : Afficher les titres des chansons avec une majucule sur la première lettre
  methods: {
    firstLetter(titre) {
      return titre.charAt(0).toUpperCase() + titre.slice(1);
    },

    // TODO : formater les nombres d'écoutes pour les rendre plus facile à lire avec un séparateur de milliers
    numberWithSpaces(nombreEcoutes) {
      return nombreEcoutes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },

    // TODO : récupérer et ordonner les vrais titres les plus écoutés de l'artiste
    orderedTitle(list) {
      list.sort(function (a, b) {
        return b.nombreEcoutes - a.nombreEcoutes;
      });
      return list;
    },

    // TODO : afficher 5 ou 10 titres et changer le texte du bouton "Afficher plus de titres" en fonction de l'état
    onclickVoirPlus() {
      if (this.isVoirPlusClicked == true) {
        this.isVoirPlusClicked = false;
        this.textVoirplus = "Afficher plus de titres";
        this.limitAffichage = 5;
      } else {
        this.isVoirPlusClicked = true;
        this.textVoirplus = "Afficher moins de titres";
        this.limitAffichage = 10;
      }
    },

    mostListenedSongs() {
      return [
        {
          _id: "618ae89fc40339e626d8dff2",
          numero: 0,
          titre: "reprehenderit in voluptate",
          dureeSecondes: 293,
          nombreEcoutes: 806453529,
          couverture:
            "http://localhost:8085/img/album/618ae89f89d64f81153d54c1.jpeg",
        },
        {
          _id: "618ae89ff18f04ae3de8ce14",
          numero: 1,
          titre: "minim",
          dureeSecondes: 231,
          nombreEcoutes: 129446587,
          couverture:
            "http://localhost:8085/img/album/618ae89f89d64f81153d54c1.jpeg",
        },
        {
          _id: "618ae89f771d425479ac8e65",
          numero: 2,
          titre: "tempor cupidatat",
          dureeSecondes: 239,
          nombreEcoutes: 741808849,
          couverture:
            "http://localhost:8085/img/album/618ae89f89d64f81153d54c1.jpeg",
        },
        {
          _id: "618ae89f506ca1120b835347",
          numero: 3,
          titre: "deserunt",
          dureeSecondes: 323,
          nombreEcoutes: 182839200,
          couverture:
            "http://localhost:8085/img/album/618ae89f89d64f81153d54c1.jpeg",
        },
        {
          _id: "618ae89f3cc86e1ea38d91f3",
          numero: 4,
          titre: "labore enim mollit",
          dureeSecondes: 270,
          nombreEcoutes: 374839288,
          couverture:
            "http://localhost:8085/img/album/618ae89f89d64f81153d54c1.jpeg",
        },
        {
          _id: "618ae89fc40339e626d8dff2",
          numero: 5,
          titre: "i'm blue",
          dureeSecondes: 293,
          nombreEcoutes: 806453529,
          couverture:
            "http://localhost:8085/img/album/618ae89f89d64f81153d54c1.jpeg",
        },
        {
          _id: "618ae89ff18f04ae3de8ce14",
          numero: 6,
          titre: "basta boi",
          dureeSecondes: 231,
          nombreEcoutes: 129446587,
          couverture:
            "http://localhost:8085/img/album/618ae89f89d64f81153d54c1.jpeg",
        },
        {
          _id: "618ae89f771d425479ac8e65",
          numero: 7,
          titre: "killing the name",
          dureeSecondes: 239,
          nombreEcoutes: 741808849,
          couverture:
            "http://localhost:8085/img/album/618ae89f89d64f81153d54c1.jpeg",
        },
        {
          _id: "618ae89f506ca1120b835347",
          numero: 8,
          titre: "bodies",
          dureeSecondes: 323,
          nombreEcoutes: 182839200,
          couverture:
            "http://localhost:8085/img/album/618ae89f89d64f81153d54c1.jpeg",
        },
        {
          _id: "618ae89f3cc86e1ea38d91f3",
          numero: 9,
          titre: "stupeflip vite",
          dureeSecondes: 270,
          nombreEcoutes: 374839288,
          couverture:
            "http://localhost:8085/img/album/618ae89f89d64f81153d54c1.jpeg",
        },
      ];
    },
  },
};
</script>

<style scoped></style>
