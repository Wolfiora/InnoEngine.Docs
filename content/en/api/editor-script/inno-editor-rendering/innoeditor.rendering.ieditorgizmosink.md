---
title: "IEditorGizmoSink"
description: "Reference for IEditorGizmoSink in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.a0bb7d7cb5e7f6d7
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `IEditorGizmoSink`

This reference describes `IEditorGizmoSink` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`Icon`](#api-52a7eb768489e190) | Method |
| [`Line`](#api-ae3faf549c760f9f) | Method |

## Type declaration

<a id="api-a0bb7d7cb5e7f6d7"></a>
<!-- api: T:InnoEditor.Rendering.IEditorGizmoSink 25016d7d49548d619f6db27539cdc0be149bff3b53724fcf713d7b99555e1fac -->

```csharp
public interface InnoEditor.Rendering.IEditorGizmoSink
```

Receives transient world-space gizmo geometry from independent Editor extensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L62).

## `Icon`

<a id="api-52a7eb768489e190"></a>
<!-- api: M:InnoEditor.Rendering.IEditorGizmoSink.Icon(InnoEngine.Core.Identity,InnoEngine.Mathematics.Vector3,System.String) a194dadc690692df8f6322bbf95a2940f03fe954eac9bd02a07cf381149e276c -->

```csharp
void InnoEditor.Rendering.IEditorGizmoSink.Icon(InnoEngine.Core.Identity owner, InnoEngine.Mathematics.Vector3 position, string iconId)
```

Adds a visible, selectable icon at an object's world position.

**Parameter `owner`:** The scene object selected when the icon is clicked.

**Parameter `position`:** The icon position in world space.

**Parameter `iconId`:** A stable semantic icon ID. Unknown IDs use the generic scene icon.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L76).

## `Line`

<a id="api-ae3faf549c760f9f"></a>
<!-- api: M:InnoEditor.Rendering.IEditorGizmoSink.Line(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3) 25d572bfc67e4a9095cf922c18684bb2deb5f370a258b086e3534505506a17dd -->

```csharp
void InnoEditor.Rendering.IEditorGizmoSink.Line(InnoEngine.Mathematics.Vector3 start, InnoEngine.Mathematics.Vector3 end)
```

Adds a non-interactive world-space line, normally for selected bounds.

**Parameter `start`:** The first world-space endpoint.

**Parameter `end`:** The second world-space endpoint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L91).
