export default {
  computed: {
    filterBlogs: function() {
      return this.postdata.filter((blog)=>{
        return blog.title.match(this.search);
      });
    }
  }
};
