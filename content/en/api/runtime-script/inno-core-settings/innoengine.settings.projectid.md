---
title: "ProjectId"
description: "Reference for ProjectId in Inno.Core.Settings."
uid: api.inno.core.settings.runtime-script.47e3446dd6d0a229
kind: api
owners:
  - Inno.Core.Settings
apiSurface: runtime-script
contracts:
  - project.inno-core-settings#settings-ownership-contract
  - manual.scripting.use-script-api
---
# `ProjectId`

This reference describes `ProjectId` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Settings.ProjectId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e04343f0d68001ac) | Method |
| [`Equals`](#api-924316bb3b0092a8) | Method |
| [`Equals`](#api-504bc775d3ae88d6) | Method |
| [`FromName`](#api-5926efd9931cc75d) | Method |
| [`GetHashCode`](#api-407aba7103efb3b4) | Method |
| [`op_Equality`](#api-a6f514d2956b11fc) | Method |
| [`op_Inequality`](#api-0c3dcb0a3292eab9) | Method |
| [`Qualify`](#api-114cc40fc76bacbd) | Method |
| [`ToString`](#api-9fd50de89f0f5ef1) | Method |
| [`isValid`](#api-0fb2e171849cd5d0) | Property |
| [`value`](#api-869be00ae0fa112b) | Property |

## Type declaration

<a id="api-47e3446dd6d0a229"></a>
<!-- api: T:InnoEngine.Settings.ProjectId 5fb1f59ad132c76a4fcecd11ab42135da10ca7362a3f1f0a7679e48cf92a12d2 -->

```csharp
public readonly struct InnoEngine.Settings.ProjectId : System.IEquatable<InnoEngine.Settings.ProjectId>
```

Identifies one project namespace used to qualify project-authored logical names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L12).

## `#ctor`

<a id="api-e04343f0d68001ac"></a>
<!-- api: M:InnoEngine.Settings.ProjectId.#ctor(System.String) 68c24d3f1ccd72ebe8b42fc4c3f7fc34adaf0164d8e8bfc755a3a31912782540 -->

```csharp
public InnoEngine.Settings.ProjectId.ProjectId(string value)
```

Creates a portable project identifier.

**Parameter `value`:** Lowercase ASCII namespace segments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L20).

## `Equals`

<a id="api-924316bb3b0092a8"></a>
<!-- api: M:InnoEngine.Settings.ProjectId.Equals(InnoEngine.Settings.ProjectId) f5a6b2ce5b8664bca99fc6e98a21feb00b0970d40f9821024b04fdc327598a9b -->

```csharp
public bool InnoEngine.Settings.ProjectId.Equals(InnoEngine.Settings.ProjectId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L12).

## `Equals`

<a id="api-504bc775d3ae88d6"></a>
<!-- api: M:InnoEngine.Settings.ProjectId.Equals(System.Object) 6af925efc29e6dca5dcd697fcbd13d320b88b29c9a79ffe782f2e3a167872b7f -->

```csharp
public override bool InnoEngine.Settings.ProjectId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L12).

## `FromName`

<a id="api-5926efd9931cc75d"></a>
<!-- api: M:InnoEngine.Settings.ProjectId.FromName(System.String) 748b367c68740084730655ca0de4bb675023cf606107f0c154171ce85ac35dca -->

```csharp
public static InnoEngine.Settings.ProjectId InnoEngine.Settings.ProjectId.FromName(string name)
```

Creates a portable initial project identifier from a user-facing project name.

**Parameter `name`:** The project name used to derive the initial namespace.

**Returns:** A portable initial project identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L37).

## `GetHashCode`

<a id="api-407aba7103efb3b4"></a>
<!-- api: M:InnoEngine.Settings.ProjectId.GetHashCode d43325431b9bb6f9cfef8433fc469aaae297df9686af281b6242f90c0feee5cc -->

```csharp
public override int InnoEngine.Settings.ProjectId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L12).

## `op_Equality`

<a id="api-a6f514d2956b11fc"></a>
<!-- api: M:InnoEngine.Settings.ProjectId.op_Equality(InnoEngine.Settings.ProjectId,InnoEngine.Settings.ProjectId) 3f41d6ae2f192a1e64732b887b8eed181de576f766176e3b697138307f5c66de -->

```csharp
public static bool InnoEngine.Settings.ProjectId.operator ==(InnoEngine.Settings.ProjectId left, InnoEngine.Settings.ProjectId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L12).

## `op_Inequality`

<a id="api-0c3dcb0a3292eab9"></a>
<!-- api: M:InnoEngine.Settings.ProjectId.op_Inequality(InnoEngine.Settings.ProjectId,InnoEngine.Settings.ProjectId) dfe94a62ee09552ae50f7ee46afeb87690097a71d891b2c491fb1bca2187a501 -->

```csharp
public static bool InnoEngine.Settings.ProjectId.operator !=(InnoEngine.Settings.ProjectId left, InnoEngine.Settings.ProjectId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L12).

## `Qualify`

<a id="api-114cc40fc76bacbd"></a>
<!-- api: M:InnoEngine.Settings.ProjectId.Qualify(InnoEngine.Settings.ProjectLocalId) 9c62c4d037de067e6b9096cdb9f016a3166a401acd0038879663043fe0b77086 -->

```csharp
public InnoEngine.Settings.ProjectScopedId InnoEngine.Settings.ProjectId.Qualify(InnoEngine.Settings.ProjectLocalId name)
```

Qualifies a local project name beneath this project namespace.

**Parameter `name`:** The portable local name.

**Returns:** The complete project-scoped identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L84).

## `ToString`

<a id="api-9fd50de89f0f5ef1"></a>
<!-- api: M:InnoEngine.Settings.ProjectId.ToString a003a7f166cd5fc2a462b942c50b1f683771d6820e5d44737d1cb7a866ffac48 -->

```csharp
public override string InnoEngine.Settings.ProjectId.ToString()
```

Formats the canonical identifier.

**Returns:** The canonical identifier text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L92).

## `isValid`

<a id="api-0fb2e171849cd5d0"></a>
<!-- api: P:InnoEngine.Settings.ProjectId.isValid 78b3db7cd1830bf264a5213092668fa5b10db3869ea5080dee1cd484ab783f0f -->

```csharp
public bool InnoEngine.Settings.ProjectId.isValid { get; }
```

Gets whether the value contains a usable identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L73).

## `value`

<a id="api-869be00ae0fa112b"></a>
<!-- api: P:InnoEngine.Settings.ProjectId.value c565caec97999f7985ade3d643bdc549abd5939266c96ace158a47b437a45f5a -->

```csharp
public string InnoEngine.Settings.ProjectId.value { get; }
```

Gets the canonical identifier text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L68).
