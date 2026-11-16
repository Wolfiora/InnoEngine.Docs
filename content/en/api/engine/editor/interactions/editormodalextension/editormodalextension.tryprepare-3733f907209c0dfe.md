---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3733f907209c0dfee56039390aa3cbe8a01aad8455d8fdf874219fbe99f6632b
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorModalExtension.TryPrepare(Inno.Editor.Core.EditorContext,Inno.Editor.Interactions.EditorModalExtension.Presentation,System.Numerics.Vector2,System.Nullable{System.Numerics.Vector2}@)
title: EditorModalExtension.TryPrepare
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 60adf88d52fe6105f7d817bdd4fe007c5db443c11876557bf6ea6ea42b011eb6
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
