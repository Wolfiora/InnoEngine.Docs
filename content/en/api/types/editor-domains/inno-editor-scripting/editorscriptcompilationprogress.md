---
title: "EditorScriptCompilationProgress"
description: "Reference for EditorScriptCompilationProgress in Inno.Editor.Scripting."
uid: api.inno.editor.scripting.1f76146da52f7886
kind: api
owners:
  - Inno.Editor.Scripting
apiSurface: source-clr
contracts:
  - project.inno-editor-scripting
---
# `EditorScriptCompilationProgress`

This reference describes `EditorScriptCompilationProgress` in `Inno.Editor.Scripting`. Read the [shared contract](../../../projects/inno-editor-scripting.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Scripting.EditorScriptCompilationProgress>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-863898b7a29b249e) | Method |
| [`Deconstruct`](#api-825f9061e3670c49) | Method |
| [`Equals`](#api-de4c8e9f36e8938d) | Method |
| [`Equals`](#api-3d4554c340d62e8c) | Method |
| [`GetHashCode`](#api-b9420b68c558aa1a) | Method |
| [`op_Equality`](#api-4aa85dfbadc6ec48) | Method |
| [`op_Inequality`](#api-9e364de7736f61f1) | Method |
| [`ToString`](#api-c110e0683d5ae78d) | Method |
| [`canCancel`](#api-006a7fe426c6f626) | Property |
| [`cancellationRequested`](#api-2a4cd05671e08d74) | Property |
| [`fraction`](#api-11e91597985d58a4) | Property |
| [`operationId`](#api-6a3355a8766fa0e3) | Property |
| [`status`](#api-d467025e24025e5a) | Property |

## Type declaration

<a id="api-1f76146da52f7886"></a>
<!-- api: T:Inno.Editor.Scripting.EditorScriptCompilationProgress 207409cf532d968d12e20e002214b759873a8be1afeb2e4b9258c0c7de2f6efd -->

```csharp
public readonly record struct Inno.Editor.Scripting.EditorScriptCompilationProgress : System.IEquatable<Inno.Editor.Scripting.EditorScriptCompilationProgress>
```

Captures the progress and cancellation policy of one editor script request.

**Parameter `operationId`:** The request identity within the owning script host.

**Parameter `fraction`:** The completed fraction of the complete reload workflow.

**Parameter `status`:** The current stage or failure diagnostic.

**Parameter `cancellationRequested`:** Whether cancellation is draining owned work.

**Parameter `canCancel`:** Whether this exact operation currently admits cancellation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/EditorScriptCompilationProgress.cs#L21).

## `#ctor`

<a id="api-863898b7a29b249e"></a>
<!-- api: M:Inno.Editor.Scripting.EditorScriptCompilationProgress.#ctor(System.Int64,System.Single,System.String,System.Boolean,System.Boolean) 58bc89b3fb3500a5e2141727e158eba8e708037ffb2adc5610771030ce006232 -->

```csharp
public Inno.Editor.Scripting.EditorScriptCompilationProgress.EditorScriptCompilationProgress(long operationId, float fraction, string status, bool cancellationRequested, bool canCancel = false)
```

Captures the progress and cancellation policy of one editor script request.

**Parameter `operationId`:** The request identity within the owning script host.

**Parameter `fraction`:** The completed fraction of the complete reload workflow.

**Parameter `status`:** The current stage or failure diagnostic.

**Parameter `cancellationRequested`:** Whether cancellation is draining owned work.

**Parameter `canCancel`:** Whether this exact operation currently admits cancellation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/EditorScriptCompilationProgress.cs#L21).

## `Deconstruct`

<a id="api-825f9061e3670c49"></a>
<!-- api: M:Inno.Editor.Scripting.EditorScriptCompilationProgress.Deconstruct(System.Int64@,System.Single@,System.String@,System.Boolean@,System.Boolean@) cbd60334b2f7502dbcd69015f63b6e52de89e8a16711df2da239747a19681d0e -->

```csharp
public void Inno.Editor.Scripting.EditorScriptCompilationProgress.Deconstruct(out long operationId, out float fraction, out string status, out bool cancellationRequested, out bool canCancel)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/EditorScriptCompilationProgress.cs#L21).

## `Equals`

<a id="api-de4c8e9f36e8938d"></a>
<!-- api: M:Inno.Editor.Scripting.EditorScriptCompilationProgress.Equals(Inno.Editor.Scripting.EditorScriptCompilationProgress) 1b303be5e3fb7f5c766e95217af76d9779b168f429fa2ff5637ce3c0e349af76 -->

```csharp
public bool Inno.Editor.Scripting.EditorScriptCompilationProgress.Equals(Inno.Editor.Scripting.EditorScriptCompilationProgress other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/EditorScriptCompilationProgress.cs#L21).

## `Equals`

<a id="api-3d4554c340d62e8c"></a>
<!-- api: M:Inno.Editor.Scripting.EditorScriptCompilationProgress.Equals(System.Object) 828afa689654e2c8b6f5da330d6e27532bf4e38385ef38b0f3a799e1c0d12749 -->

```csharp
public override bool Inno.Editor.Scripting.EditorScriptCompilationProgress.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/EditorScriptCompilationProgress.cs#L21).

## `GetHashCode`

<a id="api-b9420b68c558aa1a"></a>
<!-- api: M:Inno.Editor.Scripting.EditorScriptCompilationProgress.GetHashCode d89bf202677ec7b51fe822550d275547e3592a7a9858d4ce42c75ac9e26360e7 -->

```csharp
public override int Inno.Editor.Scripting.EditorScriptCompilationProgress.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/EditorScriptCompilationProgress.cs#L21).

## `op_Equality`

<a id="api-4aa85dfbadc6ec48"></a>
<!-- api: M:Inno.Editor.Scripting.EditorScriptCompilationProgress.op_Equality(Inno.Editor.Scripting.EditorScriptCompilationProgress,Inno.Editor.Scripting.EditorScriptCompilationProgress) 5793d77510b372c62e2394459b08f3bbca325dfdacf28522763e19ce7f538b84 -->

```csharp
public static bool Inno.Editor.Scripting.EditorScriptCompilationProgress.operator ==(Inno.Editor.Scripting.EditorScriptCompilationProgress left, Inno.Editor.Scripting.EditorScriptCompilationProgress right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/EditorScriptCompilationProgress.cs#L21).

## `op_Inequality`

<a id="api-9e364de7736f61f1"></a>
<!-- api: M:Inno.Editor.Scripting.EditorScriptCompilationProgress.op_Inequality(Inno.Editor.Scripting.EditorScriptCompilationProgress,Inno.Editor.Scripting.EditorScriptCompilationProgress) 3db0703c38315e3f63ab52adbe66646ce65df1c9784abf06c58ed2356ce0198d -->

```csharp
public static bool Inno.Editor.Scripting.EditorScriptCompilationProgress.operator !=(Inno.Editor.Scripting.EditorScriptCompilationProgress left, Inno.Editor.Scripting.EditorScriptCompilationProgress right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/EditorScriptCompilationProgress.cs#L21).

## `ToString`

<a id="api-c110e0683d5ae78d"></a>
<!-- api: M:Inno.Editor.Scripting.EditorScriptCompilationProgress.ToString d9419feb04704d80b386af61125c885db5bd9a71b188a5ced1eb03771b8b1437 -->

```csharp
public override string Inno.Editor.Scripting.EditorScriptCompilationProgress.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/EditorScriptCompilationProgress.cs#L21).

## `canCancel`

<a id="api-006a7fe426c6f626"></a>
<!-- api: P:Inno.Editor.Scripting.EditorScriptCompilationProgress.canCancel a49df3fc90b6a10c38ddf15ca106ded9f9354e350214e204a99ce07a308174dc -->

```csharp
public bool Inno.Editor.Scripting.EditorScriptCompilationProgress.canCancel { get; init; }
```

Whether this exact operation currently admits cancellation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/EditorScriptCompilationProgress.cs#L26).

## `cancellationRequested`

<a id="api-2a4cd05671e08d74"></a>
<!-- api: P:Inno.Editor.Scripting.EditorScriptCompilationProgress.cancellationRequested 4debfb10df2fde004afad25d984b097a820eb8d963ac76a90904a579184e6b14 -->

```csharp
public bool Inno.Editor.Scripting.EditorScriptCompilationProgress.cancellationRequested { get; init; }
```

Whether cancellation is draining owned work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/EditorScriptCompilationProgress.cs#L25).

## `fraction`

<a id="api-11e91597985d58a4"></a>
<!-- api: P:Inno.Editor.Scripting.EditorScriptCompilationProgress.fraction 89efd3e81258a45b6495e7001c10dcf437d554c33ad3d22297717aada7b3a8d5 -->

```csharp
public float Inno.Editor.Scripting.EditorScriptCompilationProgress.fraction { get; init; }
```

The completed fraction of the complete reload workflow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/EditorScriptCompilationProgress.cs#L23).

## `operationId`

<a id="api-6a3355a8766fa0e3"></a>
<!-- api: P:Inno.Editor.Scripting.EditorScriptCompilationProgress.operationId 0cbbfd5892013426f9f9df97bcb15cb7ab39bfda643c4bdd409700332aa39ae2 -->

```csharp
public long Inno.Editor.Scripting.EditorScriptCompilationProgress.operationId { get; init; }
```

The request identity within the owning script host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/EditorScriptCompilationProgress.cs#L22).

## `status`

<a id="api-d467025e24025e5a"></a>
<!-- api: P:Inno.Editor.Scripting.EditorScriptCompilationProgress.status 382951f12aa9daf53a02a59fa57c70da68c18a8e3c01eb354b101dc15dd1f4c6 -->

```csharp
public string Inno.Editor.Scripting.EditorScriptCompilationProgress.status { get; init; }
```

The current stage or failure diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Runtime/EditorScriptCompilationProgress.cs#L24).
