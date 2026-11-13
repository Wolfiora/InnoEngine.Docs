---
uid: api.inno.editor.assets.f207cb2827c221a6
symbol: "engine:Inno.Editor.Assets:T:Inno.Editor.Assets.AssetSampleImportProgress"
source: xml
reviewed: 2b71894c3326ded9270bc0393dc97260af27b532a98dc307623afe4e49b45b29
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
