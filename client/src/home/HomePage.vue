<template>
    <div>
        <h1>Home</h1>

        <p>Your role is: <strong>{{currentUser.role}}</strong>.</p>
        <p>This page can be accessed by all authenticated users.</p>
        <div>
            Current user from secure api end point:
            <div v-if="postFromApi">
                <div v-for="pData in postFromApi">
                  <router-link :to="{name: 'detail', params:{id : pData._id}}"  class="nav-item nav-link"> <h3>{{pData.title}}</h3></router-link>
                </div>
            </div>
        </div>
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
      postService.getAll().then(user => this.postFromApi = user);
    },


};
</script>
