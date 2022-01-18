import { useRef, useEffect, useReducer } from 'react'
import { reactive } from '@vue/reactivity'
import { watch } from '@vue-reactivity/watch'

export function useReactiveRef (logic: Record<any, any>) {
  const reactiveRef = useRef(reactive(logic)),
        [_, forceUpdate] = useReducer(x => x + 1, 0)
  
  useEffect(
    () => {
      return watch(
        reactiveRef.current,
        () => forceUpdate()
      )
    },
    []
  )

  return reactiveRef
}
