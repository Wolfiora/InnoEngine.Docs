---
title: "EditorValidationResult"
description: "Reference for EditorValidationResult in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.f04b2777fe3acf66
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorValidationResult`

This reference describes `EditorValidationResult` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Interactions.EditorValidationResult>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-691eb6a6b3539ca0) | Method |
| [`Deconstruct`](#api-749eab8d51624ea5) | Method |
| [`Equals`](#api-8f5792d95f0dcb75) | Method |
| [`Equals`](#api-17c3baa06331ca8b) | Method |
| [`GetHashCode`](#api-43c83684a7fbacac) | Method |
| [`Invalid`](#api-9205e0144abaf424) | Method |
| [`op_Equality`](#api-48557edbb36705e7) | Method |
| [`op_Inequality`](#api-9ae754393c0b8d4a) | Method |
| [`ToString`](#api-8394d5001deadfcf) | Method |
| [`isValid`](#api-223ddae725a54b4d) | Property |
| [`message`](#api-590ff52fb9063920) | Property |
| [`valid`](#api-c043c326037678a4) | Property |

## Type declaration

<a id="api-f04b2777fe3acf66"></a>
<!-- api: T:InnoEditor.Interactions.EditorValidationResult cf35f9e32b6295505bbd35a970fe0ba671d254f5aac1040e03af8c0bf1718a9f -->

```csharp
public readonly struct InnoEditor.Interactions.EditorValidationResult : System.IEquatable<InnoEditor.Interactions.EditorValidationResult>
```

Describes whether a requested editor operation is valid and carries a diagnostic when it is rejected.

**Parameter `isValid`:** Whether the requested operation may proceed.

**Parameter `message`:** The user-facing validation diagnostic, or an empty string for a valid result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `#ctor`

<a id="api-691eb6a6b3539ca0"></a>
<!-- api: M:InnoEditor.Interactions.EditorValidationResult.#ctor(System.Boolean,System.String) 9b898a56f4b99071ff81690f7e6d3519ea192c00ff5c49e231cd994cc218d2d9 -->

```csharp
public InnoEditor.Interactions.EditorValidationResult.EditorValidationResult(bool isValid, string message)
```

Describes whether a requested editor operation is valid and carries a diagnostic when it is rejected.

**Parameter `isValid`:** Whether the requested operation may proceed.

**Parameter `message`:** The user-facing validation diagnostic, or an empty string for a valid result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `Deconstruct`

<a id="api-749eab8d51624ea5"></a>
<!-- api: M:InnoEditor.Interactions.EditorValidationResult.Deconstruct(System.Boolean@,System.String@) a79554b90d92231f72f3fe4c67964b5bbf42df1b6579f9439ed6ee7a38619551 -->

```csharp
public void InnoEditor.Interactions.EditorValidationResult.Deconstruct(out bool isValid, out string message)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `Equals`

<a id="api-8f5792d95f0dcb75"></a>
<!-- api: M:InnoEditor.Interactions.EditorValidationResult.Equals(InnoEditor.Interactions.EditorValidationResult) d7539ce976b4c8c7e1d204675db419f4a9716dca49d2ffa093dcce6e55e4a048 -->

```csharp
public bool InnoEditor.Interactions.EditorValidationResult.Equals(InnoEditor.Interactions.EditorValidationResult other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `Equals`

<a id="api-17c3baa06331ca8b"></a>
<!-- api: M:InnoEditor.Interactions.EditorValidationResult.Equals(System.Object) 6fc694b231f13a0483c0dbb5837d041ae4955c383868f95bc879cc6452bdc113 -->

```csharp
public override bool InnoEditor.Interactions.EditorValidationResult.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `GetHashCode`

<a id="api-43c83684a7fbacac"></a>
<!-- api: M:InnoEditor.Interactions.EditorValidationResult.GetHashCode e3573ead238ad739cfc892d5e805aad9a6e76320dc64fc88b1bd67711856285e -->

```csharp
public override int InnoEditor.Interactions.EditorValidationResult.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `Invalid`

<a id="api-9205e0144abaf424"></a>
<!-- api: M:InnoEditor.Interactions.EditorValidationResult.Invalid(System.String) e9f2850fd41012ec9cc0b1dfc2f8cf808c403527843e7c70feffd61a56ca3436 -->

```csharp
public static InnoEditor.Interactions.EditorValidationResult InnoEditor.Interactions.EditorValidationResult.Invalid(string message)
```

Creates a failed validation result with a user-facing diagnostic.

**Parameter `message`:** The diagnostic that explains why the operation cannot proceed.

**Returns:** An invalid result containing the supplied diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L30).

## `op_Equality`

<a id="api-48557edbb36705e7"></a>
<!-- api: M:InnoEditor.Interactions.EditorValidationResult.op_Equality(InnoEditor.Interactions.EditorValidationResult,InnoEditor.Interactions.EditorValidationResult) 907fb23ff1cf01e54557fbac6a77dddd4392a8c36cc25e404288a58418612709 -->

```csharp
public static bool InnoEditor.Interactions.EditorValidationResult.operator ==(InnoEditor.Interactions.EditorValidationResult left, InnoEditor.Interactions.EditorValidationResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `op_Inequality`

<a id="api-9ae754393c0b8d4a"></a>
<!-- api: M:InnoEditor.Interactions.EditorValidationResult.op_Inequality(InnoEditor.Interactions.EditorValidationResult,InnoEditor.Interactions.EditorValidationResult) af60025abc7a8db625de39ed7d6777487e5f93f1815692a1cb54311f7859da6e -->

```csharp
public static bool InnoEditor.Interactions.EditorValidationResult.operator !=(InnoEditor.Interactions.EditorValidationResult left, InnoEditor.Interactions.EditorValidationResult right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `ToString`

<a id="api-8394d5001deadfcf"></a>
<!-- api: M:InnoEditor.Interactions.EditorValidationResult.ToString 093fd9a1bfb3210759869cbfb0775d621a4bf2e0404019da0c69ecb9b9d33647 -->

```csharp
public override string InnoEditor.Interactions.EditorValidationResult.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L12).

## `isValid`

<a id="api-223ddae725a54b4d"></a>
<!-- api: P:InnoEditor.Interactions.EditorValidationResult.isValid 7fd9541154a0742fe72afb3c831d0e362c674548368535a040c358b9ba90812a -->

```csharp
public bool InnoEditor.Interactions.EditorValidationResult.isValid { get; set; }
```

Whether the requested operation may proceed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L13).

## `message`

<a id="api-590ff52fb9063920"></a>
<!-- api: P:InnoEditor.Interactions.EditorValidationResult.message 6a4ce64429c88fe16dcc5d18e857f475992f6d14deb913354104b4d6f7b1e4df -->

```csharp
public string InnoEditor.Interactions.EditorValidationResult.message { get; set; }
```

The user-facing validation diagnostic, or an empty string for a valid result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L14).

## `valid`

<a id="api-c043c326037678a4"></a>
<!-- api: P:InnoEditor.Interactions.EditorValidationResult.valid 5bb0c182dd51f093b70ef8e604ea99cf0219ab2402fa42624ed0de8439e13d0a -->

```csharp
public static InnoEditor.Interactions.EditorValidationResult InnoEditor.Interactions.EditorValidationResult.valid { get; }
```

Gets a successful validation result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorValidationResult.cs#L19).
