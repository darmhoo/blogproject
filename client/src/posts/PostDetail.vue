<template>
  <div>
    <h1>{{postFromApi.title}}</h1>

    <p>{{postFromApi.content}}</p>
    <p>This page can be accessed by all authenticated users.</p>

  </div>
</template>
<script>
  import { postService, authenticationService } from '@/_services';

  export default {
    data () {
      return {
        currentUser: authenticationService.currentUserValue,
        postFromApi: null
      };
    },
    created () {
      postService.getById(this.$route.params.id).then(post => this.postFromApi = post);
    },


  };
</script>
