const posts = [
  {
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks in 2025',
    excerpt: 'Learn how to effectively use useEffect, useRef, and custom hooks in modern React apps.',
    date: 'June 12, 2025',
    author: 'Jofilacode',
    coverImage: '/react.avif',
    tags: ['React', 'JavaScript', 'Frontend'],
    content: `React Hooks have transformed the way we write components in modern React.

In 2025, mastering useEffect, useRef, and custom hooks is essential for building efficient, maintainable UIs.

**useEffect:** Use it for side effects like data fetching, subscriptions, and timers. Be cautious with dependencies to avoid unnecessary re-renders.

**useRef:** Perfect for accessing DOM nodes or persisting values across renders without triggering re-renders.

**Custom Hooks:** Great for reusing logic across components. Make sure to name them starting with "use" and avoid breaking the Rules of Hooks.

By combining these effectively, your components become cleaner and easier to reason about.

Ready to take your hooks game to the next level? Let’s go!`
  },
  {
    slug: 'node-api-security',
    title: 'Securing Your Node.js API Like a Pro',
    excerpt: 'Explore practical tips and libraries to safeguard your backend APIs.',
    date: 'June 5, 2025',
    author: 'Jofilacode',
    coverImage: '/api.png',
    tags: ['Node.js', 'Security', 'Backend'],
    content: `Security is non-negotiable when building APIs in Node.js.

Here are some must-have strategies:

1. **Rate Limiting:** Prevent abuse by using libraries like express-rate-limit.
2. **Helmet:** Add secure HTTP headers easily with Helmet middleware.
3. **Input Validation:** Use libraries like Joi or express-validator to sanitize input.
4. **Authentication & Authorization:** Use JWTs for authentication and role-based access control for endpoints.
5. **Avoid Exposing Stack Traces:** Never expose internal errors to the client. Use centralized error handling.

Securing your API means being proactive, not reactive. Don’t ship your app without it.`
  },
  {
    slug: 'mongodb-design-patterns',
    title: 'MongoDB Design Patterns for Scalable Apps',
    excerpt: 'Structure your NoSQL data like a boss with these battle-tested strategies.',
    date: 'May 28, 2025',
    author: 'Jofilacode',
    coverImage: '/deploy.jpg',
    tags: ['MongoDB', 'Database', 'Fullstack'],
    content: `MongoDB isn't just schema-less — it's schema-flexible.

To scale your apps, consider these patterns:

**1. Embedding vs Referencing:** Embed when you read the whole document; reference when you need to manage relationships independently.

**2. Bucket Pattern:** Group time-series data into buckets for more efficient reads and writes.

**3. Outlier Pattern:** Separate frequently changing or large fields into a different collection.

**4. Computed Pattern:** Store pre-computed values to reduce expensive calculations at runtime.

Using these patterns helps you get the best performance and scalability from MongoDB.`
  }
];

export default posts;
