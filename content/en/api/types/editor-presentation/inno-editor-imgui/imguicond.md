---
title: "ImGuiCond"
description: "Reference for ImGuiCond in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.c39c00b58dcb5528
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiCond`

This reference describes `ImGuiCond` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Always`](#api-416dcddbdb7635aa) | Field |
| [`Appearing`](#api-0f8f47ae1094546a) | Field |
| [`FirstUseEver`](#api-c8f643bb32a840ef) | Field |
| [`None`](#api-b7793f4c3f05b98d) | Field |
| [`Once`](#api-e50b2d6837b95799) | Field |

## Type declaration

<a id="api-c39c00b58dcb5528"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiCond 989f684cf6152220ba118d3eff5778ebf40d26a5c6b53646522e5b550f8ae771 -->

```csharp
public enum Inno.Editor.ImGui.ImGuiCond : int
```

Defines the supported cond choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCond.cs#L8).

## `Always`

<a id="api-416dcddbdb7635aa"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCond.Always c898d4ee52070248296b75168745d093d19139bb0ccea1ab9eacd30ca4a62926 -->

```csharp
Inno.Editor.ImGui.ImGuiCond.Always = 1
```

No condition (always set the variable), same as _None


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCond.cs#L17).

## `Appearing`

<a id="api-0f8f47ae1094546a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCond.Appearing 8af0fba32be410b725696be1ed60a39c0b4f1a495bcbe892f7db8a2f90ef57fd -->

```csharp
Inno.Editor.ImGui.ImGuiCond.Appearing = 8
```

Set the variable if the object/window is appearing after being hidden/inactive (or the first time)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCond.cs#L29).

## `FirstUseEver`

<a id="api-c8f643bb32a840ef"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCond.FirstUseEver 4c11571796b620691ff55a12b0def383f40ec0de118fb9a530546f5503eb610d -->

```csharp
Inno.Editor.ImGui.ImGuiCond.FirstUseEver = 4
```

Set the variable if the object/window has no persistently saved data (no entry in .ini file)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCond.cs#L25).

## `None`

<a id="api-b7793f4c3f05b98d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCond.None 22b1733e54b0efc70a9f3f4136de91f71068b0de3f3cb9d3cef130310a648559 -->

```csharp
Inno.Editor.ImGui.ImGuiCond.None = 0
```

No condition (always set the variable), same as _Always


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCond.cs#L13).

## `Once`

<a id="api-e50b2d6837b95799"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiCond.Once 145c278344602da51d4ae81a77368a0cdfb1537e39f7a6865c4921dc6a2f7cd4 -->

```csharp
Inno.Editor.ImGui.ImGuiCond.Once = 2
```

Set the variable once per runtime session (only the first call will succeed)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCond.cs#L21).
