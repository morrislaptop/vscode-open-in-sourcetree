const vscode = require('vscode')
const open = require('open')

async function openInSourceTree () {
    const { rootPath } = vscode.workspace
    open(rootPath, '%LOCALAPPDATA%\\SourceTree\\SourceTree.exe')
}

function activate(context) {
    var disposable = vscode.commands.registerCommand('openInSourceTree.open', openInSourceTree)
    context.subscriptions.push(disposable)
}

exports.activate = activate
exports.deactivate = () => {}
