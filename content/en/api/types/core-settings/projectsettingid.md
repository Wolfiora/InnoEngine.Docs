---
title: "ProjectSettingId"
description: "Reference for ProjectSettingId in Inno.Core.Settings."
uid: api.inno.core.settings.9d7ddf66eac22a28
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `ProjectSettingId`

This reference describes `ProjectSettingId` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Settings.ProjectSettingId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-803c7c41df8f55af) | Method |
| [`Equals`](#api-75cb0df42a30de01) | Method |
| [`Equals`](#api-f70aedcb4fcc8ce0) | Method |
| [`GetHashCode`](#api-7a9e09807089b1fa) | Method |
| [`op_Equality`](#api-68df6bc0c82a9b2f) | Method |
| [`op_Inequality`](#api-a85f154b9cd15864) | Method |
| [`ToString`](#api-9f0257176a44dafb) | Method |
| [`isValid`](#api-4361f7df8cb51baa) | Property |
| [`value`](#api-18203c3defa25f99) | Property |

## Type declaration

<a id="api-9d7ddf66eac22a28"></a>
<!-- api: T:Inno.Core.Settings.ProjectSettingId 1a097f138ef84a7b5fff2396d9decbe896387c9e72378f966d116158aa0625b0 -->

```csharp
public record struct Inno.Core.Settings.ProjectSettingId : System.IEquatable<Inno.Core.Settings.ProjectSettingId>
```

Identifies one host-neutral project setting protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L11).

## `#ctor`

<a id="api-803c7c41df8f55af"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingId.#ctor(System.String) 59672488752b7906bbbce21b813a030ce64de010d915946f1c53c7e05e8ccb64 -->

```csharp
public Inno.Core.Settings.ProjectSettingId.ProjectSettingId(string value)
```

Creates a project setting identifier.

**Parameter `value`:** Globally stable setting value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L19).

## `Equals`

<a id="api-75cb0df42a30de01"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingId.Equals(Inno.Core.Settings.ProjectSettingId) e8c2121108c0b71f5d47a39e1dbfa266be08335104c9fc98029da6c1c3ee3870 -->

```csharp
public readonly bool Inno.Core.Settings.ProjectSettingId.Equals(Inno.Core.Settings.ProjectSettingId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L11).

## `Equals`

<a id="api-f70aedcb4fcc8ce0"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingId.Equals(System.Object) 0ccebf967d04f1be42ac6f487a427f8d48347c465de73282145e27d0712e8738 -->

```csharp
public override readonly bool Inno.Core.Settings.ProjectSettingId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L11).

## `GetHashCode`

<a id="api-7a9e09807089b1fa"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingId.GetHashCode 42961ccd455745c4d27a4e41c371de6657777f94c480899f42081aa07b98071a -->

```csharp
public override readonly int Inno.Core.Settings.ProjectSettingId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L11).

## `op_Equality`

<a id="api-68df6bc0c82a9b2f"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingId.op_Equality(Inno.Core.Settings.ProjectSettingId,Inno.Core.Settings.ProjectSettingId) d6b4131a5d644a6299c8ad5396b3017870e13074297828d303fc96576181f825 -->

```csharp
public static bool Inno.Core.Settings.ProjectSettingId.operator ==(Inno.Core.Settings.ProjectSettingId left, Inno.Core.Settings.ProjectSettingId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L11).

## `op_Inequality`

<a id="api-a85f154b9cd15864"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingId.op_Inequality(Inno.Core.Settings.ProjectSettingId,Inno.Core.Settings.ProjectSettingId) 8f0249c5e36de2254535f88bfb7bc1b930794b6dde79b07555b08e89fca80575 -->

```csharp
public static bool Inno.Core.Settings.ProjectSettingId.operator !=(Inno.Core.Settings.ProjectSettingId left, Inno.Core.Settings.ProjectSettingId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L11).

## `ToString`

<a id="api-9f0257176a44dafb"></a>
<!-- api: M:Inno.Core.Settings.ProjectSettingId.ToString 68b5f128add5b933259e711e6896c89661fd910fd14e471b3fd2e38b61f19e47 -->

```csharp
public override readonly string Inno.Core.Settings.ProjectSettingId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L41).

## `isValid`

<a id="api-4361f7df8cb51baa"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingId.isValid 97885ae0fe4f0c5051ba150c0dc94c70074fe7ca9a06df59540d6dd68d58a582 -->

```csharp
public readonly bool Inno.Core.Settings.ProjectSettingId.isValid { get; }
```

Gets whether the identifier has a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L33).

## `value`

<a id="api-18203c3defa25f99"></a>
<!-- api: P:Inno.Core.Settings.ProjectSettingId.value 05ddcbaf06b44bf3e98c50250089e4c65a53c44decdbd4ef8de8a5d3144c12d6 -->

```csharp
public string Inno.Core.Settings.ProjectSettingId.value { get; set; }
```

Gets or sets the globally stable setting value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectSettingContracts.cs#L28).
