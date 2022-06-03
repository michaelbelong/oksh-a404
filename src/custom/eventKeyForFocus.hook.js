import { useRef, useState, useEffect, useCallback } from 'react'

const useFocus = () => {
  const [ isFocus, setFocus ] = useState(false)
  const onFocus = () => setFocus(true)
  const onBlur = () => setFocus(false)
  
  return {
    isFocus,
    onFocus,
    onBlur,
  }
}

export const useEventKeyForFocus = () => {
  const { isFocus, onFocus, onBlur } = useFocus(false)
  const ref = useRef(null)
  
  const handleListener = useCallback((e) => {
    e.preventDefault()
    // console.info('key ::', e.key)
    if (e.key === '/' && !isFocus) {
      // console.log('focus console')
      onFocus()
    }
    if (e.key === 'Escape' && isFocus) {
      // console.log('blur console')
      onBlur()
    }
  }, [ isFocus, onFocus, onBlur ])

  useEffect(() => {
    document.addEventListener('keyup', handleListener)
    return () => document.removeEventListener('keyup', handleListener)
  }, [ handleListener ])

  return { ref, isFocus }
}
