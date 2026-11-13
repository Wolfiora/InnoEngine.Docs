---
uid: api.c950efde64555a12a7dbca6d12ba73f3170e8c60ac37bcf8e27fa2e0bc010b37
symbol: "engine:Inno.Editor.ImGui:F:Inno.Editor.ImGui.ImGuiTabItemFlags.NoAssumedClosure"
source: xml
reviewed: 3a9e77e734da009cb76ee0b104b9971713da57f916932ff8da27fee829093fb4
title: "NoAssumedClosure"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Tab is selected when trying to close + closure is not immediately assumed (will wait for user to stop submitting the tab). Otherwise closure is assumed when pressing the X, so if you keep submitting the tab may reappear at end of tab bar.
