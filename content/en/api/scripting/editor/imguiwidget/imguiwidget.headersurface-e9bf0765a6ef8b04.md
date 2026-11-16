---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e9bf0765a6ef8b04875825bb49b1a59998bddabfb37a1ae5a9a4d636ff031feb
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.HeaderSurface(System.String,System.Action,System.Boolean)
title: ImGuiWidget.HeaderSurface
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 2567e1d786c8005cd93f36bc7e6cc1fe5b3fcbdcebbfc760fdaf4cb2915a0f17
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable identifier used by ImGui to track the header region.

**Parameter `drawContent`:** Callback that draws the complete header content.

**Parameter `spanWindowPadding`:** Whether the header should extend through the current parent window padding to both edges.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `drawContent` is `null`.
