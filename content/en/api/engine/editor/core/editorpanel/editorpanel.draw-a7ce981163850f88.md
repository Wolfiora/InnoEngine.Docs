---
uid: api.a7ce981163850f886f92f533fd0bd30754e76be263bb2b3be96061351883793a
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanel.Draw(Inno.Editor.Core.EditorContext)"
source: xml
reviewed: ad4c2996dab6b5edb082003ff1a1b453ceeeb89f041355b4d920bf4e68703538
title: "EditorPanel.Draw"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Draws the complete dockable contents of the panel for the current frame.

## Parameters

**Parameter `context`:** The shared editor context containing current selection, focus, and frame state.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the panel is not attached.
