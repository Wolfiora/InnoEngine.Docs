---
uid: api.0db8125d0d782609b00494ef1c3970811d2a6719f982e1b51c9d803cc11dc3bd
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.EnsureSection(System.String,System.String)"
source: xml
reviewed: 512240c9c358860ed7fc5cfe2e47a3ebc6ffec241507e0857394a3052529f64d
title: "EnsureSection"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Ensures that subsequently drawn default properties belong to a framed section.

**Parameter `title`:** Title used only when the current section layout has not declared a section yet.

**Parameter `description`:** Optional hover explanation for the implicit section title.

**Returns:** `true` when the current section accepts content; otherwise, `false` when that section is collapsed.

**Exception `T:System.ArgumentNullException`:** Thrown when `title` is `null`.
