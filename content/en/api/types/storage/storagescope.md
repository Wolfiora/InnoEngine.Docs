---
title: "StorageScope"
description: "Reference for StorageScope in Inno.Storage."
uid: api.inno.storage.2692c5b144332fb4
kind: api
owners:
  - Inno.Storage
apiSurface: source-clr
contracts:
  - project.inno-storage#operation-and-ownership-contract
---
# `StorageScope`

This reference describes `StorageScope` in `Inno.Storage`. Read the [shared contract](../../projects/inno-storage.md#operation-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Storage.StorageScope>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-07fe1ece1e7749e1) | Method |
| [`Equals`](#api-8485d60e38473455) | Method |
| [`Equals`](#api-7e166fd7e0005fe5) | Method |
| [`GetHashCode`](#api-7a7c5e46f25a8ffd) | Method |
| [`op_Equality`](#api-8bb799f07c097972) | Method |
| [`op_Inequality`](#api-ba55c2c4fc6d1765) | Method |
| [`ToString`](#api-68c1101320f7aa9a) | Method |
| [`isValid`](#api-740813bb8a3c5c42) | Property |
| [`value`](#api-f0b5ce218829466e) | Property |

## Type declaration

<a id="api-2692c5b144332fb4"></a>
<!-- api: T:Inno.Storage.StorageScope a9927897495afa32e3e72cad82afd487b5aa0b1c1b033e8b558b480356b14f21 -->

```csharp
public readonly record struct Inno.Storage.StorageScope : System.IEquatable<Inno.Storage.StorageScope>
```

Identifies an application data namespace independently of its physical storage location.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageScope.cs#L8).

## `#ctor`

<a id="api-07fe1ece1e7749e1"></a>
<!-- api: M:Inno.Storage.StorageScope.#ctor(System.String) a3549b64005ebda3570a8ce2be8591ff470bf422b032e38fbb66eaeb2a8a858a -->

```csharp
public Inno.Storage.StorageScope.StorageScope(string value)
```

Captures a portable, case-sensitive application namespace.

**Parameter `value`:** A nonempty namespace containing ASCII letters, digits, dots, underscores, or hyphens.

**Throws `System.ArgumentException`:** The namespace is empty, contains path syntax, has a leading or trailing dot,
or contains a reserved portable device name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageScope.cs#L20).

## `Equals`

<a id="api-8485d60e38473455"></a>
<!-- api: M:Inno.Storage.StorageScope.Equals(Inno.Storage.StorageScope) 880d538c5d61aca134dd9d2b0fa17be5427622c8e6fa4224641250937564f00a -->

```csharp
public bool Inno.Storage.StorageScope.Equals(Inno.Storage.StorageScope other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageScope.cs#L8).

## `Equals`

<a id="api-7e166fd7e0005fe5"></a>
<!-- api: M:Inno.Storage.StorageScope.Equals(System.Object) 5a4d669961396b28cc8f0c33ca2d908254b9277009f1a4f3cd21de73a2f64fba -->

```csharp
public override bool Inno.Storage.StorageScope.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageScope.cs#L8).

## `GetHashCode`

<a id="api-7a7c5e46f25a8ffd"></a>
<!-- api: M:Inno.Storage.StorageScope.GetHashCode 5d4648e49a7f4c7a0d0af41b23dd70d8288b3d3e14f0e7d7780b8a78f06cd9f4 -->

```csharp
public override int Inno.Storage.StorageScope.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageScope.cs#L8).

## `op_Equality`

<a id="api-8bb799f07c097972"></a>
<!-- api: M:Inno.Storage.StorageScope.op_Equality(Inno.Storage.StorageScope,Inno.Storage.StorageScope) ff37db1a8dbc03ef1f651ed136c0ba8d46c5165d150d22536e37381137838dfd -->

```csharp
public static bool Inno.Storage.StorageScope.operator ==(Inno.Storage.StorageScope left, Inno.Storage.StorageScope right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageScope.cs#L8).

## `op_Inequality`

<a id="api-ba55c2c4fc6d1765"></a>
<!-- api: M:Inno.Storage.StorageScope.op_Inequality(Inno.Storage.StorageScope,Inno.Storage.StorageScope) f7c0f7efd47c7f3ac254e3c6ff2ac078eda14b4424d697c42ab33c1c768163dd -->

```csharp
public static bool Inno.Storage.StorageScope.operator !=(Inno.Storage.StorageScope left, Inno.Storage.StorageScope right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageScope.cs#L8).

## `ToString`

<a id="api-68c1101320f7aa9a"></a>
<!-- api: M:Inno.Storage.StorageScope.ToString 3ed027d342bc1e12e4931a1c266cb681aa8fb094e908c2d579ff358f39b51cba -->

```csharp
public override string Inno.Storage.StorageScope.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageScope.cs#L58).

## `isValid`

<a id="api-740813bb8a3c5c42"></a>
<!-- api: P:Inno.Storage.StorageScope.isValid 73465defe06295603420452d69f4c6e7aa915a127c400f07400c53de3efb57a9 -->

```csharp
public bool Inno.Storage.StorageScope.isValid { get; }
```

Gets whether this value identifies a storage namespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageScope.cs#L55).

## `value`

<a id="api-f0b5ce218829466e"></a>
<!-- api: P:Inno.Storage.StorageScope.value 891b0f871ed3db5ea40460f76daaec1efc63eb6d5b4cb861ac35881aa33a423f -->

```csharp
public string? Inno.Storage.StorageScope.value { get; }
```

Gets the logical namespace, or null for an unassigned value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/storage/Inno.Storage/StorageScope.cs#L50).
