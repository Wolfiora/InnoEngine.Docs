---
uid: api.15bfe20d44d2200f7fe499819778a59c991eb73a6758afbd582308e956083a66
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CommitEdits"
source: xml
reviewed: 8c8008cf8362c8250fceb5d3936c85c756602c8ed5dc3e453fe23ee92dae956d
title: "CommitEdits"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Completes the current control edit before a document command, reload, Play transition or shutdown.

**Exception `T:System.InvalidOperationException`:** A nested transaction prevents completion; ownership is retained.
