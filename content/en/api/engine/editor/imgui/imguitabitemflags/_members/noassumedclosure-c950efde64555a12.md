---
uid: api.c950efde64555a12a7dbca6d12ba73f3170e8c60ac37bcf8e27fa2e0bc010b37
symbol: "engine:Inno.Editor.ImGui:F:Inno.Editor.ImGui.ImGuiTabItemFlags.NoAssumedClosure"
source: xml
reviewed: 7488e02571ef7038c4acf141b6b2334254c6843c6d52ad6c5f36717131b0e655
title: "NoAssumedClosure"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Tab is selected when trying to close + closure is not immediately assumed (will wait for user to stop submitting the tab). Otherwise closure is assumed when pressing the X, so if you keep submitting the tab may reappear at end of tab bar.
