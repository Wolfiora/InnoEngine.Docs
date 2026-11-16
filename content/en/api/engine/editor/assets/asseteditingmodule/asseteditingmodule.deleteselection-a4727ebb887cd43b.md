---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a4727ebb887cd43b672c6c323ae878a76b45469fd0a6820e9b06f73e0f1da2d1
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.DeleteSelection(Inno.Editor.Core.EditorContext,System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetFileEntry})
title: AssetEditingModule.DeleteSelection
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
reviewed: 5e37c596c7a91e3e1f22b612fb236b691601de4d510a3b02eb4b42438d5ebd48
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `editor`:** The immediate Editor context.

**Parameter `targets`:** Fresh selected source entries; nested entries are covered by their selected directory.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Validation or a mutation fails; rollback failures remain explicit.
