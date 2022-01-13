import { configureable } from '@baleada/prepare'

const external = [
        '@baleada/logic',
        'react',
        '@types/react',
        '@vue/reactivity',
        '@vue-reactivity/watch',
      ],
      esm = new configureable.Rollup()
        .input('src/index.ts')
        .delete({ targets: 'lib/*', verbose: true })
        .esbuild()
        .resolve()
        .external(external)
        .esm({ file: 'lib/index.js', target: 'browser' })
        .configure(),
      dts = new configureable.Rollup()
        .input('types/index.d.ts')
        .external(external)
        .dts()
        .output({ file: 'lib/index.d.ts', format: 'esm' })
        .configure()

export default [
  esm,
  dts,
]
