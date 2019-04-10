Vue.component('github-user-card', {
  template: '#github-user-card-template',
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      user: {},
      joinedIn: null,
    };
  },
  created() {
    axios.get(`//api.github.com/users/${this.username}`)
      .then((response) => {
        this.user = response.data;
        this.joinedIn = dayjs(this.user.created_at).year();
      });
  },
});

new Vue({
  el: '#app',
  data: {
    usernames: ['hootlex', 'aarongerig', 'yyx990803', 'akryum', 'egoist', 'fabpot'],
  },
});