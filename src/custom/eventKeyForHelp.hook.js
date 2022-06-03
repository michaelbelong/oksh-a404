import { useEffect, useCallback } from 'react'

export const useEventKeyForHelp = ({isOpen, onOpen}) => {
  const handleListener = useCallback((e) => {
    e.preventDefault()
    // console.info('key ::', e.shiftKey, e.key)
    if (e.shiftKey && e.key === '?') {
      // console.log('open modal')
      onOpen()
    }
  }, [onOpen])

  useEffect(() => {
    if (isOpen) return
    document.addEventListener('keyup', handleListener)
    return () => document.removeEventListener('keyup', handleListener)
  }, [isOpen, handleListener])
}