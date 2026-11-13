---
uid: api.a8856621fb287488b532712baa8d1260d17251be3e3269ed676a454252f108ad
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.SectionHeader(System.String,System.String,System.Action)"
source: xml
reviewed: 80d0713abb6b53922441950a348748dcbd5b12ba69177d5044b556b2921987e1
title: "SectionHeader"
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
