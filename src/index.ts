import { useEffect } from 'react'
import { useReactiveRef } from './extracted/useReactiveRef'
import type { MutableRefObject } from 'react'
import { Animateable, Completeable, Copyable, Delayable, Dispatchable, Drawable, Fetchable, Fullscreenable, Grantable, Listenable, Navigateable, Pickable, Recognizeable, Resolveable, Sanitizeable, Searchable, Storeable } from '@baleada/logic'
import type { AnimateableKeyframe, AnimateableOptions, AnimateableStatus, AnimateFrame, AnimateFrameEffect, AnimateOptions, CompleteableOptions, CompleteableStatus, CompleteOptions, CopyableOptions, CopyableStatus, DelayableEffect, DelayableOptions, DelayableStatus, DispatchableOptions, DispatchableStatus, DispatchOptions, DrawableState, DrawableOptions, DrawableStatus, FetchableOptions, FetchableStatus, FetchOptions, FetchOptionsApi, FullscreenableGetElement, FullscreenableOptions, FullscreenableStatus, GrantableOptions, GrantableStatus, ListenableSupportedType, ListenableSupportedEventType, ListenableKeycombo, ListenableClickcombo, ListenablePointercombo, ListenableOptions, ListenableStatus, ListenEffect, ListenEffectParam, ListenOptions, ListenableActive, NavigateableOptions, NavigateableStatus, PickableOptions, PickableStatus, RecognizeableOptions, RecognizeableStatus, RecognizeableEffectApi, RecognizeOptions, ResolveableGetPromise, ResolveableOptions, ResolveableStatus, SanitizeableOptions, SanitizeableStatus, SearchableOptions, SearchableStatus, StoreableOptions, StoreableStatus } from '@baleada/logic'

export function useAnimateable (keyframes: AnimateableKeyframe[], options?: AnimateableOptions): MutableRefObject<Animateable> {
  const instance = new Animateable(keyframes, options)
  const reactiveInstance = useReactiveRef(instance)
  useEffect(() => reactiveInstance.current.stop(), [])
  return reactiveInstance as unknown as MutableRefObject<Animateable>
}

export function useCompleteable (string: string, options?: CompleteableOptions): MutableRefObject<Completeable> {
  const instance = new Completeable(string, options)
  const reactiveInstance = useReactiveRef(instance)
  return reactiveInstance as unknown as MutableRefObject<Completeable>
}

export function useCopyable (string: string, options?: CopyableOptions): MutableRefObject<Copyable> {
  const instance = new Copyable(string, options)
  const reactiveInstance = useReactiveRef(instance)
  useEffect(() => reactiveInstance.current.stop(), [])
  return reactiveInstance as unknown as MutableRefObject<Copyable>
}

export function useDelayable (effect: DelayableEffect, options?: DelayableOptions): MutableRefObject<Delayable> {
  const instance = new Delayable(effect, options)
  const reactiveInstance = useReactiveRef(instance)
  useEffect(() => reactiveInstance.current.stop(), [])
  return reactiveInstance as unknown as MutableRefObject<Delayable>
}

export function useDispatchable<EventType extends ListenableSupportedEventType> (type: EventType, options?: DispatchableOptions): MutableRefObject<Dispatchable<EventType>> {
  const instance = new Dispatchable<EventType>(type, options)
  const reactiveInstance = useReactiveRef(instance)
  return reactiveInstance as unknown as MutableRefObject<Dispatchable<EventType>>
}

export function useDrawable (stroke: DrawableState, options?: DrawableOptions): MutableRefObject<Drawable> {
  const instance = new Drawable(stroke, options)
  const reactiveInstance = useReactiveRef(instance)
  return reactiveInstance as unknown as MutableRefObject<Drawable>
}

export function useFetchable (resource: string, options?: FetchableOptions): MutableRefObject<Fetchable> {
  const instance = new Fetchable(resource, options)
  const reactiveInstance = useReactiveRef(instance)
  return reactiveInstance as unknown as MutableRefObject<Fetchable>
}

