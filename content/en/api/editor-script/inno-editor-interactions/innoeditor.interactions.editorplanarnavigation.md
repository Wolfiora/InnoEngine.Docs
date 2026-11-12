---
title: "EditorPlanarNavigation"
description: "Reference for EditorPlanarNavigation in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.f71b5dfffc5faf1c
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorPlanarNavigation`

This reference describes `EditorPlanarNavigation` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2adf85c0c8aa3e52) | Method |
| [`Cancel`](#api-e342d98ede130400) | Method |
| [`Update`](#api-191e4657051c9de0) | Method |
| [`WheelFactor`](#api-8c57d2c2156ab38e) | Method |
| [`ZoomOrigin`](#api-5b781d2df8adca81) | Method |
| [`isPanning`](#api-8b226dfd4b4a746e) | Property |

## Type declaration

<a id="api-f71b5dfffc5faf1c"></a>
<!-- api: T:InnoEditor.Interactions.EditorPlanarNavigation 29244237b5f0156e242b364f4348a59cb6efd6a23829ca621ce74b6ef40fa884 -->

```csharp
public sealed class InnoEditor.Interactions.EditorPlanarNavigation
```

Shares captured planar gestures and mouse-anchored zoom math between scene and graph canvases.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorPlanarNavigation.cs#L9).

## `#ctor`

<a id="api-2adf85c0c8aa3e52"></a>
<!-- api: M:InnoEditor.Interactions.EditorPlanarNavigation.#ctor 168c271a655eabd1ea182abeefc21a86fbb898255ee4cf3c6da515293fbb3235 -->

```csharp
public InnoEditor.Interactions.EditorPlanarNavigation.EditorPlanarNavigation()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorPlanarNavigation.cs#L9).

## `Cancel`

<a id="api-e342d98ede130400"></a>
<!-- api: M:InnoEditor.Interactions.EditorPlanarNavigation.Cancel 448c4068b1dca84067bd2d171cd914cefbd2b2d8c5a5f9c55933e048d799eb30 -->

```csharp
public void InnoEditor.Interactions.EditorPlanarNavigation.Cancel()
```

Releases capture when a canvas closes or a gesture is cancelled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorPlanarNavigation.cs#L67).

## `Update`

<a id="api-191e4657051c9de0"></a>
<!-- api: M:InnoEditor.Interactions.EditorPlanarNavigation.Update(System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean) 12a8055ea9cb6664cf40edad68486c365b38f10fb31543ead8f76021eee435fc -->

```csharp
public bool InnoEditor.Interactions.EditorPlanarNavigation.Update(bool hovered, bool primaryPressed, bool middlePressed, bool primaryDown, bool middleDown, bool alt, bool allowAltPrimary = true)
```

Advances pointer capture using logical button state rather than window-local release events.

**Parameter `hovered`:** Whether a new gesture may start in this canvas.

**Parameter `primaryPressed`:** Whether the primary button was pressed this frame.

**Parameter `middlePressed`:** Whether the middle button was pressed this frame.

**Parameter `primaryDown`:** Current global primary button state.

**Parameter `middleDown`:** Current global middle button state.

**Parameter `alt`:** Whether Alt is held when the gesture starts.

**Parameter `allowAltPrimary`:** Whether Alt-primary belongs to pan rather than another navigation mode.

**Returns:** Whether this canvas owns the current pointer gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorPlanarNavigation.cs#L45).

## `WheelFactor`

<a id="api-8c57d2c2156ab38e"></a>
<!-- api: M:InnoEditor.Interactions.EditorPlanarNavigation.WheelFactor(System.Single,System.Single) 5f5d006f5adf5f59044f40bc4b4e107edd7fc4aee3c561c73541c0d9e5b58981 -->

```csharp
public static float InnoEditor.Interactions.EditorPlanarNavigation.WheelFactor(float wheel, float sensitivity = 0.16)
```

Converts wheel input to the common exponential magnification used by Editor canvases.

**Parameter `wheel`:** Logical wheel units, independent of framebuffer DPI.

**Parameter `sensitivity`:** Positive exponential sensitivity.

**Returns:** A finite positive magnification factor; positive wheel magnifies content.

**Throws `System.ArgumentOutOfRangeException`:** Input is non-finite or sensitivity is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorPlanarNavigation.cs#L84).

## `ZoomOrigin`

<a id="api-5b781d2df8adca81"></a>
<!-- api: M:InnoEditor.Interactions.EditorPlanarNavigation.ZoomOrigin(System.Numerics.Vector2,System.Numerics.Vector2,System.Single,System.Single) c7fddf79bc193c75032c549282cc6c588c4a0fd22621dc830b3d5789f97b2194 -->

```csharp
public static System.Numerics.Vector2 InnoEditor.Interactions.EditorPlanarNavigation.ZoomOrigin(System.Numerics.Vector2 origin, System.Numerics.Vector2 pivot, float previousScale, float nextScale)
```

Changes the screen-space origin so zoom preserves the same content point beneath the cursor.

**Parameter `origin`:** Current logical-pixel content origin.

**Parameter `pivot`:** Logical-pixel cursor position relative to the canvas.

**Parameter `previousScale`:** Previous positive content magnification.

**Parameter `nextScale`:** New positive content magnification after clamping.

**Returns:** The origin preserving the pivot's content coordinate.

**Throws `System.ArgumentOutOfRangeException`:** An input is non-finite or a scale is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorPlanarNavigation.cs#L116).

## `isPanning`

<a id="api-8b226dfd4b4a746e"></a>
<!-- api: P:InnoEditor.Interactions.EditorPlanarNavigation.isPanning 6dd982d299d30567ae25b1c1c439556cda87025e8bcbccc3a66014455c53ac37 -->

```csharp
public bool InnoEditor.Interactions.EditorPlanarNavigation.isPanning { get; }
```

Gets whether this canvas owns a pan gesture, including while the pointer is outside its bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorPlanarNavigation.cs#L16).
