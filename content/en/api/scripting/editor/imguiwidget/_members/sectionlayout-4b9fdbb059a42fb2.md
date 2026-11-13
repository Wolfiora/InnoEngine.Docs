---
uid: api.4b9fdbb059a42fb2461dd5715acf76d4af6b2872a4f5c6f74db8a9a865770ac2
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.SectionLayout(System.Action)"
source: xml
reviewed: 17910e83d78a676cffacf214d60dc6d44f844e2928cc234fab9b3b73793e3751
title: "SectionLayout"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws content in a scope where consecutive section headers become framed fieldsets.

**Parameter `drawContent`:** Callback that draws all content participating in the section layout.

**Exception `T:System.ArgumentNullException`:** Thrown when `drawContent` is `null`.
