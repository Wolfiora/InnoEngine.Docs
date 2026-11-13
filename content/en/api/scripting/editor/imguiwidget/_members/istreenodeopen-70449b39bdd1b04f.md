---
uid: api.70449b39bdd1b04f72279df4cbafcb5b376e0195fa9732f7a71e0ebe22a74b47
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.IsTreeNodeOpen(System.String)"
source: xml
reviewed: 26e2f2855569ef869343abc0e421100c3f099bc9ca7b054100856b8309b04c12
title: "IsTreeNodeOpen"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Reads a retained expansion value without submitting a native row or retaining domain objects.

**Parameter `id`:** The stable row identifier within this window and owner.

**Returns:** True when the row was explicitly expanded; unknown rows are collapsed.

**Exception `T:System.ArgumentException`:** The row identifier is empty or whitespace.

**Exception `T:System.InvalidOperationException`:** No valid drawing session or native frame is active.
