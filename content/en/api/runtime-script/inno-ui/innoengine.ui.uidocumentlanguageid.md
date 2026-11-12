---
title: "UiDocumentLanguageId"
description: "Reference for UiDocumentLanguageId in Inno.UI."
uid: api.inno.ui.runtime-script.b7a7440b91a6729b
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiDocumentLanguageId`

This reference describes `UiDocumentLanguageId` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.UI.UiDocumentLanguageId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-28e3b595465463f8) | Method |
| [`Equals`](#api-e4d55c97e64230a0) | Method |
| [`Equals`](#api-3a989d4c18a956cc) | Method |
| [`GetHashCode`](#api-4bc3bc628995b5e4) | Method |
| [`op_Equality`](#api-68bf659918875272) | Method |
| [`op_Inequality`](#api-ce25c69e3969226d) | Method |
| [`ToString`](#api-1a6d17848dcdbabb) | Method |
| [`isValid`](#api-d753bea386d903d8) | Property |
| [`value`](#api-2d20ac4ba0efb48b) | Property |

## Type declaration

<a id="api-b7a7440b91a6729b"></a>
<!-- api: T:InnoEngine.UI.UiDocumentLanguageId 78c1312fbb80c4977123d7817f3aaab1ec7bde0371958eaceb2d662fe1a081f6 -->

```csharp
public readonly struct InnoEngine.UI.UiDocumentLanguageId : System.IEquatable<InnoEngine.UI.UiDocumentLanguageId>
```

Identifies a document source language independently from any UI backend implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L8).

## `#ctor`

<a id="api-28e3b595465463f8"></a>
<!-- api: M:InnoEngine.UI.UiDocumentLanguageId.#ctor(System.String) c9094b89a9c3372d4522295832e130cfe2073664d1a855af58d558bd5fefee10 -->

```csharp
public InnoEngine.UI.UiDocumentLanguageId.UiDocumentLanguageId(string value)
```

Creates a stable, ordinal language identifier.

**Parameter `value`:** Provider-qualified nonempty identifier without whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L16).

## `Equals`

<a id="api-e4d55c97e64230a0"></a>
<!-- api: M:InnoEngine.UI.UiDocumentLanguageId.Equals(InnoEngine.UI.UiDocumentLanguageId) 212168cdc74c7c30921494164756ac138cc4f1ec1dcf5eba518596dab5c437f8 -->

```csharp
public bool InnoEngine.UI.UiDocumentLanguageId.Equals(InnoEngine.UI.UiDocumentLanguageId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L8).

## `Equals`

<a id="api-3a989d4c18a956cc"></a>
<!-- api: M:InnoEngine.UI.UiDocumentLanguageId.Equals(System.Object) 7aab355ea42a7c87e55d0553be0bfc0841f5bf5ac005f1ec2337bcf7e650efd6 -->

```csharp
public override bool InnoEngine.UI.UiDocumentLanguageId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L8).

## `GetHashCode`

<a id="api-4bc3bc628995b5e4"></a>
<!-- api: M:InnoEngine.UI.UiDocumentLanguageId.GetHashCode 6e9bcef28ff299938134b7288c37c1cedc35919f32cade22b63ed123446d9e94 -->

```csharp
public override int InnoEngine.UI.UiDocumentLanguageId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L8).

## `op_Equality`

<a id="api-68bf659918875272"></a>
<!-- api: M:InnoEngine.UI.UiDocumentLanguageId.op_Equality(InnoEngine.UI.UiDocumentLanguageId,InnoEngine.UI.UiDocumentLanguageId) 3a7929942f7f86d769561683a8c6f3c6f32068e8bbb97396b553f69a10ddd005 -->

```csharp
public static bool InnoEngine.UI.UiDocumentLanguageId.operator ==(InnoEngine.UI.UiDocumentLanguageId left, InnoEngine.UI.UiDocumentLanguageId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L8).

## `op_Inequality`

<a id="api-ce25c69e3969226d"></a>
<!-- api: M:InnoEngine.UI.UiDocumentLanguageId.op_Inequality(InnoEngine.UI.UiDocumentLanguageId,InnoEngine.UI.UiDocumentLanguageId) 8f770c6ed46814dc9d0f22fed5e513e546b8bedc751e301c2c7e69a5739e96f3 -->

```csharp
public static bool InnoEngine.UI.UiDocumentLanguageId.operator !=(InnoEngine.UI.UiDocumentLanguageId left, InnoEngine.UI.UiDocumentLanguageId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L8).

## `ToString`

<a id="api-1a6d17848dcdbabb"></a>
<!-- api: M:InnoEngine.UI.UiDocumentLanguageId.ToString b02d2b81203cae65ba4f4e90656a07dcc38574349cb474d02025f485584445b2 -->

```csharp
public override string InnoEngine.UI.UiDocumentLanguageId.ToString()
```

Returns the stable identifier.

**Returns:** The identifier, or an empty string for an unassigned value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L41).

## `isValid`

<a id="api-d753bea386d903d8"></a>
<!-- api: P:InnoEngine.UI.UiDocumentLanguageId.isValid 09ed2a89d006f9dda33a2ba2914a30af150f75e1346c2eee0506b5c090b70da6 -->

```csharp
public bool InnoEngine.UI.UiDocumentLanguageId.isValid { get; }
```

Gets whether the identifier is assigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L33).

## `value`

<a id="api-2d20ac4ba0efb48b"></a>
<!-- api: P:InnoEngine.UI.UiDocumentLanguageId.value 7d176413c440803f23e83b5d5f25301f3715f310ebd33a5d1bc4eec08715f6c8 -->

```csharp
public string InnoEngine.UI.UiDocumentLanguageId.value { get; }
```

Gets the stable language identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiIdentifiers.cs#L28).
