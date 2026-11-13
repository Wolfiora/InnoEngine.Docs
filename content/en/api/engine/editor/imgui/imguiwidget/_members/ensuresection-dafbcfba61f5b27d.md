---
uid: api.dafbcfba61f5b27d5ae4559bac3124039914c97ab8531124731a0b1cf5015601
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.EnsureSection(System.String,System.String)"
source: xml
reviewed: fb7e0c8a35694a28a46bb138198f96b88716d3ef393536c56ed9be2aee0dadfd
title: "EnsureSection"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Ensures that subsequently drawn default properties belong to a framed section.

**Parameter `title`:** Title used only when the current section layout has not declared a section yet.

**Parameter `description`:** Optional hover explanation for the implicit section title.

**Returns:** `true` when the current section accepts content; otherwise, `false` when that section is collapsed.

**Exception `T:System.ArgumentNullException`:** Thrown when `title` is `null`.
