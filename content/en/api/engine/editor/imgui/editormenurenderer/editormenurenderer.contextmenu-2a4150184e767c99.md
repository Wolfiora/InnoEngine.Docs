---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2a4150184e767c9967d07f0fdefe94f9212ac884d133716e32d994dcb2912872
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorMenuRenderer.ContextMenu(System.String,Inno.Editor.Interactions.EditorInteraction,Inno.Editor.Interactions.EditorInteraction)
title: EditorMenuRenderer.ContextMenu
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 0855d00e4e59aad1420f9dc2174bc988078df41c65bcbce129ab6bdc4f6cf98d
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
