
import { useActions } from 'apps/git-app/src/hooks/actions';
import { useAppSelector } from 'apps/git-app/src/hooks/redux';
import type { IRepo } from 'libs/store/src/models/models';
import type { MouseEvent } from 'react';

export function RepoCard({ repo }: {repo: IRepo}) {
  const {addFavourite, removeFavourite} = useActions()
  const {favourites} = useAppSelector(state => state.github)

  const addToFavourite = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavourite(repo.html_url)
  }
  const removeFromFavourite = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavourite(repo.html_url)
  }

  return (
  <div className="boreder py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all ">
    <a href={repo.html_url} target="_blank">
      <h2 className="text-lg font-bold"> {repo.full_name}</h2>
      <p className="text-sm">
        Foreks: <span className="font-bold mr-2">{repo.forks}</span>
        Watchers: <span className="font-bold">{repo.watchers}</span>
      </p>
      <p className="text-sm font-thin">{repo?.description}</p>
    </a>

    {!favourites.includes(repo.html_url)
    ? <button
      className="py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
      onClick={addToFavourite}
    >Add</button>
    : <button
      className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
      onClick={removeFromFavourite}
    >Remove</button>}
  </div>)
}
