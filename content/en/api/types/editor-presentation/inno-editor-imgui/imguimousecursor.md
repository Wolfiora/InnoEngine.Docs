---
title: "ImGuiMouseCursor"
description: "Reference for ImGuiMouseCursor in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.d7a65d6d76025250
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiMouseCursor`

This reference describes `ImGuiMouseCursor` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Arrow`](#api-7bf25b8c6a576f40) | Field |
| [`Count`](#api-a1416fb8dcec657d) | Field |
| [`Hand`](#api-08a6940057c105e5) | Field |
| [`None`](#api-4db2ff058c12f8ee) | Field |
| [`NotAllowed`](#api-034d57c3a3ab6e40) | Field |
| [`Progress`](#api-23aa17fdc97a104a) | Field |
| [`ResizeAll`](#api-6dabd5bca281dd17) | Field |
| [`ResizeEw`](#api-da2d75513d241daf) | Field |
| [`ResizeNesw`](#api-ab70882beb2c6f2e) | Field |
| [`ResizeNs`](#api-d58ab6ec4c3c128e) | Field |
| [`ResizeNwse`](#api-17db1c4f9e9c3c1c) | Field |
| [`TextInput`](#api-f3a72cdcd18d7e22) | Field |
| [`Wait`](#api-bf1ad4b360533a83) | Field |

## Type declaration

<a id="api-d7a65d6d76025250"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiMouseCursor 1fc8f42ac67ae22599a23d54da910851d38cf526c13d77d750887b8f36957ab7 -->

```csharp
public enum Inno.Editor.ImGui.ImGuiMouseCursor : int
```

Defines the supported mouse cursor choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L7).

## `Arrow`

<a id="api-7bf25b8c6a576f40"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseCursor.Arrow a08455cf962ca159713e485f12465bacd3655a4e570c57c28c969440fb18a1d5 -->

```csharp
Inno.Editor.ImGui.ImGuiMouseCursor.Arrow = 0
```

Selects the arrow presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L16).

## `Count`

<a id="api-a1416fb8dcec657d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseCursor.Count dbf3d386a03113d1ed72d3c592a30318dbf073134a931c7b28d2a7a6f197d4c3 -->

```csharp
Inno.Editor.ImGui.ImGuiMouseCursor.Count = 11
```

Marks the exclusive end of the valid option range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L60).

## `Hand`

<a id="api-08a6940057c105e5"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseCursor.Hand 1431d23c965aa8a400cd197230e55437a425dae699292df48fc601f7ddf85913 -->

```csharp
Inno.Editor.ImGui.ImGuiMouseCursor.Hand = 7
```

Selects the hand presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L44).

## `None`

<a id="api-4db2ff058c12f8ee"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseCursor.None dfabde0bef10e5d5835de070a2488840db0f9595a5fe894eccd03681ffc11771 -->

```csharp
Inno.Editor.ImGui.ImGuiMouseCursor.None = -1
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L12).

## `NotAllowed`

<a id="api-034d57c3a3ab6e40"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseCursor.NotAllowed b28f656959be77801c392bfebdaa5e3c5a32ea6f48a7f8318172d84780ed935b -->

```csharp
Inno.Editor.ImGui.ImGuiMouseCursor.NotAllowed = 10
```

Selects the not allowed presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L56).

## `Progress`

<a id="api-23aa17fdc97a104a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseCursor.Progress 61ae6eb57efc5f501adff5236e4bdd53cef99c2ad203f3b75629a8625c8aab82 -->

```csharp
Inno.Editor.ImGui.ImGuiMouseCursor.Progress = 9
```

Selects the progress presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L52).

## `ResizeAll`

<a id="api-6dabd5bca281dd17"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseCursor.ResizeAll effe0af1a4659b35f61d2e6fb3d7a03a2750ce04211f20f3fa00e641aef60fad -->

```csharp
Inno.Editor.ImGui.ImGuiMouseCursor.ResizeAll = 2
```

Selects the resize all presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L24).

## `ResizeEw`

<a id="api-da2d75513d241daf"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseCursor.ResizeEw 5c2cc00594e5a140c17f39b619c5c9bb0066177cefa51f35c4fc7187f159380d -->

```csharp
Inno.Editor.ImGui.ImGuiMouseCursor.ResizeEw = 4
```

Selects the resize ew presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L32).

## `ResizeNesw`

<a id="api-ab70882beb2c6f2e"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseCursor.ResizeNesw 21c19000bab5e82fd7ed486fa534988cf32923ca41b55c5fc4af2189be50a327 -->

```csharp
Inno.Editor.ImGui.ImGuiMouseCursor.ResizeNesw = 5
```

Selects the resize nesw presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L36).

## `ResizeNs`

<a id="api-d58ab6ec4c3c128e"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseCursor.ResizeNs 1976d42b1ad4146d95268c7dd154ae6b5605ad6ec4ddbe512cdb9711d55d8eec -->

```csharp
Inno.Editor.ImGui.ImGuiMouseCursor.ResizeNs = 3
```

Selects the resize ns presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L28).

## `ResizeNwse`

<a id="api-17db1c4f9e9c3c1c"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseCursor.ResizeNwse ca4b6bc5dca98fc424c20cb9ac7a5c855eafb57476a24078e6515c780bd314f3 -->

```csharp
Inno.Editor.ImGui.ImGuiMouseCursor.ResizeNwse = 6
```

Selects the resize nwse presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L40).

## `TextInput`

<a id="api-f3a72cdcd18d7e22"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseCursor.TextInput 8069a0ca157c2de222f9f1c247d3d248f3e498cc750167a8ce6fc83832d30e14 -->

```csharp
Inno.Editor.ImGui.ImGuiMouseCursor.TextInput = 1
```

Selects the text input presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L20).

## `Wait`

<a id="api-bf1ad4b360533a83"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseCursor.Wait 9d3a56f34502180e3104f53f511183bf52c837f7e16c9b7b41958ed6250f214b -->

```csharp
Inno.Editor.ImGui.ImGuiMouseCursor.Wait = 8
```

Selects the wait presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L48).
