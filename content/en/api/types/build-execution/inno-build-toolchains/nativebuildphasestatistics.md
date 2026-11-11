---
title: "NativeBuildPhaseStatistics"
description: "Reference for NativeBuildPhaseStatistics in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.9ca26a04eaee7852
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeBuildPhaseStatistics`

This reference describes `NativeBuildPhaseStatistics` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Build.Toolchains.NativeBuildPhaseStatistics>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ff8152bcfaf50f8d) | Method |
| [`Equals`](#api-4607c0bf5a774062) | Method |
| [`Equals`](#api-8f8a4778caef2a51) | Method |
| [`GetHashCode`](#api-f00626894bd10e45) | Method |
| [`op_Equality`](#api-6afb453c82f20019) | Method |
| [`op_Inequality`](#api-aa22129f72d7762e) | Method |
| [`ToString`](#api-3e897815bb7c0425) | Method |
| [`bytes`](#api-74d490cdb42e8365) | Property |
| [`files`](#api-2c64708d1bb6cc1e) | Property |
| [`phase`](#api-3d6e414430679bc5) | Property |
| [`reusedReads`](#api-270a3c7f1bcaa924) | Property |

## Type declaration

<a id="api-9ca26a04eaee7852"></a>
<!-- api: T:Inno.Build.Toolchains.NativeBuildPhaseStatistics 015cfbc122f1eb32ca8f98a2a8362f5cb5e77d686aeefc82eab286ed3c93ef36 -->

```csharp
public sealed record Inno.Build.Toolchains.NativeBuildPhaseStatistics : System.IEquatable<Inno.Build.Toolchains.NativeBuildPhaseStatistics>
```

Describes actual full reads and physical read reuse within one explicitly bounded input phase.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildPhaseStatistics.cs#L6).

## `#ctor`

<a id="api-ff8152bcfaf50f8d"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildPhaseStatistics.#ctor ce7356eebfd99bb36ac16eb82306078053932c9f1098dc6aa5628ba627a28b76 -->

```csharp
public Inno.Build.Toolchains.NativeBuildPhaseStatistics.NativeBuildPhaseStatistics()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildPhaseStatistics.cs#L6).

## `Equals`

<a id="api-4607c0bf5a774062"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildPhaseStatistics.Equals(Inno.Build.Toolchains.NativeBuildPhaseStatistics) 803b655c1034333ad9da52141c37f0f1100f012ac8dcd395827ddfdbd275c621 -->

```csharp
public bool Inno.Build.Toolchains.NativeBuildPhaseStatistics.Equals(Inno.Build.Toolchains.NativeBuildPhaseStatistics? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildPhaseStatistics.cs#L6).

## `Equals`

<a id="api-8f8a4778caef2a51"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildPhaseStatistics.Equals(System.Object) 62bc80dfda911d9c9657e330d97ede7c61952ebfe04d50d6899c988151f8a063 -->

```csharp
public override bool Inno.Build.Toolchains.NativeBuildPhaseStatistics.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildPhaseStatistics.cs#L6).

## `GetHashCode`

<a id="api-f00626894bd10e45"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildPhaseStatistics.GetHashCode 62e015ab06c8652566580f583f861ecdb9940ad8ff5c967b5103da2496f9b171 -->

```csharp
public override int Inno.Build.Toolchains.NativeBuildPhaseStatistics.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildPhaseStatistics.cs#L6).

## `op_Equality`

<a id="api-6afb453c82f20019"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildPhaseStatistics.op_Equality(Inno.Build.Toolchains.NativeBuildPhaseStatistics,Inno.Build.Toolchains.NativeBuildPhaseStatistics) 4116811692e9d428388e9ad05553261e667376ea065312c15e3655b9bdf7bde7 -->

```csharp
public static bool Inno.Build.Toolchains.NativeBuildPhaseStatistics.operator ==(Inno.Build.Toolchains.NativeBuildPhaseStatistics? left, Inno.Build.Toolchains.NativeBuildPhaseStatistics? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildPhaseStatistics.cs#L6).

## `op_Inequality`

<a id="api-aa22129f72d7762e"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildPhaseStatistics.op_Inequality(Inno.Build.Toolchains.NativeBuildPhaseStatistics,Inno.Build.Toolchains.NativeBuildPhaseStatistics) c293f1eb3371669eb988ce5afdb45acf14cf9624fc873da02f752b6ad5dae465 -->

```csharp
public static bool Inno.Build.Toolchains.NativeBuildPhaseStatistics.operator !=(Inno.Build.Toolchains.NativeBuildPhaseStatistics? left, Inno.Build.Toolchains.NativeBuildPhaseStatistics? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildPhaseStatistics.cs#L6).

## `ToString`

<a id="api-3e897815bb7c0425"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildPhaseStatistics.ToString 808e65db7d4fc25161cffb69cdddd7eda3aa201db3330a82140f8e3336dba2c5 -->

```csharp
public override string Inno.Build.Toolchains.NativeBuildPhaseStatistics.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildPhaseStatistics.cs#L6).

## `bytes`

<a id="api-74d490cdb42e8365"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildPhaseStatistics.bytes c92e078bddd7b6039552329110d3b9ffa8223dc8514247fbfd3acf3e63ca138b -->

```csharp
public long Inno.Build.Toolchains.NativeBuildPhaseStatistics.bytes { get; init; }
```

Gets the number of bytes actually read for hashing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildPhaseStatistics.cs#L19).

## `files`

<a id="api-2c64708d1bb6cc1e"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildPhaseStatistics.files 164bb3bfc2bb262cfe19d719e5eec1d5873bb1ce6ecc3ef9f886b9cd6f1c96b5 -->

```csharp
public long Inno.Build.Toolchains.NativeBuildPhaseStatistics.files { get; init; }
```

Gets the number of complete physical file reads.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildPhaseStatistics.cs#L15).

## `phase`

<a id="api-3d6e414430679bc5"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildPhaseStatistics.phase 6fc45674f7adde649432811167ad636993c242a7cc3842e9a94b6c82e21773fd -->

```csharp
public required string Inno.Build.Toolchains.NativeBuildPhaseStatistics.phase { get; init; }
```

Gets the named operation phase which owns these read results.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildPhaseStatistics.cs#L11).

## `reusedReads`

<a id="api-270a3c7f1bcaa924"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildPhaseStatistics.reusedReads 9920d987b4bba2f644d9acfb5ba0f965044af21c8ac94cc8030ed820cc525558 -->

```csharp
public long Inno.Build.Toolchains.NativeBuildPhaseStatistics.reusedReads { get; init; }
```

Gets repeated physical hash requests satisfied from this phase's cache.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildPhaseStatistics.cs#L23).
