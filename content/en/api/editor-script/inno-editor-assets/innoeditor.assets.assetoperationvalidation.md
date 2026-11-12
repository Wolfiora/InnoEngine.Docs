---
title: "AssetOperationValidation"
description: "Reference for AssetOperationValidation in Inno.Editor.Assets."
uid: api.inno.editor.assets.editor-script.9fded8a49d62b62b
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: editor-script
contracts:
  - project.inno-editor-assets
  - manual.scripting.use-script-api
---
# `AssetOperationValidation`

This reference describes `AssetOperationValidation` in `Inno.Editor.Assets`. Read the [shared contract](../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Assets.AssetOperationValidation>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-960cdf86fa18eed9) | Method |
| [`Equals`](#api-18a06f3561c78425) | Method |
| [`Equals`](#api-9d4a479116206ea9) | Method |
| [`GetHashCode`](#api-2fb103ef78dedcc8) | Method |
| [`Invalid`](#api-a79e1ef6828498e3) | Method |
| [`op_Equality`](#api-dc69fc292eb021e0) | Method |
| [`op_Inequality`](#api-1ea46c0007f31e6a) | Method |
| [`ToString`](#api-59e04bc16ece8403) | Method |
| [`isValid`](#api-b1245ca01a97e4b3) | Property |
| [`message`](#api-bb7b2b5301304672) | Property |
| [`valid`](#api-249d32da5a49caf3) | Property |

## Type declaration

<a id="api-9fded8a49d62b62b"></a>
<!-- api: T:InnoEditor.Assets.AssetOperationValidation da2e7d3c7fbed717d042986ad9df8fce97402f7a0cdc3355b7d23b99d5a17852 -->

```csharp
public readonly struct InnoEditor.Assets.AssetOperationValidation : System.IEquatable<InnoEditor.Assets.AssetOperationValidation>
```

Describes whether an editor asset operation may proceed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L5).

## `#ctor`

<a id="api-960cdf86fa18eed9"></a>
<!-- api: M:InnoEditor.Assets.AssetOperationValidation.#ctor(System.Boolean,System.String) c348b4a94cafb3c49c1a61d8afec9ac1f255e05fa29195c9cf6b4d4c9123509d -->

```csharp
public InnoEditor.Assets.AssetOperationValidation.AssetOperationValidation(bool isValid, string message)
```

Creates the validation result returned before an asset transaction begins.

**Parameter `isValid`:** Whether the requested asset operation may proceed.

**Parameter `message`:** The user-facing rejection diagnostic, or an empty string for a valid result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L16).

## `Equals`

<a id="api-18a06f3561c78425"></a>
<!-- api: M:InnoEditor.Assets.AssetOperationValidation.Equals(InnoEditor.Assets.AssetOperationValidation) 62b6bd5735bf47b5ca10f96c5c6430667536017b68dd4b508542df5db8eef076 -->

```csharp
public bool InnoEditor.Assets.AssetOperationValidation.Equals(InnoEditor.Assets.AssetOperationValidation other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L5).

## `Equals`

<a id="api-9d4a479116206ea9"></a>
<!-- api: M:InnoEditor.Assets.AssetOperationValidation.Equals(System.Object) 1cd4d9483924e364f924c0b0908199e7883bc189522412f1450b72080d0f6452 -->

```csharp
public override bool InnoEditor.Assets.AssetOperationValidation.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L5).

## `GetHashCode`

<a id="api-2fb103ef78dedcc8"></a>
<!-- api: M:InnoEditor.Assets.AssetOperationValidation.GetHashCode f2e0af20607ec72b27963f4fe276ae9a0055b7e0c530ca2eab2f3b3261ca41f3 -->

```csharp
public override int InnoEditor.Assets.AssetOperationValidation.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L5).

## `Invalid`

<a id="api-a79e1ef6828498e3"></a>
<!-- api: M:InnoEditor.Assets.AssetOperationValidation.Invalid(System.String) f1296a4a58eb1c0998b3363e10155ad3b8986fca40b8db505a6d4b4614da8bb2 -->

```csharp
public static InnoEditor.Assets.AssetOperationValidation InnoEditor.Assets.AssetOperationValidation.Invalid(string message)
```

Creates a failed asset-operation validation result.

**Parameter `message`:** The user-facing diagnostic explaining why the operation was rejected.

**Returns:** An invalid validation result containing the supplied diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L46).

## `op_Equality`

<a id="api-dc69fc292eb021e0"></a>
<!-- api: M:InnoEditor.Assets.AssetOperationValidation.op_Equality(InnoEditor.Assets.AssetOperationValidation,InnoEditor.Assets.AssetOperationValidation) fa91fe7ea4d95a8b84b79285cdeb3d596c9822bdaed1c6c530ceaad45bc63172 -->

```csharp
public static bool InnoEditor.Assets.AssetOperationValidation.operator ==(InnoEditor.Assets.AssetOperationValidation left, InnoEditor.Assets.AssetOperationValidation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L5).

## `op_Inequality`

<a id="api-1ea46c0007f31e6a"></a>
<!-- api: M:InnoEditor.Assets.AssetOperationValidation.op_Inequality(InnoEditor.Assets.AssetOperationValidation,InnoEditor.Assets.AssetOperationValidation) fe8c95c88841b137d25b98a963bb96f3f8d5a24e67d7d3e4f3918a9ce53725ae -->

```csharp
public static bool InnoEditor.Assets.AssetOperationValidation.operator !=(InnoEditor.Assets.AssetOperationValidation left, InnoEditor.Assets.AssetOperationValidation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L5).

## `ToString`

<a id="api-59e04bc16ece8403"></a>
<!-- api: M:InnoEditor.Assets.AssetOperationValidation.ToString 8f91b742a56b22fb48b5ac0de48e953371c37a3411c4f18a46f9c988bdd767e8 -->

```csharp
public override string InnoEditor.Assets.AssetOperationValidation.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L5).

## `isValid`

<a id="api-b1245ca01a97e4b3"></a>
<!-- api: P:InnoEditor.Assets.AssetOperationValidation.isValid 8736a769ccb80a931fa0c68b16b20d19255a811a838042d832e3a0754d085d29 -->

```csharp
public bool InnoEditor.Assets.AssetOperationValidation.isValid { get; }
```

Gets whether the operation may proceed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L27).

## `message`

<a id="api-bb7b2b5301304672"></a>
<!-- api: P:InnoEditor.Assets.AssetOperationValidation.message 0f68ee6c66f84f9d87379c17a5aaa535a7df1851141576f3b086dda67438b965 -->

```csharp
public string InnoEditor.Assets.AssetOperationValidation.message { get; }
```

Gets the validation diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L31).

## `valid`

<a id="api-249d32da5a49caf3"></a>
<!-- api: P:InnoEditor.Assets.AssetOperationValidation.valid f9552e99d53333051faada5b1a95ce094e82227db698ed96844fb5844aadeb3f -->

```csharp
public static InnoEditor.Assets.AssetOperationValidation InnoEditor.Assets.AssetOperationValidation.valid { get; }
```

Gets a successful validation result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L35).
