---
title: "EditorViewportPointerContext"
description: "Reference for EditorViewportPointerContext in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.385a9990b34a3e25
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportPointerContext`

This reference describes `EditorViewportPointerContext` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`button`](#api-6f1170cf3cdec14b) | Property |
| [`viewport`](#api-91e3c8d3dba0f89d) | Property |
| [`x`](#api-fd1be7a1b8850319) | Property |
| [`y`](#api-284f184cdc18530f) | Property |

## Type declaration

<a id="api-385a9990b34a3e25"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportPointerContext 1e0d41453a3fd3c9719a55472cec7fac60b023f844d55d9d983d0374ebbdebcc -->

```csharp
public sealed class Inno.Editor.Rendering.EditorViewportPointerContext
```

Supplies normalized pointer interaction over one rendered viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L382).

## `button`

<a id="api-6f1170cf3cdec14b"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportPointerContext.button 0f109c4001c919b7072084717e7ef8ace6e9fba1d957d7b61796dbadf3dfb3c9 -->

```csharp
public int Inno.Editor.Rendering.EditorViewportPointerContext.button { get; }
```

Gets the platform-independent pointer button index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L414).

## `viewport`

<a id="api-91e3c8d3dba0f89d"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportPointerContext.viewport 4c06ec64c9a3b845a4dea46cb441e974cad180d1ef275e0711f4b647c89e7175 -->

```csharp
public Inno.Editor.Rendering.EditorViewportContext Inno.Editor.Rendering.EditorViewportPointerContext.viewport { get; }
```

Gets the owning frame-only viewport context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L399).

## `x`

<a id="api-fd1be7a1b8850319"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportPointerContext.x c44f332ec3dc46b8de5b80e03bc0c248f782a29deaa085499b371407f0eb8696 -->

```csharp
public float Inno.Editor.Rendering.EditorViewportPointerContext.x { get; }
```

Gets normalized horizontal pointer position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L404).

## `y`

<a id="api-284f184cdc18530f"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportPointerContext.y 2710f7812bc601709a0cc6f1a5599c05a2121f50e65d436e1734d88c7718ae74 -->

```csharp
public float Inno.Editor.Rendering.EditorViewportPointerContext.y { get; }
```

Gets normalized vertical pointer position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L409).
