import { useUserContext } from 'DataFetching/UsingContext/UserContext';
import './index.css';

export default function UserName() {
  const { data } = useUserContext();

  return (
    <>
      <div className='dfc-user-name'>{data?.name}</div>
      <div className='dfc-user-name-email'>{data?.email}</div>
    </>
  );
}
