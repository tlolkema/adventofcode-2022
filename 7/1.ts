const file = await Deno.readTextFile('./7/data.txt')

const consoleOutput = file.trim().split('\n')

const currentPath: string[] = []
const visitedPaths: Set<string> = new Set()
const fileTree: { [key: string]: string[] } = {}

const filteredConsoleOutput = consoleOutput.filter(
  (line) => !line.startsWith('$ ls') && !line.startsWith('dir'),
)

const alreadyVisited = (fullPath: string) => {
  if (visitedPaths.has(fullPath)) {
    console.log(`Already visited: ${fullPath}`)
    return true
  } else {
    visitedPaths.add(fullPath)
    return false
  }
}

const updateCurentPath = (dir: string) => {
  if (dir === '..') {
    currentPath.pop()
  } else {
    currentPath.push(dir)
  }
}

for (const line of filteredConsoleOutput) {
  if (line.startsWith('$ cd')) {
    const dir = line.replace('$ cd ', '')
    updateCurentPath(dir)

    const fullPath = currentPath.join('/').replace('//', '/')

    if (!alreadyVisited(fullPath)) {
      fileTree[fullPath] = []
    }
  }
}

console.log(fileTree)
