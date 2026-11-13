---
uid: api.fc4754e61f71a600573ac65f9a75310464967d4fa6229ecbf1ab8561543d1c2e
symbol: "scripting:Inno.Editor.ImGui:F:InnoEditor.ImGui.ImGuiInputTextFlags.CallbackResize"
source: xml
reviewed: 4709c721ff85dad8f43d4225d3a1b28d173923d44e5175ceaa2ac852a6ff7037
title: "CallbackResize"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Callback on buffer capacity changes request (beyond 'buf\_size' parameter value), allowing the string to grow. Notify when the string wants to be resized (for string types which hold a cache of their Size). You will be provided a new BufSize in the callback and NEED to honor it. (see misc/cpp/imgui\_stdlib.h for an example of using this)
