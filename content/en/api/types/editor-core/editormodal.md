---
title: "EditorModal"
description: "Reference for EditorModal in Inno.Editor.Core."
uid: api.inno.editor.core.9af4611dd1558a67
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorModal`

This reference describes `EditorModal` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7800f1179f76dd4e) | Method |
| [`Draw`](#api-7dbc34246e1674aa) | Method |
| [`OnDraw`](#api-e137f94422e60641) | Method |
| [`OnPrepare`](#api-3ea49aa187ad9f1b) | Method |
| [`Prepare`](#api-5cf06b151a0ffb51) | Method |
| [`allowScrolling`](#api-df7f566cfe2a898d) | Property |
| [`blocksInteraction`](#api-f74f7d33f23907e6) | Property |
| [`canMove`](#api-3394467651cdb298) | Property |
| [`canResize`](#api-7e33c68163a29877) | Property |
| [`initialSize`](#api-8cdda07a429d4421) | Property |
| [`isVisible`](#api-93e533277a2addb1) | Property |
| [`minimumSize`](#api-a31e36fe5ced1e55) | Property |

## Type declaration

<a id="api-9af4611dd1558a67"></a>
<!-- api: T:Inno.Editor.Core.EditorModal 2a40067ac02689dfe00115ebf96bd890945c4277bf60965649d6fe8d72e5bbed -->

```csharp
public abstract class Inno.Editor.Core.EditorModal
```

Defines non-dockable modal editor content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L10).

## `#ctor`

<a id="api-7800f1179f76dd4e"></a>
<!-- api: M:Inno.Editor.Core.EditorModal.#ctor aba9c3da5a3bc755a59b7fd76d500347a3b51a192bcbb0a3dafc291b5a1ef6aa -->

