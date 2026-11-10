---
title: "StorageBackendId"
description: "Reference for StorageBackendId in Inno.Adapter.Storage."
uid: api.inno.adapter.storage.b084ac3fc470954c
kind: api
owners:
  - Inno.Adapter.Storage
apiSurface: source-clr
contracts:
  - project.inno-adapter-storage#ownership-and-scope-contract
---
# `StorageBackendId`

This reference describes `StorageBackendId` in `Inno.Adapter.Storage`. Read the [shared contract](../../projects/inno-adapter-storage.md#ownership-and-scope-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Adapter.Storage.StorageBackendId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-278aa70e31f10670) | Method |
| [`Equals`](#api-3265ff01094b65c6) | Method |
| [`Equals`](#api-019b69c1e43459bb) | Method |
| [`GetHashCode`](#api-5264725266744844) | Method |
| [`op_Equality`](#api-8260b3cc5a22b9c3) | Method |
| [`op_Inequality`](#api-3a955feca5e2da2e) | Method |
| [`ToString`](#api-f0b7879efabc5f68) | Method |
| [`browser`](#api-5946466ad8323b4e) | Property |
| [`fileSystem`](#api-8bc75c0b0deabf17) | Property |
| [`isValid`](#api-dee8d11fe7bcf816) | Property |
| [`value`](#api-e094e2ab8b1b553e) | Property |

## Type declaration

<a id="api-b084ac3fc470954c"></a>
<!-- api: T:Inno.Adapter.Storage.StorageBackendId d699637c54de4debf7b12bce737696174b5dd24939a9cb825bc247660142f3e4 -->

```csharp
public readonly record struct Inno.Adapter.Storage.StorageBackendId : System.IEquatable<Inno.Adapter.Storage.StorageBackendId>
```

Identifies a storage implementation without closing the set of supported backends.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendId.cs#L8).

## `#ctor`

<a id="api-278aa70e31f10670"></a>
<!-- api: M:Inno.Adapter.Storage.StorageBackendId.#ctor(System.String) 80006f7da26a8a263af21b82577367387bfae209591551d43efe349f37916169 -->

```csharp
public Inno.Adapter.Storage.StorageBackendId.StorageBackendId(string value)
```

Creates an ordinal, case-sensitive implementation identifier.

**Parameter `value`:** A stable nonempty identifier containing no whitespace.

**Throws `System.ArgumentException`:** The identifier is empty or contains whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendId.cs#L19).

## `Equals`

<a id="api-3265ff01094b65c6"></a>
<!-- api: M:Inno.Adapter.Storage.StorageBackendId.Equals(Inno.Adapter.Storage.StorageBackendId) 3b22cf11c3c380b6c850bbf8cb7b04d176636d604847f150ed4e2bafd8028974 -->

```csharp
public bool Inno.Adapter.Storage.StorageBackendId.Equals(Inno.Adapter.Storage.StorageBackendId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendId.cs#L8).

## `Equals`

<a id="api-019b69c1e43459bb"></a>
<!-- api: M:Inno.Adapter.Storage.StorageBackendId.Equals(System.Object) c092f8040ffb458efd75836e925f7a1d0bdec97078a64f04e21969fc9527ac62 -->

```csharp
public override bool Inno.Adapter.Storage.StorageBackendId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendId.cs#L8).

## `GetHashCode`

<a id="api-5264725266744844"></a>
<!-- api: M:Inno.Adapter.Storage.StorageBackendId.GetHashCode a6c9ccb5b536b68079562683a09f43efedddfe9c480660c928fe64acc6862bb9 -->

```csharp
public override int Inno.Adapter.Storage.StorageBackendId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendId.cs#L8).

## `op_Equality`

<a id="api-8260b3cc5a22b9c3"></a>
<!-- api: M:Inno.Adapter.Storage.StorageBackendId.op_Equality(Inno.Adapter.Storage.StorageBackendId,Inno.Adapter.Storage.StorageBackendId) 49367758b6ae79e03ebd19968c35272a038896fdb9e4396d6d010b1c2ae585a5 -->

```csharp
public static bool Inno.Adapter.Storage.StorageBackendId.operator ==(Inno.Adapter.Storage.StorageBackendId left, Inno.Adapter.Storage.StorageBackendId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendId.cs#L8).

## `op_Inequality`

<a id="api-3a955feca5e2da2e"></a>
<!-- api: M:Inno.Adapter.Storage.StorageBackendId.op_Inequality(Inno.Adapter.Storage.StorageBackendId,Inno.Adapter.Storage.StorageBackendId) fcecd73e651cdf0d86c9ce636798dcaf68c75bff73a0fa1b3b9c19ff38f72260 -->

```csharp
public static bool Inno.Adapter.Storage.StorageBackendId.operator !=(Inno.Adapter.Storage.StorageBackendId left, Inno.Adapter.Storage.StorageBackendId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendId.cs#L8).

## `ToString`

<a id="api-f0b7879efabc5f68"></a>
<!-- api: M:Inno.Adapter.Storage.StorageBackendId.ToString f148fb54bdd88392cd4831759e75c99cd18038b9f215d07d719dd20d71c48a6d -->

```csharp
public override string Inno.Adapter.Storage.StorageBackendId.ToString()
```

Returns the identifier without resolving a provider.

**Returns:** The stable identifier, or an empty string when unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendId.cs#L54).

## `browser`

<a id="api-5946466ad8323b4e"></a>
<!-- api: P:Inno.Adapter.Storage.StorageBackendId.browser 936b81ff688ecc649ee521a8d124fcee3a2a0dc16c8f2f840b0f880fb2ec0c55 -->

```csharp
public static Inno.Adapter.Storage.StorageBackendId Inno.Adapter.Storage.StorageBackendId.browser { get; }
```

Gets the identifier of the bundled browser implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendId.cs#L36).

## `fileSystem`

<a id="api-8bc75c0b0deabf17"></a>
<!-- api: P:Inno.Adapter.Storage.StorageBackendId.fileSystem a4caff359204b48987df0ccce4e0a2ee085ce5e58ea9903ea715c33fea20a9ee -->

```csharp
public static Inno.Adapter.Storage.StorageBackendId Inno.Adapter.Storage.StorageBackendId.fileSystem { get; }
```

Gets the identifier of the bundled fileSystem implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendId.cs#L31).

## `isValid`

<a id="api-dee8d11fe7bcf816"></a>
<!-- api: P:Inno.Adapter.Storage.StorageBackendId.isValid 2c8aeced0abd89dd62f0ce2dbe04ba54db0ad9d52b5fa592ea9f4ff95388f2f2 -->

```csharp
public bool Inno.Adapter.Storage.StorageBackendId.isValid { get; }
```

Gets whether this value identifies an implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendId.cs#L46).

## `value`

<a id="api-e094e2ab8b1b553e"></a>
<!-- api: P:Inno.Adapter.Storage.StorageBackendId.value e6f379402eab9dbea446402d2edf4eaf190601787972d7a38115117e10fabdf9 -->

```csharp
public string Inno.Adapter.Storage.StorageBackendId.value { get; }
```

Gets the stable identifier; a default value is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/adapters/storage/Inno.Adapter.Storage/StorageBackendId.cs#L41).
