export type Post = {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    id: "1",
    title: "Learning React Router in Practice",
    excerpt: "How I set up routing with BrowserRouter, Routes, and NavLink in my profile card project.",
    body: "This week I added routing to my profile card. Before, everything was on one page. Now I have separate pages for Home, Skills, and Contact. The tricky part was understanding that the layout should stay while the page content changes — that is what <Outlet /> does. NavLink automatically adds an active class to the current link, so I did not have to write that logic myself.",
    date: "2026-10-05",
    tags: ["React", "React Router"],
  },
  {
    id: "2",
    title: "Sharing State Between Pages with Context",
    excerpt: "Why my like counter kept resetting on navigation and how Context fixed it.",
    body: "The like button used to lose its count every time I switched pages. That was because each page had its own useState. The fix was to move the count into a Context provider that wraps the whole app. Now every page reads from the same source, and the count stays consistent. The lesson: any state that multiple components need should live above them.",
    date: "2026-10-06",
    tags: ["React", "TypeScript", "Context"],
  },
  {
    id: "3",
    title: "Writing My First Test with Vitest",
    excerpt: "A short look at how I tested a like button using React Testing Library.",
    body: "My first test renders the LikeButton inside its provider, clicks it once, and checks that the visible text changed. It sounds small, but writing it made me realize how many assumptions I had been making. The test suite catches the moment I break something. Now every time I refactor, I run npm test to be sure nothing fell apart.",
    date: "2026-10-10",
    tags: ["Testing", "Vitest", "React"],
  },
  {
    id: "4",
    title: "From Figma to Code: Building a Design System",
    excerpt: "Turning a Figma handoff into CSS variables, Button, Card, and Tag components.",
    body: "The designer gave me a Figma file with tokens, components, and one contrast error. I extracted the tokens into CSS variables, built Button with a variant prop, and turned Card and Tag into reusable pieces. The contrast check showed that one colour failed at 4.39:1, so I replaced it with a darker shade that passes AAA. Working from a design forced me to think in systems, not one-off styles.",
    date: "2026-10-12",
    tags: ["Figma", "CSS", "Design System"],
  },
  {
    id: "5",
    title: "Validating a Sign-up Form by Hand",
    excerpt: "Five controlled fields, one pure function, and the errors that only appear when they should.",
    body: "Building the registration form taught me the difference between validation logic and when to show errors. My validator returns a plain object of messages, so it can be tested in isolation. The form only shows a message when the user has left the field or tried to submit. That small detail makes the form feel calm instead of aggressive. No external library, just React state and one function.",
    date: "2026-10-16",
    tags: ["React", "TypeScript", "Forms"],
  },
];