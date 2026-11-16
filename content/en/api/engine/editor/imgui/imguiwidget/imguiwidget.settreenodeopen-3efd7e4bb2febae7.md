---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3efd7e4bb2febae7cf9620784fd9d3d53b8f46a6b80546541e6eba17cdab26f3
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SetTreeNodeOpen(System.String,System.Boolean)
title: ImGuiWidget.SetTreeNodeOpen
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 64b5539423b5ed408d4a0c74cef22101ddb3d1bb16e78ec8340a813a07f4c6cc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The stable row identifier within this window and owner.

**Parameter `open`:** The requested disclosure state.

## Exceptions

**Exception `T:System.ArgumentException`:** The row identifier is empty or whitespace.

**Exception `T:System.InvalidOperationException`:** No valid drawing session or native frame is active.
