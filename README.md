# VSC Open in SourceTree

Adds a command for opening the current project in [SourceTree](https://www.sourcetreeapp.com/).

- If there is a file open, it will open the Git or Mercurial repo for that file
- If it is a workspace, it will ask you what folder you would like to open
- It will automatically find the best Git repo to open

## Install

Run the following in the command palette:

```shell
ext install vscode-open-in-sourcetree
```

## Usage

It adds 1 command to the command palette and 1 item to the context menu:

```js
'Open in SourceTree' // Open the current project in SourceTree
```

## Hints

Map `Open in Source Tree` action to this extension, add this to your `keybindings.json` file:

```json
  { "key": "⌘⌃S", "command": "openInSourceTree.open" }
``````

## License

MIT © Craig Morris
