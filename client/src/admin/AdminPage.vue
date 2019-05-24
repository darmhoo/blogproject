<template>
    <div>
        <h1>Admin</h1>
        <p>This page can only be accessed by administrators.</p>
        <div>
            All users from secure (admin only) api end point:
          <div v-if="posts">
            <ul v-for="post in posts">
                <li  >
                    {{post.title}}
                </li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
import { authenticationService, postService } from '@/_services';

export default {
    data () {
        return {
            user: authenticationService.currentUserValue,
            posts: []
        };
    },
    created () {
        postService.getAll().then(posts => this.posts = posts);
    }
};
</script>
