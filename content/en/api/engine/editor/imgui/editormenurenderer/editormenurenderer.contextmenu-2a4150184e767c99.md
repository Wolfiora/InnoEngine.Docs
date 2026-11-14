---
uid: api.2a4150184e767c9967d07f0fdefe94f9212ac884d133716e32d994dcb2912872
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorMenuRenderer.ContextMenu(System.String,Inno.Editor.Interactions.EditorInteraction,Inno.Editor.Interactions.EditorInteraction)"
source: xml
reviewed: 1501b369e0211cec8aa4a618755835395b50971a570b4d3b87b68247d77c00c1
title: "EditorMenuRenderer.ContextMenu"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws one context popup composed from an item interaction and its containing-scope interaction.

## Parameters

**Parameter `id`:** Stable popup identifier in the current ImGui ID scope.

**Parameter `scopeInteraction`:** Container interaction whose commands are shown first, such as creation commands for a directory.

**Parameter `itemInteraction`:** Selected-item interaction whose commands are shown after the container commands.

## Returns

`true` while the context popup is open and at least one command group was drawn.
