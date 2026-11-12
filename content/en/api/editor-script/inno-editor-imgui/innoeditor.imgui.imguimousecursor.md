---
title: "ImGuiMouseCursor"
description: "Reference for ImGuiMouseCursor in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.5232a341cdc3475d
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiMouseCursor`

This reference describes `ImGuiMouseCursor` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Arrow`](#api-1b32ece4ce7d0c37) | Field |
| [`Count`](#api-f7d5230cd0ad7586) | Field |
| [`Hand`](#api-69a9a2cff1090822) | Field |
| [`None`](#api-8383c6ddbcf67974) | Field |
| [`NotAllowed`](#api-f05ec4cc641f9370) | Field |
| [`Progress`](#api-c12ebbc43d550c93) | Field |
| [`ResizeAll`](#api-cd7b7bccc51eded0) | Field |
| [`ResizeEw`](#api-9603b8fb611f9f48) | Field |
| [`ResizeNesw`](#api-bfa9d495eb5727dc) | Field |
| [`ResizeNs`](#api-e8136fe67a39681b) | Field |
| [`ResizeNwse`](#api-de298f827c43f7e1) | Field |
| [`TextInput`](#api-2250a04b6cdd39b1) | Field |
| [`Wait`](#api-f03f4ae793d33855) | Field |

## Type declaration

<a id="api-5232a341cdc3475d"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiMouseCursor e07e0f1dad85e3271008bef39ed85961b47077e63762103884c3ad46b3db3a7a -->

```csharp
public enum InnoEditor.ImGui.ImGuiMouseCursor : int
```

Defines the supported mouse cursor choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L7).

## `Arrow`

<a id="api-1b32ece4ce7d0c37"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseCursor.Arrow be57a5c82cfd9ec5ad28023f0e93058e59fe71531b55ad2de7922529bb306949 -->

```csharp
InnoEditor.ImGui.ImGuiMouseCursor.Arrow = 0
```

Selects the arrow presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L16).

## `Count`

<a id="api-f7d5230cd0ad7586"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseCursor.Count 6d7d6a11c8d73ff1ec7311604712b96b02e25686a82bb104ba117e59cb6847cf -->

```csharp
InnoEditor.ImGui.ImGuiMouseCursor.Count = 11
```

Marks the exclusive end of the valid option range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L60).

## `Hand`

<a id="api-69a9a2cff1090822"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseCursor.Hand 112e7472722dddb1f2100f898edb277f4760da0e78885ba5932333f17ed9a8ff -->

```csharp
InnoEditor.ImGui.ImGuiMouseCursor.Hand = 7
```

Selects the hand presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L44).

## `None`

<a id="api-8383c6ddbcf67974"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseCursor.None 279da4897d8e0fad4d6b20050e4ceda0efcace63291263900ba322ff81eec57e -->

```csharp
InnoEditor.ImGui.ImGuiMouseCursor.None = -1
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L12).

## `NotAllowed`

<a id="api-f05ec4cc641f9370"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseCursor.NotAllowed bda3c837b19152c7c26e9fcbba70f7babc938eb429c9e9df2e93fee019b7f524 -->

```csharp
InnoEditor.ImGui.ImGuiMouseCursor.NotAllowed = 10
```

Selects the not allowed presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L56).

## `Progress`

<a id="api-c12ebbc43d550c93"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseCursor.Progress a3f914478acfed981c6d82fb9d9a2ad667f3db8ef35325c81c7a856a35eb275a -->

```csharp
InnoEditor.ImGui.ImGuiMouseCursor.Progress = 9
```

Selects the progress presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L52).

## `ResizeAll`

<a id="api-cd7b7bccc51eded0"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseCursor.ResizeAll 928aaa2f7ecf4423793e6992b4b54704dc14d990410baeb2c5ef8719e4f5c725 -->

```csharp
InnoEditor.ImGui.ImGuiMouseCursor.ResizeAll = 2
```

Selects the resize all presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L24).

## `ResizeEw`

<a id="api-9603b8fb611f9f48"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseCursor.ResizeEw 57791f55c4df88e90af07ce852af220c98fdc290d24808e1e9fe65a39bebfd0a -->

```csharp
InnoEditor.ImGui.ImGuiMouseCursor.ResizeEw = 4
```

Selects the resize ew presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L32).

## `ResizeNesw`

<a id="api-bfa9d495eb5727dc"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseCursor.ResizeNesw 324b22fae885e55d02806d90ec3e3e3c317f630371b2f695744e8bfa8eccf3d9 -->

```csharp
InnoEditor.ImGui.ImGuiMouseCursor.ResizeNesw = 5
```

Selects the resize nesw presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L36).

## `ResizeNs`

<a id="api-e8136fe67a39681b"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseCursor.ResizeNs fffdb197dc8c1ca88fa2e98f5800499ba858107982512fcad14a171c01a5fe81 -->

```csharp
InnoEditor.ImGui.ImGuiMouseCursor.ResizeNs = 3
```

Selects the resize ns presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L28).

## `ResizeNwse`

<a id="api-de298f827c43f7e1"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseCursor.ResizeNwse 6cb6dabba6049812618b087c6f8786eb62553c781a8f49c7921be51496934d4d -->

```csharp
InnoEditor.ImGui.ImGuiMouseCursor.ResizeNwse = 6
```

Selects the resize nwse presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L40).

## `TextInput`

<a id="api-2250a04b6cdd39b1"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseCursor.TextInput 6fc6acec644fda565258c70b54310d52e63bd7f7e951795b432c46421c04752e -->

```csharp
InnoEditor.ImGui.ImGuiMouseCursor.TextInput = 1
```

Selects the text input presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L20).

## `Wait`

<a id="api-f03f4ae793d33855"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiMouseCursor.Wait 6b2888ccbbe89ee2786bcc8fa733f9c64d6b8cf6ad2b5a2c6c592b2ece56e2a2 -->

```csharp
InnoEditor.ImGui.ImGuiMouseCursor.Wait = 8
```

Selects the wait presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseCursor.cs#L48).
