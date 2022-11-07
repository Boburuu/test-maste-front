<template>
  <div class="row mb-4">
    <div class="col-lg-2"></div>
    <div class="col-lg-7">
      <table class="table table-striped">
        <thead class="thead-light">
          <tr>
            <th></th>
            <th>Titres populaires</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="titre in titresPopulaires.slice(0, limitAffichage)"
            :key="titre._id"
          >
            <td>
              <img :src="titre.couverture" style="width: 30px" />
            </td>
            <td class="align-middle">
              {{ titre.titre }}
            </td>
            <td class="text-right align-middle">2:45</td>
            <td class="text-right align-middle">
              {{ titre.nombreEcoutes }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4" class="text-center">
              <fa icon="add"></fa>
              <a v-on:click="onclickVoirPlus()">{{ textVoirplus }}</a>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <template />
</template>

<script>
export default {
  props: {
    onclickVoirPlus: {},
    limitAffichage: {},
    textVoirplus: {},
    titresPopulaires: {},
  },
};
</script>
