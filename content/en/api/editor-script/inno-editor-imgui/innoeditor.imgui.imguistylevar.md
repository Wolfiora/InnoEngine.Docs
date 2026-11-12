---
title: "ImGuiStyleVar"
description: "Reference for ImGuiStyleVar in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.3291d41ce10dd9f8
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiStyleVar`

This reference describes `ImGuiStyleVar` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Alpha`](#api-e97c97c0d90f42e3) | Field |
| [`ButtonTextAlign`](#api-3ebbcc0beb79ad14) | Field |
| [`CellPadding`](#api-6448e6a488c2ba7d) | Field |
| [`ChildBorderSize`](#api-31465de45b4aeee6) | Field |
| [`ChildRounding`](#api-b81aeec37664c4f9) | Field |
| [`Count`](#api-5426334fd8ae55af) | Field |
| [`DisabledAlpha`](#api-7b2b1e4ea017ff6a) | Field |
| [`DockingSeparatorSize`](#api-7ba733bfca17bb7d) | Field |
| [`FrameBorderSize`](#api-3f468e1a442885b1) | Field |
| [`FramePadding`](#api-2bf19ec2c6a5a60e) | Field |
| [`FrameRounding`](#api-4bee9c99aa837c53) | Field |
| [`GrabMinSize`](#api-16e15372ef6675ad) | Field |
| [`GrabRounding`](#api-cc0af67a9fd7fe15) | Field |
| [`ImageBorderSize`](#api-eb857947c0fbdd40) | Field |
| [`ImageRounding`](#api-7da440ced9f2da63) | Field |
| [`IndentSpacing`](#api-10e629450df7a076) | Field |
| [`ItemInnerSpacing`](#api-d4c5922e35918013) | Field |
| [`ItemSpacing`](#api-1951ef8a87c9342f) | Field |
| [`PopupBorderSize`](#api-07f9eb7f9d5010e5) | Field |
| [`PopupRounding`](#api-8f921dbcb5270719) | Field |
| [`ScrollbarPadding`](#api-1d7bdd20fca44ec8) | Field |
| [`ScrollbarRounding`](#api-c587ec1e82745d67) | Field |
| [`ScrollbarSize`](#api-3dee9b3446b111e2) | Field |
| [`SelectableTextAlign`](#api-3373ae0f19f660d5) | Field |
| [`SeparatorTextAlign`](#api-1c8103902fc395a8) | Field |
| [`SeparatorTextBorderSize`](#api-92db1a5edd513780) | Field |
| [`SeparatorTextPadding`](#api-5252a7b4c079d437) | Field |
| [`TabBarBorderSize`](#api-b831dd416e954905) | Field |
| [`TabBarOverlineSize`](#api-8f8dfec63b40c9b6) | Field |
| [`TabBorderSize`](#api-03f9aaaae1eda83c) | Field |
| [`TableAngledHeadersAngle`](#api-5c23c35b3cf0248b) | Field |
| [`TableAngledHeadersTextAlign`](#api-346c936b7b66d495) | Field |
| [`TabMinWidthBase`](#api-baf665bf67361e90) | Field |
| [`TabMinWidthShrink`](#api-d95ab9b193687df2) | Field |
| [`TabRounding`](#api-fd195c4c3cf12a87) | Field |
| [`TreeLinesRounding`](#api-9ea4169677dd8563) | Field |
| [`TreeLinesSize`](#api-26e8fab22276b644) | Field |
| [`WindowBorderSize`](#api-613c660475c666aa) | Field |
| [`WindowMinSize`](#api-53f499f7b864c7c5) | Field |
| [`WindowPadding`](#api-4066b85be99e4156) | Field |
| [`WindowRounding`](#api-6e34586d84c04794) | Field |
| [`WindowTitleAlign`](#api-86817acf5a0c8417) | Field |

## Type declaration

<a id="api-3291d41ce10dd9f8"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiStyleVar 3057f18553ab9336f0c9158906f5e9bceccd60acdfc5b82def99bbd6c66d3edb -->

```csharp
public enum InnoEditor.ImGui.ImGuiStyleVar : int
```

Defines the supported style var choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L7).

## `Alpha`

<a id="api-e97c97c0d90f42e3"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.Alpha ebfacdd8f376f703691ed59f4bd2516a93d70f3a0bfd1148dca1be61c0b6e263 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.Alpha = 0
```

Selects the alpha presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L12).

## `ButtonTextAlign`

<a id="api-3ebbcc0beb79ad14"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.ButtonTextAlign 66f1b44689f37ae067bb6d98a0c8e8cd6227e4f5782206e7735ff90ef674c06f -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.ButtonTextAlign = 35
```

Selects the button text align presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L152).

## `CellPadding`

<a id="api-6448e6a488c2ba7d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.CellPadding 23ae13ce6cbcb3c4b7ac034059817c16e54bb447132d0cf37a2b0e131f9ea869 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.CellPadding = 17
```

Selects the cell padding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L80).

## `ChildBorderSize`

<a id="api-31465de45b4aeee6"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.ChildBorderSize c990e5af4aa684c08a501d96812760ef9a737e468b7062546bed08fff5e8189e -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.ChildBorderSize = 8
```

Selects the child border size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L44).

## `ChildRounding`

<a id="api-b81aeec37664c4f9"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.ChildRounding 436fd46010396506390c34e0c7ed53687968526918273facc1f538db523929c0 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.ChildRounding = 7
```

Selects the child rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L40).

## `Count`

<a id="api-5426334fd8ae55af"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.Count cc4c01a0520f36689773aad85230dd03e3af825c7733409a51edf711561bf1d2 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.Count = 41
```

Marks the exclusive end of the valid option range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L176).

## `DisabledAlpha`

<a id="api-7b2b1e4ea017ff6a"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.DisabledAlpha 6423b1afc353b1998e4be52808692bfaefb555be254a4c885c1291e16f241073 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.DisabledAlpha = 1
```

Selects the disabled alpha presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L16).

## `DockingSeparatorSize`

<a id="api-7ba733bfca17bb7d"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.DockingSeparatorSize 31ea6467a913a3ad4e9d26d63600040552f19c14793a51085803121f39d889e1 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.DockingSeparatorSize = 40
```

Selects the docking separator size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L172).

## `FrameBorderSize`

<a id="api-3f468e1a442885b1"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.FrameBorderSize 260626287a0d182bb04b45b798a9c55038bddd4a35b8f43411b3a7a4a1bc6db3 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.FrameBorderSize = 13
```

Selects the frame border size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L64).

## `FramePadding`

<a id="api-2bf19ec2c6a5a60e"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.FramePadding 78aa42c476e270940cced8f1c6bcf2a2fd4f2dcc7aa26882312aa3fbc9fb9828 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.FramePadding = 11
```

Selects the frame padding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L56).

## `FrameRounding`

<a id="api-4bee9c99aa837c53"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.FrameRounding d6679cd5959dbb7a38efd5981e4dd70c039a5cd3eb78e438f45c8f7f1546c47b -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.FrameRounding = 12
```

Selects the frame rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L60).

## `GrabMinSize`

<a id="api-16e15372ef6675ad"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.GrabMinSize d2bfe26c518622124fad2a66cb7903d32b83a9bcc29150a3739e227469912912 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.GrabMinSize = 21
```

Selects the grab min size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L96).

## `GrabRounding`

<a id="api-cc0af67a9fd7fe15"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.GrabRounding 8be9675ac220353d326054cff229117b6f392f49bef1c759b1af77a5c8d31a3f -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.GrabRounding = 22
```

Selects the grab rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L100).

## `ImageBorderSize`

<a id="api-eb857947c0fbdd40"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.ImageBorderSize 79582be58a1cf326663590c288dca902fe03d9eb6812e48f74f08ffc3fa986cc -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.ImageBorderSize = 24
```

Selects the image border size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L108).

## `ImageRounding`

<a id="api-7da440ced9f2da63"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.ImageRounding b62ede0211d452a87e3131347455efbe40bbd40211a0d0f434e1984d1d8022bc -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.ImageRounding = 23
```

Selects the image rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L104).

## `IndentSpacing`

<a id="api-10e629450df7a076"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.IndentSpacing 3db221c0223299a526dcaea5239af993e8d7067b6e3abd75854b32751fe963f8 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.IndentSpacing = 16
```

Selects the indent spacing presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L76).

## `ItemInnerSpacing`

<a id="api-d4c5922e35918013"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.ItemInnerSpacing 94d01a18cdcd6025f732d4e255e0b87fda22372f5fd79e404640e33f4333c46a -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.ItemInnerSpacing = 15
```

Selects the item inner spacing presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L72).

## `ItemSpacing`

<a id="api-1951ef8a87c9342f"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.ItemSpacing 50c43d4db7be163cf5bce1fff735486cefbb6d78273e5ceea3ad3f9e43125b43 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.ItemSpacing = 14
```

Selects the item spacing presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L68).

## `PopupBorderSize`

<a id="api-07f9eb7f9d5010e5"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.PopupBorderSize f1ed98d9a44da7440526f503a0fb8b1d975e1262f1a63db20d02b28098fc804e -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.PopupBorderSize = 10
```

Selects the popup border size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L52).

## `PopupRounding`

<a id="api-8f921dbcb5270719"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.PopupRounding 60a478f0e060c46a8326dd2f73c552e317546fb404ec3394c4dba49e36160d20 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.PopupRounding = 9
```

Selects the popup rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L48).

## `ScrollbarPadding`

<a id="api-1d7bdd20fca44ec8"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.ScrollbarPadding f0eb8039f492db6b9f69dd2a7f595476afde43070a3f11603310a53676692f98 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.ScrollbarPadding = 20
```

Selects the scrollbar padding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L92).

## `ScrollbarRounding`

<a id="api-c587ec1e82745d67"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.ScrollbarRounding fef8a2881e9b7b3998a4d8be475e1323eba3a4b2cfef4a4de3324cb71ca6a523 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.ScrollbarRounding = 19
```

Selects the scrollbar rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L88).

## `ScrollbarSize`

<a id="api-3dee9b3446b111e2"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.ScrollbarSize ad4277541a583c6eb9d6e48ff74063661d067ffa08ed0a6a76f8a9cca4ded099 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.ScrollbarSize = 18
```

Selects the scrollbar size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L84).

## `SelectableTextAlign`

<a id="api-3373ae0f19f660d5"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.SelectableTextAlign 271ca1671f417d974bb7df167917fac14699c9609fc267a823d6d996b1d00957 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.SelectableTextAlign = 36
```

Selects the selectable text align presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L156).

## `SeparatorTextAlign`

<a id="api-1c8103902fc395a8"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.SeparatorTextAlign 19de7523a2ffb79b92914d7924783493b4e707fa6cb304c6217c2cec0365eae1 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.SeparatorTextAlign = 38
```

Selects the separator text align presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L164).

## `SeparatorTextBorderSize`

<a id="api-92db1a5edd513780"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.SeparatorTextBorderSize ec63b740253dc66c05655f5d7d76974427446f94d58f8056c96587dce1ffd49c -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.SeparatorTextBorderSize = 37
```

Selects the separator text border size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L160).

## `SeparatorTextPadding`

<a id="api-5252a7b4c079d437"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.SeparatorTextPadding 58e4058840d9ed6732211c0b94202b9dcbf0fac8e1cf294332ae7891db18d8ce -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.SeparatorTextPadding = 39
```

Selects the separator text padding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L168).

## `TabBarBorderSize`

<a id="api-b831dd416e954905"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.TabBarBorderSize 7bd57ebe0068d4619c73ecd4e33279feac4aafd7631c88e3d80a7ffaa15f1667 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.TabBarBorderSize = 29
```

Selects the tab bar border size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L128).

## `TabBarOverlineSize`

<a id="api-8f8dfec63b40c9b6"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.TabBarOverlineSize a21dac560ba18c1debd4fb5657e266a9eb14abc394e414e820ddc0f003e7e722 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.TabBarOverlineSize = 30
```

Selects the tab bar overline size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L132).

## `TabBorderSize`

<a id="api-03f9aaaae1eda83c"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.TabBorderSize 8df67d8e998c7664be85b85afe61e14cf8d4e3a5cbd0058a7ae8b030a746f1e8 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.TabBorderSize = 26
```

Selects the tab border size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L116).

## `TableAngledHeadersAngle`

<a id="api-5c23c35b3cf0248b"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.TableAngledHeadersAngle 22624de542ccadf52fde2a6c2fca55e679eb12904a9a38136108daf39c13d79d -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.TableAngledHeadersAngle = 31
```

Selects the table angled headers angle presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L136).

## `TableAngledHeadersTextAlign`

<a id="api-346c936b7b66d495"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.TableAngledHeadersTextAlign 2de0627e3c0a3991144b7a4af9f03bf889e77e1ee35172b1a8aa123e4979affd -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.TableAngledHeadersTextAlign = 32
```

Selects the table angled headers text align presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L140).

## `TabMinWidthBase`

<a id="api-baf665bf67361e90"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.TabMinWidthBase 5cb986073d1d18d73182676e96d92daeb0b17b7265adbe947b083529676d3764 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.TabMinWidthBase = 27
```

Selects the tab min width base presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L120).

## `TabMinWidthShrink`

<a id="api-d95ab9b193687df2"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.TabMinWidthShrink 64fdf08d2157cf0beaa2f05d609cab5dd932e9ec69e6ecb0199d55c9a6f411cd -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.TabMinWidthShrink = 28
```

Selects the tab min width shrink presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L124).

## `TabRounding`

<a id="api-fd195c4c3cf12a87"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.TabRounding b44533b1cfcc3bc7622a382943350df6bd59e03107b0261c4a8b47bc3113245b -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.TabRounding = 25
```

Selects the tab rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L112).

## `TreeLinesRounding`

<a id="api-9ea4169677dd8563"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.TreeLinesRounding 069626c84299f8f5c48c435ddf58d9ed21860b3c59db649aa114150cf61faf8f -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.TreeLinesRounding = 34
```

Selects the tree lines rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L148).

## `TreeLinesSize`

<a id="api-26e8fab22276b644"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.TreeLinesSize ba35c191b0ca37c6966feb9af1c298269710d66824e9feaa28683639a96156bb -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.TreeLinesSize = 33
```

Selects the tree lines size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L144).

## `WindowBorderSize`

<a id="api-613c660475c666aa"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.WindowBorderSize b114b70d14d4d1b71935d4ddb41ed0979410dd5b8b382cde0e97e0525848f4d6 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.WindowBorderSize = 4
```

Selects the window border size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L28).

## `WindowMinSize`

<a id="api-53f499f7b864c7c5"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.WindowMinSize dbedaf8b00c47dae5f3c3df0b0503e45de1733e49016ad6e888af78c4810e2e4 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.WindowMinSize = 5
```

Selects the window min size presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L32).

## `WindowPadding`

<a id="api-4066b85be99e4156"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.WindowPadding c5736466a1289e663e5691d95d215593c2e70faa9e08cf9a238813f9edc74a27 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.WindowPadding = 2
```

Selects the window padding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L20).

## `WindowRounding`

<a id="api-6e34586d84c04794"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.WindowRounding 95cc73ac3abc02b606009606b90ac187cc60b08c64cc36458fa449e28c61dd08 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.WindowRounding = 3
```

Selects the window rounding presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L24).

## `WindowTitleAlign`

<a id="api-86817acf5a0c8417"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiStyleVar.WindowTitleAlign 26767e5eaf16555ba8f788830a99acf401f52834a630b85746009e4739dfd9d7 -->

```csharp
InnoEditor.ImGui.ImGuiStyleVar.WindowTitleAlign = 6
```

Selects the window title align presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiStyleVar.cs#L36).
