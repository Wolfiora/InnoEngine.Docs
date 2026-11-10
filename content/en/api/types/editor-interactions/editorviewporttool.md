---
title: "EditorViewportTool"
description: "Reference for EditorViewportTool in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.8f8090b5929fe9a5
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorViewportTool`

This reference describes `EditorViewportTool` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cb7e2bb9cdbd7f7c) | Method |
| [`DrawOverlay`](#api-6b4100081928eac6) | Method |
| [`OnPointerCancel`](#api-16e6dca3e97ba1fc) | Method |
| [`OnPointerDown`](#api-1efc191513bf3b95) | Method |
| [`OnPointerMove`](#api-d89802118e09cf98) | Method |
| [`OnPointerUp`](#api-312a47b9477d2e08) | Method |
| [`OnShortcut`](#api-eb699757aad5dcd4) | Method |
| [`cursor`](#api-9ae8b191808ae9e0) | Property |
| [`id`](#api-ffc120aecfba1823) | Property |

## Type declaration

<a id="api-8f8090b5929fe9a5"></a>
<!-- api: T:Inno.Editor.Interactions.EditorViewportTool df5ad6fa24394baec7e2e6356149741caee7e09334cab383f4a164b788ebb397 -->

```csharp
public abstract class Inno.Editor.Interactions.EditorViewportTool
```

Defines one presentation-independent, reloadable viewport editing tool.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L212).

## `#ctor`

<a id="api-cb7e2bb9cdbd7f7c"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportTool.#ctor 144617f9c82e89a1fb862b7d3309d1f395b13025bbffceeeacb3c144bbdbe453 -->

```csharp
protected Inno.Editor.Interactions.EditorViewportTool.EditorViewportTool()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L212).

## `DrawOverlay`

<a id="api-6b4100081928eac6"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportTool.DrawOverlay(Inno.Editor.Interactions.EditorViewportToolContext) e9db12476c03ae886ec987149abf055b04db2425dc454fc74c2cb19f3f175523 -->

```csharp
public virtual void Inno.Editor.Interactions.EditorViewportTool.DrawOverlay(Inno.Editor.Interactions.EditorViewportToolContext context)
```

Draws transient gizmos and diagnostics over the viewport.

**Parameter `context`:** Gesture and coordinate context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L316).

## `OnPointerCancel`

<a id="api-16e6dca3e97ba1fc"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportTool.OnPointerCancel(Inno.Editor.Interactions.EditorViewportToolContext,Inno.Editor.Interactions.EditorViewportPointerEvent) 4479dcc6c75be0cac33f1c46f12aeb2a80ae0cf1b3b339864261600f35373068 -->

```csharp
public virtual void Inno.Editor.Interactions.EditorViewportTool.OnPointerCancel(Inno.Editor.Interactions.EditorViewportToolContext context, Inno.Editor.Interactions.EditorViewportPointerEvent pointer)
```

Handles platform cancellation of an active gesture.

**Parameter `context`:** Gesture and coordinate context.

**Parameter `pointer`:** Immutable pointer sample.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L281).

## `OnPointerDown`

<a id="api-1efc191513bf3b95"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportTool.OnPointerDown(Inno.Editor.Interactions.EditorViewportToolContext,Inno.Editor.Interactions.EditorViewportPointerEvent) ed3b0991872567d7eb12896ac94855ce7609fe64b92a44706145a873678e1814 -->

```csharp
public virtual void Inno.Editor.Interactions.EditorViewportTool.OnPointerDown(Inno.Editor.Interactions.EditorViewportToolContext context, Inno.Editor.Interactions.EditorViewportPointerEvent pointer)
```

Handles a pointer press.

**Parameter `context`:** Gesture and coordinate context.

**Parameter `pointer`:** Immutable pointer sample.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L233).

## `OnPointerMove`

<a id="api-d89802118e09cf98"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportTool.OnPointerMove(Inno.Editor.Interactions.EditorViewportToolContext,Inno.Editor.Interactions.EditorViewportPointerEvent) 27b0f5a6edf4d2d22e50e2c85c7f9763acc87653b2751c3fa522a9f5dec4a7ff -->

```csharp
public virtual void Inno.Editor.Interactions.EditorViewportTool.OnPointerMove(Inno.Editor.Interactions.EditorViewportToolContext context, Inno.Editor.Interactions.EditorViewportPointerEvent pointer)
```

Handles pointer movement or hover.

**Parameter `context`:** Gesture and coordinate context.

**Parameter `pointer`:** Immutable pointer sample.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L249).

## `OnPointerUp`

<a id="api-312a47b9477d2e08"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportTool.OnPointerUp(Inno.Editor.Interactions.EditorViewportToolContext,Inno.Editor.Interactions.EditorViewportPointerEvent) cb5d5fe2a9c56ac66c34d786f9dfd41e718ed7593909a1583691280133012e87 -->

```csharp
public virtual void Inno.Editor.Interactions.EditorViewportTool.OnPointerUp(Inno.Editor.Interactions.EditorViewportToolContext context, Inno.Editor.Interactions.EditorViewportPointerEvent pointer)
```

Handles a pointer release.

**Parameter `context`:** Gesture and coordinate context.

**Parameter `pointer`:** Immutable pointer sample.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L265).

## `OnShortcut`

<a id="api-eb699757aad5dcd4"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportTool.OnShortcut(Inno.Editor.Interactions.EditorViewportToolContext,Inno.Editor.Interactions.EditorViewportShortcut) 397ddd817e5e31e9ab5a1563c1f5155c88e2259ca1eb03e8b824844a36aff75a -->

```csharp
public virtual bool Inno.Editor.Interactions.EditorViewportTool.OnShortcut(Inno.Editor.Interactions.EditorViewportToolContext context, Inno.Editor.Interactions.EditorViewportShortcut shortcut)
```

Handles a focused viewport shortcut before global action routing.

**Parameter `context`:** Gesture and coordinate context.

**Parameter `shortcut`:** Pressed key sample.

**Returns:** `true` when the tool consumed the key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L302).

## `cursor`

<a id="api-9ae8b191808ae9e0"></a>
<!-- api: P:Inno.Editor.Interactions.EditorViewportTool.cursor 3891d27395654582194cb41686e719dde944b55cafc72a47faf7aa2e60d066fe -->

```csharp
public virtual Inno.Editor.Interactions.EditorViewportCursor Inno.Editor.Interactions.EditorViewportTool.cursor { get; }
```

Gets the cursor requested while this tool is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L222).

## `id`

<a id="api-ffc120aecfba1823"></a>
<!-- api: P:Inno.Editor.Interactions.EditorViewportTool.id 4849a2227815a8b0cc71e99851fc555676fb0f14f1053f4cd7df38beb6572aa4 -->

```csharp
public abstract string Inno.Editor.Interactions.EditorViewportTool.id { get; }
```

Gets the globally stable tool identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L217).
