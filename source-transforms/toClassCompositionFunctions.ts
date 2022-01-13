import { toLogicMetadata } from './toLogicMetadata'
import type { ClassMetadatum } from './toLogicMetadata'

const { classes } = toLogicMetadata()

export function toClassCompositionFunctions () {
  const reactImport = `import { useEffect } from 'react'`,
        extractedImport = `import { useReactiveRef } from './extracted/useReactiveRef'`,
        reactTypesImport = `import type { MutableRefObject } from 'react'`,
        logicImport = `import { ${classes.map(({ name }) => name).join(', ')} } from '@baleada/logic'`,
        logicTypesImport = `import type { ${classes.map(({ typeExports }) => typeExports).flat().join(', ')} } from '@baleada/logic'`,
        classCompositionFunctions = classes
          .map(cl_ss => toClassCompositionFunction(cl_ss))
          .join('\n\n')

  return `\
${reactImport}
${extractedImport}
${reactTypesImport}
${logicImport}
${logicTypesImport}

${classCompositionFunctions}
`
}

function toClassCompositionFunction ({
  name,
  needsCleanup,
  generics: genericsArray,
  optionsGenerics: optionsGenericsArray,
  state,
  stateType,
}: ClassMetadatum) {
  const generics = genericsArray.length > 0
          ? `<${genericsArray.join(', ')}>`
          : '',
        genericsWithoutExtends = genericsArray.length > 0
          ? `<${genericsArray.map(generic => generic.replace(/ extends .+$/, '')).join(', ')}>`
          : '',
        optionsGenerics = optionsGenericsArray.length > 0
          ? `<${optionsGenericsArray.join(', ')}>`
          : '',
        init = `\
  const instance = new ${name}${genericsWithoutExtends}(${state}, options)
  const reactiveInstance = useReactiveRef(instance)
`,
        cleanup = needsCleanup ? '  useEffect(() => reactiveInstance.current.stop(), [])\n' : ''

  return `\
export function use${name}${generics} (${state}: ${stateType}, options?: ${name}Options${optionsGenerics}): MutableRefObject<${name}${genericsWithoutExtends}> {
${init}\
${cleanup}\
  return reactiveInstance as unknown as MutableRefObject<${name}${genericsWithoutExtends}>
}\
`
}
