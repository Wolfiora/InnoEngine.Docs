---
uid: api.0bc638c5ae19b2ffcb2a52e209a95fde0957c7bd8ade945e6743af662e9554e7
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.PropertyRow(System.String,System.String,System.Action,System.String)"
source: xml
reviewed: 337928c1ddf5bb4fbcb6c395bee92944c0eb90f84f30a6b248b069a6021330fa
title: "ImGuiWidget.PropertyRow"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a two-column property row with a stable internal identifier.

## Parameters

**Parameter `id`:** Stable row identifier.

**Parameter `label`:** Human-readable property label.

**Parameter `drawValue`:** Value control callback.

**Parameter `tooltip`:** Optional hover help displayed from the property label.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty or whitespace.

**Exception `T:System.ArgumentNullException`:** Thrown when `label` or `drawValue` is `null`.
