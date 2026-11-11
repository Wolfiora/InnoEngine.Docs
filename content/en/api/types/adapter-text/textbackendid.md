---
title: "TextBackendId"
description: "Reference for TextBackendId in Inno.Adapter.Text."
uid: api.inno.adapter.text.5048bb92223daacc
kind: api
owners:
  - Inno.Adapter.Text
apiSurface: source-clr
contracts:
  - project.inno-adapter-text#provider-and-ownership-contract
---
# `TextBackendId`

This reference describes `TextBackendId` in `Inno.Adapter.Text`. Read the [shared contract](../../projects/inno-adapter-text.md#provider-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Adapter.Text.TextBackendId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2313931419caad7c) | Method |
| [`Equals`](#api-81b7f2f9ce154c8e) | Method |
| [`Equals`](#api-e32a9de201403881) | Method |
| [`GetHashCode`](#api-2ccb59f2df66be4c) | Method |
| [`op_Equality`](#api-2dda101471489fe8) | Method |
| [`op_Inequality`](#api-91de8e4d3eff09cb) | Method |
| [`ToString`](#api-7c84442397142ed8) | Method |
| [`freeTypeHarfBuzz`](#api-784d5b6b30bd12a9) | Property |
| [`isValid`](#api-4aab35e45c55daae) | Property |
| [`value`](#api-beed4526a4d2b89b) | Property |

## Type declaration

<a id="api-5048bb92223daacc"></a>
<!-- api: T:Inno.Adapter.Text.TextBackendId 77359386f171eced6427d13bf77441bed38acb064d9354fccaf06960bbe927d5 -->

```csharp
public readonly record struct Inno.Adapter.Text.TextBackendId : System.IEquatable<Inno.Adapter.Text.TextBackendId>
```

Identifies a text implementation without closing the set of supported backends.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendId.cs#L8).

## `#ctor`

<a id="api-2313931419caad7c"></a>
<!-- api: M:Inno.Adapter.Text.TextBackendId.#ctor(System.String) 8402f4d5bca28cdf953796adbc979d7fa11436d4ac1d5c4c48641e4ec60289b4 -->

```csharp
public Inno.Adapter.Text.TextBackendId.TextBackendId(string value)
```

Creates an ordinal, case-sensitive implementation identifier.

**Parameter `value`:** A stable nonempty identifier containing no whitespace.

**Throws `System.ArgumentException`:** The identifier is empty or contains whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendId.cs#L19).

## `Equals`

<a id="api-81b7f2f9ce154c8e"></a>
<!-- api: M:Inno.Adapter.Text.TextBackendId.Equals(Inno.Adapter.Text.TextBackendId) de96d087fc9c880e3b1783903e2464712096aa4e4ee923081fec1d9ac5d8db5c -->

```csharp
public bool Inno.Adapter.Text.TextBackendId.Equals(Inno.Adapter.Text.TextBackendId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendId.cs#L8).

## `Equals`

<a id="api-e32a9de201403881"></a>
<!-- api: M:Inno.Adapter.Text.TextBackendId.Equals(System.Object) 4750617f2765cd4ff0fc8bda88185c71cda453506bf7d3d08c31fba338edb51c -->

```csharp
public override bool Inno.Adapter.Text.TextBackendId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendId.cs#L8).

## `GetHashCode`

<a id="api-2ccb59f2df66be4c"></a>
<!-- api: M:Inno.Adapter.Text.TextBackendId.GetHashCode 833a2c8c5f33f68a3f2370aa410cc2d4e015f70883eac8f4dc31ba7d0b850ab8 -->

```csharp
public override int Inno.Adapter.Text.TextBackendId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendId.cs#L8).

## `op_Equality`

<a id="api-2dda101471489fe8"></a>
<!-- api: M:Inno.Adapter.Text.TextBackendId.op_Equality(Inno.Adapter.Text.TextBackendId,Inno.Adapter.Text.TextBackendId) 845ad3ac4855b3db07a7e6dfdc7b2ecfcfba57b8f5cf3bfb2759b7ecd3676c04 -->

```csharp
public static bool Inno.Adapter.Text.TextBackendId.operator ==(Inno.Adapter.Text.TextBackendId left, Inno.Adapter.Text.TextBackendId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendId.cs#L8).

## `op_Inequality`

<a id="api-91de8e4d3eff09cb"></a>
<!-- api: M:Inno.Adapter.Text.TextBackendId.op_Inequality(Inno.Adapter.Text.TextBackendId,Inno.Adapter.Text.TextBackendId) 5047999931f079693a42afad7210ab835cd440320f25e719c97b4c1497e3003d -->

```csharp
public static bool Inno.Adapter.Text.TextBackendId.operator !=(Inno.Adapter.Text.TextBackendId left, Inno.Adapter.Text.TextBackendId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendId.cs#L8).

## `ToString`

<a id="api-7c84442397142ed8"></a>
<!-- api: M:Inno.Adapter.Text.TextBackendId.ToString d97bd5dcd599b6768aaef97a4bb6978890b6211a90eca6c6b1ec2f248af15390 -->

```csharp
public override string Inno.Adapter.Text.TextBackendId.ToString()
```

Returns the identifier without resolving a provider.

**Returns:** The stable identifier, or an empty string when unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendId.cs#L49).

## `freeTypeHarfBuzz`

<a id="api-784d5b6b30bd12a9"></a>
<!-- api: P:Inno.Adapter.Text.TextBackendId.freeTypeHarfBuzz c5a8905408a4b70003e99c7833d4a294512c9f62443cf22002ebc1b313dcb73d -->

```csharp
public static Inno.Adapter.Text.TextBackendId Inno.Adapter.Text.TextBackendId.freeTypeHarfBuzz { get; }
```

Gets the identifier of the bundled freeTypeHarfBuzz implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendId.cs#L31).

## `isValid`

<a id="api-4aab35e45c55daae"></a>
<!-- api: P:Inno.Adapter.Text.TextBackendId.isValid 4c2146e72329b7d46bfca546795a424c2023263849feee785b8793a17f42c816 -->

```csharp
public bool Inno.Adapter.Text.TextBackendId.isValid { get; }
```

Gets whether this value identifies an implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendId.cs#L41).

## `value`

<a id="api-beed4526a4d2b89b"></a>
<!-- api: P:Inno.Adapter.Text.TextBackendId.value 2d934c7ee469d7112849628610b742190bd46b10a381e1c16644abd26549d2d8 -->

```csharp
public string Inno.Adapter.Text.TextBackendId.value { get; }
```

Gets the stable identifier; a default value is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/adapters/text/Inno.Adapter.Text/TextBackendId.cs#L36).
