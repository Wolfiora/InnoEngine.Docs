---
title: "ImGui — Method: SetItemDefaultFocus"
description: "Exact Method: SetItemDefaultFocus contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.96d1f31b1a338dd6
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SetItemDefaultFocus

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetItemDefaultFocus`

<a id="api-069dcb95a6f0b490"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SetItemDefaultFocus af2e5de53215252a5537320e0fbdf337c5fb0eb396867b172211894a38d470d8 -->

```csharp
public static void InnoEditor.ImGui.ImGui.SetItemDefaultFocus()
```

Chooses the last item as the default selection in an appearing popup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L249).
