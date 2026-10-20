import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import PostCard from "./PostCard";
import { posts } from "../data/posts";

describe("PostCard", () => {
  it("renders the title and a link to the post", () => {
    render(
      <MemoryRouter>
        <PostCard post={posts[0]} />
      </MemoryRouter>
    );

    expect(screen.getByText(posts[0].title)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /read more/i })).toHaveAttribute(
      "href",
      `/posts/${posts[0].id}`
    );
  });
});