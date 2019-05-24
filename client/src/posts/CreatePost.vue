<template>
  <div>

    <h2>Create Post</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" v-model.trim="$v.title.$model" name="title" class="form-control" :class="{ 'is-invalid': submitted && $v.title.$error }" />
        <div v-if="submitted && !$v.title.required" class="invalid-feedback">title is required</div>
      </div>
      <div class="form-group">
        <label htmlFor="content">Content</label>
        <textarea v-model.trim="$v.content.$model" name="content" class="form-control" :class="{ 'is-invalid': submitted && $v.content.$error }" />
        <div v-if="submitted && !$v.content.required" class="invalid-feedback">content is required</div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" :disabled="loading">
          <span class="spinner-border spinner-border-sm" v-show="loading"></span>
          <span>Submit</span>
        </button>
      </div>
      <div v-if="error" class="alert alert-danger">{{error}}</div>
    </form>
  </div>
</template>

<script>
  import { required } from 'vuelidate/lib/validators';

  import { router } from '@/_helpers';
  import { authenticationService } from '@/_services';
  import { postService } from '@/_services';

  export default {
    data () {
      return {
        title: '',
        content: '',
        submitted: false,
        loading: false,
        returnUrl: '',
        error: ''
      };
    },
    validations: {
      title: { required },
      content: { required }
    },
//    created () {
//      // redirect to home if already logged in
//      if (authenticationService.currentUserValue) {
//        return router.push('/');
//      }
//
//      // get return url from route parameters or default to '/'
//      this.returnUrl = this.$route.query.returnUrl || '/';
//    },
    methods: {
      onSubmit () {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }

        this.loading = true;
        postService.create(this.username, this.password)
          .then(

            error => {
              this.error = error;
              this.loading = false;
            }
          );
      }
    }
  };
</script>
