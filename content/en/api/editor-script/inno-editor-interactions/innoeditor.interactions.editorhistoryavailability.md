---
title: "EditorHistoryAvailability"
description: "Reference for EditorHistoryAvailability in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.4f74cd7de1eee1ed
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorHistoryAvailability`

This reference describes `EditorHistoryAvailability` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Interactions.EditorHistoryAvailability>`.

## Members

| Member | Kind |
| --- | --- |
| [`Available`](#api-c7ec3f652dac130f) | Method |
| [`Equals`](#api-4948f9a3fec2029d) | Method |
| [`Equals`](#api-36281fbc722c660b) | Method |
| [`GetHashCode`](#api-cb5b1ed27f22b158) | Method |
| [`op_Equality`](#api-38bb6bf9e50e5c78) | Method |
| [`op_Inequality`](#api-b973bac1c7c2a1cf) | Method |
| [`ToString`](#api-37e582f5a60c2272) | Method |
| [`Unavailable`](#api-f77717fe35937555) | Method |
| [`isAvailable`](#api-7fc2b86def2f807e) | Property |
| [`message`](#api-a03bebad1ab099bd) | Property |

## Type declaration

<a id="api-4f74cd7de1eee1ed"></a>
<!-- api: T:InnoEditor.Interactions.EditorHistoryAvailability 53ebdf04462cd9de04529ce7b31f765cf269f304c8d733f1673cca9d186fde09 -->

```csharp
public readonly struct InnoEditor.Interactions.EditorHistoryAvailability : System.IEquatable<InnoEditor.Interactions.EditorHistoryAvailability>
```

Describes whether a history change can currently move in one direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L8).

## `Available`

<a id="api-c7ec3f652dac130f"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryAvailability.Available 6065efe8f4334d0ec19dbcb35f39b56625226cc51bdd89088414b033759fe3c0 -->

```csharp
public static InnoEditor.Interactions.EditorHistoryAvailability InnoEditor.Interactions.EditorHistoryAvailability.Available()
```

Creates an available transition result.

**Returns:** An availability value that permits the transition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L34).

## `Equals`

<a id="api-4948f9a3fec2029d"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryAvailability.Equals(InnoEditor.Interactions.EditorHistoryAvailability) aec8f2789fa72bc58d8dcefb22c5c231a57950e8b50582f9d1ae3749aa4af843 -->

```csharp
public bool InnoEditor.Interactions.EditorHistoryAvailability.Equals(InnoEditor.Interactions.EditorHistoryAvailability other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L8).

## `Equals`

<a id="api-36281fbc722c660b"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryAvailability.Equals(System.Object) 4e87111c26dda7eaf3b3624cafd94d6eb517498378a62cfa6d26189a09451cbb -->

```csharp
public override bool InnoEditor.Interactions.EditorHistoryAvailability.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L8).

## `GetHashCode`

<a id="api-cb5b1ed27f22b158"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryAvailability.GetHashCode b4a94e66b5a682765fda42749a7d2491b4c87adf4d058c4b7bb2a2281e030fc6 -->

```csharp
public override int InnoEditor.Interactions.EditorHistoryAvailability.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L8).

## `op_Equality`

<a id="api-38bb6bf9e50e5c78"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryAvailability.op_Equality(InnoEditor.Interactions.EditorHistoryAvailability,InnoEditor.Interactions.EditorHistoryAvailability) b87b968be4e377c9d876c6a5883f1b2df521fee674e076c0208ae1a25508894e -->

```csharp
public static bool InnoEditor.Interactions.EditorHistoryAvailability.operator ==(InnoEditor.Interactions.EditorHistoryAvailability left, InnoEditor.Interactions.EditorHistoryAvailability right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L8).

## `op_Inequality`

<a id="api-b973bac1c7c2a1cf"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryAvailability.op_Inequality(InnoEditor.Interactions.EditorHistoryAvailability,InnoEditor.Interactions.EditorHistoryAvailability) f4aa94fa55202238252084b426ee8efea9a181af6f2c6e25eb59ec4720477a51 -->

```csharp
public static bool InnoEditor.Interactions.EditorHistoryAvailability.operator !=(InnoEditor.Interactions.EditorHistoryAvailability left, InnoEditor.Interactions.EditorHistoryAvailability right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L8).

## `ToString`

<a id="api-37e582f5a60c2272"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryAvailability.ToString 937ee192295c82222784c972d53632afcc5072d9d3ff709ca24e000d3c3887e0 -->

```csharp
public override string InnoEditor.Interactions.EditorHistoryAvailability.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L8).

## `Unavailable`

<a id="api-f77717fe35937555"></a>
<!-- api: M:InnoEditor.Interactions.EditorHistoryAvailability.Unavailable(System.String) 6cf8d83992fd6abacae725b92144526954b131f5c7177485e30f8c2a78bba7e2 -->

```csharp
public static InnoEditor.Interactions.EditorHistoryAvailability InnoEditor.Interactions.EditorHistoryAvailability.Unavailable(string message)
```

Creates an unavailable transition result.

**Parameter `message`:** The non-empty diagnostic explaining why the transition is unavailable.

**Returns:** An availability value that rejects the transition.

**Throws `System.ArgumentException`:** Thrown when `message` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L48).

## `isAvailable`

<a id="api-7fc2b86def2f807e"></a>
<!-- api: P:InnoEditor.Interactions.EditorHistoryAvailability.isAvailable e373ed32fe8b628f35420039161087384d5e6a7c2cbdb9c26b50ad763c42607f -->

```csharp
public bool InnoEditor.Interactions.EditorHistoryAvailability.isAvailable { get; }
```

Gets whether the requested transition is currently available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L21).

## `message`

<a id="api-a03bebad1ab099bd"></a>
<!-- api: P:InnoEditor.Interactions.EditorHistoryAvailability.message 944ce28d58678cf532f8b4c6c8e8009184ae226a7cc814a055f3a29af510d5cb -->

```csharp
public string InnoEditor.Interactions.EditorHistoryAvailability.message { get; }
```

Gets the diagnostic explaining why the transition is unavailable, or an empty string when available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/History/EditorHistoryAvailability.cs#L26).
