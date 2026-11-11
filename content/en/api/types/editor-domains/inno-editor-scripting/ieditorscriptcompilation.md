---
title: "IEditorScriptCompilation"
description: "Reference for IEditorScriptCompilation in Inno.Editor.Scripting."
uid: api.inno.editor.scripting.ee8f2866ab9a80d8
kind: api
owners:
  - Inno.Editor.Scripting
apiSurface: source-clr
contracts:
  - project.inno-editor-scripting
---
# `IEditorScriptCompilation`

This reference describes `IEditorScriptCompilation` in `Inno.Editor.Scripting`. Read the [shared contract](../../../projects/inno-editor-scripting.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CancelCompilation`](#api-311dc18577dbb113) | Method |
| [`RequestCompilation`](#api-d4347e54c4200dbb) | Method |
| [`currentTicket`](#api-b43f410406dc5df8) | Property |
| [`lastCompilation`](#api-fa6ff992cca36e38) | Property |
| [`progress`](#api-20d6786e5b5c3f20) | Property |
| [`requiresExclusiveProgress`](#api-1e65ee827ebdc315) | Property |
| [`state`](#api-b28fe0d2d08348e4) | Property |

## Type declaration

<a id="api-ee8f2866ab9a80d8"></a>
<!-- api: T:Inno.Editor.Scripting.IEditorScriptCompilation 4954c0d92fba082b7d26326ef71012cda046f90c2d62a186ab0e1041d4f5d682 -->

```csharp
public interface Inno.Editor.Scripting.IEditorScriptCompilation
```

Exposes the minimal script-generation readiness contract required by editor workflows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IEditorScriptCompilation.cs#L30).

## `CancelCompilation`

<a id="api-311dc18577dbb113"></a>
<!-- api: M:Inno.Editor.Scripting.IEditorScriptCompilation.CancelCompilation(System.Int64) 0de6ec63c50f96ff316b1d102047f5286db7fceb6ce63ba044c58483b2e13de7 -->

```csharp
void Inno.Editor.Scripting.IEditorScriptCompilation.CancelCompilation(long operationId)
```

Requests cancellation while retaining ownership until compilation and retirement finish.

**Parameter `operationId`:** The request observed by the presentation; stale requests have no effect.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IEditorScriptCompilation.cs#L48).

## `RequestCompilation`

<a id="api-d4347e54c4200dbb"></a>
<!-- api: M:Inno.Editor.Scripting.IEditorScriptCompilation.RequestCompilation 779431968580637699439201ee00136d7a649df39162d204757b6bb78ea4538f -->

```csharp
Inno.Editor.Scripting.IScriptCompilationTicket Inno.Editor.Scripting.IEditorScriptCompilation.RequestCompilation()
```

Queues a fresh cache-aware compilation for a build or simulation workflow.

**Returns:** A ticket bound to the exact request. Success requires activation and completed retirement verification;
a faulted host returns a failed ticket and requires restart.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IEditorScriptCompilation.cs#L56).

## `currentTicket`

<a id="api-b43f410406dc5df8"></a>
<!-- api: P:Inno.Editor.Scripting.IEditorScriptCompilation.currentTicket fc7171085e0c20e515a8808d38f9083b59f28ec28265e4e9b81436c7a37a2d5b -->

```csharp
Inno.Editor.Scripting.IScriptCompilationTicket? Inno.Editor.Scripting.IEditorScriptCompilation.currentTicket { get; }
```

Gets the most recently requested compilation ticket, or `null` when no explicit request exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IEditorScriptCompilation.cs#L60).

## `lastCompilation`

<a id="api-fa6ff992cca36e38"></a>
<!-- api: P:Inno.Editor.Scripting.IEditorScriptCompilation.lastCompilation 88ec836faafa1bb3840f16681c566511683a2372738fa2c1757bb12d2a03de24 -->

```csharp
Inno.Scripting.Compiler.ScriptCompilationResult? Inno.Editor.Scripting.IEditorScriptCompilation.lastCompilation { get; }
```

Gets the most recently completed compilation, or `null` before the first attempt completes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IEditorScriptCompilation.cs#L71).

## `progress`

<a id="api-20d6786e5b5c3f20"></a>
<!-- api: P:Inno.Editor.Scripting.IEditorScriptCompilation.progress 0f747245063c4d3ba05c1191c2176a6cef4366aef3f442025137839a11faa7fd -->

```csharp
Inno.Editor.Scripting.EditorScriptCompilationProgress Inno.Editor.Scripting.IEditorScriptCompilation.progress { get; }
```

Gets one immutable snapshot of the current reload operation and its cancellation policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IEditorScriptCompilation.cs#L40).

## `requiresExclusiveProgress`

<a id="api-1e65ee827ebdc315"></a>
<!-- api: P:Inno.Editor.Scripting.IEditorScriptCompilation.requiresExclusiveProgress 879117f557d8faf8cc2748c9a79239291bfe5c02e30d61a1c256a5c5382fc7ca -->

```csharp
bool Inno.Editor.Scripting.IEditorScriptCompilation.requiresExclusiveProgress { get; }
```

Gets whether compiler or activation work currently requires a blocking progress presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IEditorScriptCompilation.cs#L35).

## `state`

<a id="api-b28fe0d2d08348e4"></a>
<!-- api: P:Inno.Editor.Scripting.IEditorScriptCompilation.state d97c2e8c0b62b8a065673682bf40e75bf158ab2a3e6d367d56e60af7a51ad80c -->

```csharp
Inno.Editor.Scripting.EditorScriptCompilationState Inno.Editor.Scripting.IEditorScriptCompilation.state { get; }
```

Gets the current script-generation readiness state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IEditorScriptCompilation.cs#L65).
