---
title: "EditorValidationResult"
description: "Reference for EditorValidationResult in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.26b5af875a996ae9
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorValidationResult`

This reference describes `EditorValidationResult` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Interactions.EditorValidationResult>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3b0407b59969606e) | Method |
| [`Deconstruct`](#api-29c79e499303b821) | Method |
| [`Equals`](#api-4b232abe116264c5) | Method |
| [`Equals`](#api-572fb54845f544a5) | Method |
| [`GetHashCode`](#api-bc976612a7e5c1d9) | Method |
| [`Invalid`](#api-051ecc0f410ee3b9) | Method |
| [`op_Equality`](#api-0c99487363366249) | Method |
| [`op_Inequality`](#api-3cee76b484949e6f) | Method |
| [`ToString`](#api-2d1b1cac99f77dc4) | Method |
| [`isValid`](#api-bf06b38c363706e8) | Property |
| [`message`](#api-0558fc92233adc43) | Property |
| [`valid`](#api-62e9435d7ca25aae) | Property |

## Type declaration

<a id="api-26b5af875a996ae9"></a>
<!-- api: T:Inno.Editor.Interactions.EditorValidationResult 70e47605eb5d1fb1b3bb9b01dba7e6ae4d84a54708efefbb5cbd67b5f01fcee7 -->

```csharp
public readonly record struct Inno.Editor.Interactions.EditorValidationResult : System.IEquatable<Inno.Editor.Interactions.EditorValidationResult>
```

Describes whether a requested editor operation is valid and carries a diagnostic when it is rejected.

**Parameter `isValid`:** Whether the requested operation may proceed.

**Parameter `message`:** The user-facing validation diagnostic, or an empty string for a valid result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `#ctor`

<a id="api-3b0407b59969606e"></a>
<!-- api: M:Inno.Editor.Interactions.EditorValidationResult.#ctor(System.Boolean,System.String) 434aa9854924f8f33ae59057473228b9082d51c6f9c7671bbec1b26108ac64f1 -->

```csharp
public Inno.Editor.Interactions.EditorValidationResult.EditorValidationResult(bool isValid, string message)
```

Describes whether a requested editor operation is valid and carries a diagnostic when it is rejected.

**Parameter `isValid`:** Whether the requested operation may proceed.

**Parameter `message`:** The user-facing validation diagnostic, or an empty string for a valid result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `Deconstruct`

<a id="api-29c79e499303b821"></a>
<!-- api: M:Inno.Editor.Interactions.EditorValidationResult.Deconstruct(System.Boolean@,System.String@) 0a60a4c4e1d4c3d7e3f2a865ac97c5b8ec7767e5f31bf300f9ce856de259ca66 -->

```csharp
public void Inno.Editor.Interactions.EditorValidationResult.Deconstruct(out bool isValid, out string message)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `Equals`

<a id="api-4b232abe116264c5"></a>
<!-- api: M:Inno.Editor.Interactions.EditorValidationResult.Equals(Inno.Editor.Interactions.EditorValidationResult) 35a69894ed88f6a3c007fd024b03fbdfe91c5fe197b023040436fcc817360ba4 -->

```csharp
public bool Inno.Editor.Interactions.EditorValidationResult.Equals(Inno.Editor.Interactions.EditorValidationResult other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `Equals`

<a id="api-572fb54845f544a5"></a>
<!-- api: M:Inno.Editor.Interactions.EditorValidationResult.Equals(System.Object) 025d07518b5feccfe130178e2be2f4d6a1fbbe81b4f029a13609c572823723bf -->

```csharp
public override bool Inno.Editor.Interactions.EditorValidationResult.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `GetHashCode`

<a id="api-bc976612a7e5c1d9"></a>
<!-- api: M:Inno.Editor.Interactions.EditorValidationResult.GetHashCode 8cae60de5616c2c52ed92cfa9194ef5323576d040d5a0633389c87fdd061fd0b -->

```csharp
public override int Inno.Editor.Interactions.EditorValidationResult.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `Invalid`

<a id="api-051ecc0f410ee3b9"></a>
<!-- api: M:Inno.Editor.Interactions.EditorValidationResult.Invalid(System.String) 975b0a2a1c6882c202ed1a35e4dcf4dc620ff874a539d51988bf3101b8d89ba6 -->

```csharp
public static Inno.Editor.Interactions.EditorValidationResult Inno.Editor.Interactions.EditorValidationResult.Invalid(string message)
```

Creates a failed validation result with a user-facing diagnostic.

**Parameter `message`:** The diagnostic that explains why the operation cannot proceed.

**Returns:** An invalid result containing the supplied diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L30).

## `op_Equality`

<a id="api-0c99487363366249"></a>
<!-- api: M:Inno.Editor.Interactions.EditorValidationResult.op_Equality(Inno.Editor.Interactions.EditorValidationResult,Inno.Editor.Interactions.EditorValidationResult) 2c6d00aa7eb395145d161326a9dd1aa8644d8cce1c6e23ac2efcf14deb128214 -->

```csharp
public static bool Inno.Editor.Interactions.EditorValidationResult.operator ==(Inno.Editor.Interactions.EditorValidationResult left, Inno.Editor.Interactions.EditorValidationResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `op_Inequality`

<a id="api-3cee76b484949e6f"></a>
<!-- api: M:Inno.Editor.Interactions.EditorValidationResult.op_Inequality(Inno.Editor.Interactions.EditorValidationResult,Inno.Editor.Interactions.EditorValidationResult) d374d1b5d58a7770a70d48b757b2e3159e7aa85ab69238600c081f2f9d3d8062 -->

```csharp
public static bool Inno.Editor.Interactions.EditorValidationResult.operator !=(Inno.Editor.Interactions.EditorValidationResult left, Inno.Editor.Interactions.EditorValidationResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `ToString`

<a id="api-2d1b1cac99f77dc4"></a>
<!-- api: M:Inno.Editor.Interactions.EditorValidationResult.ToString 8df69f778a88915d2886cbcc650ee762d028f1743519e2e9dfc182fd9c9e056a -->

```csharp
public override string Inno.Editor.Interactions.EditorValidationResult.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `isValid`

<a id="api-bf06b38c363706e8"></a>
<!-- api: P:Inno.Editor.Interactions.EditorValidationResult.isValid b8ecee58e93c765ee70aa1fa2a70413062bc97664b1c4f6e8da50ef440763ba7 -->

```csharp
public bool Inno.Editor.Interactions.EditorValidationResult.isValid { get; init; }
```

Whether the requested operation may proceed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L13).

## `message`

<a id="api-0558fc92233adc43"></a>
<!-- api: P:Inno.Editor.Interactions.EditorValidationResult.message df6438ad74be8cbb1a2c1cd64ebc49c6a602c2deee86d1334a839819ded42db6 -->

```csharp
public string Inno.Editor.Interactions.EditorValidationResult.message { get; init; }
```

The user-facing validation diagnostic, or an empty string for a valid result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L14).

## `valid`

<a id="api-62e9435d7ca25aae"></a>
<!-- api: P:Inno.Editor.Interactions.EditorValidationResult.valid 0d6bdc3b4f142d1013c4c0dd6e03e801a8118e216a8937915a33f5f4d3323356 -->

```csharp
public static Inno.Editor.Interactions.EditorValidationResult Inno.Editor.Interactions.EditorValidationResult.valid { get; }
```

Gets a successful validation result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L19).
