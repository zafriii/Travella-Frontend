import React, { useState, useEffect } from 'react';
import Storydata from './Storydata';
import './blog.css';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { FaShare } from "react-icons/fa";
import ConfirmModal from './ConfirmModal';

function Stories() {
  const [blogs, setBlogs] = useState(JSON.parse(localStorage.getItem('blogs')) || []);
  const [blogText, setBlogText] = useState('');
  const [blogHeading, setBlogHeading] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const handleBlogChange = (event) => {
    setBlogText(event.target.value);
  };

  const handleHeadingChange = (event) => {
    setBlogHeading(event.target.value);
  };

  const handleBlogSubmit = (event) => {
    event.preventDefault();
    if (editMode && editId !== null) {
      const updatedBlogs = blogs.map((blog) => {
        if (blog.id === editId) {
          return {
            ...blog,
            heading: blogHeading,
            blog: blogText,
          };
        }
        return blog;
      });
      setBlogs(updatedBlogs);
      setEditMode(false);
      setEditId(null);
    } else {
      if (blogText.trim() !== '' && blogHeading.trim() !== '') {
        const newBlog = {
          id: new Date().getTime(),
          heading: blogHeading,
          blog: blogText,
        };
        setBlogs([...blogs, newBlog]);
      }
    }
    setBlogText('');
    setBlogHeading('');
  };

  const requestDeleteBlog = (id) => {
    setDeleteId(id);
    setShowConfirmModal(true);
  };

  const confirmDeleteBlog = () => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== deleteId);
    setBlogs(updatedBlogs);
    setShowConfirmModal(false);
  };

  const cancelDeleteBlog = () => {
    setShowConfirmModal(false);
    setDeleteId(null);
  };

  const editBlog = (id, heading, blog) => {
    setEditMode(true);
    setEditId(id);
    setBlogHeading(heading);
    setBlogText(blog);
  };

  return (
    <div className='blogs'>
      <h2>Share your travel experience with Travella</h2>

      <div className='blog-container'>
        {Storydata.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.blog}</p>
          </div>
        ))}
      </div>

      <div className='newblog-container'>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.heading}</h3>
            <p>{blog.blog}</p>
            <button className='edit' onClick={() => editBlog(blog.id, blog.heading, blog.blog)}>Edit</button>
            <button onClick={() => requestDeleteBlog(blog.id)}>Delete</button>
            <div className="social-share2">
              <FacebookShareButton url={window.location.href} quote={`Check out this blog: ${blog.heading}`}>
                Share on Facebook <FaShare />
              </FacebookShareButton>
              <TwitterShareButton url={window.location.href} title={`Check out this blog: ${blog.heading}`} className='share'>
                Share on Twitter <FaShare />
              </TwitterShareButton>
              <WhatsappShareButton url={window.location.href} title={`Check out this blog: ${blog.heading}`} className='share'>
                Share on Whatsapp <FaShare />
              </WhatsappShareButton>
            </div>
          </div>
        ))}
      </div>

      <div className='blog-area'>
        <form onSubmit={handleBlogSubmit}>
          <input
            type='text'
            value={blogHeading}
            onChange={handleHeadingChange}
            placeholder='Enter blog heading...'
          />
          <textarea
            value={blogText}
            onChange={handleBlogChange}
            placeholder='Write your blog...'
          />
          <button type='submit'>{editMode ? 'Save' : 'Post'}</button>
        </form>
      </div>

      <ConfirmModal
        show={showConfirmModal}
        message="Are you sure you want to delete this blog?"
        onConfirm={confirmDeleteBlog}
        onCancel={cancelDeleteBlog}
      />
    </div>
  );
}

export default Stories;
