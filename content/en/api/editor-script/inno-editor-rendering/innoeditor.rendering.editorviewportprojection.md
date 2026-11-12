---
title: "EditorViewportProjection"
description: "Reference for EditorViewportProjection in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.7d7c336a96ead255
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportProjection`

This reference describes `EditorViewportProjection` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Orthographic`](#api-3de6e98e2d102daa) | Field |
| [`Perspective`](#api-75082385162ce2b2) | Field |

## Type declaration

<a id="api-7d7c336a96ead255"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportProjection 2a048802ce791e618dfeef24d188a1d172d0be4bb227f3c5bc8dd0dea14a3476 -->

```csharp
public enum InnoEditor.Rendering.EditorViewportProjection : int
```

Identifies the projection family represented by neutral Editor viewport navigation state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L10).

## `Orthographic`

<a id="api-3de6e98e2d102daa"></a>
<!-- api: F:InnoEditor.Rendering.EditorViewportProjection.Orthographic ec6d644be33e05ccaf68b981652e89aad9632d765139e67e82ec58fbebfaee79 -->

```csharp
InnoEditor.Rendering.EditorViewportProjection.Orthographic = 0
```

Uses a parallel projection controlled by an orthographic half-height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L15).

## `Perspective`

<a id="api-75082385162ce2b2"></a>
<!-- api: F:InnoEditor.Rendering.EditorViewportProjection.Perspective f8582919d21bda0d04d547195bdcfe4c843f6fd124d5d37a7f97a664c6f015ee -->

```csharp
InnoEditor.Rendering.EditorViewportProjection.Perspective = 1
```

Uses a perspective projection controlled by a vertical field of view.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L20).
