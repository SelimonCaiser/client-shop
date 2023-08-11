import { useStore } from 'effector-react'
import Select from 'react-select'
import { $mode } from '../../../context/mode'
import {
  controlStyles,
  inputStyles,
  menuStyles,
  optionStyles,
} from '../../../styles/searchInput'

import SearchSvg from '../../elements/SearchSvg/SearchSvg'
import styles from '../../../styles/header/header.module.scss'

const SearchInput = () => {
  const mode = useStore($mode)
  return (
    <>
      <div className={styles.header__search__inner}>
        <Select
          placeholder="Я ищу..."
          styles={{
            ...inputStyles,
            container: (defaultStyles) => ({
              ...defaultStyles,
            }),
            control: (defaultStyles) => ({
              ...controlStyles(defaultStyles, mode),
              backgroundColor: mode === 'dark' ? '#2d2d2d' : '#ffffff',
              transition: 'none',
            }),
            input: (defaultStyles) => ({
              ...defaultStyles,
              color: mode === 'dark' ? '#f2f2f2' : '#222222',
            }),
            menu: (defaultStyles) => ({
              ...menuStyles(defaultStyles, mode),
              marginTop: '-1px',
            }),
            option: (defaultStyles, state) => ({
              ...optionStyles(defaultStyles, state, mode),
            }),
          }}
          isClearable={true}
          openMenuOnClick={false}
        />
        <span className={styles.header__search__border} />
      </div>
      <button className={`${styles.header__search__btn}`}>
        <span className={styles.header__search__btn__span}>
          <SearchSvg />
        </span>
      </button>
    </>
  )
}
export default SearchInput
