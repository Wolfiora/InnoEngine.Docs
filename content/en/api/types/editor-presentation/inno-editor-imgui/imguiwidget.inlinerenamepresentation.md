---
title: "ImGuiWidget.InlineRenamePresentation"
description: "Reference for ImGuiWidget.InlineRenamePresentation in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.69f1552712584818
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiWidget.InlineRenamePresentation`

This reference describes `ImGuiWidget.InlineRenamePresentation` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-541ddd10c2735587) | Method |
| [`bufferSize`](#api-e9763d56115fb216) | Property |
| [`id`](#api-094f70c548d9e4e3) | Property |
| [`rowHeight`](#api-8858041659e756fe) | Property |
| [`width`](#api-e3675a707919a85a) | Property |

## Type declaration

<a id="api-69f1552712584818"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiWidget.InlineRenamePresentation 2dafc377641892b523286573452285aee5deba8b49894182221a0f545f9ed6ad -->

```csharp
public sealed class Inno.Editor.ImGui.ImGuiWidget.InlineRenamePresentation
```

Describes the view-owned geometry used to present an active inline rename action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L141).

## `#ctor`

<a id="api-541ddd10c2735587"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.InlineRenamePresentation.#ctor(System.String,System.Single,System.Single,System.UIntPtr) d5a6c952839d42e0eca583cbd5043e938e932ad6c0e10925f06769935e9f4028 -->

```csharp
public Inno.Editor.ImGui.ImGuiWidget.InlineRenamePresentation.InlineRenamePresentation(string id, float width, float rowHeight, nuint bufferSize = 512)
```

Creates inline rename presentation data.

**Parameter `id`:** The stable ImGui identifier used by the input field.

**Parameter `width`:** The requested input width in logical pixels.

**Parameter `rowHeight`:** The height of the row area in which the field is centered.

**Parameter `bufferSize`:** The maximum UTF-8 buffer size accepted by the input.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `width` or `rowHeight` is not finite and
positive, or when `bufferSize` is zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L165).

## `bufferSize`

<a id="api-e9763d56115fb216"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.InlineRenamePresentation.bufferSize 415bfb5f8d84095bf978c76976cd5a2a2bb7911549c9b58bcce691ee0dfb862b -->

```csharp
public nuint Inno.Editor.ImGui.ImGuiWidget.InlineRenamePresentation.bufferSize { get; }
```

Gets the maximum UTF-8 buffer size accepted by the input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L209).

## `id`

<a id="api-094f70c548d9e4e3"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.InlineRenamePresentation.id 784b26b846f6fd0c2da609629c9efffb1e6ecaf02b8f15667ee49e77a95a268c -->

```csharp
public string Inno.Editor.ImGui.ImGuiWidget.InlineRenamePresentation.id { get; }
```

Gets the stable ImGui identifier used by the input field.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L197).

## `rowHeight`

<a id="api-8858041659e756fe"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.InlineRenamePresentation.rowHeight ed667da241dcc201d8433628ed080fa0bffa14003a2ceaa92f562829f32f78d0 -->

```csharp
public float Inno.Editor.ImGui.ImGuiWidget.InlineRenamePresentation.rowHeight { get; }
```

Gets the height of the row area in which the input field is centered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L205).

## `width`

<a id="api-e3675a707919a85a"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.InlineRenamePresentation.width 009e0b567ff91fc02207e7c748234bc276a63798602d4c0b32555d961442241d -->

```csharp
public float Inno.Editor.ImGui.ImGuiWidget.InlineRenamePresentation.width { get; }
```

Gets the requested input width in logical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.InlineRename.cs#L201).
