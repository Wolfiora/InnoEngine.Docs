---
title: "ProjectScopedId"
description: "Reference for ProjectScopedId in Inno.Core.Settings."
uid: api.inno.core.settings.1470da8e0a18c581
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `ProjectScopedId`

This reference describes `ProjectScopedId` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Settings.ProjectScopedId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-817fce5c24113614) | Method |
| [`Equals`](#api-a673f76728769025) | Method |
| [`Equals`](#api-ea009c97707763c5) | Method |
| [`GetHashCode`](#api-3240edf6044b8ab8) | Method |
| [`op_Equality`](#api-d11b6e3f859e4005) | Method |
| [`op_Inequality`](#api-656aa111d8fcc8c3) | Method |
| [`ToString`](#api-cfff116bb7e2ce14) | Method |
| [`name`](#api-ca1796425a4072f3) | Property |
| [`projectId`](#api-29582e919b03ef34) | Property |
| [`value`](#api-ef7fac555d4460e7) | Property |

## Type declaration

<a id="api-1470da8e0a18c581"></a>
<!-- api: T:Inno.Core.Settings.ProjectScopedId 02132f7d1f1d540c84239a12ecaad6a28e796e2145bc8b12bd7efb358a152d6b -->

```csharp
public readonly record struct Inno.Core.Settings.ProjectScopedId : System.IEquatable<Inno.Core.Settings.ProjectScopedId>
```

Combines a mutable project namespace with a stable project-independent local identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L208).

## `#ctor`

<a id="api-817fce5c24113614"></a>
<!-- api: M:Inno.Core.Settings.ProjectScopedId.#ctor(Inno.Core.Settings.ProjectId,Inno.Core.Settings.ProjectLocalId) 2d5e5468cff8bc88f6d8813e89adcdcb54c20212d69221216ae76ac015df3b01 -->

```csharp
public Inno.Core.Settings.ProjectScopedId.ProjectScopedId(Inno.Core.Settings.ProjectId projectId, Inno.Core.Settings.ProjectLocalId name)
```

Creates a qualified project identity.

**Parameter `projectId`:** The current project namespace.

**Parameter `name`:** The stable local identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L219).

## `Equals`

<a id="api-a673f76728769025"></a>
<!-- api: M:Inno.Core.Settings.ProjectScopedId.Equals(Inno.Core.Settings.ProjectScopedId) 815ded8f4c1735bbf279b4693e5f705edfc5564e95c2a152ce6e578997a023c0 -->

```csharp
public bool Inno.Core.Settings.ProjectScopedId.Equals(Inno.Core.Settings.ProjectScopedId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L208).

## `Equals`

<a id="api-ea009c97707763c5"></a>
<!-- api: M:Inno.Core.Settings.ProjectScopedId.Equals(System.Object) 0d92fa0d54ab8c0dab8abfca65247be983121e277cdde837485e0df1a647a1ce -->

```csharp
public override bool Inno.Core.Settings.ProjectScopedId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L208).

## `GetHashCode`

<a id="api-3240edf6044b8ab8"></a>
<!-- api: M:Inno.Core.Settings.ProjectScopedId.GetHashCode af57eedf412ef36a0563d77de3f9a8d96416948d42f758f91887e616407435e3 -->

```csharp
public override int Inno.Core.Settings.ProjectScopedId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L208).

## `op_Equality`

<a id="api-d11b6e3f859e4005"></a>
<!-- api: M:Inno.Core.Settings.ProjectScopedId.op_Equality(Inno.Core.Settings.ProjectScopedId,Inno.Core.Settings.ProjectScopedId) 3e3351094a6d9c681ab5f459d5ce115c2da1dd7cc88b7431169557e688c44a94 -->

```csharp
public static bool Inno.Core.Settings.ProjectScopedId.operator ==(Inno.Core.Settings.ProjectScopedId left, Inno.Core.Settings.ProjectScopedId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L208).

## `op_Inequality`

<a id="api-656aa111d8fcc8c3"></a>
<!-- api: M:Inno.Core.Settings.ProjectScopedId.op_Inequality(Inno.Core.Settings.ProjectScopedId,Inno.Core.Settings.ProjectScopedId) 1d1f7e4d1f494b6d959f171771cd5f31ce63868cc373a0f200b2e08db26a90ee -->

```csharp
public static bool Inno.Core.Settings.ProjectScopedId.operator !=(Inno.Core.Settings.ProjectScopedId left, Inno.Core.Settings.ProjectScopedId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L208).

## `ToString`

<a id="api-cfff116bb7e2ce14"></a>
<!-- api: M:Inno.Core.Settings.ProjectScopedId.ToString b671709c3b563c3b84b3a58404b9a88f674018d04253dacf9cfd5bf6b3d4639a -->

```csharp
public override string Inno.Core.Settings.ProjectScopedId.ToString()
```

Formats the canonical qualified identity.

**Returns:** The `projectId.name` representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L252).

## `name`

<a id="api-ca1796425a4072f3"></a>
<!-- api: P:Inno.Core.Settings.ProjectScopedId.name 53d2ab0c2a833b5d73e25b9ce23c4f47dd3bf966a1976be44e49bd342471a7a1 -->

```csharp
public Inno.Core.Settings.ProjectLocalId Inno.Core.Settings.ProjectScopedId.name { get; }
```

Gets the project-independent local identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L239).

## `projectId`

<a id="api-29582e919b03ef34"></a>
<!-- api: P:Inno.Core.Settings.ProjectScopedId.projectId 36fd78440304a05343865f826f8b1a3fdf8887608143ee962c93c566b982bfb8 -->

```csharp
public Inno.Core.Settings.ProjectId Inno.Core.Settings.ProjectScopedId.projectId { get; }
```

Gets the project namespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L234).

## `value`

<a id="api-ef7fac555d4460e7"></a>
<!-- api: P:Inno.Core.Settings.ProjectScopedId.value 6dd7b115a938e5b91a5450d5e54b0d58dd9cdf6b6c163a2a939ce7389c76ae5f -->

```csharp
public string Inno.Core.Settings.ProjectScopedId.value { get; }
```

Gets the canonical `projectId.name` representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L244).
