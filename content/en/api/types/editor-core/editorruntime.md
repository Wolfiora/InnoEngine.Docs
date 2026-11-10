---
title: "EditorRuntime"
description: "Reference for EditorRuntime in Inno.Editor.Core."
uid: api.inno.editor.core.6eb2823543f339af
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorRuntime`

This reference describes `EditorRuntime` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-17069a217a0fc06b) | Method |
| [`Dispose`](#api-cb7601e7ce0cf430) | Method |
| [`SetFrame`](#api-ba5469b8be5c949d) | Method |
| [`Start`](#api-1323e5545f4b9610) | Method |
| [`Update`](#api-13eac3cf03a2d0f6) | Method |
| [`context`](#api-7fcf4a7352e5db77) | Property |

## Type declaration

<a id="api-6eb2823543f339af"></a>
<!-- api: T:Inno.Editor.Core.EditorRuntime d5fc25ba689f013900efb48db8eefd73be025d5d77da8adae22ca83708308ce4 -->

```csharp
public abstract class Inno.Editor.Core.EditorRuntime : System.IDisposable
```

Defines the presentation-independent lifecycle of an editor runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorRuntime.cs#L8).

## `#ctor`

<a id="api-17069a217a0fc06b"></a>
<!-- api: M:Inno.Editor.Core.EditorRuntime.#ctor(Inno.Editor.Core.EditorContext) cfd706b33295f81408edd7db1f6c3a0b7ac4a4965c09ce8ecad69ff4604172dd -->

```csharp
protected Inno.Editor.Core.EditorRuntime.EditorRuntime(Inno.Editor.Core.EditorContext context)
```

Creates a runtime for the supplied passive context.

**Parameter `context`:** The shared editor context.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorRuntime.cs#L19).

## `Dispose`

<a id="api-cb7601e7ce0cf430"></a>
<!-- api: M:Inno.Editor.Core.EditorRuntime.Dispose 57a9fb05592dfca454eb8a0f765b10772517c57af651c53fbe03bece6fd0a114 -->

```csharp
public abstract void Inno.Editor.Core.EditorRuntime.Dispose()
```

Stops the runtime and releases active extensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorRuntime.cs#L57).

## `SetFrame`

<a id="api-ba5469b8be5c949d"></a>
<!-- api: M:Inno.Editor.Core.EditorRuntime.SetFrame(Inno.Editor.Core.EditorFrame) 245a5a9cd165d51d21b40bfece5141e2af91e851a8a504c1a4b399565a9412e2 -->

```csharp
protected void Inno.Editor.Core.EditorRuntime.SetFrame(Inno.Editor.Core.EditorFrame frame)
```

Advances frame-scoped data and publishes the latest immutable frame.

**Parameter `frame`:** The frame to publish.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorRuntime.cs#L48).

## `Start`

<a id="api-1323e5545f4b9610"></a>
<!-- api: M:Inno.Editor.Core.EditorRuntime.Start aaa9b79492438df08d0473d2b5237274bfc451463bc2593fb90ab8e1e6109ea8 -->

```csharp
public abstract void Inno.Editor.Core.EditorRuntime.Start()
```

Starts the runtime and activates its initial extension generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorRuntime.cs#L32).

## `Update`

<a id="api-13eac3cf03a2d0f6"></a>
<!-- api: M:Inno.Editor.Core.EditorRuntime.Update(Inno.Editor.Core.EditorFrame) ef9a3e86e3bbd5e729216dc02b3f62831d6c7f824e80ce36fada630b6d5f1d99 -->

```csharp
public abstract void Inno.Editor.Core.EditorRuntime.Update(Inno.Editor.Core.EditorFrame frame)
```

Updates the runtime for one editor frame.

**Parameter `frame`:** The immutable frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorRuntime.cs#L40).

## `context`

<a id="api-7fcf4a7352e5db77"></a>
<!-- api: P:Inno.Editor.Core.EditorRuntime.context e6b8f61982826433a1580c3e056f7d2b317193d95d93f043138c590a08ef6265 -->

```csharp
public Inno.Editor.Core.EditorContext Inno.Editor.Core.EditorRuntime.context { get; }
```

Gets the shared passive editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorRuntime.cs#L27).
