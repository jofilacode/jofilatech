import { useParams, Link } from 'react-router-dom';
import posts from '../data/posts';
import '../styles/blogpost.css';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <section className="blog-post not-found">
        <h2>Post Not Found</h2>
        <p>Sorry, the blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="back-link">← Back to Blog</Link>
      </section>
    );
  }

  return (
    <section className="blog-post">
      <div className="post-header">
        <img src={post.coverImage} alt={post.title} className="post-cover" />
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>{post.date}</span> · <span>{post.author}</span>
        </div>
        <div className="post-tags">
          {post.tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="post-content">
        {post.content ? (
          post.content.split('\n').map((para, idx) => (
            <p key={idx}>{para}</p>
          ))
        ) : (
          <p>Post content is coming soon...</p>
        )}
      </div>

      <div className="back-link-wrapper">
        <Link to="/blog" className="back-link">← Back to Blog</Link>
      </div>
    </section>
  );
}
