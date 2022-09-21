import { useActions } from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'
import type { FC, MouseEvent } from 'react'


export const Screen:FC = () => {
  const {favourites} = useAppSelector(state => state.github)
  const {removeFavourite} = useActions()

  if(favourites.length === 0) return <p className='text-center'>No items</p>

  const removeFromFavourite = (favouritesLink: string) => {
    removeFavourite(favouritesLink)
  }

  return <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
    <ul className="list-none">
      {favourites.map(f => <li className="h-10 py-2" key={f}>
        <a href={f} target="_blank">{f}</a>
        <button
          className="ml-2 px-2 bg-red-400 rounded hover:shadow-md transition-all float-right"
          onClick={removeFromFavourite.bind(0, f)}
        >Remove</button>
      </li>)}
    </ul>
  </div>
}
