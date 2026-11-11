---
title: "NativeBuildStatistics"
description: "Reference for NativeBuildStatistics in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.92661374cd82d9cd
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeBuildStatistics`

This reference describes `NativeBuildStatistics` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Build.Toolchains.NativeBuildStatistics>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cff2a1572cff314a) | Method |
| [`Equals`](#api-1c1a2e816e660a06) | Method |
| [`Equals`](#api-24abd3a10e130e2a) | Method |
| [`GetHashCode`](#api-44b7f3aed4234fba) | Method |
| [`op_Equality`](#api-4b18a4a7e18d34e8) | Method |
| [`op_Inequality`](#api-ee4d3b990ccdee74) | Method |
| [`ToString`](#api-4bc4855f8ac7574d) | Method |
| [`bindingBatches`](#api-174da509e95f3d99) | Property |
| [`bindingGenerations`](#api-7d803be47c03616a) | Property |
| [`hashedBytes`](#api-d5ff70652facc334) | Property |
| [`hashedFiles`](#api-d06634ae7c0d96a0) | Property |
| [`managedProcesses`](#api-36a0ee4de42d99fc) | Property |
| [`materializedBytes`](#api-5308d121238d0db2) | Property |
| [`nativeProcesses`](#api-2d07d6cdbc841e63) | Property |
| [`outputBytes`](#api-0ecb46db33c24934) | Property |
| [`outputFiles`](#api-23b1d922895a9525) | Property |
| [`phases`](#api-e68bcb2ecde86e40) | Property |

## Type declaration

<a id="api-92661374cd82d9cd"></a>
<!-- api: T:Inno.Build.Toolchains.NativeBuildStatistics c80a70d2a54a6a34484eb8f8fef5d6753c94957edce87282c22337bc19eb5ab4 -->

```csharp
public sealed record Inno.Build.Toolchains.NativeBuildStatistics : System.IEquatable<Inno.Build.Toolchains.NativeBuildStatistics>
```

Reports actual input reading and compiler process work accumulated by one build context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L8).

## `#ctor`

<a id="api-cff2a1572cff314a"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildStatistics.#ctor edf4b1241addfb734f0d50d6200f0a8986ce416dc4205663bd39cbe00e23c5cb -->

```csharp
public Inno.Build.Toolchains.NativeBuildStatistics.NativeBuildStatistics()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L8).

## `Equals`

<a id="api-1c1a2e816e660a06"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildStatistics.Equals(Inno.Build.Toolchains.NativeBuildStatistics) ee4b7bc2fb833c47999508d10404a31e1185c262338238ba8a0f56119dd0058d -->

```csharp
public bool Inno.Build.Toolchains.NativeBuildStatistics.Equals(Inno.Build.Toolchains.NativeBuildStatistics? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L8).

## `Equals`

<a id="api-24abd3a10e130e2a"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildStatistics.Equals(System.Object) 22dbb7dc4a54d5100da25cfac53662cf0b206e929d7b7f42fdb661513742f9cd -->

```csharp
public override bool Inno.Build.Toolchains.NativeBuildStatistics.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L8).

## `GetHashCode`

<a id="api-44b7f3aed4234fba"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildStatistics.GetHashCode b42d52ac83952669f9d136aea8c0e487f37eef0737b2daaa6329397be334198a -->

```csharp
public override int Inno.Build.Toolchains.NativeBuildStatistics.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L8).

## `op_Equality`

<a id="api-4b18a4a7e18d34e8"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildStatistics.op_Equality(Inno.Build.Toolchains.NativeBuildStatistics,Inno.Build.Toolchains.NativeBuildStatistics) 68d557fd22d38c692a4cae3a195c2c7d51ef3576b7210e6866a3614a6362a587 -->

```csharp
public static bool Inno.Build.Toolchains.NativeBuildStatistics.operator ==(Inno.Build.Toolchains.NativeBuildStatistics? left, Inno.Build.Toolchains.NativeBuildStatistics? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L8).

## `op_Inequality`

<a id="api-ee4d3b990ccdee74"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildStatistics.op_Inequality(Inno.Build.Toolchains.NativeBuildStatistics,Inno.Build.Toolchains.NativeBuildStatistics) b83f084f4540c0b7c746ad9c2c14f03f81de428d6dcf5765b8b040f920fc1317 -->

```csharp
public static bool Inno.Build.Toolchains.NativeBuildStatistics.operator !=(Inno.Build.Toolchains.NativeBuildStatistics? left, Inno.Build.Toolchains.NativeBuildStatistics? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L8).

