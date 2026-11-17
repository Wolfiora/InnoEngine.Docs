---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b5f0a273d82dce84568606dd3ce34c6b6e162cc51a753080972556180ac4ae64
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.SearchInput(System.String,System.String,System.String@,System.UIntPtr,System.Single)
title: ImGuiWidget.SearchInput
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 5f1da0ca2e94155091a63a145d9b9b1fa78b9d536f70de1dc92c028f1f39de2a
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Escape clears a nonempty query before leaving text input on a subsequent press.

## Parameters

**Parameter `id`:** The stable control identifier.

**Parameter `hint`:** The hint shown while the query is empty.

**Parameter `query`:** The mutable search query.

**Parameter `capacity`:** The maximum UTF-8 buffer capacity.

**Parameter `width`:** The control width, or a negative value to fill the available space.

## Returns

`true` when the query changed; otherwise, `false`.
