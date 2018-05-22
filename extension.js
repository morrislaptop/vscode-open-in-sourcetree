const vscode = require('vscode')
const findRoot = require('find-root')
const open = require('opn')
const fs = require('fs')
const path = require('path')

async function askUserForPath(workspaceFolders)
{
    let items = workspaceFolders.map(item => item.name)

    let selected = await vscode.window.showQuickPick(items)

    if (selected) {
        return workspaceFolders.find(item => item.name === selected).uri.fsPath
    }
}

function findGitRoot(filepath) {
    let startingPath = fs.lstatSync(filepath).isDirectory() ? filepath : path.dirname(filepath)

    return findRoot(startingPath, function (dir) {
        return fs.existsSync(path.resolve(dir, '.git'))
    })
}

async function findRelevantPath() {
    let activeTextEditor = vscode.window.activeTextEditor
    let workspaceFolders = vscode.workspace.workspaceFolders
    let file = activeTextEditor && activeTextEditor.document.fileName

    if (fs.existsSync(file)) {
        return file
    }
    else if (workspaceFolders.length === 1) {
        return workspaceFolders[0].uri.fsPath
    }
    else {
        return await askUserForPath(workspaceFolders)
    }
}

async function openInSourceTree () {
    try {
        const relevantPath = await findRelevantPath()

        if (! relevantPath) return

        const gitPath = await findGitRoot(relevantPath)

        await open(gitPath, { app: 'SourceTree' })
    }
    catch (err) {
        console.error(err)
        vscode.window.showErrorMessage('No git repo found.')
    }
}

function activate(context) {
    var disposable = vscode.commands.registerCommand('openInSourceTree.open', openInSourceTree)
    context.subscriptions.push(disposable)
}

exports.activate = activate
exports.deactivate = () => {}