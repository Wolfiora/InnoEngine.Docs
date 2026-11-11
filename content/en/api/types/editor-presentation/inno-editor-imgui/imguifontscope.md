---
title: "ImGuiFontScope"
description: "Reference for ImGuiFontScope in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.f6dadaf12f35417f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiFontScope`

This reference describes `ImGuiFontScope` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-12a155fc6a74a9c0) | Method |

## Type declaration

<a id="api-f6dadaf12f35417f"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiFontScope 805166402af30bd7ea30aa9a1f40b350110b6dbd2500862c9c7cf84bdbec8d5e -->

```csharp
public ref struct Inno.Editor.ImGui.ImGuiFontScope : System.IDisposable
```

Restores a font push only in its original session, frame and native stack position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L68).

## `Dispose`

<a id="api-12a155fc6a74a9c0"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiFontScope.Dispose 1df1aca1593dc083f577f9bb516f7c6dffc560965a21f8e959536688913e70a2 -->

```csharp
public void Inno.Editor.ImGui.ImGuiFontScope.Dispose()
```

Restores the preceding font after validating scope order; default and retired scopes are inert.

**Throws `System.InvalidOperationException`:** The scope is used in another context, frame or stack position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L92).
