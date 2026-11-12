---
title: "ImGuiComboFlags"
description: "Reference for ImGuiComboFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.eb4364e10c44b85e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiComboFlags`

This reference describes `ImGuiComboFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`HeightLarge`](#api-a94c25fac2942dba) | Field |
| [`HeightLargest`](#api-f39fcf782afa1026) | Field |
| [`HeightMask`](#api-6bc607384f752978) | Field |
| [`HeightRegular`](#api-e10d1c5811cd0920) | Field |
| [`HeightSmall`](#api-1ae1090284665847) | Field |
| [`NoArrowButton`](#api-67aceaea7c3082a7) | Field |
| [`None`](#api-53b5874cb34121c7) | Field |
| [`NoPreview`](#api-662602ed5333021c) | Field |
| [`PopupAlignLeft`](#api-66a2db2d787480a5) | Field |
| [`WidthFitPreview`](#api-ede7a3b20892b8f7) | Field |

## Type declaration

<a id="api-eb4364e10c44b85e"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiComboFlags 976208823fa060fb1026840ae635e60e69703ca2002fddff3351b257cb993e3c -->

```csharp
public enum InnoEditor.ImGui.ImGuiComboFlags : int
```

Defines the supported combo flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L8).

## `HeightLarge`

<a id="api-a94c25fac2942dba"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiComboFlags.HeightLarge 4cd7254a9fd78d267a7028f6505e5c1683c6a6f880dcf0dbfd58f1a5c6f34039 -->

```csharp
InnoEditor.ImGui.ImGuiComboFlags.HeightLarge = 8
```

Max ~20 items visible


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L29).

## `HeightLargest`

<a id="api-f39fcf782afa1026"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiComboFlags.HeightLargest 23396de441d52e8a3f59749842e02d2e02901ed83bb98d4c6b3be70c5f8921ff -->

```csharp
InnoEditor.ImGui.ImGuiComboFlags.HeightLargest = 16
```

As many fitting items as possible


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L33).

## `HeightMask`

<a id="api-6bc607384f752978"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiComboFlags.HeightMask 9f16f37b61d86d75bb62e2431180e2b5a761fe4ed7ea4f5484978882293f5d07 -->

```csharp
InnoEditor.ImGui.ImGuiComboFlags.HeightMask = 30
```

Selects the height mask presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L49).

## `HeightRegular`

<a id="api-e10d1c5811cd0920"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiComboFlags.HeightRegular ce315280da415d40bb29f4c810487237144cdbcf24e90364fe7b9e131680d066 -->

```csharp
InnoEditor.ImGui.ImGuiComboFlags.HeightRegular = 4
```

Max ~8 items visible (default)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L25).

## `HeightSmall`

<a id="api-1ae1090284665847"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiComboFlags.HeightSmall bf3c6a44c07447348b716c3b6a0b6d435a6c75e1f3569d8c142080536bf9083c -->

```csharp
InnoEditor.ImGui.ImGuiComboFlags.HeightSmall = 2
```

Max ~4 items visible. Tip: If you want your combo popup to be a specific size you can use SetNextWindowSizeConstraints() prior to calling BeginCombo()


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L21).

## `NoArrowButton`

<a id="api-67aceaea7c3082a7"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiComboFlags.NoArrowButton 96deb3371076b159e99b2b0b27749763ccb99e643ba4ec3b1a32ebae1ec47403 -->

```csharp
InnoEditor.ImGui.ImGuiComboFlags.NoArrowButton = 32
```

Display on the preview box without the square arrow button


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L37).

## `None`

<a id="api-53b5874cb34121c7"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiComboFlags.None b4c197830b7f91cd0df3b8f330debe41119c1621df28d86348e9b474920b71bf -->

```csharp
InnoEditor.ImGui.ImGuiComboFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L13).

## `NoPreview`

<a id="api-662602ed5333021c"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiComboFlags.NoPreview 7de71f7bc3576f647e1bc94d6db01b4dc08dd8f6d065a337b11b0edbcae986b2 -->

```csharp
InnoEditor.ImGui.ImGuiComboFlags.NoPreview = 64
```

Display only a square arrow button


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L41).

## `PopupAlignLeft`

<a id="api-66a2db2d787480a5"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiComboFlags.PopupAlignLeft 9b2a33384a00e517350300a5814cc6d91b48581eda1054a3bdc8734261791dd2 -->

```csharp
InnoEditor.ImGui.ImGuiComboFlags.PopupAlignLeft = 1
```

Align the popup toward the left by default


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L17).

## `WidthFitPreview`

<a id="api-ede7a3b20892b8f7"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiComboFlags.WidthFitPreview aad38bfdfed71cbed5cccd7ee94b47fb5e166033389d504b3bfc5de7102d9f11 -->

```csharp
InnoEditor.ImGui.ImGuiComboFlags.WidthFitPreview = 128
```

Width dynamically calculated from preview contents


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiComboFlags.cs#L45).
