---
title: "ImGuiFontScope"
description: "Reference for ImGuiFontScope in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.a653139fc5fbd09f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiFontScope`

This reference describes `ImGuiFontScope` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-c5ad5c34f16b9bb3) | Method |

## Type declaration

<a id="api-a653139fc5fbd09f"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiFontScope be387e8125f9217ffd72ddb0238f3107e722136778eafb1efea2c00a2d136a67 -->

```csharp
public struct InnoEditor.ImGui.ImGuiFontScope : System.IDisposable
```

Restores a font push only in its original session, frame and native stack position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L68).

## `Dispose`

<a id="api-c5ad5c34f16b9bb3"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiFontScope.Dispose 8cbe9b9ee1e5ccac5e8298e81f50f8a667cff6c63bc59705044b672f9d5f5fac -->

```csharp
public void InnoEditor.ImGui.ImGuiFontScope.Dispose()
```

Restores the preceding font after validating scope order; default and retired scopes are inert.

**Throws `System.InvalidOperationException`:** The scope is used in another context, frame or stack position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L92).
