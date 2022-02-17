<template>
  <div class="container">
    <div class="album py-5 bg-container">
      <h2>Películas por estrenarse<span> [ by Carlos Jaimes ] </span></h2>
      <hr />
      <div class="container">
        <div class="row">
          <div
            v-for="movie in upComingMovieData"
            :key="movie.id"
            class="col-md-4"
          >
            <div class="card mb-4 box-shadow">
              <img
                class="card-img-top"
                style="border-radius: 0.75rem !important"
                :src="
                  movie.poster_path != null
                    ? images.base_url +
                      images.poster_sizes[3] +
                      movie.poster_path
                    : require('@/assets/No-Image-Placeholder.png')
                "
              />
              <div class="card-body">
                <h3 class="card-title">{{ movie.title }}</h3>
                <h5 class="card-title">({{ movie.original_title }})</h5>
                <p class="card-text">
                  {{
                    movie.overview != ""
                      ? movie.overview
                      : "Sin sinopsis en español"
                  }}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-muted"
                    ><strong>Estreno:</strong>
                    {{ moment(movie.release_date) }}</small
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <nav aria-label="Page navigation example" class="container">
        <ul class="pagination pagination-sm justify-content-center">
          <li
            v-for="index in upcomingTotalPages"
            :key="index"
            class="page-item inter"
            :class="index == 1 ? 'active' : ''"
            @click="pageItemClick($event, index)"
          >
            <a class="page-link" href="#">{{ index }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import $ from "jquery";
import moment from "moment";

moment.locale("es-mx");

export default {
  name: "ListPage",
  props: {
    msg: String,
  },
  computed: {
    ...mapState(["conf", "upcomingTotalPages", "upComingMovieData", "images"]),
  },
  methods: {
    ...mapActions(["getConfiguration", "getUpComingMovies"]),
    pageItemClick: function (event, idx) {
      var item = $(".page-item.inter");
      item.removeClass("active");
      $(event.target.parentElement).addClass("active");
      this.getUpComingMovies(idx);
    },
    moment: function (date) {
      return moment(date).format("LL");
    },
  },
  created() {
    this.getConfiguration();
    this.getUpComingMovies(1);
  },
};
</script>
<style lang="css">
card-img-top {
  height: 513px;
  width: 100%;
  display: block;
}

.card {
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 1px 5px 8px #aaaaaa;
  border-radius: 0.75rem !important;
  border: 3px solid rgb(255 255 255 / 13%) !important;
}
.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
  padding: 3rem;
  box-shadow: 1px 5px 15px #333333;
  border-radius: 0.75rem !important;
}

.page-item.active .page-link {
  z-index: 3;
  color: #fff !important;
  background-color: #353535 !important;
  border-color: #202020 !important;
}

.page-link {
  color: #333333 !important;
}

.page-link:hover {
  color: #818181 !important;
}

page-link:focus {
  color: #eceaea !important;
}

h2 span {
  font-size: 1rem;
}

.bg-container {
  background-color: #f3f3f3 !important;
}
</style>
