---
title: "IScriptCompilationTicket"
description: "Reference for IScriptCompilationTicket in Inno.Editor.Scripting."
uid: api.inno.editor.scripting.4ef88a7d70746b4c
kind: api
owners:
  - Inno.Editor.Scripting
apiSurface: source-clr
contracts:
  - project.inno-editor-scripting
---
# `IScriptCompilationTicket`

This reference describes `IScriptCompilationTicket` in `Inno.Editor.Scripting`. Read the [shared contract](../../../projects/inno-editor-scripting.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`isCompleted`](#api-7b6f07239d6a5d4e) | Property |
| [`requestId`](#api-1d04ab49d4ec5331) | Property |
| [`result`](#api-2c573e64fee8ecb9) | Property |
| [`state`](#api-ed20412afaf9e932) | Property |
| [`status`](#api-6db681e389d4203f) | Property |

## Type declaration

<a id="api-4ef88a7d70746b4c"></a>
<!-- api: T:Inno.Editor.Scripting.IScriptCompilationTicket 12629f8643fa4680f7e3c235afd9a8fc31838601ace932b9069c2d4f56c61ad8 -->

```csharp
public interface Inno.Editor.Scripting.IScriptCompilationTicket
```

Exposes the immutable observer view of one exact script compilation and activation request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IScriptCompilationTicket.cs#L8).

## `isCompleted`

<a id="api-7b6f07239d6a5d4e"></a>
<!-- api: P:Inno.Editor.Scripting.IScriptCompilationTicket.isCompleted 9f3c8252c4af28400802981ebbf58e2cba61c150f0db55f07ddf982594cc25a2 -->

```csharp
bool Inno.Editor.Scripting.IScriptCompilationTicket.isCompleted { get; }
```

Gets whether no further state transition is valid for this request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IScriptCompilationTicket.cs#L33).

## `requestId`

<a id="api-1d04ab49d4ec5331"></a>
<!-- api: P:Inno.Editor.Scripting.IScriptCompilationTicket.requestId 509b9443e780446ee84d4f9a1e62ef62f6c9735d9d9b9dc6d8814679406ce83e -->

```csharp
long Inno.Editor.Scripting.IScriptCompilationTicket.requestId { get; }
```

Gets the producer-local monotonic identifier of this request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IScriptCompilationTicket.cs#L13).

## `result`

<a id="api-2c573e64fee8ecb9"></a>
<!-- api: P:Inno.Editor.Scripting.IScriptCompilationTicket.result d142d34b06e318e2f5e3605737bbdceb8f145045af985521fcf1bb9511d67e5c -->

```csharp
Inno.Scripting.Compiler.ScriptCompilationResult? Inno.Editor.Scripting.IScriptCompilationTicket.result { get; }
```

Gets the completed compiler result, or `null` before the compiler finishes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IScriptCompilationTicket.cs#L28).

## `state`

<a id="api-ed20412afaf9e932"></a>
<!-- api: P:Inno.Editor.Scripting.IScriptCompilationTicket.state b9e39cd7ac7c9e5764f69bcb31d94f96d8c210cd5612e673a5e857917501fd24 -->

```csharp
Inno.Editor.Scripting.ScriptCompilationTicketState Inno.Editor.Scripting.IScriptCompilationTicket.state { get; }
```

Gets the current lifecycle state of this exact request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IScriptCompilationTicket.cs#L18).

## `status`

<a id="api-6db681e389d4203f"></a>
<!-- api: P:Inno.Editor.Scripting.IScriptCompilationTicket.status ff40ce29ece35ade5e9d116da37c53bda967fea347dd1576e60304dcf0120b78 -->

```csharp
string Inno.Editor.Scripting.IScriptCompilationTicket.status { get; }
```

Gets a human-readable description of the current or terminal state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/IScriptCompilationTicket.cs#L23).
