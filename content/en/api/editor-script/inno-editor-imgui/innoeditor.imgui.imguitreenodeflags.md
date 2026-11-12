---
title: "ImGuiTreeNodeFlags"
description: "Reference for ImGuiTreeNodeFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.fa1b93aa027a31a9
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiTreeNodeFlags`

This reference describes `ImGuiTreeNodeFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AllowOverlap`](#api-8de879820d4b9d33) | Field |
| [`Bullet`](#api-5cab96c493f43328) | Field |
| [`CollapsingHeader`](#api-52859296e8ab6182) | Field |
| [`DefaultOpen`](#api-fd41be7846a79fd3) | Field |
| [`DrawLinesFull`](#api-c5471e2892a07353) | Field |
| [`DrawLinesNone`](#api-873f641b7daaabb3) | Field |
| [`DrawLinesToNodes`](#api-b5705252f7dd44e5) | Field |
| [`Framed`](#api-d48e873b3b1e2eb5) | Field |
| [`FramePadding`](#api-66568fd60e95a666) | Field |
| [`LabelSpanAllColumns`](#api-fe142782badf8dc8) | Field |
| [`Leaf`](#api-df9f4d2fa21d8f08) | Field |
| [`NavLeftJumpsToParent`](#api-78fc49923c6c8511) | Field |
| [`NoAutoOpenOnLog`](#api-ade85fd8c23bb763) | Field |
| [`None`](#api-fc55d118a3ead000) | Field |
| [`NoTreePushOnOpen`](#api-25f491fe7276d365) | Field |
| [`OpenOnArrow`](#api-619db34399743b7a) | Field |
| [`OpenOnDoubleClick`](#api-6f438c86793db941) | Field |
| [`Selected`](#api-8c046d4bc5f4a766) | Field |
| [`SpanAllColumns`](#api-a532453bfaa45014) | Field |
| [`SpanAvailWidth`](#api-f1db1d0dd4b1f0fa) | Field |
| [`SpanFullWidth`](#api-ddb9a146b36a7612) | Field |
| [`SpanLabelWidth`](#api-f59c7c81cc6d699c) | Field |

## Type declaration

<a id="api-fa1b93aa027a31a9"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiTreeNodeFlags 4da0ba611c005a2677cae3ca88e04af7975bbf94204566f9a17c7e696a63dcf6 -->

```csharp
public enum InnoEditor.ImGui.ImGuiTreeNodeFlags : int
```

Defines the supported tree node flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L8).

## `AllowOverlap`

<a id="api-8de879820d4b9d33"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.AllowOverlap 45a873fbf6f86f603331f76e03effdbb7485ae8e6198dad7ec8b625b646b8631 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.AllowOverlap = 4
```

Hit testing to allow subsequent widgets to overlap this one


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L25).

## `Bullet`

<a id="api-5cab96c493f43328"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.Bullet 8448688f6b8ee046a54c5556939c66531e9a0d3d7766ea0106d4e7407d1d4d85 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.Bullet = 512
```

Display a bullet instead of arrow. IMPORTANT: node can still be marked open/close if you don't set the _Leaf flag!


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L53).

## `CollapsingHeader`

<a id="api-52859296e8ab6182"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.CollapsingHeader d4c2e01937778073f3fe918d1770db3ac0773cefc764104be9fbc2f48118d0a3 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.CollapsingHeader = 26
```

Selects the collapsing header presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L85).

## `DefaultOpen`

<a id="api-fd41be7846a79fd3"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.DefaultOpen 104b1a83474eda3a0c89375c7678bcf328392ada7dd71eac24adda8faeb8fe30 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.DefaultOpen = 32
```

Default node to be open


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L37).

## `DrawLinesFull`

<a id="api-c5471e2892a07353"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.DrawLinesFull 4ba78bfb5bcff49efaae90decbe7e47bd73d87933e05e2297bda86081def8cbf -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.DrawLinesFull = 524288
```

Horizontal lines to child nodes. Vertical line drawn down to TreePop() position: cover full contents. Faster (for large trees).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L93).

## `DrawLinesNone`

<a id="api-873f641b7daaabb3"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.DrawLinesNone 782b2db3e178a35e4c8382ca567e2b52b9ced10fad31b1c6fe39ef1494a0bf68 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.DrawLinesNone = 262144
```

No lines drawn


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L89).

## `DrawLinesToNodes`

<a id="api-b5705252f7dd44e5"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.DrawLinesToNodes a5666406cf18c3ac96ac7035f884a775a88e6bce6abf15486fba9f0b220dbb35 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.DrawLinesToNodes = 1048576
```

Horizontal lines to child nodes. Vertical line drawn down to bottom-most child node. Slower (for large trees).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L97).

## `Framed`

