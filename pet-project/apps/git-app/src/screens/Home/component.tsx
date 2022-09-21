import { useEffect, useState } from 'react';
import { useSearchUsersQuery } from '@pet-project/store';
import { useDebounce } from '../../hooks/debounce';
import type { FC } from 'react';
import { useLazyGetUserReposQuery } from 'libs/store/src/lib/github/github.api';
import { RepoCard } from './components/RepoCard';

export const Screen: FC = () => {
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const debounce = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounce, {
    skip: debounce.length < 3,
    refetchOnFocus: true
  });
  const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserReposQuery()

  useEffect(() => {
    setDropdown( debounce.length > 2 && !!data)
  }, [debounce, data])

  const clickHandler = (username: string) => {
    fetchRepos(username)
    setDropdown(false)
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 h-[42px] w-full mb-2"
          placeholder="Search for Github username..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {isError && (
          <p className="text-center text-red-500">Something went wrong...</p>
        )}

        {dropdown && <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
          {isLoading && <p className="text-center">Loading...</p>}
          {data?.map(user => <li
          key={user.id}
          className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
          onClick={() => clickHandler(user.login)}
          >{user.login}
          </li>)}
        </ul>}
        <div className="container">
          {areReposLoading && <p className="text-center">Repos are loading</p>}
          {repos?.map(repo => <RepoCard repo={repo} key={repo.id} />)}
        </div>
      </div>
    </div>
  );
};
