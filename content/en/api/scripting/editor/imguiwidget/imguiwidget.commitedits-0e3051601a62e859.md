---
uid: api.0e3051601a62e859d6ad97e9e4045341a39020ced1ae68de2c8ecf81b3d00bac
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.CommitEdits"
source: xml
reviewed: e429f32e3bd0128ab5718bb5abefc0d99c732d26caa5b26f10649a22c75d474f
title: "ImGuiWidget.CommitEdits"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Completes the current control edit before a document command, reload, Play transition or shutdown.

**Exception `T:System.InvalidOperationException`:** A nested transaction prevents completion; ownership is retained.
