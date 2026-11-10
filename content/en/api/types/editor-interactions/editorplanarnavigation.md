---
title: "EditorPlanarNavigation"
description: "Reference for EditorPlanarNavigation in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.29518bcb008c0bcd
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorPlanarNavigation`

This reference describes `EditorPlanarNavigation` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-36621881dd547ce3) | Method |
| [`Cancel`](#api-b761ff7298bfc380) | Method |
| [`Update`](#api-9278fa96cd991bff) | Method |
| [`WheelFactor`](#api-5a7dcb2efca83dc4) | Method |
| [`ZoomOrigin`](#api-426b6efc27c6d95b) | Method |
| [`isPanning`](#api-78a5b841dbc34931) | Property |

## Type declaration

<a id="api-29518bcb008c0bcd"></a>
<!-- api: T:Inno.Editor.Interactions.EditorPlanarNavigation 05fa0699f6dd38b7e2be565dc2ffae3fbd5f0bf5af3897313b6c6f9e76412f0f -->

```csharp
public sealed class Inno.Editor.Interactions.EditorPlanarNavigation
```

Shares captured planar gestures and mouse-anchored zoom math between scene and graph canvases.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorPlanarNavigation.cs#L9).

## `#ctor`

<a id="api-36621881dd547ce3"></a>
<!-- api: M:Inno.Editor.Interactions.EditorPlanarNavigation.#ctor 95cea3b5df6b2e79959c613f8641a6d3994ed825e42a8a22f8abcd679f5b4975 -->

```csharp
public Inno.Editor.Interactions.EditorPlanarNavigation.EditorPlanarNavigation()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorPlanarNavigation.cs#L9).

## `Cancel`

<a id="api-b761ff7298bfc380"></a>
<!-- api: M:Inno.Editor.Interactions.EditorPlanarNavigation.Cancel 999a1dc4033fc699872def778db122d9e889da47475a32e83cba0edc2486b98b -->

```csharp
public void Inno.Editor.Interactions.EditorPlanarNavigation.Cancel()
```

Releases capture when a canvas closes or a gesture is cancelled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorPlanarNavigation.cs#L67).

## `Update`

<a id="api-9278fa96cd991bff"></a>
<!-- api: M:Inno.Editor.Interactions.EditorPlanarNavigation.Update(System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean) 1f5e4b702648955fc4ab84a2bd772880ae78e06fee80c291a84eb18f234b02af -->

```csharp
public bool Inno.Editor.Interactions.EditorPlanarNavigation.Update(bool hovered, bool primaryPressed, bool middlePressed, bool primaryDown, bool middleDown, bool alt, bool allowAltPrimary = true)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorPlanarNavigation.cs#L45).

## `WheelFactor`

<a id="api-5a7dcb2efca83dc4"></a>
<!-- api: M:Inno.Editor.Interactions.EditorPlanarNavigation.WheelFactor(System.Single,System.Single) cf2ae6645fd9197518dc22e4f6f7cfd78d90a425d11bc98aeaa5412be01e8338 -->

```csharp
public static float Inno.Editor.Interactions.EditorPlanarNavigation.WheelFactor(float wheel, float sensitivity = 0.16)
```

Converts wheel input to the common exponential magnification used by Editor canvases.

**Parameter `wheel`:** Logical wheel units, independent of framebuffer DPI.

**Parameter `sensitivity`:** Positive exponential sensitivity.

**Returns:** A finite positive magnification factor; positive wheel magnifies content.

**Throws `System.ArgumentOutOfRangeException`:** Input is non-finite or sensitivity is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorPlanarNavigation.cs#L84).

## `ZoomOrigin`

<a id="api-426b6efc27c6d95b"></a>
<!-- api: M:Inno.Editor.Interactions.EditorPlanarNavigation.ZoomOrigin(System.Numerics.Vector2,System.Numerics.Vector2,System.Single,System.Single) 52042db4f36f26a7b17832a5608803a7142e7bdc3fb6dd4a78644736989f432c -->

```csharp
public static System.Numerics.Vector2 Inno.Editor.Interactions.EditorPlanarNavigation.ZoomOrigin(System.Numerics.Vector2 origin, System.Numerics.Vector2 pivot, float previousScale, float nextScale)
```

Changes the screen-space origin so zoom preserves the same content point beneath the cursor.

**Parameter `origin`:** Current logical-pixel content origin.

**Parameter `pivot`:** Logical-pixel cursor position relative to the canvas.

**Parameter `previousScale`:** Previous positive content magnification.

**Parameter `nextScale`:** New positive content magnification after clamping.

**Returns:** The origin preserving the pivot's content coordinate.

**Throws `System.ArgumentOutOfRangeException`:** An input is non-finite or a scale is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorPlanarNavigation.cs#L116).

## `isPanning`

<a id="api-78a5b841dbc34931"></a>
<!-- api: P:Inno.Editor.Interactions.EditorPlanarNavigation.isPanning 3c4e2072e199cfbf7a8cefc2a7ce95bf17ebdc35cd6e620a83a8ad6872b8027a -->

```csharp
public bool Inno.Editor.Interactions.EditorPlanarNavigation.isPanning { get; private set; }
```

Gets whether this canvas owns a pan gesture, including while the pointer is outside its bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorPlanarNavigation.cs#L16).
