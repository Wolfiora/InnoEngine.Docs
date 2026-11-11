---
title: "IEditorShaderArtifactValidator"
description: "Reference for IEditorShaderArtifactValidator in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.ab397d6d58bc9ca0
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `IEditorShaderArtifactValidator`

This reference describes `IEditorShaderArtifactValidator` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Release`](#api-e1c4a898d5b8420c) | Method |
| [`Request`](#api-0cf08c5c621f3141) | Method |
| [`capabilities`](#api-3c27b614de445616) | Property |

## Type declaration

<a id="api-ab397d6d58bc9ca0"></a>
<!-- api: T:Inno.Editor.Rendering.IEditorShaderArtifactValidator e527886b80bfdc47abb7870c509168414689148255ff1b57c5ebbf135715add7 -->

```csharp
public interface Inno.Editor.Rendering.IEditorShaderArtifactValidator
```

Queues immutable shader candidates for validation at the active device's next frame safety point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderArtifactValidation.cs#L25).

## `Release`

<a id="api-e1c4a898d5b8420c"></a>
<!-- api: M:Inno.Editor.Rendering.IEditorShaderArtifactValidator.Release(System.Guid) 934f6f3315e3842c4f1ff9da6a4797e6d8cf536efc4601f0304a8f3d82ef6532 -->

```csharp
void Inno.Editor.Rendering.IEditorShaderArtifactValidator.Release(System.Guid documentId)
```

Forgets pending and completed validation state owned by one document.

**Parameter `documentId`:** Closing or invalidated document identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderArtifactValidation.cs#L59).

## `Request`

<a id="api-0cf08c5c621f3141"></a>
<!-- api: M:Inno.Editor.Rendering.IEditorShaderArtifactValidator.Request(System.Guid,System.UInt64,Inno.Rendering.Assets.RenderShaderArtifact) 768324ff1257d7dde7cc78d85a93d83041051ec48aba3e8a3761c4d73e69cfc0 -->

```csharp
Inno.Editor.Rendering.EditorShaderArtifactValidationSnapshot Inno.Editor.Rendering.IEditorShaderArtifactValidator.Request(System.Guid documentId, ulong revision, Inno.Rendering.Assets.RenderShaderArtifact artifact)
```

Requests or reads validation for an exact document revision and immutable artifact.

**Parameter `documentId`:** Stable Editor document identity.

**Parameter `revision`:** Exact document revision that produced the artifact.

**Parameter `artifact`:** Complete immutable candidate compiled for the active device.

**Returns:** Current detached validation state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderArtifactValidation.cs#L47).

## `capabilities`

<a id="api-3c27b614de445616"></a>
<!-- api: P:Inno.Editor.Rendering.IEditorShaderArtifactValidator.capabilities 28d7a2b5cecfec49aba5ee04f107f622e6008936103d2919a73e59667eebb752 -->

```csharp
Inno.Rendering.GraphicsCapabilities Inno.Editor.Rendering.IEditorShaderArtifactValidator.capabilities { get; }
```

Gets the capability snapshot used to compile candidates for this validator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Compilation/EditorShaderArtifactValidation.cs#L30).
