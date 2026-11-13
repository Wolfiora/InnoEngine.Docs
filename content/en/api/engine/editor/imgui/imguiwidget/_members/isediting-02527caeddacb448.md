---
uid: api.02527caeddacb4485ca243e7c67dbf27e1caa1c2c1c13f6cac78baedab076ad1
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.IsEditing(System.String)"
source: xml
reviewed: fc6f4bd2ff6a2eeaf9d7816399366ed5a81077cad3af480a207ebb853a3cd408
title: "IsEditing"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Checks whether this owner still owns a particular edit, including after a close or generation boundary.

**Parameter `path`:** The stable edit identity.

**Returns:** True only while the matching owner still has an active transaction.
