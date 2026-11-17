---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.59b9f55ba082ac9b8707f67046ba74321f8576a8e336a8aa65a0a5ac12c5d8df
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModal.Prepare(Inno.Editor.Core.EditorContext,System.Numerics.Vector2)
title: EditorModal.Prepare
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: 56ef8d36a1e364d9f64642e5f93086e37ec51426e9033d1e64372e0d050e2176
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The owner-thread editor context for this frame.

**Parameter `availableContentSize`:** The bounded content area in current presentation coordinates, already scaled.

## Returns

The required content size, or null for an explicitly sized window.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The context is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The available extent is not finite and positive.
