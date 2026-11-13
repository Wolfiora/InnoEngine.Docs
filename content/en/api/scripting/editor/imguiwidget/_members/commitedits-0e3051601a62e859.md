---
uid: api.0e3051601a62e859d6ad97e9e4045341a39020ced1ae68de2c8ecf81b3d00bac
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.CommitEdits"
source: xml
reviewed: 46a7c593f22d4bab4b5bc38f26396b3bf2f3b8cfc8c3262b0d429b379b05d69f
title: "CommitEdits"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Completes the current control edit before a document command, reload, Play transition or shutdown.

**Exception `T:System.InvalidOperationException`:** A nested transaction prevents completion; ownership is retained.
