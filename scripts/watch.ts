import { parse, type ComponentDoc } from 'vue-docgen-api'
import fg from 'fast-glob'
import { promises as fs } from 'fs'

interface Component {
  name: string
  docs: ComponentDoc
}

const parseComponents = async () => {
  const componentFiles = await fg('./src/components/**/*.vue')
  const components: Component[] = []
  for (const path of componentFiles) {
    const docs = await parse(path)
    const name = path.split('/').pop()?.split('.').shift() || 'Unknown component'
    components.push({
      docs,
      name,
    })
  }

  try {
    await fs.writeFile('./src/components.json', JSON.stringify(components, null, 2))
    console.log('File written')
  } catch (error) {
    console.error('error writing component file', error)
  }
}

parseComponents()
