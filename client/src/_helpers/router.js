import Vue from 'vue';
import Router from 'vue-router';

import { authenticationService } from '@/_services';
import { Role } from '@/_helpers';
import HomePage from '@/home/HomePage';
import AdminPage from '@/admin/AdminPage';
import LoginPage from '@/login/LoginPage';
import CreatePost from '@/posts/CreatePost';
import DeletePost from '@/posts/DeletePost';
import EditPost from '@/posts/EditPost';
import PostDetail from '@/posts/PostDetail';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomePage,
            meta: { authorize: [] }
        },
        {
            path: '/admin',
            component: AdminPage,
            meta: { authorize: [Role.Admin] }
        },
        {
            path: '/login',
            component: LoginPage
        },

      {
        path: '/create',
        component: CreatePost,
        meta: { authorize: [Role.Admin] }
      },
      {
        path: '/edit/:id',
        component: EditPost,
        meta: { authorize: [Role.Admin] }
      },
      {
        path: '/detail/:id',
        component: PostDetail,
        name: 'detail',
        meta: { authorize: [] }
      },
      {
        path: 'delete/:id',
        component: DeletePost,
        meta: { authorize: [Role.Admin] }
      },
        // otherwise redirect to home
        { path: '*', redirect: '/' }
    ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const { authorize } = to.meta;
    const currentUser = authenticationService.currentUserValue;

    if (authorize) {
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return next({ path: '/login', query: { returnUrl: to.path } });
        }

        // check if route is restricted by role
        if (authorize.length && !authorize.includes(currentUser.role)) {
            // role not authorised so redirect to home page
            return next({ path: '/' });
        }
    }

    next();
})
