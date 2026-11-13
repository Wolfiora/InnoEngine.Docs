---
uid: api.9fde3ec265e1f3436d333655431e527e5517049eefbe699c279b124574d3d523
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.WrappedText(System.String)"
source: xml
reviewed: c07fc755452430f207dab1cdc13abfa533d6547b9c98679d7c75425896438245
title: "WrappedText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws literal text wrapped to the remaining content width without using a native variadic formatting entry point.

**Parameter `text`:** The literal text to draw.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.InvalidOperationException`:** The owning UI thread, frame or native context is not active.

**Exception `T:System.ObjectDisposedException`:** The owning UI session has retired.
