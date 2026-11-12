---
title: "EditorViewportPointerContext"
description: "Reference for EditorViewportPointerContext in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.ffbe6429972c6662
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportPointerContext`

This reference describes `EditorViewportPointerContext` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e637d37ff923002e) | Method |
| [`button`](#api-eb706c26f0942f48) | Property |
| [`viewport`](#api-bd1345acb22163a4) | Property |
| [`x`](#api-dbb938be4954bae4) | Property |
| [`y`](#api-73d05c084fe01750) | Property |

## Type declaration

<a id="api-ffbe6429972c6662"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportPointerContext 1fbc2c21988fd348749eee4e33b6d2bdc37c7f20ed9d842bfab2337b93a33874 -->

```csharp
public sealed class InnoEditor.Rendering.EditorViewportPointerContext
```

Supplies normalized pointer interaction over one rendered viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L382).

## `#ctor`

<a id="api-e637d37ff923002e"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportPointerContext.#ctor e311686f57b9af9c1832e630f1ae128fa5fe7196a7fa11d3ee4302f8e54e9834 -->

```csharp
public InnoEditor.Rendering.EditorViewportPointerContext.EditorViewportPointerContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L382).

## `button`

<a id="api-eb706c26f0942f48"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportPointerContext.button 41e655c87e6dc4bdf462a5e2b6d26a5f8fcaf3cbd426ea673d237f1e5982eaf7 -->

```csharp
public int InnoEditor.Rendering.EditorViewportPointerContext.button { get; }
```

Gets the platform-independent pointer button index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L414).

## `viewport`

<a id="api-bd1345acb22163a4"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportPointerContext.viewport 0c4932e60e1d6c46bfcc97e9c9fd0684fe30e2837df006d533baaf468b3bd20f -->

```csharp
public InnoEditor.Rendering.EditorViewportContext InnoEditor.Rendering.EditorViewportPointerContext.viewport { get; }
```

Gets the owning frame-only viewport context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L399).

## `x`

<a id="api-dbb938be4954bae4"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportPointerContext.x 7cbb5c0a74675dcd60d9f1df08e5289a79da9a354abf5bcf889145d5ae5b4f44 -->

```csharp
public float InnoEditor.Rendering.EditorViewportPointerContext.x { get; }
```

Gets normalized horizontal pointer position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L404).

## `y`

<a id="api-73d05c084fe01750"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportPointerContext.y 8dcb7fa08446dad238c4b9466ebd285040959c01a1be908414a9381389863b70 -->

```csharp
public float InnoEditor.Rendering.EditorViewportPointerContext.y { get; }
```

Gets normalized vertical pointer position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L409).
