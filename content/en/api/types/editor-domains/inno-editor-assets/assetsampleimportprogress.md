---
title: "AssetSampleImportProgress"
description: "Reference for AssetSampleImportProgress in Inno.Editor.Assets."
uid: api.inno.editor.assets.f207cb2827c221a6
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: source-clr
contracts:
  - project.inno-editor-assets
---
# `AssetSampleImportProgress`

This reference describes `AssetSampleImportProgress` in `Inno.Editor.Assets`. Read the [shared contract](../../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Assets.AssetSampleImportProgress>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-20c56a5ee029088b) | Method |
| [`Deconstruct`](#api-43e01932b06869f1) | Method |
| [`Equals`](#api-91a3c2bb844b2290) | Method |
| [`Equals`](#api-2099a8a2fcf7c4e3) | Method |
| [`GetHashCode`](#api-895e07a02d64b455) | Method |
| [`op_Equality`](#api-05def61b1e485d1d) | Method |
| [`op_Inequality`](#api-23f591ac313404e0) | Method |
| [`ToString`](#api-3826d90b5215f564) | Method |
| [`cancellationRequested`](#api-e9db6d73e502c115) | Property |
| [`fraction`](#api-344622e4c2b859f0) | Property |
| [`operationId`](#api-c66aee2ae5eef7fc) | Property |
| [`status`](#api-9a0d9d6edce69e80) | Property |

## Type declaration

<a id="api-f207cb2827c221a6"></a>
<!-- api: T:Inno.Editor.Assets.AssetSampleImportProgress 386f7a7211cddd9e32c805d8b2a9eb0f5246229816604c8571279b2751019f20 -->

```csharp
public readonly record struct Inno.Editor.Assets.AssetSampleImportProgress : System.IEquatable<Inno.Editor.Assets.AssetSampleImportProgress>
```

Contains one atomically captured sample import status.

**Parameter `operationId`:** The import identity within its owner.

**Parameter `fraction`:** The completed validation and publication fraction.

**Parameter `status`:** The current stage description.

**Parameter `cancellationRequested`:** Whether cancellation is draining owned work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportProgress.cs#L18).

## `#ctor`

<a id="api-20c56a5ee029088b"></a>
<!-- api: M:Inno.Editor.Assets.AssetSampleImportProgress.#ctor(System.Int64,System.Single,System.String,System.Boolean) f95646486cb0b93d93851c02f05b44334453804fbb5e4ecbda8904651cc3c985 -->

```csharp
public Inno.Editor.Assets.AssetSampleImportProgress.AssetSampleImportProgress(long operationId, float fraction, string status, bool cancellationRequested)
```

Contains one atomically captured sample import status.

**Parameter `operationId`:** The import identity within its owner.

**Parameter `fraction`:** The completed validation and publication fraction.

**Parameter `status`:** The current stage description.

**Parameter `cancellationRequested`:** Whether cancellation is draining owned work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportProgress.cs#L18).

## `Deconstruct`

<a id="api-43e01932b06869f1"></a>
<!-- api: M:Inno.Editor.Assets.AssetSampleImportProgress.Deconstruct(System.Int64@,System.Single@,System.String@,System.Boolean@) 717c0b11b8907c9d6bdd8458ac55a9aa52bf069f70dae65754c429b120a29ae6 -->

```csharp
public void Inno.Editor.Assets.AssetSampleImportProgress.Deconstruct(out long operationId, out float fraction, out string status, out bool cancellationRequested)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportProgress.cs#L18).

## `Equals`

<a id="api-91a3c2bb844b2290"></a>
<!-- api: M:Inno.Editor.Assets.AssetSampleImportProgress.Equals(Inno.Editor.Assets.AssetSampleImportProgress) fba71a406e38360e36874e5f0053341b7059b9b594984b38c8575f4237fe6d4a -->

```csharp
public bool Inno.Editor.Assets.AssetSampleImportProgress.Equals(Inno.Editor.Assets.AssetSampleImportProgress other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportProgress.cs#L18).

## `Equals`

<a id="api-2099a8a2fcf7c4e3"></a>
<!-- api: M:Inno.Editor.Assets.AssetSampleImportProgress.Equals(System.Object) 497404322ec89c5a1943fdb74a7a0b53268d6c6103a7df6c495bb1bbd9416afb -->

```csharp
public override bool Inno.Editor.Assets.AssetSampleImportProgress.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportProgress.cs#L18).

## `GetHashCode`

<a id="api-895e07a02d64b455"></a>
<!-- api: M:Inno.Editor.Assets.AssetSampleImportProgress.GetHashCode 5238c738066dfd1f2c15bb854ea5ee3e72c9b4a80912f80da6707bbf0c63b562 -->

```csharp
public override int Inno.Editor.Assets.AssetSampleImportProgress.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportProgress.cs#L18).

## `op_Equality`

<a id="api-05def61b1e485d1d"></a>
<!-- api: M:Inno.Editor.Assets.AssetSampleImportProgress.op_Equality(Inno.Editor.Assets.AssetSampleImportProgress,Inno.Editor.Assets.AssetSampleImportProgress) c45e775db0d1913c028a02be75712cc551a29599bb4c45fecd65a7c5705bfbce -->

```csharp
public static bool Inno.Editor.Assets.AssetSampleImportProgress.operator ==(Inno.Editor.Assets.AssetSampleImportProgress left, Inno.Editor.Assets.AssetSampleImportProgress right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportProgress.cs#L18).

## `op_Inequality`

<a id="api-23f591ac313404e0"></a>
<!-- api: M:Inno.Editor.Assets.AssetSampleImportProgress.op_Inequality(Inno.Editor.Assets.AssetSampleImportProgress,Inno.Editor.Assets.AssetSampleImportProgress) b2a7885d32c7e1d6cb6590a1ed3d0b3ec6d104ff3750b918b47f319c7e17d9d2 -->

```csharp
public static bool Inno.Editor.Assets.AssetSampleImportProgress.operator !=(Inno.Editor.Assets.AssetSampleImportProgress left, Inno.Editor.Assets.AssetSampleImportProgress right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportProgress.cs#L18).

## `ToString`

<a id="api-3826d90b5215f564"></a>
<!-- api: M:Inno.Editor.Assets.AssetSampleImportProgress.ToString b38dd6f2d4dcea7798a4224a47d40493dc774eb3081e0d5473d589091e9ccffc -->

```csharp
public override string Inno.Editor.Assets.AssetSampleImportProgress.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportProgress.cs#L18).

## `cancellationRequested`

<a id="api-e9db6d73e502c115"></a>
<!-- api: P:Inno.Editor.Assets.AssetSampleImportProgress.cancellationRequested 5ef1a93db67b3e6677adae6e445691ac575eb008f865e510f9321072378ed953 -->

```csharp
public bool Inno.Editor.Assets.AssetSampleImportProgress.cancellationRequested { get; init; }
```

Whether cancellation is draining owned work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportProgress.cs#L22).

## `fraction`

<a id="api-344622e4c2b859f0"></a>
<!-- api: P:Inno.Editor.Assets.AssetSampleImportProgress.fraction 55ed3dec7e4447c073dcb697a560b8e7b8cc1d1888f3910e48dfb5cd92204f5e -->

```csharp
public float Inno.Editor.Assets.AssetSampleImportProgress.fraction { get; init; }
```

The completed validation and publication fraction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportProgress.cs#L20).

## `operationId`

<a id="api-c66aee2ae5eef7fc"></a>
<!-- api: P:Inno.Editor.Assets.AssetSampleImportProgress.operationId 8f69939fc171a1bb1356d04bdd2e0346a941d96a4a21fdb9fa1e05642d76ca63 -->

```csharp
public long Inno.Editor.Assets.AssetSampleImportProgress.operationId { get; init; }
```

The import identity within its owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportProgress.cs#L19).

## `status`

<a id="api-9a0d9d6edce69e80"></a>
<!-- api: P:Inno.Editor.Assets.AssetSampleImportProgress.status ea4841b7a30589d6003224a467258a8514f196508862df0d663d313359de73de -->

```csharp
public string Inno.Editor.Assets.AssetSampleImportProgress.status { get; init; }
```

The current stage description.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Samples/AssetSampleImportProgress.cs#L21).
