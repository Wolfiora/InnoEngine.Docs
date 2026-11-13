---
uid: api.321b2d11d44d12f36a7a17b324a6b8dca8cd59c6b664dcf6b3f3a6d2c58d9444
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.MoveToDirectoryWithHistory(System.String,System.String,Inno.Editor.Interactions.IEditorHistory)"
source: xml
reviewed: eb34393697754d4715fd02a151703c5a4daf122bd37f67b7f05e3faad1d717b0
title: "MoveToDirectoryWithHistory"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Moves a source and records the committed mutation in the supplied history.

**Parameter `sourcePath`:** The current isolated source-relative path.

**Parameter `targetDirectory`:** The isolated destination directory.

**Parameter `history`:** The authoritative history that receives the committed mutation.

**Returns:** The committed source identity, or a validation result describing why the operation is unavailable.
