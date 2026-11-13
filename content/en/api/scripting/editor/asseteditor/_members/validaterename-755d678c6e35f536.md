---
uid: api.755d678c6e35f53668108b4c86cb9460f678ae6b9d360ae60c2ccb0bbd5b5d52
symbol: "scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetEditor.ValidateRename(InnoEditor.Assets.AssetEditorContext,System.String)"
source: xml
reviewed: f0b3378c74a6701f97152be92d0fb049ac8fb0409038235839546a0c3e32111e
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
