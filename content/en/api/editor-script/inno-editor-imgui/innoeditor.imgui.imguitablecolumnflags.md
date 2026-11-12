---
title: "ImGuiTableColumnFlags"
description: "Reference for ImGuiTableColumnFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.066e29b984391d16
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiTableColumnFlags`

This reference describes `ImGuiTableColumnFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AngledHeader`](#api-1f9434bb4fc210a7) | Field |
| [`DefaultHide`](#api-8f3a6ea05228c6fc) | Field |
| [`DefaultSort`](#api-bc009911ef20832d) | Field |
| [`Disabled`](#api-bb9d45b409873aa7) | Field |
| [`IndentDisable`](#api-c1f0ccee003b3ecf) | Field |
| [`IndentEnable`](#api-3a8eb8b87d3d4b89) | Field |
| [`IndentMask`](#api-e37b75891d9d0c74) | Field |
| [`IsEnabled`](#api-db3e9a12abc3c062) | Field |
| [`IsHovered`](#api-d3d64f16275ab257) | Field |
| [`IsSorted`](#api-350be845b6884de9) | Field |
| [`IsVisible`](#api-51077218af8f69b2) | Field |
| [`NoClip`](#api-d4df9eb8339f3b6d) | Field |
| [`NoDirectResize`](#api-54c9f70dde740bd0) | Field |
| [`NoHeaderLabel`](#api-1386657c470d4c02) | Field |
| [`NoHeaderWidth`](#api-69d18255123d61a4) | Field |
| [`NoHide`](#api-905667e7b41e4c20) | Field |
| [`None`](#api-4ad093860369362f) | Field |
| [`NoReorder`](#api-c8e52146afa00776) | Field |
| [`NoResize`](#api-f17f77ebf2fb83c1) | Field |
| [`NoSort`](#api-a77ca80d310651e9) | Field |
| [`NoSortAscending`](#api-96753c5c538be66d) | Field |
| [`NoSortDescending`](#api-231c04c65f136e68) | Field |
| [`PreferSortAscending`](#api-e83fa3b9f4b077f3) | Field |
| [`PreferSortDescending`](#api-995b55b2736ef8d8) | Field |
| [`StatusMask`](#api-ae1fc19b6e517494) | Field |
| [`WidthFixed`](#api-ef0c5a59b49b87e7) | Field |
| [`WidthMask`](#api-fe74cd4f2b5d4a11) | Field |
| [`WidthStretch`](#api-d81b072072fb1c70) | Field |

## Type declaration

<a id="api-066e29b984391d16"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiTableColumnFlags 7fda08f8f853fd572558b9cbf52cf03e561e629f596de431d70e2c8113f01ab5 -->

```csharp
public enum InnoEditor.ImGui.ImGuiTableColumnFlags : int
```

Defines the supported table column flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L8).

## `AngledHeader`

<a id="api-1f9434bb4fc210a7"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.AngledHeader b1a95a17c79cf2c2b91ccfd355b5f1c43b8d606c0fdb5a8474330c1c5fd3d403 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.AngledHeader = 262144
```

TableHeadersRow() will submit an angled header row for this column. Note this will add an extra row.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L89).

## `DefaultHide`

<a id="api-8f3a6ea05228c6fc"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.DefaultHide ad2dffd817c1e8b13de8591678f74268114298be858d82e6b43bddc4013034a7 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.DefaultHide = 2
```

Default as a hidden/disabled column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L21).

## `DefaultSort`

<a id="api-bc009911ef20832d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.DefaultSort 87d5aed717fe787d127630189e14d5eaf131e62779cfd9a07e2c8e6d7348a0bc -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.DefaultSort = 4
```

Default as a sorting column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L25).

## `Disabled`

<a id="api-bb9d45b409873aa7"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.Disabled cc1a4f29395e53e7360150064aa4591300bbc1e92767a06b784ce76d348bfdb5 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.Disabled = 1
```

Overriding/master disable flag: hide column, won't show in context menu (unlike calling TableSetColumnEnabled() which manipulates the user accessible state)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L17).

## `IndentDisable`

<a id="api-c1f0ccee003b3ecf"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.IndentDisable 66571805c8451792aca5a5d9d349324fcf1433e264263cf4b4ad5a02260c0d72 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.IndentDisable = 131072
```

Ignore current Indent value when entering cell (default for columns > 0). Indentation changes _within_ the cell will still be honored.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L85).

## `IndentEnable`

<a id="api-3a8eb8b87d3d4b89"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.IndentEnable f95331d736be71d2c6351cb5bc5a521d326454f0bab541db4f9565df2789c68a -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.IndentEnable = 65536
```

Use current Indent value when entering cell (default for column 0).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L81).

## `IndentMask`

<a id="api-e37b75891d9d0c74"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.IndentMask ad3b771d7fbc859a7e1d70d8113a2d767c7116ad202fc4909c4e599f052c1823 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.IndentMask = 196608
```

Selects the indent mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L113).

## `IsEnabled`

<a id="api-db3e9a12abc3c062"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.IsEnabled a64fdf7474a76424a6b4f7fcefa06dcf3fc7f3c08abb4fcce4f2232f9b5d0741 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.IsEnabled = 16777216
```

Status: is enabled == not hidden by user/api (referred to as "Hide" in _DefaultHide and _NoHide) flags.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L93).

## `IsHovered`

<a id="api-d3d64f16275ab257"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.IsHovered ff38627c46b1bbdfe5a95e551fcd32187734e0063f8fd15a3d9aac7d63d498ed -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.IsHovered = 134217728
```

Status: is hovered by mouse


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L105).

## `IsSorted`

