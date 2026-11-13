---
uid: api.90946e1187fd691a4fc425e968178ce781f645e023180389ce91b5a4901d5071
symbol: "scripting:Inno.Editor.ImGui:F:InnoEditor.ImGui.ImGuiInputTextFlags.CallbackEdit"
source: xml
reviewed: 81f0fb89be124dad514a5e7b980e1409fee5b01430bb359fc96e19cabddd8bc0
title: "CallbackEdit"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Callback on any edit. Note that InputText() already returns true on edit + you can always use IsItemEdited(). The callback is useful to manipulate the underlying buffer while focus is active.
