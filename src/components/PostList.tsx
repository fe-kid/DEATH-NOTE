import { Post } from '../types';
import PostItem from './PostItem';

const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </>
  );
};

export default PostList;
