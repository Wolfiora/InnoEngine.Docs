---
title: "ProjectScopedId"
description: "Reference for ProjectScopedId in Inno.Core.Settings."
uid: api.inno.core.settings.runtime-script.19993000a3289c8b
kind: api
owners:
  - Inno.Core.Settings
apiSurface: runtime-script
contracts:
  - project.inno-core-settings#settings-ownership-contract
  - manual.scripting.use-script-api
---
# `ProjectScopedId`

This reference describes `ProjectScopedId` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Settings.ProjectScopedId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e77f8cb32f289da5) | Method |
| [`Equals`](#api-a3d8acadf6e88334) | Method |
| [`Equals`](#api-6d5b5f1476c3a44a) | Method |
| [`GetHashCode`](#api-962b01073d6972d7) | Method |
| [`op_Equality`](#api-3d6ea63628a9e1b3) | Method |
| [`op_Inequality`](#api-6a8b4b10dca4a113) | Method |
| [`ToString`](#api-b665ce620d21a30c) | Method |
| [`name`](#api-a11ee1d3da884b4d) | Property |
| [`projectId`](#api-5debbe729053c467) | Property |
| [`value`](#api-518e8dc943f006b2) | Property |

## Type declaration

<a id="api-19993000a3289c8b"></a>
<!-- api: T:InnoEngine.Settings.ProjectScopedId c63659e41bdc7a2aa599d5407180c0938523850dc270164ac48deb5efe92adfc -->

```csharp
public readonly struct InnoEngine.Settings.ProjectScopedId : System.IEquatable<InnoEngine.Settings.ProjectScopedId>
```

Combines a mutable project namespace with a stable project-independent local identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L208).

## `#ctor`

<a id="api-e77f8cb32f289da5"></a>
<!-- api: M:InnoEngine.Settings.ProjectScopedId.#ctor(InnoEngine.Settings.ProjectId,InnoEngine.Settings.ProjectLocalId) 04373ce6689b9e3e19d50fb8d8883a798ddf77ca3a9a6857567c762705ee4ff2 -->

```csharp
public InnoEngine.Settings.ProjectScopedId.ProjectScopedId(InnoEngine.Settings.ProjectId projectId, InnoEngine.Settings.ProjectLocalId name)
```

Creates a qualified project identity.

**Parameter `projectId`:** The current project namespace.

**Parameter `name`:** The stable local identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L219).

## `Equals`

<a id="api-a3d8acadf6e88334"></a>
<!-- api: M:InnoEngine.Settings.ProjectScopedId.Equals(InnoEngine.Settings.ProjectScopedId) 1229a56798a9fba02ef44a89a0c45e31a315d2a373ef2d87b6954249af6ed88a -->

```csharp
public bool InnoEngine.Settings.ProjectScopedId.Equals(InnoEngine.Settings.ProjectScopedId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L208).

## `Equals`

<a id="api-6d5b5f1476c3a44a"></a>
<!-- api: M:InnoEngine.Settings.ProjectScopedId.Equals(System.Object) d32f83f7a9a370e82c28b9b3754bb9c2350e649bcfc10f2d340aa43543d2ff8f -->

```csharp
public override bool InnoEngine.Settings.ProjectScopedId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L208).

## `GetHashCode`

<a id="api-962b01073d6972d7"></a>
<!-- api: M:InnoEngine.Settings.ProjectScopedId.GetHashCode a1a231662e27e6796c58085654aa2b506072d9916d86c794322b37ae7dc0500e -->

```csharp
public override int InnoEngine.Settings.ProjectScopedId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L208).

## `op_Equality`

<a id="api-3d6ea63628a9e1b3"></a>
<!-- api: M:InnoEngine.Settings.ProjectScopedId.op_Equality(InnoEngine.Settings.ProjectScopedId,InnoEngine.Settings.ProjectScopedId) cf1257353f2a457896c79ed42ae35b75a01eb140c191142a7f868324550cedd1 -->

```csharp
public static bool InnoEngine.Settings.ProjectScopedId.operator ==(InnoEngine.Settings.ProjectScopedId left, InnoEngine.Settings.ProjectScopedId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L208).

## `op_Inequality`

<a id="api-6a8b4b10dca4a113"></a>
<!-- api: M:InnoEngine.Settings.ProjectScopedId.op_Inequality(InnoEngine.Settings.ProjectScopedId,InnoEngine.Settings.ProjectScopedId) 0ca97b7eb80f15fc7a1edd10af6f95e1d93ed9d416c9774c0389f16de2de2809 -->

```csharp
public static bool InnoEngine.Settings.ProjectScopedId.operator !=(InnoEngine.Settings.ProjectScopedId left, InnoEngine.Settings.ProjectScopedId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L208).

## `ToString`

<a id="api-b665ce620d21a30c"></a>
<!-- api: M:InnoEngine.Settings.ProjectScopedId.ToString e45628928dc4bcf26c8e01d0dc21e423d967fb91cb137ccc70749ad9e39f940d -->

```csharp
public override string InnoEngine.Settings.ProjectScopedId.ToString()
```

Formats the canonical qualified identity.

**Returns:** The `projectId.name` representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L252).

## `name`

<a id="api-a11ee1d3da884b4d"></a>
<!-- api: P:InnoEngine.Settings.ProjectScopedId.name 4a077915c3fa0aceb6ab6d47ac552211ffc845fb29d91bb0f669d0657d03fd68 -->

```csharp
public InnoEngine.Settings.ProjectLocalId InnoEngine.Settings.ProjectScopedId.name { get; }
```

Gets the project-independent local identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L239).

## `projectId`

<a id="api-5debbe729053c467"></a>
<!-- api: P:InnoEngine.Settings.ProjectScopedId.projectId 9bcab19a9eed9c6013cbcee3c663bf1c0d7ce49531f6a75dac30efeeb7859498 -->

```csharp
public InnoEngine.Settings.ProjectId InnoEngine.Settings.ProjectScopedId.projectId { get; }
```

Gets the project namespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L234).

## `value`

<a id="api-518e8dc943f006b2"></a>
<!-- api: P:InnoEngine.Settings.ProjectScopedId.value 6b631f5e1904e3a57325b1f30610581da28425ca1755e4277a35efce0fbb328a -->

```csharp
public string InnoEngine.Settings.ProjectScopedId.value { get; }
```

Gets the canonical `projectId.name` representation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L244).
