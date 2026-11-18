---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0db8125d0d782609b00494ef1c3970811d2a6719f982e1b51c9d803cc11dc3bd
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.EnsureSection(System.String,System.String)
title: ImGuiWidget.EnsureSection
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: c1c3454ee27f020bb57ab42862ad3b5b1cdfe1589c067eaa9ac95c1e7f926bc3
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `title`:** Title used only when the current section layout has not declared a section yet.

**Parameter `description`:** Optional hover explanation for the implicit section title.

## Returns

`true` when the current section accepts content; otherwise, `false` when that section is collapsed.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `title` is `null`.
