---
title: "ProjectId"
description: "Reference for ProjectId in Inno.Core.Settings."
uid: api.inno.core.settings.401681257cf30d35
kind: api
owners:
  - Inno.Core.Settings
apiSurface: source-clr
contracts:
  - project.inno-core-settings#settings-ownership-contract
---
# `ProjectId`

This reference describes `ProjectId` in `Inno.Core.Settings`. Read the [shared contract](../../projects/inno-core-settings.md#settings-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Settings.ProjectId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-228e8807810a4213) | Method |
| [`Equals`](#api-d6281a11a129dea5) | Method |
| [`Equals`](#api-ee81da27ad2c45ec) | Method |
| [`FromName`](#api-0cccb4e72ce18161) | Method |
| [`GetHashCode`](#api-560abded89e820d2) | Method |
| [`op_Equality`](#api-9459b3d2779eea72) | Method |
| [`op_Inequality`](#api-f3ea9906dd4cb232) | Method |
| [`Qualify`](#api-327c556dffdacb62) | Method |
| [`ToString`](#api-c65490a682cb1bbe) | Method |
| [`isValid`](#api-047844d1cf72b12c) | Property |
| [`value`](#api-b101322c97bcc148) | Property |

## Type declaration

<a id="api-401681257cf30d35"></a>
<!-- api: T:Inno.Core.Settings.ProjectId 592c844dd046633ed83fe07c96a6cac4cff88478014a4b9896d68392351af085 -->

```csharp
public readonly record struct Inno.Core.Settings.ProjectId : System.IEquatable<Inno.Core.Settings.ProjectId>
```

Identifies one project namespace used to qualify project-authored logical names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L12).

## `#ctor`

<a id="api-228e8807810a4213"></a>
<!-- api: M:Inno.Core.Settings.ProjectId.#ctor(System.String) 840421b578070957a48e8e0349b0d1ef0a99f670652e9b86e10b9d8ee21514ba -->

```csharp
public Inno.Core.Settings.ProjectId.ProjectId(string value)
```

Creates a portable project identifier.

**Parameter `value`:** Lowercase ASCII namespace segments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L20).

## `Equals`

<a id="api-d6281a11a129dea5"></a>
<!-- api: M:Inno.Core.Settings.ProjectId.Equals(Inno.Core.Settings.ProjectId) 28fc35e75f69be7f2a23af80c6f03aed12a59590783dc13b4be13c8b55cd584c -->

```csharp
public bool Inno.Core.Settings.ProjectId.Equals(Inno.Core.Settings.ProjectId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L12).

## `Equals`

<a id="api-ee81da27ad2c45ec"></a>
<!-- api: M:Inno.Core.Settings.ProjectId.Equals(System.Object) 55aedb2947c91e8670e54f60ca77a313134f3707df304b948dbc6253c784fdaf -->

```csharp
public override bool Inno.Core.Settings.ProjectId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L12).

## `FromName`

<a id="api-0cccb4e72ce18161"></a>
<!-- api: M:Inno.Core.Settings.ProjectId.FromName(System.String) 5b91847790c00ef9af6c520b746f9ff4774245190b542a09d3d106a560ec9934 -->

```csharp
public static Inno.Core.Settings.ProjectId Inno.Core.Settings.ProjectId.FromName(string name)
```

Creates a portable initial project identifier from a user-facing project name.

**Parameter `name`:** The project name used to derive the initial namespace.

**Returns:** A portable initial project identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L37).

## `GetHashCode`

<a id="api-560abded89e820d2"></a>
<!-- api: M:Inno.Core.Settings.ProjectId.GetHashCode 7c330ed36205e6317df3a9899d6629e7fd4a701d20d0f276868c5dadca347e8a -->

```csharp
public override int Inno.Core.Settings.ProjectId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L12).

## `op_Equality`

<a id="api-9459b3d2779eea72"></a>
<!-- api: M:Inno.Core.Settings.ProjectId.op_Equality(Inno.Core.Settings.ProjectId,Inno.Core.Settings.ProjectId) db30c2fa31a7af1d275d4e30f09edb61cf59eda8df0db310050578671a6a32b5 -->

```csharp
public static bool Inno.Core.Settings.ProjectId.operator ==(Inno.Core.Settings.ProjectId left, Inno.Core.Settings.ProjectId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L12).

## `op_Inequality`

<a id="api-f3ea9906dd4cb232"></a>
<!-- api: M:Inno.Core.Settings.ProjectId.op_Inequality(Inno.Core.Settings.ProjectId,Inno.Core.Settings.ProjectId) a7d08d4cfc37ddd43ad0e09551b1a4a8655ae0afc03cccbc81afa8450271f804 -->

```csharp
public static bool Inno.Core.Settings.ProjectId.operator !=(Inno.Core.Settings.ProjectId left, Inno.Core.Settings.ProjectId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L12).

## `Qualify`

<a id="api-327c556dffdacb62"></a>
<!-- api: M:Inno.Core.Settings.ProjectId.Qualify(Inno.Core.Settings.ProjectLocalId) 56758c239a619c59fbe7d835f3f11263fb897356a2a08617fe7080dbaaf61301 -->

```csharp
public Inno.Core.Settings.ProjectScopedId Inno.Core.Settings.ProjectId.Qualify(Inno.Core.Settings.ProjectLocalId name)
```

Qualifies a local project name beneath this project namespace.

**Parameter `name`:** The portable local name.

**Returns:** The complete project-scoped identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L84).

## `ToString`

<a id="api-c65490a682cb1bbe"></a>
<!-- api: M:Inno.Core.Settings.ProjectId.ToString 1c0e2a1dc937a2d58ed8c55cc5ffd19e414690f10d5dd696da71a68b10b0503e -->

```csharp
public override string Inno.Core.Settings.ProjectId.ToString()
```

Formats the canonical identifier.

**Returns:** The canonical identifier text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L92).

## `isValid`

<a id="api-047844d1cf72b12c"></a>
<!-- api: P:Inno.Core.Settings.ProjectId.isValid 99a0acf599d25c32abddabbe5fc23caa27cb8f4580bf53d4d3b2dc7bb5dab14d -->

```csharp
public bool Inno.Core.Settings.ProjectId.isValid { get; }
```

Gets whether the value contains a usable identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L73).

## `value`

<a id="api-b101322c97bcc148"></a>
<!-- api: P:Inno.Core.Settings.ProjectId.value 139b6be9476be1d34e145db95ca9384d4770882c2a20f462a2560a6447f4c6ae -->

```csharp
public string Inno.Core.Settings.ProjectId.value { get; }
```

Gets the canonical identifier text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.Settings/ProjectIdentity.cs#L68).
