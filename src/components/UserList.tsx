import { User } from '../types';
import UserItem from './UserItem';

const UserList: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <>
      {users.map((user, idx) => {
        return <UserItem key={user.id} user={user} idx={idx + 1} />;
      })}
    </>
  );
};

export default UserList;
