---
title: "ProjectLocalId"
description: "Reference for ProjectLocalId in Inno.Core.Settings."
uid: api.inno.core.settings.runtime-script.c109bd86eb6caa2c
kind: api
owners:
  - Inno.Core.Settings
apiSurface: runtime-script
contracts:
  - project.inno-core-settings#settings-ownership-contract
  - manual.scripting.use-script-api
---
# `ProjectLocalId`

This reference describes `ProjectLocalId` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Settings.ProjectLocalId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-191bba19c6ab0b91) | Method |
| [`Equals`](#api-d2cee22463844bdf) | Method |
| [`Equals`](#api-5a23411c6b9744fb) | Method |
| [`FromName`](#api-dcf5eb814a7396bc) | Method |
| [`GetHashCode`](#api-59d8ee581e4d46d7) | Method |
| [`op_Equality`](#api-a83eec35aadec50f) | Method |
| [`op_Inequality`](#api-5886c11e74354429) | Method |
| [`ToString`](#api-9894c40af28008ca) | Method |
| [`value`](#api-6e8b3b8f994af066) | Property |

## Type declaration

<a id="api-c109bd86eb6caa2c"></a>
<!-- api: T:InnoEngine.Settings.ProjectLocalId 803c41a0d49e4935be5258c7a228598c8c7a58a0c2ccc8cd174e91c575bca76a -->

```csharp
public readonly struct InnoEngine.Settings.ProjectLocalId : System.IEquatable<InnoEngine.Settings.ProjectLocalId>
```

Stores the project-independent portion of one project-scoped identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L124).

## `#ctor`

<a id="api-191bba19c6ab0b91"></a>
<!-- api: M:InnoEngine.Settings.ProjectLocalId.#ctor(System.String) 4f3d636b4cc853ec9980c4df4d0458d615688e244838bd6aa0ed8a3b1c433026 -->

```csharp
public InnoEngine.Settings.ProjectLocalId.ProjectLocalId(string value)
```

Creates a portable local identity.

**Parameter `value`:** Lowercase ASCII local namespace segments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L132).

## `Equals`

<a id="api-d2cee22463844bdf"></a>
<!-- api: M:InnoEngine.Settings.ProjectLocalId.Equals(InnoEngine.Settings.ProjectLocalId) cce7bb8f271cc4c6e992853d87ee65ac035e891a1e49f58963d7180061a21e61 -->

```csharp
public bool InnoEngine.Settings.ProjectLocalId.Equals(InnoEngine.Settings.ProjectLocalId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L124).

## `Equals`

<a id="api-5a23411c6b9744fb"></a>
<!-- api: M:InnoEngine.Settings.ProjectLocalId.Equals(System.Object) 0372c10934b76859090f355179148008e4d9a4772e49d62a10c1fe75c120bc16 -->

```csharp
public override bool InnoEngine.Settings.ProjectLocalId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L124).

## `FromName`

<a id="api-dcf5eb814a7396bc"></a>
<!-- api: M:InnoEngine.Settings.ProjectLocalId.FromName(System.String) b6dff8a88afeecedbd07714bba6191bc0eb08622eb6af6e50dcea6cf79aba5ba -->

```csharp
public static InnoEngine.Settings.ProjectLocalId InnoEngine.Settings.ProjectLocalId.FromName(string name)
```

Creates a deterministic portable local identity from a display name.

**Parameter `name`:** The user-facing name.

**Returns:** The normalized local identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L154).

## `GetHashCode`

<a id="api-59d8ee581e4d46d7"></a>
<!-- api: M:InnoEngine.Settings.ProjectLocalId.GetHashCode 7bbfa1bf0d3b7ac8b42726dc4ec1af0187623dbc33f8b73f86032946dfc0fded -->

```csharp
public override int InnoEngine.Settings.ProjectLocalId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L124).

## `op_Equality`

<a id="api-a83eec35aadec50f"></a>
<!-- api: M:InnoEngine.Settings.ProjectLocalId.op_Equality(InnoEngine.Settings.ProjectLocalId,InnoEngine.Settings.ProjectLocalId) 6bcf266f718b09e7faee06c7ff159529aa190c6e28045c92df0ce68d44b788e2 -->

```csharp
public static bool InnoEngine.Settings.ProjectLocalId.operator ==(InnoEngine.Settings.ProjectLocalId left, InnoEngine.Settings.ProjectLocalId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L124).

## `op_Inequality`

<a id="api-5886c11e74354429"></a>
<!-- api: M:InnoEngine.Settings.ProjectLocalId.op_Inequality(InnoEngine.Settings.ProjectLocalId,InnoEngine.Settings.ProjectLocalId) ce7dc595f22e67265fe46ef598c08141c0da216b11f67087a7dce866bee6cc49 -->

```csharp
public static bool InnoEngine.Settings.ProjectLocalId.operator !=(InnoEngine.Settings.ProjectLocalId left, InnoEngine.Settings.ProjectLocalId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L124).

## `ToString`

<a id="api-9894c40af28008ca"></a>
<!-- api: M:InnoEngine.Settings.ProjectLocalId.ToString dea35bbe7176cfee3bc021a6c7622e7e5787702c1b21f82c101361101a48c65d -->

```csharp
public override string InnoEngine.Settings.ProjectLocalId.ToString()
```

Formats the canonical local identity.

**Returns:** The canonical local identity text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L193).

## `value`

<a id="api-6e8b3b8f994af066"></a>
<!-- api: P:InnoEngine.Settings.ProjectLocalId.value e0031efec1c1f10ab6cc6e2d1542cd0f3c63500f4b6ec4187d2df79dc81e20be -->

```csharp
public string InnoEngine.Settings.ProjectLocalId.value { get; }
```

Gets the canonical local identity text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L143).
