import { Provider } from 'react-redux';
import React, { HTMLAttributes } from 'react'
import type { FC } from 'react';
import { store } from './store'

export const StoreProvider:FC<HTMLAttributes<HTMLElement>> = props => <Provider store={store}>{props.children}</Provider>
