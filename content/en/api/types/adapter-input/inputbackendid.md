---
title: "InputBackendId"
description: "Reference for InputBackendId in Inno.Adapter.Input."
uid: api.inno.adapter.input.f540cf6609f88e4f
kind: api
owners:
  - Inno.Adapter.Input
apiSurface: source-clr
contracts:
  - project.inno-adapter-input#ownership-and-threading
---
# `InputBackendId`

This reference describes `InputBackendId` in `Inno.Adapter.Input`. Read the [shared contract](../../projects/inno-adapter-input.md#ownership-and-threading) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Adapter.Input.InputBackendId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-41d6c7a01ac1e6bc) | Method |
| [`Equals`](#api-756060ee7a24c1d2) | Method |
| [`Equals`](#api-0a15a5b172928e8e) | Method |
| [`GetHashCode`](#api-756736c1bd43cf69) | Method |
| [`op_Equality`](#api-6ddc8350e78faca1) | Method |
| [`op_Inequality`](#api-8f93d42dee98d565) | Method |
| [`ToString`](#api-c935b7b9adfc259d) | Method |
| [`events`](#api-e0a21f47327d89c4) | Property |
| [`isValid`](#api-32d363f053688f96) | Property |
| [`value`](#api-91f17209689df77d) | Property |

## Type declaration

<a id="api-f540cf6609f88e4f"></a>
<!-- api: T:Inno.Adapter.Input.InputBackendId 00cb420788d6aa65e614e61453f14b980d178b41ecd3a3b34c10113aa5a341ce -->

```csharp
public readonly record struct Inno.Adapter.Input.InputBackendId : System.IEquatable<Inno.Adapter.Input.InputBackendId>
```

Identifies a input implementation without closing the set of supported backends.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendId.cs#L8).

## `#ctor`

<a id="api-41d6c7a01ac1e6bc"></a>
<!-- api: M:Inno.Adapter.Input.InputBackendId.#ctor(System.String) 0a428bd6c492ff07bc1f2e12494b3e6237eab44d7b80d51839c29ba347d0e56e -->

```csharp
public Inno.Adapter.Input.InputBackendId.InputBackendId(string value)
```

Creates an ordinal, case-sensitive implementation identifier.

**Parameter `value`:** A stable nonempty identifier containing no whitespace.

**Throws `System.ArgumentException`:** The identifier is empty or contains whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendId.cs#L19).

## `Equals`

<a id="api-756060ee7a24c1d2"></a>
<!-- api: M:Inno.Adapter.Input.InputBackendId.Equals(Inno.Adapter.Input.InputBackendId) 6564dea394c2919d4c407a39f2aa4deb18d7ce06b3192aa4793e15705050e9e9 -->

```csharp
public bool Inno.Adapter.Input.InputBackendId.Equals(Inno.Adapter.Input.InputBackendId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendId.cs#L8).

## `Equals`

<a id="api-0a15a5b172928e8e"></a>
<!-- api: M:Inno.Adapter.Input.InputBackendId.Equals(System.Object) 794171c6b34d01a2917648082d834ee2a879fb9535f4a76c441cbec9e1bda29d -->

```csharp
public override bool Inno.Adapter.Input.InputBackendId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendId.cs#L8).

## `GetHashCode`

<a id="api-756736c1bd43cf69"></a>
<!-- api: M:Inno.Adapter.Input.InputBackendId.GetHashCode 6efbcb5c5011020b91590d638e23e3b97a16d40a390c802322cfb8904f3f0f8b -->

```csharp
public override int Inno.Adapter.Input.InputBackendId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendId.cs#L8).

## `op_Equality`

<a id="api-6ddc8350e78faca1"></a>
<!-- api: M:Inno.Adapter.Input.InputBackendId.op_Equality(Inno.Adapter.Input.InputBackendId,Inno.Adapter.Input.InputBackendId) 908404e669f146d0937122a4bfec8eec13577c12ddd82cd814b9698982f667bc -->

```csharp
public static bool Inno.Adapter.Input.InputBackendId.operator ==(Inno.Adapter.Input.InputBackendId left, Inno.Adapter.Input.InputBackendId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendId.cs#L8).

## `op_Inequality`

<a id="api-8f93d42dee98d565"></a>
<!-- api: M:Inno.Adapter.Input.InputBackendId.op_Inequality(Inno.Adapter.Input.InputBackendId,Inno.Adapter.Input.InputBackendId) 2f0fbd1d3422939e12fd9174912ba7cb63a9194750cdccc829f0c55a40075ad6 -->

```csharp
public static bool Inno.Adapter.Input.InputBackendId.operator !=(Inno.Adapter.Input.InputBackendId left, Inno.Adapter.Input.InputBackendId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendId.cs#L8).

## `ToString`

<a id="api-c935b7b9adfc259d"></a>
<!-- api: M:Inno.Adapter.Input.InputBackendId.ToString 6007a7f55144d35833479e6f9fa266e23fab8b72fc5b0b2ff863ac3b1f04564a -->

```csharp
public override string Inno.Adapter.Input.InputBackendId.ToString()
```

Returns the identifier without resolving a provider.

**Returns:** The stable identifier, or an empty string when unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendId.cs#L49).

## `events`

<a id="api-e0a21f47327d89c4"></a>
<!-- api: P:Inno.Adapter.Input.InputBackendId.events d2b7e72a62838029fd5277c05d29d3ef6b14ea4a517556f3dc35dcfcc53c0a60 -->

```csharp
public static Inno.Adapter.Input.InputBackendId Inno.Adapter.Input.InputBackendId.events { get; }
```

Gets the identifier of the backend-neutral event accumulator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendId.cs#L31).

## `isValid`

<a id="api-32d363f053688f96"></a>
<!-- api: P:Inno.Adapter.Input.InputBackendId.isValid 628dbab458e1d9545c858eac0a102515d5bd1f01257105aeb7e4c3fc0e45f1fa -->

```csharp
public bool Inno.Adapter.Input.InputBackendId.isValid { get; }
```

Gets whether this value identifies an implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendId.cs#L41).

## `value`

<a id="api-91f17209689df77d"></a>
<!-- api: P:Inno.Adapter.Input.InputBackendId.value f2cde5b2a2ee3cdb062b5e3313fada7bc1f9aace7ae49f4b03162e96858ca9cb -->

```csharp
public string Inno.Adapter.Input.InputBackendId.value { get; }
```

Gets the stable identifier; a default value is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/adapters/input/Inno.Adapter.Input/InputBackendId.cs#L36).
