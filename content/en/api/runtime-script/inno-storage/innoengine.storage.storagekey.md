---
title: "StorageKey"
description: "Reference for StorageKey in Inno.Storage."
uid: api.inno.storage.runtime-script.e13eb6775557f7cc
kind: api
owners:
  - Inno.Storage
apiSurface: runtime-script
contracts:
  - project.inno-storage#operation-and-ownership-contract
  - manual.scripting.use-script-api
---
# `StorageKey`

This reference describes `StorageKey` in `Inno.Storage`. Read the [shared contract](../../projects/inno-storage.md#operation-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Storage.StorageKey>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f57fb01ac09aff4e) | Method |
| [`Equals`](#api-3609ec5825eea7f0) | Method |
| [`Equals`](#api-7e82a7d9e1414a9b) | Method |
| [`GetHashCode`](#api-c2b5cf61bfc600d7) | Method |
| [`op_Equality`](#api-e2408c36a81090fd) | Method |
| [`op_Inequality`](#api-a2e6768905de1e17) | Method |
| [`ToString`](#api-1bcb53ba4522b2e4) | Method |
| [`isValid`](#api-23417392d6ed29e5) | Property |
| [`value`](#api-3f9af0f5e1a3d5da) | Property |

## Type declaration

<a id="api-e13eb6775557f7cc"></a>
<!-- api: T:InnoEngine.Storage.StorageKey 173490ad0a74a915ddea2bfd9b78c47a73dac7430bef5cf677beed7b6333febe -->

```csharp
public readonly struct InnoEngine.Storage.StorageKey : System.IEquatable<InnoEngine.Storage.StorageKey>
```

Identifies one sandbox-relative application storage value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/StorageKey.cs#L8).

## `#ctor`

<a id="api-f57fb01ac09aff4e"></a>
<!-- api: M:InnoEngine.Storage.StorageKey.#ctor(System.String) 215b0d2c175ad9e501d589f499959090511259ef8cfb24e309152c7cb4f36454 -->

```csharp
public InnoEngine.Storage.StorageKey.StorageKey(string value)
```

Creates a normalized storage key from slash-separated path segments.

**Parameter `value`:** The non-rooted key with no empty, current, or parent segments.

**Throws `System.ArgumentException`:** Thrown when `value` can escape or ambiguously address the storage root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/StorageKey.cs#L19).

## `Equals`

<a id="api-3609ec5825eea7f0"></a>
<!-- api: M:InnoEngine.Storage.StorageKey.Equals(InnoEngine.Storage.StorageKey) 641f543f842743958946181ef712718ba7846be094f7e91465d7959168d8ef90 -->

```csharp
public bool InnoEngine.Storage.StorageKey.Equals(InnoEngine.Storage.StorageKey other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/StorageKey.cs#L8).

## `Equals`

<a id="api-7e82a7d9e1414a9b"></a>
<!-- api: M:InnoEngine.Storage.StorageKey.Equals(System.Object) 324e5ae43d35f3366079fe9a49feb9517a61f00d19fc3160bea65b7ef47773f2 -->

```csharp
public override bool InnoEngine.Storage.StorageKey.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/StorageKey.cs#L8).

## `GetHashCode`

<a id="api-c2b5cf61bfc600d7"></a>
<!-- api: M:InnoEngine.Storage.StorageKey.GetHashCode 7f010a75e7b58e32286fb54cd690194623cbbaee50d88364b5962ab9b64ffe82 -->

```csharp
public override int InnoEngine.Storage.StorageKey.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/StorageKey.cs#L8).

## `op_Equality`

<a id="api-e2408c36a81090fd"></a>
<!-- api: M:InnoEngine.Storage.StorageKey.op_Equality(InnoEngine.Storage.StorageKey,InnoEngine.Storage.StorageKey) c050b89bccee7f5a1347407dd626af49ac995268ea8cd986ab5b1045991a3cfc -->

```csharp
public static bool InnoEngine.Storage.StorageKey.operator ==(InnoEngine.Storage.StorageKey left, InnoEngine.Storage.StorageKey right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/StorageKey.cs#L8).

## `op_Inequality`

<a id="api-a2e6768905de1e17"></a>
<!-- api: M:InnoEngine.Storage.StorageKey.op_Inequality(InnoEngine.Storage.StorageKey,InnoEngine.Storage.StorageKey) b0306e5e3aa8ac3d4c74fcf80876a1b3ee0fd03299feaf1be01885f5f67dc251 -->

```csharp
public static bool InnoEngine.Storage.StorageKey.operator !=(InnoEngine.Storage.StorageKey left, InnoEngine.Storage.StorageKey right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/StorageKey.cs#L8).

## `ToString`

<a id="api-1bcb53ba4522b2e4"></a>
<!-- api: M:InnoEngine.Storage.StorageKey.ToString a22bee3363d3be29ad98783c9a93af9d961b7550c83a610b2a190dbfc5e6004b -->

```csharp
public override string InnoEngine.Storage.StorageKey.ToString()
```

Formats this key for diagnostics and persistence.

**Returns:** The normalized key value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/StorageKey.cs#L52).

## `isValid`

<a id="api-23417392d6ed29e5"></a>
<!-- api: P:InnoEngine.Storage.StorageKey.isValid 762e3b3f2ea083eb2781d7dedfe32fc1c3d1bd5bec31d64f8592bf9206d5c0b6 -->

```csharp
public bool InnoEngine.Storage.StorageKey.isValid { get; }
```

Gets whether this value contains a valid storage key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/StorageKey.cs#L44).

## `value`

<a id="api-3f9af0f5e1a3d5da"></a>
<!-- api: P:InnoEngine.Storage.StorageKey.value 5b7a767a26aad99998e4c7ece2c6c3bdc9bfc075733b6944a91c62bd13893ee5 -->

```csharp
public string InnoEngine.Storage.StorageKey.value { get; }
```

Gets the normalized slash-separated key value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/storage/Inno.Storage/StorageKey.cs#L39).
