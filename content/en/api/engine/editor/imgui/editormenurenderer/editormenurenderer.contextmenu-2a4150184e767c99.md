---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2a4150184e767c9967d07f0fdefe94f9212ac884d133716e32d994dcb2912872
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorMenuRenderer.ContextMenu(System.String,Inno.Editor.Interactions.EditorInteraction,Inno.Editor.Interactions.EditorInteraction)
title: EditorMenuRenderer.ContextMenu
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 398aede1422c9ddcaa8cc30a3dc5cb87635b1dd6cf24f7cc8043e0c9f677f286
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable popup identifier in the current ImGui ID scope.

**Parameter `scopeInteraction`:** Container interaction whose commands are shown first, such as creation commands for a directory.

**Parameter `itemInteraction`:** Selected-item interaction whose commands are shown after the container commands.

## Returns

`true` while the context popup is open and at least one command group was drawn.