export function useFullscreenable<ElementType extends Element> (getElement: FullscreenableGetElement<ElementType>, options?: FullscreenableOptions): MutableRefObject<Fullscreenable<ElementType>> {
  const instance = new Fullscreenable<ElementType>(getElement, options)
  const reactiveInstance = useReactiveRef(instance)
  return reactiveInstance as unknown as MutableRefObject<Fullscreenable<ElementType>>
}

export function useGrantable<DescriptorType extends PermissionDescriptor> (descriptor: DescriptorType, options?: GrantableOptions): MutableRefObject<Grantable<DescriptorType>> {
  const instance = new Grantable<DescriptorType>(descriptor, options)
  const reactiveInstance = useReactiveRef(instance)
  return reactiveInstance as unknown as MutableRefObject<Grantable<DescriptorType>>
}

export function useListenable<Type extends ListenableSupportedType, RecognizeableMetadata extends Record<any, any> = Record<any, any>> (type: Type, options?: ListenableOptions<Type, RecognizeableMetadata>): MutableRefObject<Listenable<Type, RecognizeableMetadata>> {
  const instance = new Listenable<Type, RecognizeableMetadata>(type, options)
  const reactiveInstance = useReactiveRef(instance)
  useEffect(() => reactiveInstance.current.stop(), [])
  return reactiveInstance as unknown as MutableRefObject<Listenable<Type, RecognizeableMetadata>>
}

export function useNavigateable<Item> (array: Item[], options?: NavigateableOptions): MutableRefObject<Navigateable<Item>> {
  const instance = new Navigateable<Item>(array, options)
  const reactiveInstance = useReactiveRef(instance)
  return reactiveInstance as unknown as MutableRefObject<Navigateable<Item>>
}

export function usePickable<Item> (array: Item[], options?: PickableOptions): MutableRefObject<Pickable<Item>> {
  const instance = new Pickable<Item>(array, options)
  const reactiveInstance = useReactiveRef(instance)
  return reactiveInstance as unknown as MutableRefObject<Pickable<Item>>
}

export function useRecognizeable<Type extends ListenableSupportedType, Metadata extends Record<any, any>> (sequence: ListenEffectParam<Type>[], options?: RecognizeableOptions<Type, Metadata>): MutableRefObject<Recognizeable<Type, Metadata>> {
  const instance = new Recognizeable<Type, Metadata>(sequence, options)
  const reactiveInstance = useReactiveRef(instance)
  return reactiveInstance as unknown as MutableRefObject<Recognizeable<Type, Metadata>>
}

export function useResolveable<Value> (getPromise: ResolveableGetPromise<Value>, options?: ResolveableOptions): MutableRefObject<Resolveable<Value>> {
  const instance = new Resolveable<Value>(getPromise, options)
  const reactiveInstance = useReactiveRef(instance)
  return reactiveInstance as unknown as MutableRefObject<Resolveable<Value>>
}

export function useSanitizeable (html: string, options?: SanitizeableOptions): MutableRefObject<Sanitizeable> {
  const instance = new Sanitizeable(html, options)
  const reactiveInstance = useReactiveRef(instance)
  return reactiveInstance as unknown as MutableRefObject<Sanitizeable>
}

export function useSearchable<Item extends string | object> (candidates: Item[], options?: SearchableOptions<Item>): MutableRefObject<Searchable<Item>> {
  const instance = new Searchable<Item>(candidates, options)
  const reactiveInstance = useReactiveRef(instance)
  return reactiveInstance as unknown as MutableRefObject<Searchable<Item>>
}

export function useStoreable (key: string, options?: StoreableOptions): MutableRefObject<Storeable> {
  const instance = new Storeable(key, options)
  const reactiveInstance = useReactiveRef(instance)
  return reactiveInstance as unknown as MutableRefObject<Storeable>
}
