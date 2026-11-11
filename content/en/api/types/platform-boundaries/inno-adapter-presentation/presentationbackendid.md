---
title: "PresentationBackendId"
description: "Reference for PresentationBackendId in Inno.Adapter.Presentation."
uid: api.inno.adapter.presentation.ffbbb64d9deecb2d
kind: api
owners:
  - Inno.Adapter.Presentation
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation
---
# `PresentationBackendId`

This reference describes `PresentationBackendId` in `Inno.Adapter.Presentation`. Read the [shared contract](../../../projects/inno-adapter-presentation.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Adapter.Presentation.PresentationBackendId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f8f171a1ba0ce402) | Method |
| [`Equals`](#api-67bfe20cbad30c56) | Method |
| [`Equals`](#api-18ef55525612a19d) | Method |
| [`GetHashCode`](#api-97c232c7c01afc84) | Method |
| [`op_Equality`](#api-000be5fb3b6c3ad1) | Method |
| [`op_Inequality`](#api-2da9335f59a17870) | Method |
| [`ToString`](#api-700c882e4c8601ee) | Method |
| [`imGui`](#api-d9d2348903434a2f) | Property |
| [`isValid`](#api-8b137be7a4867491) | Property |
| [`value`](#api-eca2bbec79ad8d94) | Property |

## Type declaration

<a id="api-ffbbb64d9deecb2d"></a>
<!-- api: T:Inno.Adapter.Presentation.PresentationBackendId fefdcab5e77e1708c26cf94bc7ef334300c1ad7f053a42a7304a18578b8df099 -->

```csharp
public readonly record struct Inno.Adapter.Presentation.PresentationBackendId : System.IEquatable<Inno.Adapter.Presentation.PresentationBackendId>
```

Identifies a presentation implementation without closing the set of supported backends.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendId.cs#L8).

## `#ctor`

<a id="api-f8f171a1ba0ce402"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationBackendId.#ctor(System.String) 9fd28775c4142a9baa1abec923ae61607c023bd1b8bda0c251bbfb592da7b111 -->

```csharp
public Inno.Adapter.Presentation.PresentationBackendId.PresentationBackendId(string value)
```

Creates an ordinal, case-sensitive implementation identifier.

**Parameter `value`:** A stable nonempty identifier containing no whitespace.

**Throws `System.ArgumentException`:** The identifier is empty or contains whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendId.cs#L19).

## `Equals`

<a id="api-67bfe20cbad30c56"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationBackendId.Equals(Inno.Adapter.Presentation.PresentationBackendId) 1923798d66fa84899b03d34d14fee039c17ac4f5c4e50fb2de3778bc89662c97 -->

```csharp
public bool Inno.Adapter.Presentation.PresentationBackendId.Equals(Inno.Adapter.Presentation.PresentationBackendId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendId.cs#L8).

## `Equals`

<a id="api-18ef55525612a19d"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationBackendId.Equals(System.Object) 198266edfcdcb7e31ed9aa64a012a8be9b6a7ddf736c608d1c6a564ce7e79f9f -->

```csharp
public override bool Inno.Adapter.Presentation.PresentationBackendId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendId.cs#L8).

## `GetHashCode`

<a id="api-97c232c7c01afc84"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationBackendId.GetHashCode afde939f66d077eabbb19fc4eff8c520a4523b2cd5db6a647d7b92d0445f8d6b -->

```csharp
public override int Inno.Adapter.Presentation.PresentationBackendId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendId.cs#L8).

## `op_Equality`

<a id="api-000be5fb3b6c3ad1"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationBackendId.op_Equality(Inno.Adapter.Presentation.PresentationBackendId,Inno.Adapter.Presentation.PresentationBackendId) 40ae458ac8f1867c44db2fa9201aad53a5e5cf8989664f2b8251fb477a276ad3 -->

```csharp
public static bool Inno.Adapter.Presentation.PresentationBackendId.operator ==(Inno.Adapter.Presentation.PresentationBackendId left, Inno.Adapter.Presentation.PresentationBackendId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendId.cs#L8).

## `op_Inequality`

<a id="api-2da9335f59a17870"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationBackendId.op_Inequality(Inno.Adapter.Presentation.PresentationBackendId,Inno.Adapter.Presentation.PresentationBackendId) ecedb88686f774c7ab0ae3cfc4f0f5013c1d4e2210e1b20e24d20300a7422f69 -->

```csharp
public static bool Inno.Adapter.Presentation.PresentationBackendId.operator !=(Inno.Adapter.Presentation.PresentationBackendId left, Inno.Adapter.Presentation.PresentationBackendId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendId.cs#L8).

## `ToString`

<a id="api-700c882e4c8601ee"></a>
<!-- api: M:Inno.Adapter.Presentation.PresentationBackendId.ToString 91b4d91941a28cf8059c515217d35e651242889f8b98473d96f08f19d720def0 -->

```csharp
public override string Inno.Adapter.Presentation.PresentationBackendId.ToString()
```

Returns the identifier without resolving a provider.

**Returns:** The stable identifier, or an empty string when unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendId.cs#L49).

## `imGui`

<a id="api-d9d2348903434a2f"></a>
<!-- api: P:Inno.Adapter.Presentation.PresentationBackendId.imGui f2a2679c79ff5e8ce291ad5f927634f22e838a72a6c4e471ee7f130384561d11 -->

```csharp
public static Inno.Adapter.Presentation.PresentationBackendId Inno.Adapter.Presentation.PresentationBackendId.imGui { get; }
```

Gets the identifier of the bundled ImGui implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendId.cs#L31).

## `isValid`

<a id="api-8b137be7a4867491"></a>
<!-- api: P:Inno.Adapter.Presentation.PresentationBackendId.isValid c2b47b9d400ec2a671f0340714613be689935f802c7b608d47ad44d40a931791 -->

```csharp
public bool Inno.Adapter.Presentation.PresentationBackendId.isValid { get; }
```

Gets whether this value identifies an implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendId.cs#L41).

## `value`

<a id="api-eca2bbec79ad8d94"></a>
<!-- api: P:Inno.Adapter.Presentation.PresentationBackendId.value 19aa8fb1629a9b3e08ca762e66d3bb5f955261cb6ccd637fbe8134a87b78b3ff -->

```csharp
public string Inno.Adapter.Presentation.PresentationBackendId.value { get; }
```

Gets the stable identifier; a default value is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/presentation/Inno.Adapter.Presentation/PresentationBackendId.cs#L36).
