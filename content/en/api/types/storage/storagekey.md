---
title: "StorageKey"
description: "Reference for StorageKey in Inno.Storage."
uid: api.inno.storage.a8365331f405021e
kind: api
owners:
  - Inno.Storage
apiSurface: source-clr
contracts:
  - project.inno-storage#operation-and-ownership-contract
---
# `StorageKey`

This reference describes `StorageKey` in `Inno.Storage`. Read the [shared contract](../../projects/inno-storage.md#operation-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Storage.StorageKey>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-989d7d06c37f8487) | Method |
| [`Equals`](#api-e02cc2207fc36efe) | Method |
| [`Equals`](#api-b432c0960ad8d329) | Method |
| [`GetHashCode`](#api-1290073616002314) | Method |
| [`op_Equality`](#api-68fb30f4c1647932) | Method |
| [`op_Inequality`](#api-a9b28faaecfd72e8) | Method |
| [`ToString`](#api-4622091129bbcb80) | Method |
| [`isValid`](#api-147cc5d9bd2113e7) | Property |
| [`value`](#api-afa390f0f162793c) | Property |

## Type declaration

<a id="api-a8365331f405021e"></a>
<!-- api: T:Inno.Storage.StorageKey 49ff730009d36feefa4c8a0c67e10fa1d8cbcc83dbfba6e63a7a2bcdadf3a757 -->

```csharp
public readonly record struct Inno.Storage.StorageKey : System.IEquatable<Inno.Storage.StorageKey>
```

Identifies one sandbox-relative application storage value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageKey.cs#L8).

## `#ctor`

<a id="api-989d7d06c37f8487"></a>
<!-- api: M:Inno.Storage.StorageKey.#ctor(System.String) 56e5979e9aad07bc68fc8bf2e8e7562b96277b7250dc7d5f1f965b946730c134 -->

```csharp
public Inno.Storage.StorageKey.StorageKey(string value)
```

Creates a normalized storage key from slash-separated path segments.

**Parameter `value`:** The non-rooted key with no empty, current, or parent segments.

**Throws `System.ArgumentException`:** Thrown when `value` can escape or ambiguously address the storage root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageKey.cs#L19).

## `Equals`

<a id="api-e02cc2207fc36efe"></a>
<!-- api: M:Inno.Storage.StorageKey.Equals(Inno.Storage.StorageKey) b62739e0bd9e13561f550284521907287676f045f78628c125266ab5bdd7f951 -->

```csharp
public bool Inno.Storage.StorageKey.Equals(Inno.Storage.StorageKey other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageKey.cs#L8).

## `Equals`

<a id="api-b432c0960ad8d329"></a>
<!-- api: M:Inno.Storage.StorageKey.Equals(System.Object) c4e313ff2e8761c076e68d81f18558c0400ee357e9ad43093424857240c31798 -->

```csharp
public override bool Inno.Storage.StorageKey.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageKey.cs#L8).

## `GetHashCode`

<a id="api-1290073616002314"></a>
<!-- api: M:Inno.Storage.StorageKey.GetHashCode 07535f9ec121b5a3d02b1b394cd6bb80fe33df36cfa1ddffa634fea1cd2c4335 -->

```csharp
public override int Inno.Storage.StorageKey.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageKey.cs#L8).

## `op_Equality`

<a id="api-68fb30f4c1647932"></a>
<!-- api: M:Inno.Storage.StorageKey.op_Equality(Inno.Storage.StorageKey,Inno.Storage.StorageKey) 5a3fcfb5118f212843ec1ab66112e9a258d42b97cfc6d0402dadc752b3ea92b7 -->

```csharp
public static bool Inno.Storage.StorageKey.operator ==(Inno.Storage.StorageKey left, Inno.Storage.StorageKey right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageKey.cs#L8).

## `op_Inequality`

<a id="api-a9b28faaecfd72e8"></a>
<!-- api: M:Inno.Storage.StorageKey.op_Inequality(Inno.Storage.StorageKey,Inno.Storage.StorageKey) 9cef0884bf8e9919b3482615242284fb48a0beb53037979defa6e81dabf4e680 -->

```csharp
public static bool Inno.Storage.StorageKey.operator !=(Inno.Storage.StorageKey left, Inno.Storage.StorageKey right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageKey.cs#L8).

## `ToString`

<a id="api-4622091129bbcb80"></a>
<!-- api: M:Inno.Storage.StorageKey.ToString e5735dd8e0a547372828a5b634c6077753b1158d02ba6d9db12a0619a66e4a39 -->

```csharp
public override string Inno.Storage.StorageKey.ToString()
```

Formats this key for diagnostics and persistence.

**Returns:** The normalized key value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageKey.cs#L52).

## `isValid`

<a id="api-147cc5d9bd2113e7"></a>
<!-- api: P:Inno.Storage.StorageKey.isValid 4c088147096af0055a38ef775ed913ba871439f4d3d072d68dd11e78080d32cd -->

```csharp
public bool Inno.Storage.StorageKey.isValid { get; }
```

Gets whether this value contains a valid storage key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageKey.cs#L44).

## `value`

<a id="api-afa390f0f162793c"></a>
<!-- api: P:Inno.Storage.StorageKey.value 484bd2beceafd2766debebb34461115cb679ec0626b4bdebcc2beaab4aa18509 -->

```csharp
public string Inno.Storage.StorageKey.value { get; }
```

Gets the normalized slash-separated key value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageKey.cs#L39).
