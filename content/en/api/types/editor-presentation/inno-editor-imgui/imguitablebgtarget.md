---
title: "ImGuiTableBgTarget"
description: "Reference for ImGuiTableBgTarget in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.9bc8c1a08ba23595
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiTableBgTarget`

This reference describes `ImGuiTableBgTarget` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`CellBg`](#api-b30c8ab248042543) | Field |
| [`None`](#api-deded9acdd0d5cb4) | Field |
| [`RowBg0`](#api-8fff2ef733f97c64) | Field |
| [`RowBg1`](#api-8a18a8c1c0c72222) | Field |

## Type declaration

<a id="api-9bc8c1a08ba23595"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiTableBgTarget bfab9d20e2d2e71c4f3aa4216434fbdd3387ec70389da3b8f5208a909b797047 -->

```csharp
public enum Inno.Editor.ImGui.ImGuiTableBgTarget : int
```

Defines the supported table bg target choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableBgTarget.cs#L7).

## `CellBg`

<a id="api-b30c8ab248042543"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableBgTarget.CellBg e476851cd7fbb398ffcbd542646816379930eb161fc8161dfb66b18e759602b7 -->

```csharp
Inno.Editor.ImGui.ImGuiTableBgTarget.CellBg = 3
```

Set cell background color (top-most color)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableBgTarget.cs#L24).

## `None`

<a id="api-deded9acdd0d5cb4"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableBgTarget.None a20d39c37d111fa795ef783e27cc051396a0d877f2d509fb60f143fb9e27bcbe -->

```csharp
Inno.Editor.ImGui.ImGuiTableBgTarget.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableBgTarget.cs#L12).

## `RowBg0`

<a id="api-8fff2ef733f97c64"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableBgTarget.RowBg0 432e753273bd6d4d8c873ee05f9ce0872248d7cfce5140a0a17de916f5d87342 -->

```csharp
Inno.Editor.ImGui.ImGuiTableBgTarget.RowBg0 = 1
```

Set row background color 0 (generally used for background, automatically set when ImGuiTableFlags_RowBg is used)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableBgTarget.cs#L16).

## `RowBg1`

<a id="api-8a18a8c1c0c72222"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableBgTarget.RowBg1 6af5b04f3265d10d8cd9e3475b4cb5de6496a380694603af3a076cbaf021de6a -->

```csharp
Inno.Editor.ImGui.ImGuiTableBgTarget.RowBg1 = 2
```

Set row background color 1 (generally used for selection marking)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableBgTarget.cs#L20).
