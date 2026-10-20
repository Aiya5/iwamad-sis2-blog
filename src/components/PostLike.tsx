import { useState } from "react";
import Button from "./ui/Button";

function PostLike() {
  const [likes, setLikes] = useState(0);

  return (
    <Button type="button" onClick={() => setLikes(likes + 1)}>
      ❤️ {likes} {likes === 1 ? "like" : "likes"}
    </Button>
  );
}

export default PostLike;