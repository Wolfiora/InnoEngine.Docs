---
uid: api.59b9f55ba082ac9b8707f67046ba74321f8576a8e336a8aa65a0a5ac12c5d8df
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModal.Prepare(Inno.Editor.Core.EditorContext,System.Numerics.Vector2)"
source: xml
reviewed: 63015733b4a9c69f6bb1a1cef9dfd9b1ec49722bb1ed77ba902c407654c806be
title: "Prepare"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Captures presentation state before submitting content. Content-sized windows prepare before opening; explicitly sized resizable windows prepare after current input establishes their content bounds.

**Parameter `context`:** The owner-thread editor context for this frame.

**Parameter `availableContentSize`:** The bounded content area in current presentation coordinates, already scaled.

**Returns:** The required content size, or null for an explicitly sized window.

**Exception `T:System.ArgumentNullException`:** The context is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The available extent is not finite and positive.
