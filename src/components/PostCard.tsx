import { Link } from "react-router";
import type { Post } from "../data/posts";
import Card from "./ui/Card";
import Tag from "./ui/Tag";

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <h2>{post.title}</h2>
      <p className="post-meta">{post.date}</p>
      <p>{post.excerpt}</p>
      <div className="post-tags">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <Link to={`/posts/${post.id}`}>Read more</Link>
    </Card>
  );
}

export default PostCard;