<a id="api-350be845b6884de9"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.IsSorted 5e835f25b40435bac2780ebb79fafb99e3c86889662ed47fe558fdb879fc8b1f -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.IsSorted = 67108864
```

Status: is currently part of the sort specs


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L101).

## `IsVisible`

<a id="api-51077218af8f69b2"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.IsVisible 62f20264b204c28623e75a6a82a4f3be089496f0f9b8663dc8bb1fec186f4140 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.IsVisible = 33554432
```

Status: is visible == is enabled AND not clipped by scrolling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L97).

## `NoClip`

<a id="api-d4df9eb8339f3b6d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.NoClip eff4d5ecd24d7b4ed86a15b61eeec5295530308b808a04f01df087961df61e0c -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.NoClip = 256
```

Disable clipping for this column (all NoClip columns will render in a same draw command).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L49).

## `NoDirectResize`

<a id="api-54c9f70dde740bd0"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.NoDirectResize b1b14586d114a92c0e54b309ece1e101ea6b2252f773bcf6ae75ec93a26aaf94 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.NoDirectResize = 1073741824
```

Selects the no direct resize presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L121).

## `NoHeaderLabel`

<a id="api-1386657c470d4c02"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.NoHeaderLabel 3190720dc8ca8873ed82bc975adedba7320e238b155ab8245282077ae7446613 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.NoHeaderLabel = 4096
```

TableHeadersRow() will submit an empty label for this column. Convenient for some small columns. Name will still appear in context menu or in angled headers. You may append into this cell by calling TableSetColumnIndex() right after the TableHeadersRow() call.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L65).

## `NoHeaderWidth`

<a id="api-69d18255123d61a4"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.NoHeaderWidth 528cb54d9fdd871c3a745a542f562484cb1f85d002f56c9f9b8b51847312fd6b -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.NoHeaderWidth = 8192
```

Disable header text width contribution to automatic column width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L69).

## `NoHide`

<a id="api-905667e7b41e4c20"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.NoHide d62dae3e3b37b05bff922a58f6c3b4cf8f1dee05a621c601d2f390533816999d -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.NoHide = 128
```

Disable ability to hide/disable this column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L45).

## `None`

<a id="api-4ad093860369362f"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.None 0548004ada501087c3f6d7849eed6730450c912e1509ca963415dd7522d3fa16 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L13).

## `NoReorder`

<a id="api-c8e52146afa00776"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.NoReorder 7201088cb8f17cbdebcf2b7a7f96569c13cce63d15ed1c95eb4b24f65022d553 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.NoReorder = 64
```

Disable manual reordering this column, this will also prevent other columns from crossing over this column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L41).

## `NoResize`

<a id="api-f17f77ebf2fb83c1"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.NoResize b8d3109283591f4634b059c4dcb7a1b7f120f4dde15c4edc9aa417bbc4aaa34b -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.NoResize = 32
```

Disable manual resizing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L37).

## `NoSort`

<a id="api-a77ca80d310651e9"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.NoSort 229cfafda0cc88bfa7ac72d10c334ac31b22bc41a787f7ca8306298d3ead0ac3 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.NoSort = 512
```

Disable ability to sort on this field (even if ImGuiTableFlags_Sortable is set on the table).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L53).

## `NoSortAscending`

<a id="api-96753c5c538be66d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.NoSortAscending 751608226c38b962075ee9955f920078ea4c42ecfaf67a9038ea51ca5e508373 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.NoSortAscending = 1024
```

Disable ability to sort in the ascending direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L57).

## `NoSortDescending`

<a id="api-231c04c65f136e68"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.NoSortDescending 72c402f0c213c2063759282688fe266961d1f535a1473a9bd269f8823692eb89 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.NoSortDescending = 2048
```

Disable ability to sort in the descending direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L61).

## `PreferSortAscending`

<a id="api-e83fa3b9f4b077f3"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.PreferSortAscending 94b84fb086731382b8f30b213c906596bdf042578654d83bedaff41f047bb977 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.PreferSortAscending = 16384
```

Make the initial sort direction Ascending when first sorting on this column (default).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L73).

## `PreferSortDescending`

<a id="api-995b55b2736ef8d8"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.PreferSortDescending 5b7beb1b1e3006d29c14af7f4f5f1d5d6fbdd87fa3e7194a84fe4dd0f2ec4b97 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.PreferSortDescending = 32768
```

Make the initial sort direction Descending when first sorting on this column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L77).

## `StatusMask`

<a id="api-ae1fc19b6e517494"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.StatusMask 64427da624b31f8acc8aec67e480e20dfcb6278cca160fa4ea755e908c3ec8c7 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.StatusMask = 251658240
```

Selects the status mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L117).

## `WidthFixed`

<a id="api-ef0c5a59b49b87e7"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.WidthFixed 6d8077f6f3f195ba6b7912efb8fa89651db9365f8187d6d71c3009b1bf4d9b93 -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.WidthFixed = 16
```

Column will not stretch. Preferable with horizontal scrolling enabled (default if table sizing policy is _SizingFixedFit and table is resizable).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L33).

## `WidthMask`

<a id="api-fe74cd4f2b5d4a11"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.WidthMask 7d2ed28f6746d868db427b0e3ed8e4812dca45738dbb517289e66aed7f7c2e3a -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.WidthMask = 24
```

Selects the width mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L109).

## `WidthStretch`

<a id="api-d81b072072fb1c70"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTableColumnFlags.WidthStretch bc2f1139b07bb54e7b2e644f25a17e4f56e3609031dae11d349f78385687970c -->

```csharp
InnoEditor.ImGui.ImGuiTableColumnFlags.WidthStretch = 8
```

Column will stretch. Preferable with horizontal scrolling disabled (default if table sizing policy is _SizingStretchSame or _SizingStretchProp).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableColumnFlags.cs#L29).
