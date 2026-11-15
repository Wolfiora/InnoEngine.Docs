---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.editor.assets.f207cb2827c221a6
symbol: engine:Inno.Editor.Assets:T:Inno.Editor.Assets.AssetSampleImportProgress
title: AssetSampleImportProgress
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
reviewed: 2b71894c3326ded9270bc0393dc97260af27b532a98dc307623afe4e49b45b29

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-editor-assets
aliases: []
---

Contains one atomically captured sample import status.

## Parameters

**Parameter `operationId`:** The import identity within its owner.

**Parameter `fraction`:** The completed validation and publication fraction.

**Parameter `status`:** The current stage description.

**Parameter `cancellationRequested`:** Whether cancellation is draining owned work.
