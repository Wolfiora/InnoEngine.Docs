---
uid: api.e324d320efdade05a30fbc2b8644a18bb46ed6889bd3b74806885b6889b6554d
symbol: "scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetEditor.OnRenamed(InnoEditor.Assets.AssetEditorContext,System.String,System.String)"
source: xml
reviewed: d3512ca9ca6a08aa5027a245f864d924fc54ff68efa35b61c585110f7e13067f
title: "OnRenamed"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: editor-script
apiScope: Editor
---

Runs after an asset move transaction commits successfully.

**Parameter `context`:** The immutable snapshot captured before the move.

**Parameter `oldPath`:** The previous source-relative path.

**Parameter `newPath`:** The committed source-relative destination path.
