---
title: "EditorModal"
description: "Reference for EditorModal in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.1cc2162754ffacc1
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `EditorModal`

This reference describes `EditorModal` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2b72727802c78fcb) | Method |
| [`Draw`](#api-f5429f15523464dc) | Method |
| [`OnDraw`](#api-a755c036f61769c2) | Method |
| [`OnPrepare`](#api-a342f906125cde60) | Method |
| [`Prepare`](#api-8ebcdb2b56bbebbf) | Method |
| [`allowScrolling`](#api-fdb3201006f2fc81) | Property |
| [`blocksInteraction`](#api-e86346aef763194d) | Property |
| [`canMove`](#api-f7f94ae3352aee60) | Property |
| [`canResize`](#api-92d8ea81c732c760) | Property |
| [`initialSize`](#api-567cef9cde9ae912) | Property |
| [`isVisible`](#api-505edc20190a4674) | Property |
| [`minimumSize`](#api-fb66cd234f162afd) | Property |

## Type declaration

<a id="api-1cc2162754ffacc1"></a>
<!-- api: T:InnoEditor.Core.EditorModal af4b834d2cef09f68e73b2ae15bcaf29caa9296020a95a71eb3296e7c94243e9 -->

```csharp
public abstract class InnoEditor.Core.EditorModal
```

Defines non-dockable modal editor content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L10).

## `#ctor`

<a id="api-2b72727802c78fcb"></a>
<!-- api: M:InnoEditor.Core.EditorModal.#ctor 1fb1ee6e4ab7caf51bd35ae2bed0a5b054df8d4a93246a4b36fda90b76b9e680 -->

```csharp
protected InnoEditor.Core.EditorModal.EditorModal()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L10).

## `Draw`

<a id="api-f5429f15523464dc"></a>
<!-- api: M:InnoEditor.Core.EditorModal.Draw(InnoEditor.Core.EditorContext) 4176114f2d0dd2319fd7a81f053edf97ac02e66c8cd278332af752f7a701d0f8 -->

```csharp
public void InnoEditor.Core.EditorModal.Draw(InnoEditor.Core.EditorContext context)
```

Draws the modal body inside the runtime-managed centered window.

**Parameter `context`:** The shared editor context containing current project and frame state.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L60).

## `OnDraw`

<a id="api-a755c036f61769c2"></a>
<!-- api: M:InnoEditor.Core.EditorModal.OnDraw(InnoEditor.Core.EditorContext) 43c8fea62ac22b157b3d754c5678af86e0e7a8652d464f2dd0f8f9b4f3598f9c -->

```csharp
protected abstract void InnoEditor.Core.EditorModal.OnDraw(InnoEditor.Core.EditorContext context)
```

Draws the modal body inside the runtime-managed centered window.

**Parameter `context`:** The shared editor context containing current project and frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L103).

## `OnPrepare`

<a id="api-a342f906125cde60"></a>
<!-- api: M:InnoEditor.Core.EditorModal.OnPrepare(InnoEditor.Core.EditorContext,System.Numerics.Vector2) 4425d16d896f8b6bd07c02bbbfb900fd8c86a906a081b38dddae62ae97e5cd0d -->

```csharp
protected virtual System.Numerics.Vector2? InnoEditor.Core.EditorModal.OnPrepare(InnoEditor.Core.EditorContext context, System.Numerics.Vector2 availableContentSize)
```

Captures the state consumed by OnDraw and measures it without drawing or performing domain operations.
Content-sized modals must return a finite, nonnegative size. Fixed-size modals may return null.

**Parameter `context`:** The current owner-thread context.

**Parameter `availableContentSize`:** The bounded, already scaled content area.

**Returns:** The content extent required by the captured state, or null for explicit sizing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L118).

## `Prepare`

<a id="api-8ebcdb2b56bbebbf"></a>
<!-- api: M:InnoEditor.Core.EditorModal.Prepare(InnoEditor.Core.EditorContext,System.Numerics.Vector2) 4bfa07928221880c63712b797d2726b79a4e9ec9bc7b1fa8f1eee7a4c8ed33ee -->

```csharp
public System.Numerics.Vector2? InnoEditor.Core.EditorModal.Prepare(InnoEditor.Core.EditorContext context, System.Numerics.Vector2 availableContentSize)
```

Captures presentation state before submitting content. Content-sized windows prepare before opening;
explicitly sized resizable windows prepare after current input establishes their content bounds.

**Parameter `context`:** The owner-thread editor context for this frame.

**Parameter `availableContentSize`:** The bounded content area in current presentation coordinates, already scaled.

**Returns:** The required content size, or null for an explicitly sized window.

**Throws `System.ArgumentNullException`:** The context is null.

**Throws `System.ArgumentOutOfRangeException`:** The available extent is not finite and positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L86).

## `allowScrolling`

<a id="api-fdb3201006f2fc81"></a>
<!-- api: P:InnoEditor.Core.EditorModal.allowScrolling 692abd97304ca08025ee0796ca50e72e25af6d1d5d8e8480c505c1b0168314d6 -->

```csharp
public virtual bool InnoEditor.Core.EditorModal.allowScrolling { get; }
```

Gets whether the modal window owns scrolling when its content overflows.
Disable this when a child region owns all scrolling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L36).

## `blocksInteraction`

<a id="api-e86346aef763194d"></a>
<!-- api: P:InnoEditor.Core.EditorModal.blocksInteraction c603ed749b0582522e0bf325f748ba52179350f26e3d7059bd9ec0bcb472527b -->

```csharp
public virtual bool InnoEditor.Core.EditorModal.blocksInteraction { get; }
```

Gets whether the modal prevents interaction with regular editor views.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L20).

## `canMove`

<a id="api-f7f94ae3352aee60"></a>
<!-- api: P:InnoEditor.Core.EditorModal.canMove 313b20041ce8b42040ef781672f5e87ee47420dca4a87e5da69aca360835bf22 -->

```csharp
public virtual bool InnoEditor.Core.EditorModal.canMove { get; }
```

Gets whether the modal window can be moved inside the main viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L25).

## `canResize`

<a id="api-92d8ea81c732c760"></a>
<!-- api: P:InnoEditor.Core.EditorModal.canResize 9b64433327dadfa84b6f472d5f2b539a91a9e7be701d5c9fcbaa622f4f9f93c3 -->

```csharp
public virtual bool InnoEditor.Core.EditorModal.canResize { get; }
```

Gets whether the modal window can be resized by the user.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L30).

## `initialSize`

<a id="api-567cef9cde9ae912"></a>
<!-- api: P:InnoEditor.Core.EditorModal.initialSize 88ecb779c8f094a48d6bc0c9670de8673dc61184663c0c736b2e815d20d8bc2f -->

```csharp
public virtual System.Numerics.Vector2 InnoEditor.Core.EditorModal.initialSize { get; }
```

Gets the initial modal size in unscaled editor units, or `System.Numerics.Vector2.Zero`
when the runtime should size the modal from its content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L42).

## `isVisible`

<a id="api-505edc20190a4674"></a>
<!-- api: P:InnoEditor.Core.EditorModal.isVisible af606f8f913dd350e73a3f16c391c0c8b203849159e04f7992b04428788a61a7 -->

```csharp
public abstract bool InnoEditor.Core.EditorModal.isVisible { get; }
```

Gets whether the modal should currently be visible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L15).

## `minimumSize`

<a id="api-fb66cd234f162afd"></a>
<!-- api: P:InnoEditor.Core.EditorModal.minimumSize 8b7546e18a3640b943f44fdc9aaf04b83ffad7091d02e70e1226c4179430af7c -->

```csharp
public virtual System.Numerics.Vector2 InnoEditor.Core.EditorModal.minimumSize { get; }
```

Gets the minimum modal size in unscaled editor units, or `System.Numerics.Vector2.Zero`
when no explicit minimum is required.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L48).
