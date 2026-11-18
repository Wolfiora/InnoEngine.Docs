---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.59b9f55ba082ac9b8707f67046ba74321f8576a8e336a8aa65a0a5ac12c5d8df
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModal.Prepare(Inno.Editor.Core.EditorContext,System.Numerics.Vector2)
title: EditorModal.Prepare
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: 54359b0d8bfec39071d9f6a37ce6683e715499b8e5642991b1f870617288ef66
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
