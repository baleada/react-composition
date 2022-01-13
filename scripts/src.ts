import { toClassCompositionFunctions } from '../source-transforms/toClassCompositionFunctions'
import { writeFileSync } from 'fs'

writeFileSync('src/index.ts', toClassCompositionFunctions())
