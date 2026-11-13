---
uid: api.4ce34bd0a06143345d54ade2ba7e07ce6f0bb3d59336454f1df74d4b54f73c4f
symbol: "engine:Inno.Editor.ImGui:F:Inno.Editor.ImGui.ImGuiInputTextFlags.CallbackResize"
source: xml
reviewed: 22ec80d8789b258e7272aa645547314d798448b9a9a3ae66aa217501ff4839e3
title: "CallbackResize"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Callback on buffer capacity changes request (beyond 'buf\_size' parameter value), allowing the string to grow. Notify when the string wants to be resized (for string types which hold a cache of their Size). You will be provided a new BufSize in the callback and NEED to honor it. (see misc/cpp/imgui\_stdlib.h for an example of using this)
