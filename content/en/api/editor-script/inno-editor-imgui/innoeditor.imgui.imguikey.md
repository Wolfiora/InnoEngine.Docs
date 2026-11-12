---
title: "ImGuiKey"
description: "Reference for ImGuiKey in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.547d1562d31ec453
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiKey`

This reference describes `ImGuiKey` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Values`](member-values-8d9805abb89f7a4a.md) | 165 declarations |

## Type declaration

<a id="api-547d1562d31ec453"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiKey 76f54b545dbd4d7f52008ee84bddcef0c6d6c5bc6dd406db4c949141541ffaf9 -->

```csharp
public enum InnoEditor.ImGui.ImGuiKey : int
```

Defines the supported key choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiKey.cs#L7).
