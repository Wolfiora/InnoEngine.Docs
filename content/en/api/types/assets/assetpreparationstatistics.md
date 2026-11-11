---
title: "AssetPreparationStatistics"
description: "Reference for AssetPreparationStatistics in Inno.Assets."
uid: api.inno.assets.2c566a9977b45da6
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetPreparationStatistics`

This reference describes `AssetPreparationStatistics` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Assets.AssetPreparationStatistics>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-9fa032226fb682e2) | Method |
| [`Equals`](#api-5582f3b22bdbccc9) | Method |
| [`GetHashCode`](#api-56bae047a536afbf) | Method |
| [`op_Equality`](#api-d0827978b39ebdbd) | Method |
| [`op_Inequality`](#api-56bca081877e4dbe) | Method |
| [`ToString`](#api-8a8b7d7e1facc3a6) | Method |
| [`payloadReadsStarted`](#api-ead18ae5cd5e8dc3) | Property |
| [`peakPendingRequests`](#api-3e4700f4ed9a7930) | Property |
| [`peakReservedBytes`](#api-0787269ee222eee1) | Property |
| [`pendingPayloads`](#api-86440ea07a3014c7) | Property |
| [`pendingRequests`](#api-e6ab5d4bae852124) | Property |
| [`rejectedRequests`](#api-2a87773e2e3aff60) | Property |
| [`reservedBytes`](#api-6359cd270621bceb) | Property |
| [`sharedPayloadReads`](#api-8417f596a1d4e3fc) | Property |

## Type declaration

<a id="api-2c566a9977b45da6"></a>
<!-- api: T:Inno.Assets.AssetPreparationStatistics 01ba1d5025fa28a5daeee12e6f2e76b5a65d1b00acc8fb2e1603e0256d7fb1da -->

```csharp
public readonly record struct Inno.Assets.AssetPreparationStatistics : System.IEquatable<Inno.Assets.AssetPreparationStatistics>
```

Reports owner-thread cold-load admission and unique encoded IO reservations without retaining assets or tasks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetPreparationStatistics.cs#L6).

## `Equals`

<a id="api-9fa032226fb682e2"></a>
<!-- api: M:Inno.Assets.AssetPreparationStatistics.Equals(Inno.Assets.AssetPreparationStatistics) df0161682c33eaf8f17691efc68537462c72032edb9066c6ed328073b79e55de -->

```csharp
public bool Inno.Assets.AssetPreparationStatistics.Equals(Inno.Assets.AssetPreparationStatistics other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetPreparationStatistics.cs#L6).

## `Equals`

<a id="api-5582f3b22bdbccc9"></a>
<!-- api: M:Inno.Assets.AssetPreparationStatistics.Equals(System.Object) 76b7e276e7536e539110b098645612080918b726a6dd65b99d36bab02f607e51 -->

```csharp
public override bool Inno.Assets.AssetPreparationStatistics.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetPreparationStatistics.cs#L6).

## `GetHashCode`

<a id="api-56bae047a536afbf"></a>
<!-- api: M:Inno.Assets.AssetPreparationStatistics.GetHashCode 16358b13c3c030b839d1d4245f097af41aeed5d78f3545ff38e5222431547217 -->

```csharp
public override int Inno.Assets.AssetPreparationStatistics.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetPreparationStatistics.cs#L6).

## `op_Equality`

<a id="api-d0827978b39ebdbd"></a>
<!-- api: M:Inno.Assets.AssetPreparationStatistics.op_Equality(Inno.Assets.AssetPreparationStatistics,Inno.Assets.AssetPreparationStatistics) 6cef72606af45b58bf11dcdb93093b883ab92512d3495034a9ed771de7792df0 -->

```csharp
public static bool Inno.Assets.AssetPreparationStatistics.operator ==(Inno.Assets.AssetPreparationStatistics left, Inno.Assets.AssetPreparationStatistics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetPreparationStatistics.cs#L6).

## `op_Inequality`

<a id="api-56bca081877e4dbe"></a>
<!-- api: M:Inno.Assets.AssetPreparationStatistics.op_Inequality(Inno.Assets.AssetPreparationStatistics,Inno.Assets.AssetPreparationStatistics) 16e1aa0368d77902966bebbe84e3791f88e22cd0fd55471524839c52215c79fe -->

```csharp
public static bool Inno.Assets.AssetPreparationStatistics.operator !=(Inno.Assets.AssetPreparationStatistics left, Inno.Assets.AssetPreparationStatistics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetPreparationStatistics.cs#L6).

## `ToString`

<a id="api-8a8b7d7e1facc3a6"></a>
<!-- api: M:Inno.Assets.AssetPreparationStatistics.ToString 00e0cfa9c716a3277312adf2199887a97592e0cf4601bc8b454d76c435ba544e -->

```csharp
public override string Inno.Assets.AssetPreparationStatistics.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetPreparationStatistics.cs#L6).

## `payloadReadsStarted`

<a id="api-ead18ae5cd5e8dc3"></a>
<!-- api: P:Inno.Assets.AssetPreparationStatistics.payloadReadsStarted 3f436dce2d49203978b3219271010a7f7bbc02955ccfae9245febdcf4644b8b3 -->

```csharp
public long Inno.Assets.AssetPreparationStatistics.payloadReadsStarted { get; }
```

Gets the cumulative number of unique physical payload reads started.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetPreparationStatistics.cs#L51).

## `peakPendingRequests`

<a id="api-3e4700f4ed9a7930"></a>
<!-- api: P:Inno.Assets.AssetPreparationStatistics.peakPendingRequests 8c88dd81d46004e3f384bbcd98b3f7edd65dc714814724fb70d961515224f4ae -->

```csharp
public int Inno.Assets.AssetPreparationStatistics.peakPendingRequests { get; }
```

Gets the largest simultaneous admitted request count during this database lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetPreparationStatistics.cs#L36).

## `peakReservedBytes`

<a id="api-0787269ee222eee1"></a>
<!-- api: P:Inno.Assets.AssetPreparationStatistics.peakReservedBytes fd7f8420d10639c0ff589104c17107a18809ba36665acefafe8b9216eb9ec334 -->

```csharp
public long Inno.Assets.AssetPreparationStatistics.peakReservedBytes { get; }
```

Gets the largest simultaneous unique encoded-byte reservation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetPreparationStatistics.cs#L66).

## `pendingPayloads`

<a id="api-86440ea07a3014c7"></a>
<!-- api: P:Inno.Assets.AssetPreparationStatistics.pendingPayloads 9a7a46cef816092601171abd1401f34460ebddaa9e290a54649c2857d49e488c -->

```csharp
public int Inno.Assets.AssetPreparationStatistics.pendingPayloads { get; }
```

Gets unique payload reservations still retained by one or more cold-load roots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetPreparationStatistics.cs#L46).

## `pendingRequests`

<a id="api-e6ab5d4bae852124"></a>
<!-- api: P:Inno.Assets.AssetPreparationStatistics.pendingRequests fd65ceb771e29ddb9e2fcfe99ae774c7b5d7d6d4d425d71a35eb714133d7a5a7 -->

```csharp
public int Inno.Assets.AssetPreparationStatistics.pendingRequests { get; }
```

Gets requests still awaiting owner-thread completion, including canceled callers not yet drained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetPreparationStatistics.cs#L31).

## `rejectedRequests`

<a id="api-2a87773e2e3aff60"></a>
<!-- api: P:Inno.Assets.AssetPreparationStatistics.rejectedRequests 788c4320a308721a73dba617d64bdf3682075d601a2ea2e165bd4d6d6a15f306 -->

```csharp
public long Inno.Assets.AssetPreparationStatistics.rejectedRequests { get; }
```

Gets requests rejected by the pending-count or encoded-byte budget.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetPreparationStatistics.cs#L41).

## `reservedBytes`

<a id="api-6359cd270621bceb"></a>
<!-- api: P:Inno.Assets.AssetPreparationStatistics.reservedBytes 9abd4233e547673ae86fd66e4c24b03adec25c2692ee0862c404cc8ff8af2a7e -->

```csharp
public long Inno.Assets.AssetPreparationStatistics.reservedBytes { get; }
```

Gets unique encoded bytes retained until all requesting roots complete, fail or cancel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetPreparationStatistics.cs#L61).

## `sharedPayloadReads`

<a id="api-8417f596a1d4e3fc"></a>
<!-- api: P:Inno.Assets.AssetPreparationStatistics.sharedPayloadReads 05c7e25534fce5a5fd746078bc79f89828e6a3ff27c1c8f402c9ba44ae155f17 -->

```csharp
public long Inno.Assets.AssetPreparationStatistics.sharedPayloadReads { get; }
```

Gets payload reads reused by distinct roots with overlapping dependency closures.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetPreparationStatistics.cs#L56).
