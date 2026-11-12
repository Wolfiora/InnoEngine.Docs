---
title: "AssetArtifactKey"
description: "Reference for AssetArtifactKey in Inno.Assets."
uid: api.inno.assets.runtime-script.140c6894bcbde286
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetArtifactKey`

This reference describes `AssetArtifactKey` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Assets.AssetArtifactKey>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8aea56d06d7b0ec2) | Method |
| [`Equals`](#api-cc9f1dc09b8981da) | Method |
| [`Equals`](#api-350edd33d1e16ee3) | Method |
| [`GetHashCode`](#api-455561d8e5c366f9) | Method |
| [`op_Equality`](#api-bae59c9df3fda271) | Method |
| [`op_Inequality`](#api-1e22f726b2e2b0ce) | Method |
| [`ToString`](#api-242a8dc6b5d844c7) | Method |
| [`empty`](#api-dd059137c97c4c7f) | Property |
| [`isEmpty`](#api-5b56815e42e98e39) | Property |
| [`value`](#api-bd5438d6791f8a3f) | Property |

## Type declaration

<a id="api-140c6894bcbde286"></a>
<!-- api: T:InnoEngine.Assets.AssetArtifactKey 5fdbde18e8616eb523571ad34891b90766b57f27cbd90893c11dbfa7b07ac272 -->

```csharp
public readonly struct InnoEngine.Assets.AssetArtifactKey : System.IEquatable<InnoEngine.Assets.AssetArtifactKey>
```

Identifies one immutable content-addressed artifact bundle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L8).

## `#ctor`

<a id="api-8aea56d06d7b0ec2"></a>
<!-- api: M:InnoEngine.Assets.AssetArtifactKey.#ctor(System.String) 3ccaa559883cc1cd2ac10503a20d8abd50b7ebc17af8e90767a1b5e37fc8d495 -->

```csharp
public InnoEngine.Assets.AssetArtifactKey.AssetArtifactKey(string value)
```

Creates an artifact key from a hexadecimal content fingerprint.

**Parameter `value`:** The hexadecimal content fingerprint.

**Throws `System.ArgumentException`:** A non-empty value is not exactly 64 hexadecimal digits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L22).

## `Equals`

<a id="api-cc9f1dc09b8981da"></a>
<!-- api: M:InnoEngine.Assets.AssetArtifactKey.Equals(InnoEngine.Assets.AssetArtifactKey) fb0fcd95f02b7d913f67015db9fea0cd4e4545789e11547b8cc7c731b431eab7 -->

```csharp
public bool InnoEngine.Assets.AssetArtifactKey.Equals(InnoEngine.Assets.AssetArtifactKey other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `other`:** The value to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L62).

## `Equals`

<a id="api-350edd33d1e16ee3"></a>
<!-- api: M:InnoEngine.Assets.AssetArtifactKey.Equals(System.Object) a85c135c360851a33886ae5e0a33cc82c6abaf13ab8adc272227dcb977e0eade -->

```csharp
public override bool InnoEngine.Assets.AssetArtifactKey.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L73).

## `GetHashCode`

<a id="api-455561d8e5c366f9"></a>
<!-- api: M:InnoEngine.Assets.AssetArtifactKey.GetHashCode 21ea83276c8c223676bb9ff27cbf2b443b4c748ad92fb8a56807eea51af42dce -->

```csharp
public override int InnoEngine.Assets.AssetArtifactKey.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L81).

## `op_Equality`

<a id="api-bae59c9df3fda271"></a>
<!-- api: M:InnoEngine.Assets.AssetArtifactKey.op_Equality(InnoEngine.Assets.AssetArtifactKey,InnoEngine.Assets.AssetArtifactKey) d9acb3cc0f0bbad7dae6ec890b49a7c7fd5bffeab23e7f20bce1c9bc7ce90f90 -->

```csharp
public static bool InnoEngine.Assets.AssetArtifactKey.operator ==(InnoEngine.Assets.AssetArtifactKey left, InnoEngine.Assets.AssetArtifactKey right)
```

Determines whether two artifact keys are equal.

**Parameter `left`:** The first artifact key to compare.

**Parameter `right`:** The second artifact key to compare.

**Returns:** `true` when both keys contain the same normalized fingerprint; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L103).

## `op_Inequality`

<a id="api-1e22f726b2e2b0ce"></a>
<!-- api: M:InnoEngine.Assets.AssetArtifactKey.op_Inequality(InnoEngine.Assets.AssetArtifactKey,InnoEngine.Assets.AssetArtifactKey) 0a44a7172228b972cdc150e30c8cc56d7c525e32805d862d57f2c0577e007a8e -->

```csharp
public static bool InnoEngine.Assets.AssetArtifactKey.operator !=(InnoEngine.Assets.AssetArtifactKey left, InnoEngine.Assets.AssetArtifactKey right)
```

Determines whether two artifact keys differ.

**Parameter `left`:** The first artifact key to compare.

**Parameter `right`:** The second artifact key to compare.

**Returns:** `true` when the normalized fingerprints differ; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L120).

## `ToString`

<a id="api-242a8dc6b5d844c7"></a>
<!-- api: M:InnoEngine.Assets.AssetArtifactKey.ToString 0d3bb8fe3df7ea012806677d4e76820b65b2f5415e2b38a0f6f37d72ddc98793 -->

```csharp
public override string InnoEngine.Assets.AssetArtifactKey.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L89).

## `empty`

<a id="api-dd059137c97c4c7f"></a>
<!-- api: P:InnoEngine.Assets.AssetArtifactKey.empty 95a98ce64a0875ef04b33ff2a7a733901a963ef20c32c1c8bf36c14cc5a0fd04 -->

```csharp
public static InnoEngine.Assets.AssetArtifactKey InnoEngine.Assets.AssetArtifactKey.empty { get; }
```

Gets an empty artifact key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L41).

## `isEmpty`

<a id="api-5b56815e42e98e39"></a>
<!-- api: P:InnoEngine.Assets.AssetArtifactKey.isEmpty 98e18e69d768b692503d3c668c721cd049d8845154a0dd9a7c6731fd68232ec5 -->

```csharp
public bool InnoEngine.Assets.AssetArtifactKey.isEmpty { get; }
```

Gets whether the key is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L51).

## `value`

<a id="api-bd5438d6791f8a3f"></a>
<!-- api: P:InnoEngine.Assets.AssetArtifactKey.value 74b5b71a0f6277200059792df9438a0d2704960888522c22b2c64477f6177638 -->

```csharp
public string InnoEngine.Assets.AssetArtifactKey.value { get; }
```

Gets the normalized SHA-256 hexadecimal fingerprint, or an empty value for an unassigned key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Artifacts/AssetArtifactKey.cs#L46).
