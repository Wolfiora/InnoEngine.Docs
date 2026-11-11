---
title: "ProjectLocalId"
description: "Reference for ProjectLocalId in Inno.Core.Settings."
uid: api.inno.core.settings.9c34f18e543c590b
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `ProjectLocalId`

This reference describes `ProjectLocalId` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Settings.ProjectLocalId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2180077a83881ae9) | Method |
| [`Equals`](#api-4d15502430d9e5a0) | Method |
| [`Equals`](#api-5bcae41a70f1cdb2) | Method |
| [`FromName`](#api-d8d3887c24d09d83) | Method |
| [`GetHashCode`](#api-7fc7c5d67025e1a7) | Method |
| [`op_Equality`](#api-d7791a6852e5f9aa) | Method |
| [`op_Inequality`](#api-fdc1d6631ecd1722) | Method |
| [`ToString`](#api-f54005fd036c53ca) | Method |
| [`value`](#api-5ebebf0b5e5c4e43) | Property |

## Type declaration

<a id="api-9c34f18e543c590b"></a>
<!-- api: T:Inno.Core.Settings.ProjectLocalId 673845f8c7a9fcf6f5ac2616a7495168a2801218debf9dfa6bebd635b6b1d801 -->

```csharp
public readonly record struct Inno.Core.Settings.ProjectLocalId : System.IEquatable<Inno.Core.Settings.ProjectLocalId>
```

Stores the project-independent portion of one project-scoped identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L124).

## `#ctor`

<a id="api-2180077a83881ae9"></a>
<!-- api: M:Inno.Core.Settings.ProjectLocalId.#ctor(System.String) 912e7eebab5575732cd781775b22d53452905c21c76104245946ef2f64875b91 -->

```csharp
public Inno.Core.Settings.ProjectLocalId.ProjectLocalId(string value)
```

Creates a portable local identity.

**Parameter `value`:** Lowercase ASCII local namespace segments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L132).

## `Equals`

<a id="api-4d15502430d9e5a0"></a>
<!-- api: M:Inno.Core.Settings.ProjectLocalId.Equals(Inno.Core.Settings.ProjectLocalId) c77cae8978cf1c5fb6ee6e34153870824b9605cc3b582423fbb92b4564e784ae -->

```csharp
public bool Inno.Core.Settings.ProjectLocalId.Equals(Inno.Core.Settings.ProjectLocalId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L124).

## `Equals`

<a id="api-5bcae41a70f1cdb2"></a>
<!-- api: M:Inno.Core.Settings.ProjectLocalId.Equals(System.Object) e15913a487c0734f64121156a6feb2e560a84f89d305e7c439543165bf4fa323 -->

```csharp
public override bool Inno.Core.Settings.ProjectLocalId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L124).

## `FromName`

<a id="api-d8d3887c24d09d83"></a>
<!-- api: M:Inno.Core.Settings.ProjectLocalId.FromName(System.String) 642133bd3ec23f26c6bf40b63cf9cbd9ba8baefdbe89cf7c5c70359fb83985f5 -->

```csharp
public static Inno.Core.Settings.ProjectLocalId Inno.Core.Settings.ProjectLocalId.FromName(string name)
```

Creates a deterministic portable local identity from a display name.

**Parameter `name`:** The user-facing name.

**Returns:** The normalized local identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L154).

## `GetHashCode`

<a id="api-7fc7c5d67025e1a7"></a>
<!-- api: M:Inno.Core.Settings.ProjectLocalId.GetHashCode 659a2113a6df9e7b7da5c7456507e28497da888cb19bea869d61fcce5f26c18d -->

```csharp
public override int Inno.Core.Settings.ProjectLocalId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L124).

## `op_Equality`

<a id="api-d7791a6852e5f9aa"></a>
<!-- api: M:Inno.Core.Settings.ProjectLocalId.op_Equality(Inno.Core.Settings.ProjectLocalId,Inno.Core.Settings.ProjectLocalId) 871670c8c36bdf1ff98c731271f21655111f9e88a4047f86ad32c786fc80e1a0 -->

```csharp
public static bool Inno.Core.Settings.ProjectLocalId.operator ==(Inno.Core.Settings.ProjectLocalId left, Inno.Core.Settings.ProjectLocalId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L124).

## `op_Inequality`

<a id="api-fdc1d6631ecd1722"></a>
<!-- api: M:Inno.Core.Settings.ProjectLocalId.op_Inequality(Inno.Core.Settings.ProjectLocalId,Inno.Core.Settings.ProjectLocalId) 6531b12d072891fb216f378b39024819a5348f485beab592752e830c6701a44d -->

```csharp
public static bool Inno.Core.Settings.ProjectLocalId.operator !=(Inno.Core.Settings.ProjectLocalId left, Inno.Core.Settings.ProjectLocalId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L124).

## `ToString`

<a id="api-f54005fd036c53ca"></a>
<!-- api: M:Inno.Core.Settings.ProjectLocalId.ToString 753994b3e644060bb3a7ced0567a073d5af62a981eaa117fbbbbcee9564f1e54 -->

```csharp
public override string Inno.Core.Settings.ProjectLocalId.ToString()
```

Formats the canonical local identity.

**Returns:** The canonical local identity text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L193).

## `value`

<a id="api-5ebebf0b5e5c4e43"></a>
<!-- api: P:Inno.Core.Settings.ProjectLocalId.value 864c690134e57e6cf8c729937ab2cca189ecb91611dc356c2ea6988de107b68d -->

```csharp
public string Inno.Core.Settings.ProjectLocalId.value { get; }
```

Gets the canonical local identity text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L143).
