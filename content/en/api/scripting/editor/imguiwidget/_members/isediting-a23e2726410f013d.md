---
uid: api.a23e2726410f013dcd102d031dd4ddcda5b5e72188a516227feedc82429b41de
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.IsEditing(System.String)"
source: xml
reviewed: 3612aaa51e73f4a4ebc85be08f1f1554d7e09103bc94ee0ef33beb84f2eebd4d
title: "IsEditing"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Checks whether this owner still owns a particular edit, including after a close or generation boundary.

**Parameter `path`:** The stable edit identity.

**Returns:** True only while the matching owner still has an active transaction.