```csharp
protected Inno.Editor.Core.EditorModal.EditorModal()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L10).

## `Draw`

<a id="api-7dbc34246e1674aa"></a>
<!-- api: M:Inno.Editor.Core.EditorModal.Draw(Inno.Editor.Core.EditorContext) 55d9d80a2810cdf651e6c00f82fb60850a2388e3fc88202f51725d1c301c452f -->

```csharp
public void Inno.Editor.Core.EditorModal.Draw(Inno.Editor.Core.EditorContext context)
```

Draws the modal body inside the runtime-managed centered window.

**Parameter `context`:** The shared editor context containing current project and frame state.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L60).

## `OnDraw`

<a id="api-e137f94422e60641"></a>
<!-- api: M:Inno.Editor.Core.EditorModal.OnDraw(Inno.Editor.Core.EditorContext) 4bea4448e68bf29ede57d2837a3d69564b4cab8af4cf3fe7a0c77ca4487fd8c0 -->

```csharp
protected abstract void Inno.Editor.Core.EditorModal.OnDraw(Inno.Editor.Core.EditorContext context)
```

Draws the modal body inside the runtime-managed centered window.

**Parameter `context`:** The shared editor context containing current project and frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L103).

## `OnPrepare`

<a id="api-3ea49aa187ad9f1b"></a>
<!-- api: M:Inno.Editor.Core.EditorModal.OnPrepare(Inno.Editor.Core.EditorContext,System.Numerics.Vector2) fcb3e8bf0c4c85280cad6210fe622c1f0cc7f9838e16969c78f55a2e5fe5f46c -->

```csharp
protected virtual System.Numerics.Vector2? Inno.Editor.Core.EditorModal.OnPrepare(Inno.Editor.Core.EditorContext context, System.Numerics.Vector2 availableContentSize)
```

Captures the state consumed by OnDraw and measures it without drawing or performing domain operations.
Content-sized modals must return a finite, nonnegative size. Fixed-size modals may return null.

**Parameter `context`:** The current owner-thread context.

**Parameter `availableContentSize`:** The bounded, already scaled content area.

**Returns:** The content extent required by the captured state, or null for explicit sizing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L118).

## `Prepare`

<a id="api-5cf06b151a0ffb51"></a>
<!-- api: M:Inno.Editor.Core.EditorModal.Prepare(Inno.Editor.Core.EditorContext,System.Numerics.Vector2) e649a42f5efe340b8325718dd6cf1c8cb9bd28151cfb41b8bbdff9a599ee2487 -->

```csharp
public System.Numerics.Vector2? Inno.Editor.Core.EditorModal.Prepare(Inno.Editor.Core.EditorContext context, System.Numerics.Vector2 availableContentSize)
```

Captures presentation state before submitting content. Content-sized windows prepare before opening;
explicitly sized resizable windows prepare after current input establishes their content bounds.

**Parameter `context`:** The owner-thread editor context for this frame.

**Parameter `availableContentSize`:** The bounded content area in current presentation coordinates, already scaled.

**Returns:** The required content size, or null for an explicitly sized window.

**Throws `System.ArgumentNullException`:** The context is null.

**Throws `System.ArgumentOutOfRangeException`:** The available extent is not finite and positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L86).

## `allowScrolling`

<a id="api-df7f566cfe2a898d"></a>
<!-- api: P:Inno.Editor.Core.EditorModal.allowScrolling cae6b5e54ae8bd8e7af8e9f12e0968980019bc53e26b4a329eae480288f03b6e -->

```csharp
public virtual bool Inno.Editor.Core.EditorModal.allowScrolling { get; }
```

Gets whether the modal window owns scrolling when its content overflows.
Disable this when a child region owns all scrolling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L36).

## `blocksInteraction`

<a id="api-f74f7d33f23907e6"></a>
<!-- api: P:Inno.Editor.Core.EditorModal.blocksInteraction 676c00157894cf9834967f8132f0e257a10bf89826b569e1f808fe0771f0d051 -->

```csharp
public virtual bool Inno.Editor.Core.EditorModal.blocksInteraction { get; }
```

Gets whether the modal prevents interaction with regular editor views.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L20).

## `canMove`

<a id="api-3394467651cdb298"></a>
<!-- api: P:Inno.Editor.Core.EditorModal.canMove 0b23c61ac8b8bcf57dd11cca986892ef536a38234e84f3b34432bd7aed499f09 -->

```csharp
public virtual bool Inno.Editor.Core.EditorModal.canMove { get; }
```

Gets whether the modal window can be moved inside the main viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L25).

## `canResize`

<a id="api-7e33c68163a29877"></a>
<!-- api: P:Inno.Editor.Core.EditorModal.canResize 4890b81baa0ad46c09392109aaa043d8a2553cc1830538c380e5e0aad340b76f -->

```csharp
public virtual bool Inno.Editor.Core.EditorModal.canResize { get; }
```

Gets whether the modal window can be resized by the user.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L30).

## `initialSize`

<a id="api-8cdda07a429d4421"></a>
<!-- api: P:Inno.Editor.Core.EditorModal.initialSize ca6967cd982fe5a56a07c3e71e87ce11606cf4b61929fa347f562638aa8ab3d5 -->

```csharp
public virtual System.Numerics.Vector2 Inno.Editor.Core.EditorModal.initialSize { get; }
```

Gets the initial modal size in unscaled editor units, or `System.Numerics.Vector2.Zero`
when the runtime should size the modal from its content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L42).

## `isVisible`

<a id="api-93e533277a2addb1"></a>
<!-- api: P:Inno.Editor.Core.EditorModal.isVisible a2a27bb3a4339b3745b08e8388a49400ed4d92b16b82ddf4921fdea18b25509c -->

```csharp
public abstract bool Inno.Editor.Core.EditorModal.isVisible { get; }
```

Gets whether the modal should currently be visible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L15).

## `minimumSize`

<a id="api-a31e36fe5ced1e55"></a>
<!-- api: P:Inno.Editor.Core.EditorModal.minimumSize a545e77a535b922cc39423df49c470098ae694f0f4ea5a58d8a6972594e670ad -->

```csharp
public virtual System.Numerics.Vector2 Inno.Editor.Core.EditorModal.minimumSize { get; }
```

Gets the minimum modal size in unscaled editor units, or `System.Numerics.Vector2.Zero`
when no explicit minimum is required.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModal.cs#L48).
