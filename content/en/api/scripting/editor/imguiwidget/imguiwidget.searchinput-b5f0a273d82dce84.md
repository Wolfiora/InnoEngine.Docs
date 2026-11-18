---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b5f0a273d82dce84568606dd3ce34c6b6e162cc51a753080972556180ac4ae64
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.SearchInput(System.String,System.String,System.String@,System.UIntPtr,System.Single)
title: ImGuiWidget.SearchInput
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: 13599d2376a2e3df464f291b6161aa945ceeae3ab45f33aa2fed8761ec4477ad
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
