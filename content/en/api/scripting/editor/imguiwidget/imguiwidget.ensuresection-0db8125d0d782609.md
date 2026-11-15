---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0db8125d0d782609b00494ef1c3970811d2a6719f982e1b51c9d803cc11dc3bd
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.EnsureSection(System.String,System.String)
title: ImGuiWidget.EnsureSection
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: d5de275aca595d6c841cc81db3cb85e4f2b01e50741ef7dcf895114413dc52be
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `title`:** Title used only when the current section layout has not declared a section yet.

**Parameter `description`:** Optional hover explanation for the implicit section title.

## Returns

`true` when the current section accepts content; otherwise, `false` when that section is collapsed.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `title` is `null`.
