---
uid: api.a8856621fb287488b532712baa8d1260d17251be3e3269ed676a454252f108ad
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.SectionHeader(System.String,System.String,System.Action)"
source: xml
reviewed: e0e8c012b4f9e246ec37e8c16e25f21c6f10a31c6f9539be08e6da41dea037fd
title: "ImGuiWidget.SectionHeader"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a section heading with hover-only description using the shared Inspector presentation.

**Parameter `title`:** Section title.

**Parameter `description`:** Optional hover explanation.

**Parameter `drawLeadingControl`:** Optional interactive control drawn before the section title.

**Exception `T:System.ArgumentNullException`:** Thrown when `title` is `null`.

**Returns:** `true` when the section content should be drawn; otherwise, `false` when the section is collapsed.
