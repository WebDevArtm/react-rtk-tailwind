import { bindActionCreators } from '@reduxjs/toolkit'
import { githubActions } from 'libs/store/src/lib/github/github.slice'
import { useDispatch } from 'react-redux'

const actions = {
  ...githubActions
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
