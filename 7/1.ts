const file = await Deno.readTextFile('./7/data_sample.txt')

const consoleOutput = file.trim().split('\n')

const currentPath: string[] = []
const visitedPaths: Set<string> = new Set()
const fileTree: { [key: string]: number[] } = {}

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
  } else {
    const [fileSize, _fileName] = line.split(' ')
    const fullPath = currentPath.join('/').replace('//', '/')
    fileTree[fullPath].push(Number(fileSize))
  }
}

for (const [path, files] of Object.entries(fileTree)) {
  fileTree[path] = [files.reduce((a, b) => b + a)]
}

console.log(fileTree)
