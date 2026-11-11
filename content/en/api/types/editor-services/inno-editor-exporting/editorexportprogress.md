---
title: "EditorExportProgress"
description: "Reference for EditorExportProgress in Inno.Editor.Exporting."
uid: api.inno.editor.exporting.4954455ade0e3688
kind: api
owners:
  - Inno.Editor.Exporting
apiSurface: source-clr
contracts:
  - project.inno-editor-exporting
---
# `EditorExportProgress`

This reference describes `EditorExportProgress` in `Inno.Editor.Exporting`. Read the [shared contract](../../../projects/inno-editor-exporting.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Exporting.EditorExportProgress>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0bafb4fdc925d1cc) | Method |
| [`Deconstruct`](#api-083c96c04ef1f0ef) | Method |
| [`Equals`](#api-8efe146209d2bdf3) | Method |
| [`Equals`](#api-3ff386ce1ef57bb0) | Method |
| [`GetHashCode`](#api-8c48bf2514b85d4d) | Method |
| [`op_Equality`](#api-37fe78d9d5f8127f) | Method |
| [`op_Inequality`](#api-2b427757a2936225) | Method |
| [`ToString`](#api-91ad9c538af32c87) | Method |
| [`cancellationRequested`](#api-eb88da656778eb54) | Property |
| [`error`](#api-371250d1990e93fb) | Property |
| [`fraction`](#api-5808a87d300bc1ca) | Property |
| [`isBusy`](#api-82502e8cf30add75) | Property |
| [`operationId`](#api-f58e5d975563632e) | Property |
| [`status`](#api-5affe2cc35449b2d) | Property |

## Type declaration

<a id="api-4954455ade0e3688"></a>
<!-- api: T:Inno.Editor.Exporting.EditorExportProgress 8d9948fdc8d9e62b4e14307672422c8a9e3d78e932c85e321cca383da006f0ef -->

```csharp
public readonly record struct Inno.Editor.Exporting.EditorExportProgress : System.IEquatable<Inno.Editor.Exporting.EditorExportProgress>
```

Contains one owner-thread export presentation snapshot.

**Parameter `operationId`:** The export identity within this service.

**Parameter `fraction`:** The last measured completion fraction, or null while the active phase has no measured total.

**Parameter `status`:** The actual stage or outcome message.

**Parameter `error`:** The current failure diagnostic, or empty.

**Parameter `isBusy`:** Whether work still owns resources.

**Parameter `cancellationRequested`:** Whether cancellation is draining work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportProgress.cs#L24).

## `#ctor`

<a id="api-0bafb4fdc925d1cc"></a>
<!-- api: M:Inno.Editor.Exporting.EditorExportProgress.#ctor(System.Int64,System.Nullable{System.Single},System.String,System.String,System.Boolean,System.Boolean) b7420f37befadc70aebdb91990dbb46fbbd83518c26050eec43e68694624d47a -->

```csharp
public Inno.Editor.Exporting.EditorExportProgress.EditorExportProgress(long operationId, float? fraction, string status, string error, bool isBusy, bool cancellationRequested)
```

Contains one owner-thread export presentation snapshot.

**Parameter `operationId`:** The export identity within this service.

**Parameter `fraction`:** The last measured completion fraction, or null while the active phase has no measured total.

**Parameter `status`:** The actual stage or outcome message.

**Parameter `error`:** The current failure diagnostic, or empty.

**Parameter `isBusy`:** Whether work still owns resources.

**Parameter `cancellationRequested`:** Whether cancellation is draining work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportProgress.cs#L24).

## `Deconstruct`

<a id="api-083c96c04ef1f0ef"></a>
<!-- api: M:Inno.Editor.Exporting.EditorExportProgress.Deconstruct(System.Int64@,System.Nullable{System.Single}@,System.String@,System.String@,System.Boolean@,System.Boolean@) 714c12b27ca2d24cdc470e6ca25b4aa12f1a24a673a0454c576d76f8b3c023bc -->

```csharp
public void Inno.Editor.Exporting.EditorExportProgress.Deconstruct(out long operationId, out float? fraction, out string status, out string error, out bool isBusy, out bool cancellationRequested)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportProgress.cs#L24).

## `Equals`

<a id="api-8efe146209d2bdf3"></a>
<!-- api: M:Inno.Editor.Exporting.EditorExportProgress.Equals(Inno.Editor.Exporting.EditorExportProgress) 552a6e7e75788a7a33a231c531e3978f1c764dc70d297210591939521fb70326 -->

```csharp
public bool Inno.Editor.Exporting.EditorExportProgress.Equals(Inno.Editor.Exporting.EditorExportProgress other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportProgress.cs#L24).

## `Equals`

<a id="api-3ff386ce1ef57bb0"></a>
<!-- api: M:Inno.Editor.Exporting.EditorExportProgress.Equals(System.Object) 96a14c23925bfb10c2f12864d40e852133ffc4cc9920d1e6a6204037a2223dce -->

```csharp
public override bool Inno.Editor.Exporting.EditorExportProgress.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportProgress.cs#L24).

## `GetHashCode`

<a id="api-8c48bf2514b85d4d"></a>
<!-- api: M:Inno.Editor.Exporting.EditorExportProgress.GetHashCode 5a7979942e8400360cd5ea8c51122564959754e1e8c29804d5776bd12e06b9c2 -->

```csharp
public override int Inno.Editor.Exporting.EditorExportProgress.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportProgress.cs#L24).

## `op_Equality`

<a id="api-37fe78d9d5f8127f"></a>
<!-- api: M:Inno.Editor.Exporting.EditorExportProgress.op_Equality(Inno.Editor.Exporting.EditorExportProgress,Inno.Editor.Exporting.EditorExportProgress) fc0154a196d4e7cbf693bdf870da96e19a6d765ed19baf7504a3c15da59e17da -->

```csharp
public static bool Inno.Editor.Exporting.EditorExportProgress.operator ==(Inno.Editor.Exporting.EditorExportProgress left, Inno.Editor.Exporting.EditorExportProgress right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportProgress.cs#L24).

## `op_Inequality`

<a id="api-2b427757a2936225"></a>
<!-- api: M:Inno.Editor.Exporting.EditorExportProgress.op_Inequality(Inno.Editor.Exporting.EditorExportProgress,Inno.Editor.Exporting.EditorExportProgress) 7cade584eb4b6f8edaf4b707fc7e3476406b7d1982af4b9aad2005307a09551e -->

```csharp
public static bool Inno.Editor.Exporting.EditorExportProgress.operator !=(Inno.Editor.Exporting.EditorExportProgress left, Inno.Editor.Exporting.EditorExportProgress right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportProgress.cs#L24).

## `ToString`

<a id="api-91ad9c538af32c87"></a>
<!-- api: M:Inno.Editor.Exporting.EditorExportProgress.ToString 3d7719d20976b8f08d55de69a678e388eb54915dfc78c65c26162ae861149a5f -->

```csharp
public override string Inno.Editor.Exporting.EditorExportProgress.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportProgress.cs#L24).

## `cancellationRequested`

<a id="api-eb88da656778eb54"></a>
<!-- api: P:Inno.Editor.Exporting.EditorExportProgress.cancellationRequested dccb5ba7bdbe99e3b86ef8f41471570c3399ec95082cb6970d1fdac16ec2760e -->

```csharp
public bool Inno.Editor.Exporting.EditorExportProgress.cancellationRequested { get; init; }
```

Whether cancellation is draining work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportProgress.cs#L30).

## `error`

<a id="api-371250d1990e93fb"></a>
<!-- api: P:Inno.Editor.Exporting.EditorExportProgress.error fb8d3745cb219a060866ba90431a7f2026354f4fdf867bf9709d781798170f2b -->

```csharp
public string Inno.Editor.Exporting.EditorExportProgress.error { get; init; }
```

The current failure diagnostic, or empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportProgress.cs#L28).

## `fraction`

<a id="api-5808a87d300bc1ca"></a>
<!-- api: P:Inno.Editor.Exporting.EditorExportProgress.fraction c88936c298b79856f118a8875e3d4e6b45bad4232777a6c63c656a4df9ac9d5b -->

```csharp
public float? Inno.Editor.Exporting.EditorExportProgress.fraction { get; init; }
```

The last measured completion fraction, or null while the active phase has no measured total.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportProgress.cs#L26).

## `isBusy`

<a id="api-82502e8cf30add75"></a>
<!-- api: P:Inno.Editor.Exporting.EditorExportProgress.isBusy 7fc10082bf53285fa20f78ff0eb16b78c297fab6462260a553aba3628aff6da5 -->

```csharp
public bool Inno.Editor.Exporting.EditorExportProgress.isBusy { get; init; }
```

Whether work still owns resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportProgress.cs#L29).

## `operationId`

<a id="api-f58e5d975563632e"></a>
<!-- api: P:Inno.Editor.Exporting.EditorExportProgress.operationId bc66d7bfd9240b96fb30962f54b5ec93668e3a97d96772ee68ffcd60faa8e034 -->

```csharp
public long Inno.Editor.Exporting.EditorExportProgress.operationId { get; init; }
```

The export identity within this service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportProgress.cs#L25).

## `status`

<a id="api-5affe2cc35449b2d"></a>
<!-- api: P:Inno.Editor.Exporting.EditorExportProgress.status 0e7ad977ebdf450c79b19c769cc4db9a74ed03d0e5be4975558589c695357b88 -->

```csharp
public string Inno.Editor.Exporting.EditorExportProgress.status { get; init; }
```

The actual stage or outcome message.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Exporting/Runtime/EditorExportProgress.cs#L27).
