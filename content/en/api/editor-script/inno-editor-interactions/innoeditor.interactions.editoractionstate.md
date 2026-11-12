---
title: "EditorActionState"
description: "Reference for EditorActionState in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.987830e79699c6c2
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorActionState`

This reference describes `EditorActionState` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Interactions.EditorActionState>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-28de05bc9d725847) | Method |
| [`Equals`](#api-2f6a74d517bfafb8) | Method |
| [`Equals`](#api-e5edb0d42bc9040f) | Method |
| [`GetHashCode`](#api-7becb50ee7d44ab0) | Method |
| [`op_Equality`](#api-e0fa4bf1ce9f6c0c) | Method |
| [`op_Inequality`](#api-07b76b302b87eaa2) | Method |
| [`ToString`](#api-72eb2b7fd9fbd338) | Method |
| [`disabled`](#api-d28c68be5b11e82e) | Property |
| [`displayName`](#api-8d5dbd6cbc5c59be) | Property |
| [`enabled`](#api-9a0698717138f7f8) | Property |
| [`hidden`](#api-a937eae32aa678db) | Property |
| [`isChecked`](#api-8786f71096d6373b) | Property |
| [`isEnabled`](#api-dd05acce9c796959) | Property |
| [`isVisible`](#api-651b78b0c34fa0b1) | Property |
| [`unavailableReason`](#api-72fb776d9bd67d32) | Property |

## Type declaration

<a id="api-987830e79699c6c2"></a>
<!-- api: T:InnoEditor.Interactions.EditorActionState 9ac7b89b834ca2651b20c191f2d6d0aa9161c5c26c105635a150ba31567d6f54 -->

```csharp
public readonly struct InnoEditor.Interactions.EditorActionState : System.IEquatable<InnoEditor.Interactions.EditorActionState>
```

Describes the current presentation and availability of an editor action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L5).

## `#ctor`

<a id="api-28de05bc9d725847"></a>
<!-- api: M:InnoEditor.Interactions.EditorActionState.#ctor(System.Boolean,System.Boolean,System.Boolean,System.String,System.String) eaada783bd3e0d7da7111691b2d44a2302d11bd9928993a1ba14d8763eec37f0 -->

```csharp
public InnoEditor.Interactions.EditorActionState.EditorActionState(bool isVisible, bool isEnabled, bool isChecked = false, string? displayName = null, string? unavailableReason = null)
```

Creates the contextual presentation state of an editor action.

**Parameter `isVisible`:** Whether the action should be included in the current presentation.

**Parameter `isEnabled`:** Whether the action can execute in the current context.

**Parameter `isChecked`:** Whether the action is currently presented as checked.

**Parameter `displayName`:** An optional contextual label that replaces the static placement label.

**Parameter `unavailableReason`:** A concise explanation shown when an otherwise visible action cannot execute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L25).

## `Equals`

<a id="api-2f6a74d517bfafb8"></a>
<!-- api: M:InnoEditor.Interactions.EditorActionState.Equals(InnoEditor.Interactions.EditorActionState) 635ae3c26d1d94d1ecdd7d545f3ce0f049c0626981637d12199529c999f54dd9 -->

```csharp
public bool InnoEditor.Interactions.EditorActionState.Equals(InnoEditor.Interactions.EditorActionState other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L5).

## `Equals`

<a id="api-e5edb0d42bc9040f"></a>
<!-- api: M:InnoEditor.Interactions.EditorActionState.Equals(System.Object) 5656891dd0814f7c3169e35aa9e0cde0962d3e3f3e1ac03c8eede79ca6e468eb -->

```csharp
public override bool InnoEditor.Interactions.EditorActionState.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L5).

## `GetHashCode`

<a id="api-7becb50ee7d44ab0"></a>
<!-- api: M:InnoEditor.Interactions.EditorActionState.GetHashCode f7975b3aefc2b6c526253363acf98bd970d6bf749677e4d4fab1912b45afdce9 -->

