import { Link, useParams } from "react-router";
import { posts } from "../data/posts";
import Tag from "../components/ui/Tag";
import PostLike from "../components/PostLike";

function PostDetailPage() {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <section>
        <h1>Post not found</h1>
        <p>No post with id {postId}.</p>
        <Link to="/posts">← Back to posts</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>{post.title}</h1>
      <p className="post-meta">{post.date}</p>
      <div className="post-tags">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <p>{post.body}</p>
      <PostLike />
      <p>
        <Link to="/posts">← Back to posts</Link>
      </p>
    </section>
  );
}

export default PostDetailPage;