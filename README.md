# VSC Open in SourceTree

Adds a command for opening the current project in [SourceTree](https://www.sourcetreeapp.com/).

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