## `ToString`

<a id="api-4bc4855f8ac7574d"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildStatistics.ToString 9351a21f65019eb5b2d43940c792330fd9fef125dadbbc5ea8efbd60b081561f -->

```csharp
public override string Inno.Build.Toolchains.NativeBuildStatistics.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L8).

## `bindingBatches`

<a id="api-174da509e95f3d99"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildStatistics.bindingBatches 66b72e84e142906afb718f5fd865e70f2f5573b09255bf6ec8116d1ca8af8947 -->

```csharp
public long Inno.Build.Toolchains.NativeBuildStatistics.bindingBatches { get; init; }
```

Gets complete binding batches requested by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L34).

## `bindingGenerations`

<a id="api-7d803be47c03616a"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildStatistics.bindingGenerations 661ecf760b4cc598f6fc2fd41ea01bd9d11e9ae988dfc5569988fa513f905368 -->

```csharp
public long Inno.Build.Toolchains.NativeBuildStatistics.bindingGenerations { get; init; }
```

Gets actual bridge or managed generation invocations, excluding valid artifact reuse.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L39).

## `hashedBytes`

<a id="api-d5ff70652facc334"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildStatistics.hashedBytes 31127cd91106741b036962166dc96531f73fdbb3a31d3ec920fc25729c13a831 -->

```csharp
public long Inno.Build.Toolchains.NativeBuildStatistics.hashedBytes { get; init; }
```

Gets the actual bytes consumed by input hashing, excluding output integrity validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L18).

## `hashedFiles`

<a id="api-d06634ae7c0d96a0"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildStatistics.hashedFiles ec12f3daefe3b1202c19dfd01db672ae9412465aee33161cc7ccfecce5c1569b -->

```csharp
public long Inno.Build.Toolchains.NativeBuildStatistics.hashedFiles { get; init; }
```

Gets the number of complete file hashes read, including required stability verification.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L13).

## `managedProcesses`

<a id="api-36a0ee4de42d99fc"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildStatistics.managedProcesses cd303ce1430f3dc380ea0ca6c32ac6514b6976e7daf50af7fbf7f5fbe20de1eb -->

```csharp
public long Inno.Build.Toolchains.NativeBuildStatistics.managedProcesses { get; init; }
```

Gets managed SDK processes started for generator extension preparation and managed input evaluation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L59).

## `materializedBytes`

<a id="api-5308d121238d0db2"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildStatistics.materializedBytes 6351b179f20eaca382528879fa9fdf414803d1b7c2bac8b18d2dabf4cdb56cbf -->

```csharp
public long Inno.Build.Toolchains.NativeBuildStatistics.materializedBytes { get; init; }
```

Gets bytes copied to freeze mutable repository inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L44).

## `nativeProcesses`

<a id="api-2d07d6cdbc841e63"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildStatistics.nativeProcesses f6b371b0f51145bcfbe3d389ac4880c7b04051bee10034fee7f806f654f0861f -->

```csharp
public long Inno.Build.Toolchains.NativeBuildStatistics.nativeProcesses { get; init; }
```

Gets native execution processes started through the context's frozen tool selection.
SDK discovery and managed task bootstrapping are recorded by their separate build logs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L24).

## `outputBytes`

<a id="api-0ecb46db33c24934"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildStatistics.outputBytes ab4bea857e6ec32c2747e979a88346d52e3eabcc584312d9bb8a74da28be70e1 -->

```csharp
public long Inno.Build.Toolchains.NativeBuildStatistics.outputBytes { get; init; }
```

Gets bytes read from actual outputs, separately from source snapshot verification.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L54).

## `outputFiles`

<a id="api-23b1d922895a9525"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildStatistics.outputFiles 3f39b69fcede664ed5d66e87dcef5213a26410d106381f926a81808d9c3eeaa8 -->

```csharp
public long Inno.Build.Toolchains.NativeBuildStatistics.outputFiles { get; init; }
```

Gets independent artifact output hashes performed for integrity verification and publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L49).

## `phases`

<a id="api-e68bcb2ecde86e40"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildStatistics.phases 1dcdf7c9fbaff5f0f6423cef9f9b4c61abbf5a346b1594af9271edaf1394cf63 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.NativeBuildPhaseStatistics> Inno.Build.Toolchains.NativeBuildStatistics.phases { get; init; }
```

Gets immutable phase-specific read accounting accumulated by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildStatistics.cs#L29).
