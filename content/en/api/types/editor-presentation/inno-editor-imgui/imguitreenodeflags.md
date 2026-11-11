---
title: "ImGuiTreeNodeFlags"
description: "Reference for ImGuiTreeNodeFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.c10b303910ed5900
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiTreeNodeFlags`

This reference describes `ImGuiTreeNodeFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AllowOverlap`](#api-70691dcf3d639277) | Field |
| [`Bullet`](#api-75f2437390f90830) | Field |
| [`CollapsingHeader`](#api-95553a01dd1d8239) | Field |
| [`DefaultOpen`](#api-659550d0b3959658) | Field |
| [`DrawLinesFull`](#api-4966b0136980873a) | Field |
| [`DrawLinesNone`](#api-dadd1b0fae83093e) | Field |
| [`DrawLinesToNodes`](#api-06b3d1b576b652bb) | Field |
| [`Framed`](#api-b6d44255cb218df9) | Field |
| [`FramePadding`](#api-1ffcf4330070a72d) | Field |
| [`LabelSpanAllColumns`](#api-6109231b8ffa0bc7) | Field |
| [`Leaf`](#api-8bbd25bceec43812) | Field |
| [`NavLeftJumpsToParent`](#api-687c7b409727849e) | Field |
| [`NoAutoOpenOnLog`](#api-181b3401ccef14b8) | Field |
| [`None`](#api-af352196369c85a5) | Field |
| [`NoTreePushOnOpen`](#api-697c67513e128e07) | Field |
| [`OpenOnArrow`](#api-934e74a3da4a8dd7) | Field |
| [`OpenOnDoubleClick`](#api-7e8d258da0e05be3) | Field |
| [`Selected`](#api-8eaa58c85567b296) | Field |
| [`SpanAllColumns`](#api-8e090de9d923f32a) | Field |
| [`SpanAvailWidth`](#api-918326c90f95bc7b) | Field |
| [`SpanFullWidth`](#api-8554279fb3d1fdc4) | Field |
| [`SpanLabelWidth`](#api-a657bb30dfb6f801) | Field |

## Type declaration

<a id="api-c10b303910ed5900"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiTreeNodeFlags ae0d05d64dd4485647705a38132331a65fc54f475b0327471865678c2b84fa53 -->

```csharp
public enum Inno.Editor.ImGui.ImGuiTreeNodeFlags : int
```

Defines the supported tree node flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L8).

## `AllowOverlap`

<a id="api-70691dcf3d639277"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.AllowOverlap 38fb0d9cdb23c1651bc35384fe84b77013a6faf9a1e9234a9b47aff3ede60d73 -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.AllowOverlap = 4
```

Hit testing to allow subsequent widgets to overlap this one


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L25).

## `Bullet`

<a id="api-75f2437390f90830"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.Bullet fd802964eff05ddc781f5d99d57b0d2a603a0754d0b338fb8bedfc61feeb2b0c -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.Bullet = 512
```

Display a bullet instead of arrow. IMPORTANT: node can still be marked open/close if you don't set the _Leaf flag!


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L53).

## `CollapsingHeader`

<a id="api-95553a01dd1d8239"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.CollapsingHeader be353e76902c7e92d3a85d604a016c614b7ad746fa5381b4a453b88330b889d5 -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.CollapsingHeader = Inno.Editor.ImGui.ImGuiTreeNodeFlags.Framed | Inno.Editor.ImGui.ImGuiTreeNodeFlags.NoTreePushOnOpen | Inno.Editor.ImGui.ImGuiTreeNodeFlags.NoAutoOpenOnLog
```

Selects the collapsing header presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L85).

## `DefaultOpen`

<a id="api-659550d0b3959658"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.DefaultOpen 207e2f8f042435130be45c0c4f0e3328d0c0a7a159b5e11aa22cb274ba93bc50 -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.DefaultOpen = 32
```

Default node to be open


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L37).

## `DrawLinesFull`

<a id="api-4966b0136980873a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.DrawLinesFull d7d8aec7205dc51744b551c0c974bb41e8dc0eaa9d142435e7699a9a9010867c -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.DrawLinesFull = 524288
```

Horizontal lines to child nodes. Vertical line drawn down to TreePop() position: cover full contents. Faster (for large trees).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L93).

## `DrawLinesNone`

<a id="api-dadd1b0fae83093e"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.DrawLinesNone 3c7b1f6ac94c8802a3cfcb01fe40a889f8b2bf9febad37cee791e3bde97bc776 -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.DrawLinesNone = 262144
```

No lines drawn


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L89).

## `DrawLinesToNodes`

<a id="api-06b3d1b576b652bb"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.DrawLinesToNodes a0e575f65089bdddf5f5f5189573e4023f41dd904a3b0850bc825c5a6dfa8aca -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.DrawLinesToNodes = 1048576
```

Horizontal lines to child nodes. Vertical line drawn down to bottom-most child node. Slower (for large trees).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L97).

## `Framed`

