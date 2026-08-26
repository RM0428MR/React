import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  const [inputValue, setInputValue] = useState('')
  const hundleChange = (e) => (
    setInputValue(e.target.value)
  )
  return (
    <>
      <input onChange={hundleChange} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{inputValue}</p>
    </>
  )
}
