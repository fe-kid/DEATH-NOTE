import PostItem from './PostItem';
import { Post } from '../../shared/types';

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