<a id="api-b6d44255cb218df9"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.Framed 99a24d3618ebf8988d360fa558df790af24245a06f02007fc99e38b681f9d87a -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.Framed = 2
```

Draw frame with background (e.g. for CollapsingHeader)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L21).

## `FramePadding`

<a id="api-1ffcf4330070a72d"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.FramePadding 469429524df138ab760c2cf0ae35a8d8cc52db0c5e80511b30216eb94cad1b21 -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.FramePadding = 1024
```

Use FramePadding (even for an unframed text node) to vertically align text baseline to regular widget height. Equivalent to calling AlignTextToFramePadding() before the node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L57).

## `LabelSpanAllColumns`

<a id="api-6109231b8ffa0bc7"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.LabelSpanAllColumns c3c0eb9016e4498238527acbb3f5c27bfd6a44c11826f45f0f04806b8a6df114 -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.LabelSpanAllColumns = 32768
```

Label will span all columns of its container table


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L77).

## `Leaf`

<a id="api-8bbd25bceec43812"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.Leaf 3e9f51ee57319a9870c6f141af94c3ac9728ba046b4326c2a3a54a3607ba5cf6 -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.Leaf = 256
```

No collapsing, no arrow (use as a convenience for leaf nodes).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L49).

## `NavLeftJumpsToParent`

<a id="api-687c7b409727849e"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.NavLeftJumpsToParent fc805ab7abf4692e4a9c0831d245a68432541c319af813e993448caaeac612b7 -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.NavLeftJumpsToParent = 131072
```

Nav: left arrow moves back to parent. This is processed in TreePop() when there's an unfulfilled Left nav request remaining.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L81).

## `NoAutoOpenOnLog`

<a id="api-181b3401ccef14b8"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.NoAutoOpenOnLog 79ec7386dcbaaeafedd16c56a9d28eb934fbebbe5a5b0190e116ecd43a9b2ec7 -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.NoAutoOpenOnLog = 16
```

Don't automatically and temporarily open node when Logging is active (by default logging will automatically open tree nodes)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L33).

## `None`

<a id="api-af352196369c85a5"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.None f9d93be170d052b9ec7fba32a88980a9469dbbf7185eda5b591086fcaf91c0a7 -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L13).

## `NoTreePushOnOpen`

<a id="api-697c67513e128e07"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.NoTreePushOnOpen 1cc78dd8fd8a8d489099fb5d4940c2345f39b0dfe63aa69d5dd1f5401ac1cca6 -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.NoTreePushOnOpen = 8
```

Don't do a TreePush() when open (e.g. for CollapsingHeader) = no extra indent nor pushing on ID stack


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L29).

## `OpenOnArrow`

<a id="api-934e74a3da4a8dd7"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.OpenOnArrow 89cbe8037ca910192459719cacd2d7e9c5f35a2c1ee7dee3948fb2544b11d1e0 -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.OpenOnArrow = 128
```

Open when clicking on the arrow part (default for multi-select unless any _OpenOnXXX behavior is set explicitly). Both behaviors may be combined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L45).

## `OpenOnDoubleClick`

<a id="api-7e8d258da0e05be3"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.OpenOnDoubleClick 93bfea2518c549dd1b34219fbbb820ad3085db5acb7cbdc16327a9394fcfbadd -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.OpenOnDoubleClick = 64
```

Open on double-click instead of simple click (default for multi-select unless any _OpenOnXXX behavior is set explicitly). Both behaviors may be combined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L41).

## `Selected`

<a id="api-8eaa58c85567b296"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.Selected 7c61f1c308ddade347de948e20700cd2b0f9183cd9c0b0af232d4f6b66f1a958 -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.Selected = 1
```

Draw as selected


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L17).

## `SpanAllColumns`

<a id="api-8e090de9d923f32a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.SpanAllColumns d10ea7d4abaaceb1d4fd41dd09f8dd5f0f36407e8356b15ca1bfef636b835ca9 -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.SpanAllColumns = 16384
```

Frame will span all columns of its container table (label will still fit in current column)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L73).

## `SpanAvailWidth`

<a id="api-918326c90f95bc7b"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.SpanAvailWidth 168cd7fadc42ff26f6d4e798bb8ca112a41403549a5ca99af9d6d84785247c7f -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.SpanAvailWidth = 2048
```

Extend hit box to the right-most edge, even if not framed. This is not the default in order to allow adding other items on the same line without using AllowOverlap mode.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L61).

## `SpanFullWidth`

<a id="api-8554279fb3d1fdc4"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.SpanFullWidth b049de8efae7484161c693e9d2ab66594c6350f0f0d0af5a72b82fa97d82cbd8 -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.SpanFullWidth = 4096
```

Extend hit box to the left-most and right-most edges (cover the indent area).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L65).

## `SpanLabelWidth`

<a id="api-a657bb30dfb6f801"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTreeNodeFlags.SpanLabelWidth a43d83f91ac3232db15099c4a74bf895a571f42f0a007e4e4c44c2cc8a1ff831 -->

```csharp
Inno.Editor.ImGui.ImGuiTreeNodeFlags.SpanLabelWidth = 8192
```

Narrow hit box + narrow hovering highlight, will only cover the label text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTreeNodeFlags.cs#L69).
