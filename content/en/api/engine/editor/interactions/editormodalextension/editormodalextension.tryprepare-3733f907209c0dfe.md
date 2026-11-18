---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3733f907209c0dfee56039390aa3cbe8a01aad8455d8fdf874219fbe99f6632b
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorModalExtension.TryPrepare(Inno.Editor.Core.EditorContext,Inno.Editor.Interactions.EditorModalExtension.Presentation,System.Numerics.Vector2,System.Nullable{System.Numerics.Vector2}@)
title: EditorModalExtension.TryPrepare
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 5c23992ef169ff0adeb065e22d39a828856ec7dba1c2f95cc6c714e759ec3c3f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The active owner-thread context.

**Parameter `presentation`:** The window policy already captured for this presentation attempt.

**Parameter `availableContentSize`:** The bounded content size in current presentation coordinates.

**Parameter `contentSize`:** The measured extent, or null for explicit sizing or failed preparation.

## Returns

True when preparation succeeded; false when this extension is quarantined.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The context is null.
