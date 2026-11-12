---
title: "EditorViewportCursor"
description: "Reference for EditorViewportCursor in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.c5f189d49f41f606
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorViewportCursor`

This reference describes `EditorViewportCursor` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Arrow`](#api-1d110ce4f9fddeaf) | Field |
| [`Crosshair`](#api-e7dc21495ed715e0) | Field |
| [`Hand`](#api-b17c79129a894559) | Field |
| [`Hidden`](#api-161981db8b8218bf) | Field |
| [`Move`](#api-5e698135a420e5b3) | Field |
| [`ResizeHorizontal`](#api-3266b44810828f5c) | Field |
| [`ResizeVertical`](#api-e797f228619238be) | Field |

## Type declaration

<a id="api-c5f189d49f41f606"></a>
<!-- api: T:InnoEditor.Interactions.EditorViewportCursor cd7e24bf14af43d2afccd256fe8403d77bbac9a269cd788f95d06d13bb86ec45 -->

```csharp
public enum InnoEditor.Interactions.EditorViewportCursor : int
```

Selects a presentation-independent cursor requested by a viewport tool.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L33).

## `Arrow`

<a id="api-1d110ce4f9fddeaf"></a>
<!-- api: F:InnoEditor.Interactions.EditorViewportCursor.Arrow f8d2a4744027ce18d956de1f7c7bfaff02985867eccce337b18cbff1d87fa4cd -->

```csharp
InnoEditor.Interactions.EditorViewportCursor.Arrow = 0
```

Uses the normal arrow cursor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L38).

## `Crosshair`

<a id="api-e7dc21495ed715e0"></a>
<!-- api: F:InnoEditor.Interactions.EditorViewportCursor.Crosshair e647f6e8a9c16db17dc6907467fd98450a6b0f3f3b00210cdf65556d2c4187b7 -->

```csharp
InnoEditor.Interactions.EditorViewportCursor.Crosshair = 1
```

Uses a precise crosshair.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L42).

## `Hand`

<a id="api-b17c79129a894559"></a>
<!-- api: F:InnoEditor.Interactions.EditorViewportCursor.Hand cc90935e6018b7c485c1422872f2353722870039972fbec893ab0340614813c1 -->

```csharp
InnoEditor.Interactions.EditorViewportCursor.Hand = 2
```

Uses a hand suitable for panning.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L46).

## `Hidden`

<a id="api-161981db8b8218bf"></a>
<!-- api: F:InnoEditor.Interactions.EditorViewportCursor.Hidden 24667b22eeaa0f0f87bb8f19af904456bc5b1c099ad9c8cfeed8336a1254b1e4 -->

```csharp
InnoEditor.Interactions.EditorViewportCursor.Hidden = 6
```

Hides the pointer while the tool owns it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L62).

## `Move`

<a id="api-5e698135a420e5b3"></a>
<!-- api: F:InnoEditor.Interactions.EditorViewportCursor.Move 07f4b13b038bc61de47f6f53abb5335a79ece5f689347eda17ab4ea4c9ef590e -->

```csharp
InnoEditor.Interactions.EditorViewportCursor.Move = 3
```

Uses four-direction movement arrows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L50).

## `ResizeHorizontal`

<a id="api-3266b44810828f5c"></a>
<!-- api: F:InnoEditor.Interactions.EditorViewportCursor.ResizeHorizontal df50343029f9864f085b17f94c760d80a8f47f9b4b8c2122600da768c2278e2e -->

```csharp
InnoEditor.Interactions.EditorViewportCursor.ResizeHorizontal = 4
```

Uses horizontal resizing arrows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L54).

## `ResizeVertical`

<a id="api-e797f228619238be"></a>
<!-- api: F:InnoEditor.Interactions.EditorViewportCursor.ResizeVertical 605a510cf6c8c67ad806f1ea03c8fbe679631a4cf9311556f13f34ca3d0c4971 -->

```csharp
InnoEditor.Interactions.EditorViewportCursor.ResizeVertical = 5
```

Uses vertical resizing arrows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L58).