<a id="api-d48e873b3b1e2eb5"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.Framed ac2f5f6bdfc90814357fe51fb3dbb1f125fb53f35178d350083a90a4d395f535 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.Framed = 2
```

Draw frame with background (e.g. for CollapsingHeader)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L21).

## `FramePadding`

<a id="api-66568fd60e95a666"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.FramePadding 1692d052a5084ebdf70cf6def408a960c39f511a9640fa4e4fe26cb380b94374 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.FramePadding = 1024
```

Use FramePadding (even for an unframed text node) to vertically align text baseline to regular widget height. Equivalent to calling AlignTextToFramePadding() before the node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L57).

## `LabelSpanAllColumns`

<a id="api-fe142782badf8dc8"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.LabelSpanAllColumns 6051225e6bdc6dacc6401a10083a8675a08c8067f5fb951436dc1205b243a16d -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.LabelSpanAllColumns = 32768
```

Label will span all columns of its container table


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L77).

## `Leaf`

<a id="api-df9f4d2fa21d8f08"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.Leaf 8c7b8547db61ce40de0ff6b322e2fdb26128e26e248493610e157491fa5a1e17 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.Leaf = 256
```

No collapsing, no arrow (use as a convenience for leaf nodes).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L49).

## `NavLeftJumpsToParent`

<a id="api-78fc49923c6c8511"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.NavLeftJumpsToParent d30ce727a1a407a9652fba1dd4d261b8c32444844fff91647e2cb5434a4a6074 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.NavLeftJumpsToParent = 131072
```

Nav: left arrow moves back to parent. This is processed in TreePop() when there's an unfulfilled Left nav request remaining.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L81).

## `NoAutoOpenOnLog`

<a id="api-ade85fd8c23bb763"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.NoAutoOpenOnLog fb773676527739b27628209eb026b68649d8c78d5dc10f1cda0d50579e8d3d6c -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.NoAutoOpenOnLog = 16
```

Don't automatically and temporarily open node when Logging is active (by default logging will automatically open tree nodes)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L33).

## `None`

<a id="api-fc55d118a3ead000"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.None 949bb16839ba410dd183be65ccd823f5b32c19c33db94e3dab2d8c5657193338 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L13).

## `NoTreePushOnOpen`

<a id="api-25f491fe7276d365"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.NoTreePushOnOpen b1d3ddd1b546238d1fc86c283361a756afe0bc403ff640eb714e61d03f4953e7 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.NoTreePushOnOpen = 8
```

Don't do a TreePush() when open (e.g. for CollapsingHeader) = no extra indent nor pushing on ID stack


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L29).

## `OpenOnArrow`

<a id="api-619db34399743b7a"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.OpenOnArrow 8f9f48faa1019d27b00344d1d870a7cb76b8fc1088575878cfca276399d7bf28 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.OpenOnArrow = 128
```

Open when clicking on the arrow part (default for multi-select unless any _OpenOnXXX behavior is set explicitly). Both behaviors may be combined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L45).

## `OpenOnDoubleClick`

<a id="api-6f438c86793db941"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.OpenOnDoubleClick 3eeee8019cb559f6adfbab82fe51e01935ff132824fe0c2b3253c32c50b0ef0a -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.OpenOnDoubleClick = 64
```

Open on double-click instead of simple click (default for multi-select unless any _OpenOnXXX behavior is set explicitly). Both behaviors may be combined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L41).

## `Selected`

<a id="api-8c046d4bc5f4a766"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.Selected ae9c3f2644343afa7da6280a89a9005a55e1b6d97e7c4d92432e03d6eadaa048 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.Selected = 1
```

Draw as selected


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L17).

## `SpanAllColumns`

<a id="api-a532453bfaa45014"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.SpanAllColumns fcd80320987147522f81e1083e9f23dff27298d8b2ec2111a66945bcb4b8bb02 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.SpanAllColumns = 16384
```

Frame will span all columns of its container table (label will still fit in current column)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L73).

## `SpanAvailWidth`

<a id="api-f1db1d0dd4b1f0fa"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.SpanAvailWidth f6a1c6fb513268ade8f749ea4d58581ce2e2714575277182278739d1f86719a6 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.SpanAvailWidth = 2048
```

Extend hit box to the right-most edge, even if not framed. This is not the default in order to allow adding other items on the same line without using AllowOverlap mode.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L61).

## `SpanFullWidth`

<a id="api-ddb9a146b36a7612"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.SpanFullWidth 11764f4f03f4804b6225bbfce368c0c753d46bb03e1f8eb8351251030e0ba6c8 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.SpanFullWidth = 4096
```

Extend hit box to the left-most and right-most edges (cover the indent area).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L65).

## `SpanLabelWidth`

<a id="api-f59c7c81cc6d699c"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiTreeNodeFlags.SpanLabelWidth a3797dff05adc676c8d5e0c74ec35c658717085a8c932594c8113748ce286964 -->

```csharp
InnoEditor.ImGui.ImGuiTreeNodeFlags.SpanLabelWidth = 8192
```

Narrow hit box + narrow hovering highlight, will only cover the label text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L69).
