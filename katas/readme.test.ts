import { existsSync, readdirSync } from "fs"

const rootPath = './katas'
const readmeFileName = 'README.md'
const allFilesInCurrentDirectory = readdirSync(rootPath, { withFileTypes: true })
const subFolders = allFilesInCurrentDirectory.filter(file => file.isDirectory())
const subFolderNames = subFolders.map(folder => folder.name)

describe('Every kata has a README file', () => {
    it.each(subFolderNames)(`${rootPath}/%s/${readmeFileName} is present`, (folderName) => {
        const readmeIsPresentInSubFolder = existsSync(`${rootPath}/${folderName}/${readmeFileName}`)
        expect(readmeIsPresentInSubFolder).toEqual(true)
    })
})