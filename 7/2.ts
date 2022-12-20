const file = await Deno.readTextFile('./7/data.txt')

const consoleOutput = file.trim().split('\n')

const currentPath: string[] = []
const visitedPaths: Set<string> = new Set()
const fileTree: { [key: string]: number[] } = {}

// filter out the ls and dir commands
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

// build file tree
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

// sum filesizes in each path, if there are any files else set to 0
for (const [path, sizes] of Object.entries(fileTree)) {
  sizes.length > 0
    ? (fileTree[path] = [sizes.reduce((a, b) => a + b)])
    : (fileTree[path] = [0])
}

// sum paths which are subpaths of other paths
for (const [path, sizes] of Object.entries(fileTree)) {
  for (const [otherPath, _otherFiles] of Object.entries(fileTree)) {
    if (path !== otherPath && path.startsWith(otherPath)) {
      fileTree[otherPath][0] += sizes[0]
    }
  }
}

const rootSize = fileTree['/'][0]
const unusedSpace = 70000000 - rootSize
const requiredSpace = 30000000
const neededSpace = requiredSpace - unusedSpace

// find directories with size > neededSpace
const sizesDirectoriesBigEnough = []
for (const [_path, sizes] of Object.entries(fileTree)) {
  if (sizes[0] > neededSpace) {
    sizesDirectoriesBigEnough.push(sizes[0])
  }
}

const smallestDirectoryBigEnough = sizesDirectoriesBigEnough.sort(
  (a, b) => a - b,
)[0]

console.log(smallestDirectoryBigEnough)
