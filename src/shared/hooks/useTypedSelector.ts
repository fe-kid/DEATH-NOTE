import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '../state/reducers/reducers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