```csharp
public override int InnoEditor.Interactions.EditorActionState.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L5).

## `op_Equality`

<a id="api-e0fa4bf1ce9f6c0c"></a>
<!-- api: M:InnoEditor.Interactions.EditorActionState.op_Equality(InnoEditor.Interactions.EditorActionState,InnoEditor.Interactions.EditorActionState) 76c3df025d321d31cfbdc63dd8da78f684cac05ad5e232254cc9c6d6f0fdca72 -->

```csharp
public static bool InnoEditor.Interactions.EditorActionState.operator ==(InnoEditor.Interactions.EditorActionState left, InnoEditor.Interactions.EditorActionState right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L5).

## `op_Inequality`

<a id="api-07b76b302b87eaa2"></a>
<!-- api: M:InnoEditor.Interactions.EditorActionState.op_Inequality(InnoEditor.Interactions.EditorActionState,InnoEditor.Interactions.EditorActionState) 740ecd1e3e3deb51e7a390ce312d82ca915eef0d0a3f5eaa149c4cd7c9ec679b -->

```csharp
public static bool InnoEditor.Interactions.EditorActionState.operator !=(InnoEditor.Interactions.EditorActionState left, InnoEditor.Interactions.EditorActionState right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L5).

## `ToString`

<a id="api-72eb2b7fd9fbd338"></a>
<!-- api: M:InnoEditor.Interactions.EditorActionState.ToString 5cf5cf302cb3e84709b7aab61e3f3682ea6d9de0c84c79aa5b0f42f7f01e915f -->

```csharp
public override string InnoEditor.Interactions.EditorActionState.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L5).

## `disabled`

<a id="api-d28c68be5b11e82e"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionState.disabled 5f8fe4b2283b580f17a2577a223177946f59a8350cba6f92df783359a7fa1db0 -->

```csharp
public static InnoEditor.Interactions.EditorActionState InnoEditor.Interactions.EditorActionState.disabled { get; }
```

Gets a visible but disabled action state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L66).

## `displayName`

<a id="api-8d5dbd6cbc5c59be"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionState.displayName 28f691c1341d8b322d2c52e6bd1b0643872c298920d3b11483fb41be3800fcbf -->

```csharp
public string? InnoEditor.Interactions.EditorActionState.displayName { get; }
```

Gets an optional contextual display name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L54).

## `enabled`

<a id="api-9a0698717138f7f8"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionState.enabled 3c26582351b0f6f800c413b1ce73500312f6be2b825a32b4dcdc6664df368b22 -->

```csharp
public static InnoEditor.Interactions.EditorActionState InnoEditor.Interactions.EditorActionState.enabled { get; }
```

Gets a visible and enabled action state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L62).

## `hidden`

<a id="api-a937eae32aa678db"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionState.hidden 114e34eb2c555673eb917015f7306773af9a902052b1752b7b2aa8a8e36b656c -->

```csharp
public static InnoEditor.Interactions.EditorActionState InnoEditor.Interactions.EditorActionState.hidden { get; }
```

Gets a hidden action state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L70).

## `isChecked`

<a id="api-8786f71096d6373b"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionState.isChecked 1a6bcdc62574dd283f13d0ad42b120a6b4af7a0a84e9bfdee067980c58ad4df1 -->

```csharp
public bool InnoEditor.Interactions.EditorActionState.isChecked { get; }
```

Gets whether the action is currently checked.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L50).

## `isEnabled`

<a id="api-dd05acce9c796959"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionState.isEnabled a2cc062bb66df6fa865fc35249f8aeef35b1eaa747a2b8a164507f4fbd5c7785 -->

```csharp
public bool InnoEditor.Interactions.EditorActionState.isEnabled { get; }
```

Gets whether the action can execute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L46).

## `isVisible`

<a id="api-651b78b0c34fa0b1"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionState.isVisible 801e31557132c7e1f7d8170c7a283e291d644bfcc71920bde03d85cd30cb706d -->

```csharp
public bool InnoEditor.Interactions.EditorActionState.isVisible { get; }
```

Gets whether the action should be displayed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L42).

## `unavailableReason`

<a id="api-72fb776d9bd67d32"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionState.unavailableReason 2a82f2a556e2777b4bf718a46a58f5106c09c37fae0475e9c22756359482433e -->

```csharp
public string? InnoEditor.Interactions.EditorActionState.unavailableReason { get; }
```

Gets the current execution barrier, or null when no specific explanation is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionState.cs#L58).
