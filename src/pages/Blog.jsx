import { Link } from 'react-router-dom';
import posts from '../data/posts';
import '../styles/blog.css';
import { useState } from 'react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter posts by title or tags
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.join(' ').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="blog">
      <h2 className="blog-heading">📝 Developer Insights & Updates</h2>

      {/* Search Input */}
      <input
        type="text"
        className="blog-search"
        placeholder="Search blog posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Blog List */}
      <div className="blog-list">
        {filteredPosts.map(post => (
          <div className="blog-item" key={post.slug}>
            {/* Image from public folder */}
            <img src={post.coverImage} alt={post.title} className="blog-cover" />

            <div className="blog-content">
              <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
              <p>{post.excerpt}</p>
              
              {/* Tags */}
              <div className="blog-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag">#{tag}</span>
                ))}
              </div>

              {/* Read more */}
              <Link to={`/blog/${post.slug}`} className="read-more">Read More →</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination UI (Mockup for now) */}
      <div className="pagination">
        <button disabled>{'←'}</button>
        <button className="active">1</button>
        <button>2</button>
        <button>{'→'}</button>
      </div>
    </section>
  );
}
