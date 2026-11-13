---
uid: api.4b9fdbb059a42fb2461dd5715acf76d4af6b2872a4f5c6f74db8a9a865770ac2
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.SectionLayout(System.Action)"
source: xml
reviewed: d9918cd72abfd1f29e96ee79346020e6b4986fc70b3dfff1b193370142735204
title: "SectionLayout"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws content in a scope where consecutive section headers become framed fieldsets.

**Parameter `drawContent`:** Callback that draws all content participating in the section layout.

**Exception `T:System.ArgumentNullException`:** Thrown when `drawContent` is `null`.
