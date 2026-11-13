---
uid: api.15bfe20d44d2200f7fe499819778a59c991eb73a6758afbd582308e956083a66
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CommitEdits"
source: xml
reviewed: 9b5d2d972c3f227df1481ecf1cf9a67b0015a6d3464f6584e0801b21fb4d6df3
title: "ImGuiWidget.CommitEdits"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Completes the current control edit before a document command, reload, Play transition or shutdown.

**Exception `T:System.InvalidOperationException`:** A nested transaction prevents completion; ownership is retained.
