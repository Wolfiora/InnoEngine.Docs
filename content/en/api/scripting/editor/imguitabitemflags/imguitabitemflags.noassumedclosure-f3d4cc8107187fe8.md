---
uid: api.f3d4cc8107187fe8f1d0557a72dd7a2843e6955508fc66f24117170d3cb63b5f
symbol: "scripting:Inno.Editor.ImGui:F:InnoEditor.ImGui.ImGuiTabItemFlags.NoAssumedClosure"
source: xml
reviewed: 4a2ee61b8501f59cc6a3b1342307207da9e0658d01cf9aa1b28408e78270b234
title: "ImGuiTabItemFlags.NoAssumedClosure"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Tab is selected when trying to close + closure is not immediately assumed (will wait for user to stop submitting the tab). Otherwise closure is assumed when pressing the X, so if you keep submitting the tab may reappear at end of tab bar.
