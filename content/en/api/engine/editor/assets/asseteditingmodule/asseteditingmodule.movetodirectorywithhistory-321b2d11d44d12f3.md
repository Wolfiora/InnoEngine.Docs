---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.321b2d11d44d12f36a7a17b324a6b8dca8cd59c6b664dcf6b3f3a6d2c58d9444
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.MoveToDirectoryWithHistory(System.String,System.String,Inno.Editor.Interactions.IEditorHistory)
title: AssetEditingModule.MoveToDirectoryWithHistory
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
reviewed: be37e33ea198fb53254e5250cf124858239b1f450780e47fff6cbfe0a9ea9611
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `sourcePath`:** The current isolated source-relative path.

**Parameter `targetDirectory`:** The isolated destination directory.

**Parameter `history`:** The authoritative history that receives the committed mutation.

## Returns

The committed source identity, or a validation result describing why the operation is unavailable.
