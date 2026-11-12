---
title: "EditorRuntime"
description: "Reference for EditorRuntime in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.c90273a30f7ca7a0
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `EditorRuntime`

This reference describes `EditorRuntime` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8757b3f86f0464a1) | Method |
| [`Dispose`](#api-cd35d2cb79f29257) | Method |
| [`SetFrame`](#api-36f72571ef610880) | Method |
| [`Start`](#api-45cec5075ef89461) | Method |
| [`Update`](#api-72368565af7c3092) | Method |
| [`context`](#api-c44b24cd62a717bd) | Property |

## Type declaration

<a id="api-c90273a30f7ca7a0"></a>
<!-- api: T:InnoEditor.Core.EditorRuntime 919128145e6e03e83cdb892974e1463e3afd7bc68d063a59e0ba3fc03e4f4177 -->

```csharp
public abstract class InnoEditor.Core.EditorRuntime : System.IDisposable
```

Defines the presentation-independent lifecycle of an editor runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorRuntime.cs#L8).

## `#ctor`

<a id="api-8757b3f86f0464a1"></a>
<!-- api: M:InnoEditor.Core.EditorRuntime.#ctor(InnoEditor.Core.EditorContext) 6727f6b54b4ac144fc08830396debd4174a641dc7392a2a2a1c9df25d6974377 -->

```csharp
protected InnoEditor.Core.EditorRuntime.EditorRuntime(InnoEditor.Core.EditorContext context)
```

Creates a runtime for the supplied passive context.

**Parameter `context`:** The shared editor context.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorRuntime.cs#L19).

## `Dispose`

<a id="api-cd35d2cb79f29257"></a>
<!-- api: M:InnoEditor.Core.EditorRuntime.Dispose d560ba668af410398713be07b7a06fa99727b694d2f979c260162be91c7df6f7 -->

```csharp
public abstract void InnoEditor.Core.EditorRuntime.Dispose()
```

Stops the runtime and releases active extensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorRuntime.cs#L57).

## `SetFrame`

<a id="api-36f72571ef610880"></a>
<!-- api: M:InnoEditor.Core.EditorRuntime.SetFrame(InnoEditor.Core.EditorFrame) 0697d58cb823e83ce81197bfecd1484ef5b2d21e3b7871e4a02a56e264d3799e -->

```csharp
protected void InnoEditor.Core.EditorRuntime.SetFrame(InnoEditor.Core.EditorFrame frame)
```

Advances frame-scoped data and publishes the latest immutable frame.

**Parameter `frame`:** The frame to publish.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorRuntime.cs#L48).

## `Start`

<a id="api-45cec5075ef89461"></a>
<!-- api: M:InnoEditor.Core.EditorRuntime.Start 49766f432a6970f402b278bca63f32f197116b584695d35e9c037b1c556cb100 -->

```csharp
public abstract void InnoEditor.Core.EditorRuntime.Start()
```

Starts the runtime and activates its initial extension generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorRuntime.cs#L32).

## `Update`

<a id="api-72368565af7c3092"></a>
<!-- api: M:InnoEditor.Core.EditorRuntime.Update(InnoEditor.Core.EditorFrame) 75221b1d434cf3052034257c177affb48f1a726d5a4c041a85f07c4648295e3e -->

```csharp
public abstract void InnoEditor.Core.EditorRuntime.Update(InnoEditor.Core.EditorFrame frame)
```

Updates the runtime for one editor frame.

**Parameter `frame`:** The immutable frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorRuntime.cs#L40).

## `context`

<a id="api-c44b24cd62a717bd"></a>
<!-- api: P:InnoEditor.Core.EditorRuntime.context 5ac39fca688872a2763eb22cc0ef033e59307f0897ad22cf5e02a4cc5b858df8 -->

```csharp
public InnoEditor.Core.EditorContext InnoEditor.Core.EditorRuntime.context { get; }
```

Gets the shared passive editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Runtime/EditorRuntime.cs#L27).
