const BlogPostComponent = {
  props: ['id'],
  data() {
    return {
      blogPost: null,
    };
  },
  created() {
    axios.get(`api/posts/${this.id}`).then(({ data }) => {
      this.blogPost = data;
    });
  },
};