import { posts } from "../data/posts";
import PostCard from "../components/PostCard";

function PostsPage() {
  return (
    <section>
      <h1>Posts</h1>
      <div className="card-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default PostsPage;