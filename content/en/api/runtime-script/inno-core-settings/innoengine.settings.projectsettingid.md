---
title: "ProjectSettingId"
description: "Reference for ProjectSettingId in Inno.Core.Settings."
uid: api.inno.core.settings.runtime-script.44136bd2c6dc6492
kind: api
owners:
  - Inno.Core.Settings
apiSurface: runtime-script
contracts:
  - project.inno-core-settings#settings-ownership-contract
  - manual.scripting.use-script-api
---
# `ProjectSettingId`

This reference describes `ProjectSettingId` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Settings.ProjectSettingId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c26c07c19e5337d9) | Method |
| [`Equals`](#api-ece6941fe6852058) | Method |
| [`Equals`](#api-adc5f47d67ea91cf) | Method |
| [`GetHashCode`](#api-33221328bbbb7878) | Method |
| [`op_Equality`](#api-e4f574f6c3cd35d8) | Method |
| [`op_Inequality`](#api-b6208dd39b8d8bf5) | Method |
| [`ToString`](#api-7cf487408637ab6a) | Method |
| [`isValid`](#api-a86c56d11877fa49) | Property |
| [`value`](#api-dd51e3a351270092) | Property |

## Type declaration

<a id="api-44136bd2c6dc6492"></a>
<!-- api: T:InnoEngine.Settings.ProjectSettingId e99caf1077cd765d9946b9b3745d670843e00dbef2fd73729358da1815688d9c -->

```csharp
public struct InnoEngine.Settings.ProjectSettingId : System.IEquatable<InnoEngine.Settings.ProjectSettingId>
```

Identifies one host-neutral project setting protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L11).

## `#ctor`

<a id="api-c26c07c19e5337d9"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingId.#ctor(System.String) 6ddcc925a7013d5b37bfde876e03a8fb05169b2d2940a762e20a493f06b4b8cc -->

```csharp
public InnoEngine.Settings.ProjectSettingId.ProjectSettingId(string value)
```

Creates a project setting identifier.

**Parameter `value`:** Globally stable setting value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L19).

## `Equals`

<a id="api-ece6941fe6852058"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingId.Equals(InnoEngine.Settings.ProjectSettingId) 69b14f8a0e51640c8011ecf823f952b48a8570596b29941c43852bf736991a57 -->

```csharp
public bool InnoEngine.Settings.ProjectSettingId.Equals(InnoEngine.Settings.ProjectSettingId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L11).

## `Equals`

<a id="api-adc5f47d67ea91cf"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingId.Equals(System.Object) 1be8f923a1943de15ad374ddf6dd5c725b7ba31f5544d5fcad264acbf00cd498 -->

```csharp
public override bool InnoEngine.Settings.ProjectSettingId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L11).

## `GetHashCode`

<a id="api-33221328bbbb7878"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingId.GetHashCode db9a3d756dd29c02213a6e833ab680b01b55212ec347f0297bb19ae2e9d03fb1 -->

```csharp
public override int InnoEngine.Settings.ProjectSettingId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L11).

## `op_Equality`

<a id="api-e4f574f6c3cd35d8"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingId.op_Equality(InnoEngine.Settings.ProjectSettingId,InnoEngine.Settings.ProjectSettingId) 9b9334fe4b8163dfbb65c159b4df7495af12c8e4238fa45190b2bf4a532de9f7 -->

```csharp
public static bool InnoEngine.Settings.ProjectSettingId.operator ==(InnoEngine.Settings.ProjectSettingId left, InnoEngine.Settings.ProjectSettingId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L11).

## `op_Inequality`

<a id="api-b6208dd39b8d8bf5"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingId.op_Inequality(InnoEngine.Settings.ProjectSettingId,InnoEngine.Settings.ProjectSettingId) 9c9eec3b059f16acbd102339cc6d23a2cad23a48d5c0a6e44510f6b1026bfe26 -->

```csharp
public static bool InnoEngine.Settings.ProjectSettingId.operator !=(InnoEngine.Settings.ProjectSettingId left, InnoEngine.Settings.ProjectSettingId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L11).

## `ToString`

<a id="api-7cf487408637ab6a"></a>
<!-- api: M:InnoEngine.Settings.ProjectSettingId.ToString 34480a0ba1e0860ae2771e1e274de55c3891446b4c61ee1056699bc563c9f1e1 -->

```csharp
public override string InnoEngine.Settings.ProjectSettingId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L41).

## `isValid`

<a id="api-a86c56d11877fa49"></a>
<!-- api: P:InnoEngine.Settings.ProjectSettingId.isValid a1b047dacd0fa320baad71cea379c47e5dc68ed26e236acc8a2731836d27b1d5 -->

```csharp
public bool InnoEngine.Settings.ProjectSettingId.isValid { get; }
```

Gets whether the identifier has a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L33).

## `value`

<a id="api-dd51e3a351270092"></a>
<!-- api: P:InnoEngine.Settings.ProjectSettingId.value 9da38c5ac35915a220bc0ff558c31ef1392b48a6fc5710cad50da1b052049f47 -->

```csharp
public string InnoEngine.Settings.ProjectSettingId.value { get; set; }
```

Gets or sets the globally stable setting value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L28).
