---
uid: api.a23e2726410f013dcd102d031dd4ddcda5b5e72188a516227feedc82429b41de
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.IsEditing(System.String)"
source: xml
reviewed: f451af4961363b6f216c7b49acc40660c5bd380c3fa5304fb69c51a5fed655d4
title: "ImGuiWidget.IsEditing"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Checks whether this owner still owns a particular edit, including after a close or generation boundary.

**Parameter `path`:** The stable edit identity.

**Returns:** True only while the matching owner still has an active transaction.
