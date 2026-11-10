---
title: "EditorHistoryAvailability"
description: "Reference for EditorHistoryAvailability in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.3375fb21c2a233bf
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorHistoryAvailability`

This reference describes `EditorHistoryAvailability` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Interactions.EditorHistoryAvailability>`.

## Members

| Member | Kind |
| --- | --- |
| [`Available`](#api-9cf646c112a21979) | Method |
| [`Equals`](#api-684b64ee14e3ae49) | Method |
| [`Equals`](#api-ad44396222348a9d) | Method |
| [`GetHashCode`](#api-bc7be3bd1369f3ec) | Method |
| [`op_Equality`](#api-86a935e528ee47ad) | Method |
| [`op_Inequality`](#api-724f51298c71c380) | Method |
| [`ToString`](#api-6a6cbd386e1a8dd3) | Method |
| [`Unavailable`](#api-14226bc84d4c2f20) | Method |
| [`isAvailable`](#api-2a7459dcee7e990e) | Property |
| [`message`](#api-23bd0f55e53fa895) | Property |

## Type declaration

<a id="api-3375fb21c2a233bf"></a>
<!-- api: T:Inno.Editor.Interactions.EditorHistoryAvailability 1c5ab2c55fb822aa6bb62e78b7e88badd674a0a83777441e8195c030023d6476 -->

```csharp
public readonly record struct Inno.Editor.Interactions.EditorHistoryAvailability : System.IEquatable<Inno.Editor.Interactions.EditorHistoryAvailability>
```

Describes whether a history change can currently move in one direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L8).

## `Available`

<a id="api-9cf646c112a21979"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryAvailability.Available 4834864ccad970cd841cfa98938ecd351a649b0de249b7f110416bc268878776 -->

```csharp
public static Inno.Editor.Interactions.EditorHistoryAvailability Inno.Editor.Interactions.EditorHistoryAvailability.Available()
```

Creates an available transition result.

**Returns:** An availability value that permits the transition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L34).

## `Equals`

<a id="api-684b64ee14e3ae49"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryAvailability.Equals(Inno.Editor.Interactions.EditorHistoryAvailability) f11dacf9bef788eebe031fc418b09d65971c3b4ec918a2d44201235c0fe113d6 -->

```csharp
public bool Inno.Editor.Interactions.EditorHistoryAvailability.Equals(Inno.Editor.Interactions.EditorHistoryAvailability other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L8).

## `Equals`

<a id="api-ad44396222348a9d"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryAvailability.Equals(System.Object) 6bec39584c7dc0b06dc8282b26b1276b35b22e970cf716c27817eaca48dd1c32 -->

```csharp
public override bool Inno.Editor.Interactions.EditorHistoryAvailability.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L8).

## `GetHashCode`

<a id="api-bc7be3bd1369f3ec"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryAvailability.GetHashCode 387f41cbfe1610a05d300db577692b8948f59fb552e6e34d48499871b340ca6f -->

```csharp
public override int Inno.Editor.Interactions.EditorHistoryAvailability.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L8).

## `op_Equality`

<a id="api-86a935e528ee47ad"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryAvailability.op_Equality(Inno.Editor.Interactions.EditorHistoryAvailability,Inno.Editor.Interactions.EditorHistoryAvailability) 34b1be92f7b01635b0a87deff755422c06f824490c83ff91789997739cd7d5e6 -->

```csharp
public static bool Inno.Editor.Interactions.EditorHistoryAvailability.operator ==(Inno.Editor.Interactions.EditorHistoryAvailability left, Inno.Editor.Interactions.EditorHistoryAvailability right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L8).

## `op_Inequality`

<a id="api-724f51298c71c380"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryAvailability.op_Inequality(Inno.Editor.Interactions.EditorHistoryAvailability,Inno.Editor.Interactions.EditorHistoryAvailability) fc9ec18592588afaa696faaf5dd74836ad7bc41952a830d69ffd0137f3ccaa97 -->

```csharp
public static bool Inno.Editor.Interactions.EditorHistoryAvailability.operator !=(Inno.Editor.Interactions.EditorHistoryAvailability left, Inno.Editor.Interactions.EditorHistoryAvailability right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L8).

## `ToString`

<a id="api-6a6cbd386e1a8dd3"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryAvailability.ToString 030fd363dfc3a6d1762a99a10d974e40ccccad2786514483ac405c01bd2b2280 -->

```csharp
public override string Inno.Editor.Interactions.EditorHistoryAvailability.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L8).

## `Unavailable`

<a id="api-14226bc84d4c2f20"></a>
<!-- api: M:Inno.Editor.Interactions.EditorHistoryAvailability.Unavailable(System.String) ee3ee4175b4d6f704ae8cdbc6aee884b3555e7237f8bafcd10e821a9af3b6f42 -->

```csharp
public static Inno.Editor.Interactions.EditorHistoryAvailability Inno.Editor.Interactions.EditorHistoryAvailability.Unavailable(string message)
```

Creates an unavailable transition result.

**Parameter `message`:** The non-empty diagnostic explaining why the transition is unavailable.

**Returns:** An availability value that rejects the transition.

**Throws `System.ArgumentException`:** Thrown when `message` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L48).

## `isAvailable`

<a id="api-2a7459dcee7e990e"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryAvailability.isAvailable 9ec99845efd1121e382e03cdc6f25816912701152ae70155a92466459a8992a1 -->

```csharp
public bool Inno.Editor.Interactions.EditorHistoryAvailability.isAvailable { get; }
```

Gets whether the requested transition is currently available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L21).

## `message`

<a id="api-23bd0f55e53fa895"></a>
<!-- api: P:Inno.Editor.Interactions.EditorHistoryAvailability.message e3cafa8c6a732ced89d0a9d27f369cbb4846b21657f7a049a67726393afbb8a1 -->

```csharp
public string Inno.Editor.Interactions.EditorHistoryAvailability.message { get; }
```

Gets the diagnostic explaining why the transition is unavailable, or an empty string when available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L26).
