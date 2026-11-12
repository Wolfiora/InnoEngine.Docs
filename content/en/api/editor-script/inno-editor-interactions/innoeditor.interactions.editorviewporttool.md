---
title: "EditorViewportTool"
description: "Reference for EditorViewportTool in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.90895d119fd454b4
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorViewportTool`

This reference describes `EditorViewportTool` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-74ecfdc44d1b1ee7) | Method |
| [`DrawOverlay`](#api-854beb317230daed) | Method |
| [`OnPointerCancel`](#api-9efc23afba87ad9c) | Method |
| [`OnPointerDown`](#api-e3d35e9682a255b2) | Method |
| [`OnPointerMove`](#api-a80ca54de54d317c) | Method |
| [`OnPointerUp`](#api-61ba06f23a1e28c4) | Method |
| [`OnShortcut`](#api-59b944eb407210fa) | Method |
| [`cursor`](#api-30cdb92baea4c7d7) | Property |
| [`id`](#api-4275d22ec042d70a) | Property |

## Type declaration

<a id="api-90895d119fd454b4"></a>
<!-- api: T:InnoEditor.Interactions.EditorViewportTool 89752d82905b7fb747d789c6f140ff55b7b8b1b237965f4c8e7058fd3aa0bb25 -->

```csharp
public abstract class InnoEditor.Interactions.EditorViewportTool
```

Defines one presentation-independent, reloadable viewport editing tool.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L212).

## `#ctor`

<a id="api-74ecfdc44d1b1ee7"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportTool.#ctor bf645c1be6a5d3c3742c958c83cef51c5e8297975015c91ffd20e47086f2b4e3 -->

```csharp
protected InnoEditor.Interactions.EditorViewportTool.EditorViewportTool()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L212).

## `DrawOverlay`

<a id="api-854beb317230daed"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportTool.DrawOverlay(InnoEditor.Interactions.EditorViewportToolContext) 99d177f573d0e879fc8ee675e989b132c83c4ec9d0ff7983e0507f9d3e823ea7 -->

```csharp
public virtual void InnoEditor.Interactions.EditorViewportTool.DrawOverlay(InnoEditor.Interactions.EditorViewportToolContext context)
```

Draws transient gizmos and diagnostics over the viewport.

**Parameter `context`:** Gesture and coordinate context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L316).

## `OnPointerCancel`

<a id="api-9efc23afba87ad9c"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportTool.OnPointerCancel(InnoEditor.Interactions.EditorViewportToolContext,InnoEditor.Interactions.EditorViewportPointerEvent) e44fb3d91aa43f0106c1086a3f2f6b5492bd4f99e6acdb24e99177ffe3400b5e -->

```csharp
public virtual void InnoEditor.Interactions.EditorViewportTool.OnPointerCancel(InnoEditor.Interactions.EditorViewportToolContext context, InnoEditor.Interactions.EditorViewportPointerEvent pointer)
```

Handles platform cancellation of an active gesture.

**Parameter `context`:** Gesture and coordinate context.

**Parameter `pointer`:** Immutable pointer sample.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L281).

## `OnPointerDown`

<a id="api-e3d35e9682a255b2"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportTool.OnPointerDown(InnoEditor.Interactions.EditorViewportToolContext,InnoEditor.Interactions.EditorViewportPointerEvent) ffaae84518b03af637b6f90cafa1426d59933f33107585adb5b5e8d613db963d -->

```csharp
public virtual void InnoEditor.Interactions.EditorViewportTool.OnPointerDown(InnoEditor.Interactions.EditorViewportToolContext context, InnoEditor.Interactions.EditorViewportPointerEvent pointer)
```

Handles a pointer press.

**Parameter `context`:** Gesture and coordinate context.

**Parameter `pointer`:** Immutable pointer sample.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L233).

## `OnPointerMove`

<a id="api-a80ca54de54d317c"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportTool.OnPointerMove(InnoEditor.Interactions.EditorViewportToolContext,InnoEditor.Interactions.EditorViewportPointerEvent) 0d804649572d45e8647707e64b6fb94061e59d901b2b352c33528afb5ce0c482 -->

```csharp
public virtual void InnoEditor.Interactions.EditorViewportTool.OnPointerMove(InnoEditor.Interactions.EditorViewportToolContext context, InnoEditor.Interactions.EditorViewportPointerEvent pointer)
```

Handles pointer movement or hover.

**Parameter `context`:** Gesture and coordinate context.

**Parameter `pointer`:** Immutable pointer sample.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L249).

## `OnPointerUp`

<a id="api-61ba06f23a1e28c4"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportTool.OnPointerUp(InnoEditor.Interactions.EditorViewportToolContext,InnoEditor.Interactions.EditorViewportPointerEvent) df453b2a45ee41787c6423b3b3d977cd1b2af7967416cef20c3b9ce7a2201eb9 -->

```csharp
public virtual void InnoEditor.Interactions.EditorViewportTool.OnPointerUp(InnoEditor.Interactions.EditorViewportToolContext context, InnoEditor.Interactions.EditorViewportPointerEvent pointer)
```

Handles a pointer release.

**Parameter `context`:** Gesture and coordinate context.

**Parameter `pointer`:** Immutable pointer sample.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L265).

## `OnShortcut`

<a id="api-59b944eb407210fa"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportTool.OnShortcut(InnoEditor.Interactions.EditorViewportToolContext,InnoEditor.Interactions.EditorViewportShortcut) ea8e1313d8caf03817fcd434a7c8933d9e387629c8e10a8747a9a2893cb1da2d -->

```csharp
public virtual bool InnoEditor.Interactions.EditorViewportTool.OnShortcut(InnoEditor.Interactions.EditorViewportToolContext context, InnoEditor.Interactions.EditorViewportShortcut shortcut)
```

Handles a focused viewport shortcut before global action routing.

**Parameter `context`:** Gesture and coordinate context.

**Parameter `shortcut`:** Pressed key sample.

**Returns:** `true` when the tool consumed the key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L302).

## `cursor`

<a id="api-30cdb92baea4c7d7"></a>
<!-- api: P:InnoEditor.Interactions.EditorViewportTool.cursor 2b77477ef4a7022315c9efdbc1c3a870e96ab280a311ca19ab0a2a8ad4c589c6 -->

```csharp
public virtual InnoEditor.Interactions.EditorViewportCursor InnoEditor.Interactions.EditorViewportTool.cursor { get; }
```

Gets the cursor requested while this tool is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L222).

## `id`

<a id="api-4275d22ec042d70a"></a>
<!-- api: P:InnoEditor.Interactions.EditorViewportTool.id fa24e0130605bf5d624a1b74f8ed925d39213e0b9e03f13995d948961e8e0332 -->

```csharp
public abstract string InnoEditor.Interactions.EditorViewportTool.id { get; }
```

Gets the globally stable tool identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L217).
