---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0bc638c5ae19b2ffcb2a52e209a95fde0957c7bd8ade945e6743af662e9554e7
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.PropertyRow(System.String,System.String,System.Action,System.String)
title: ImGuiWidget.PropertyRow
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: 5ff7f64957f5eb79ff4d3576d3c9c33130a4db86314ffd0d234e7d397649caae
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable row identifier.

**Parameter `label`:** Human-readable property label.

**Parameter `drawValue`:** Value control callback.

**Parameter `tooltip`:** Optional hover help displayed from the property label.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty or whitespace.

**Exception `T:System.ArgumentNullException`:** Thrown when `label` or `drawValue` is `null`.
