---
uid: api.f780699188c35c34cb8837995aa2bca79dba079dc7a061a21b3145a258545090
symbol: "scripting:Inno.Editor.ImGui:P:InnoEditor.ImGui.ImGuiWidget.isSectionContentVisible"
source: xml
reviewed: deb6b8a65d9e84887017809b94b19eecef68b3c2659c698551d881dcf0ea87bb
title: "ImGuiWidget.isSectionContentVisible"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Gets whether content belonging to the current Inspector section should be drawn.

## Remarks

Attribute-driven drawers use this value to skip properties until the next section header when the current section is collapsed.
