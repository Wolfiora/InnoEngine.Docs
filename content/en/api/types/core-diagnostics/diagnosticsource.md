---
title: "DiagnosticSource"
description: "Reference for DiagnosticSource in Inno.Core.Diagnostics."
uid: api.inno.core.diagnostics.3e6985261dfe463c
kind: api
owners:
  - Inno.Core.Diagnostics
apiSurface: source-clr
contracts:
  - project.inno-core-diagnostics#producer-and-presentation-contract
---
# `DiagnosticSource`

This reference describes `DiagnosticSource` in `Inno.Core.Diagnostics`. Read the [shared contract](../../projects/inno-core-diagnostics.md#producer-and-presentation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Diagnostics.DiagnosticSource>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-590436e6c5288b21) | Method |
| [`Equals`](#api-22d0dfb5a324697e) | Method |
| [`Equals`](#api-1978b810cf10c4e8) | Method |
| [`GetHashCode`](#api-c7ecffea261428b2) | Method |
| [`op_Equality`](#api-907aeee14c837af8) | Method |
| [`op_Inequality`](#api-b174e347192838c2) | Method |
| [`ToString`](#api-a3fc9fc805d9c103) | Method |
| [`displayName`](#api-a7c9d9321ed9b2b4) | Property |
| [`id`](#api-020c1b78691e9615) | Property |

## Type declaration

<a id="api-3e6985261dfe463c"></a>
<!-- api: T:Inno.Core.Diagnostics.DiagnosticSource 097a82321ee73d5da7277aaa71452db37400fdbc862cee803d1b39fd758c693b -->

```csharp
public readonly struct Inno.Core.Diagnostics.DiagnosticSource : System.IEquatable<Inno.Core.Diagnostics.DiagnosticSource>
```

Identifies one independent producer whose diagnostics replace its previous publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSource.cs#L8).

## `#ctor`

<a id="api-590436e6c5288b21"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticSource.#ctor(System.String,System.String) d6d4cb285ff15baab1b3c5eea391a1e572d30ff328edd07a1b45540624212a44 -->

```csharp
public Inno.Core.Diagnostics.DiagnosticSource.DiagnosticSource(string id, string displayName)
```

Creates an immutable identity for one independently replaceable diagnostic producer.

**Parameter `id`:** The globally stable machine-readable producer identifier.

**Parameter `displayName`:** The non-empty producer name presented by diagnostic consumers.

**Throws `System.ArgumentException`:** Thrown when either value is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSource.cs#L22).

## `Equals`

<a id="api-22d0dfb5a324697e"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticSource.Equals(Inno.Core.Diagnostics.DiagnosticSource) f805d0a2189d71d0a219e51562bfffb48d9fee54665f541285ddd0cb8434dbe9 -->

```csharp
public bool Inno.Core.Diagnostics.DiagnosticSource.Equals(Inno.Core.Diagnostics.DiagnosticSource other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `other`:** The value to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSource.cs#L53).

## `Equals`

<a id="api-1978b810cf10c4e8"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticSource.Equals(System.Object) b6802c2b14114a7833241530ff154b52c60f77e970f7aed2eafacb87f2d8e2b1 -->

```csharp
public override bool Inno.Core.Diagnostics.DiagnosticSource.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSource.cs#L64).

## `GetHashCode`

<a id="api-c7ecffea261428b2"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticSource.GetHashCode 3f254891f156fddb2f16440f7acea56ff6b286139863f7d1b7d796ab3b79a5ec -->

```csharp
public override int Inno.Core.Diagnostics.DiagnosticSource.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSource.cs#L72).

## `op_Equality`

<a id="api-907aeee14c837af8"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticSource.op_Equality(Inno.Core.Diagnostics.DiagnosticSource,Inno.Core.Diagnostics.DiagnosticSource) 8f571aab8d439e3039afc3429955d890b5a5aacdd946770187cc6902607e2df6 -->

```csharp
public static bool Inno.Core.Diagnostics.DiagnosticSource.operator ==(Inno.Core.Diagnostics.DiagnosticSource left, Inno.Core.Diagnostics.DiagnosticSource right)
```

Determines whether two sources have the same stable identifier.

**Parameter `left`:** The left source.

**Parameter `right`:** The right source.

**Returns:** `true` when both source identifiers are equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSource.cs#L94).

## `op_Inequality`

<a id="api-b174e347192838c2"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticSource.op_Inequality(Inno.Core.Diagnostics.DiagnosticSource,Inno.Core.Diagnostics.DiagnosticSource) c9bd285f0aff1df382a1fd4adcf3560471561308c893ddcedb4e14dd908afa86 -->

```csharp
public static bool Inno.Core.Diagnostics.DiagnosticSource.operator !=(Inno.Core.Diagnostics.DiagnosticSource left, Inno.Core.Diagnostics.DiagnosticSource right)
```

Determines whether two sources have different stable identifiers.

**Parameter `left`:** The left source.

**Parameter `right`:** The right source.

**Returns:** `true` when the source identifiers differ.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSource.cs#L111).

## `ToString`

<a id="api-a3fc9fc805d9c103"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticSource.ToString 84536ac690fc07d7215b1065b33493f00b23813a0f7e38dd618e55856a36a0c9 -->

```csharp
public override string Inno.Core.Diagnostics.DiagnosticSource.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSource.cs#L80).

## `displayName`

<a id="api-a7c9d9321ed9b2b4"></a>
<!-- api: P:Inno.Core.Diagnostics.DiagnosticSource.displayName fadce82601e1bc2466e1abeb3a7b76accaf35bfb227e977627ec6e8cc8b761af -->

```csharp
public string Inno.Core.Diagnostics.DiagnosticSource.displayName { get; }
```

Gets the user-facing producer name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSource.cs#L42).

## `id`

<a id="api-020c1b78691e9615"></a>
<!-- api: P:Inno.Core.Diagnostics.DiagnosticSource.id 3d525148afa45f4f31c0e08f73ca7096266637369012118ec5697bf171ebad3f -->

```csharp
public string Inno.Core.Diagnostics.DiagnosticSource.id { get; }
```

Gets the stable machine-readable producer identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticSource.cs#L37).
