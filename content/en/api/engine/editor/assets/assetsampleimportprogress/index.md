---
uid: api.inno.editor.assets.f207cb2827c221a6
symbol: "engine:Inno.Editor.Assets:T:Inno.Editor.Assets.AssetSampleImportProgress"
source: xml
reviewed: 0853f659c5395f2254359f4ade103b2db934826fb9acb9b207fe689d13fd9e57
title: "AssetSampleImportProgress"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
contracts:
- project.inno-editor-assets
aliases: []
---

Contains one atomically captured sample import status.

**Parameter `operationId`:** The import identity within its owner.

**Parameter `fraction`:** The completed validation and publication fraction.

**Parameter `status`:** The current stage description.

**Parameter `cancellationRequested`:** Whether cancellation is draining owned work.
