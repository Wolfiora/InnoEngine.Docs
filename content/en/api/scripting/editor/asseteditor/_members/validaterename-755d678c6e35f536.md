---
uid: api.755d678c6e35f53668108b4c86cb9460f678ae6b9d360ae60c2ccb0bbd5b5d52
symbol: "scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetEditor.ValidateRename(InnoEditor.Assets.AssetEditorContext,System.String)"
source: xml
reviewed: bf532228a7389fb2bd18c4c635348abb987b6aafb82b3bd4121e61e658af9c2e
title: "ValidateRename"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: editor-script
apiScope: Editor
---

Validates a requested asset move before the AssetPipeline transaction begins.

**Parameter `context`:** The immutable snapshot of the source entry before the move.

**Parameter `targetPath`:** The normalized source-relative destination path.

**Returns:** A valid result when the transaction may proceed, or a diagnostic describing the rejection.
