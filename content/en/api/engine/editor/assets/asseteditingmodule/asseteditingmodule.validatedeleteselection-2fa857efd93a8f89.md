---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2fa857efd93a8f8948e4fbccb93bfea00f1ceb7b6d6d9f24f6f24a6271e0e63a
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.ValidateDeleteSelection(Inno.Editor.Core.EditorContext,System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetFileEntry})
title: AssetEditingModule.ValidateDeleteSelection
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
reviewed: 92548e0553a69255788b5fc68688e03e4129bfb4681a2f9aff69bf7a4bac3fd0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `editor`:** The immediate Editor context.

**Parameter `targets`:** Fresh source entries in selection order.

## Returns

The first rejection, or a valid result when every source can be deleted.
