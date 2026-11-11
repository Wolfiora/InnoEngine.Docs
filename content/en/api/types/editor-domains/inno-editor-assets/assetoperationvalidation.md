---
title: "AssetOperationValidation"
description: "Reference for AssetOperationValidation in Inno.Editor.Assets."
uid: api.inno.editor.assets.50e990261b0c3636
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: source-clr
contracts:
  - project.inno-editor-assets
---
# `AssetOperationValidation`

This reference describes `AssetOperationValidation` in `Inno.Editor.Assets`. Read the [shared contract](../../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Assets.AssetOperationValidation>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-859088f723e68981) | Method |
| [`Equals`](#api-5af14db72c6fcc01) | Method |
| [`Equals`](#api-63c0b6540ff35372) | Method |
| [`GetHashCode`](#api-6d67b2e5e8eac432) | Method |
| [`Invalid`](#api-4d5766ff502f9b09) | Method |
| [`op_Equality`](#api-c7c78401d9d42c01) | Method |
| [`op_Inequality`](#api-c9087d90b157568b) | Method |
| [`ToString`](#api-3e437a0706ecebb2) | Method |
| [`isValid`](#api-80b6301b71101d0a) | Property |
| [`message`](#api-b7934667c607e3ce) | Property |
| [`valid`](#api-495933659e6980b9) | Property |

## Type declaration

<a id="api-50e990261b0c3636"></a>
<!-- api: T:Inno.Editor.Assets.AssetOperationValidation 5a6b24b9d3e7c22e094f81757c9427db2dd7bb9598f622d0ceda9eeaf94d49df -->

```csharp
public readonly record struct Inno.Editor.Assets.AssetOperationValidation : System.IEquatable<Inno.Editor.Assets.AssetOperationValidation>
```

Describes whether an editor asset operation may proceed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L5).

## `#ctor`

<a id="api-859088f723e68981"></a>
<!-- api: M:Inno.Editor.Assets.AssetOperationValidation.#ctor(System.Boolean,System.String) 19d12c132a0de7285be304aec00cbc45fa5e0b310abff6c2ed8a7460687d46a2 -->

```csharp
public Inno.Editor.Assets.AssetOperationValidation.AssetOperationValidation(bool isValid, string message)
```

Creates the validation result returned before an asset transaction begins.

**Parameter `isValid`:** Whether the requested asset operation may proceed.

**Parameter `message`:** The user-facing rejection diagnostic, or an empty string for a valid result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L16).

## `Equals`

<a id="api-5af14db72c6fcc01"></a>
<!-- api: M:Inno.Editor.Assets.AssetOperationValidation.Equals(Inno.Editor.Assets.AssetOperationValidation) f7013552d8803bc1829c04cac4b6ee42c6a9931432f015c26f618ab713ee16b4 -->

```csharp
public bool Inno.Editor.Assets.AssetOperationValidation.Equals(Inno.Editor.Assets.AssetOperationValidation other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L5).

## `Equals`

<a id="api-63c0b6540ff35372"></a>
<!-- api: M:Inno.Editor.Assets.AssetOperationValidation.Equals(System.Object) bf6c1b22ef4cf6329558d301d02a4cc12c8d7b79fdb26ea2e78516b8db6619ab -->

```csharp
public override bool Inno.Editor.Assets.AssetOperationValidation.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L5).

## `GetHashCode`

<a id="api-6d67b2e5e8eac432"></a>
<!-- api: M:Inno.Editor.Assets.AssetOperationValidation.GetHashCode a106c86fa78df15918b511137e8c4efea345b2d3b30f7b148f34c55d3faac1bf -->

```csharp
public override int Inno.Editor.Assets.AssetOperationValidation.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L5).

## `Invalid`

<a id="api-4d5766ff502f9b09"></a>
<!-- api: M:Inno.Editor.Assets.AssetOperationValidation.Invalid(System.String) c0fa98eb193e98ebc0e5ba9591ca4e217f1b7bddc0153936760920f2d4f5bc3c -->

```csharp
public static Inno.Editor.Assets.AssetOperationValidation Inno.Editor.Assets.AssetOperationValidation.Invalid(string message)
```

Creates a failed asset-operation validation result.

**Parameter `message`:** The user-facing diagnostic explaining why the operation was rejected.

**Returns:** An invalid validation result containing the supplied diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L46).

## `op_Equality`

<a id="api-c7c78401d9d42c01"></a>
<!-- api: M:Inno.Editor.Assets.AssetOperationValidation.op_Equality(Inno.Editor.Assets.AssetOperationValidation,Inno.Editor.Assets.AssetOperationValidation) 0a0f62f2a5ff429f2533994e911af4e9419dd86d172550ad599750725d429cda -->

```csharp
public static bool Inno.Editor.Assets.AssetOperationValidation.operator ==(Inno.Editor.Assets.AssetOperationValidation left, Inno.Editor.Assets.AssetOperationValidation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L5).

## `op_Inequality`

<a id="api-c9087d90b157568b"></a>
<!-- api: M:Inno.Editor.Assets.AssetOperationValidation.op_Inequality(Inno.Editor.Assets.AssetOperationValidation,Inno.Editor.Assets.AssetOperationValidation) d3878ccb3f39a30266ae15bc6c54b209ec7c810ef0b3edc476c43352563a3178 -->

```csharp
public static bool Inno.Editor.Assets.AssetOperationValidation.operator !=(Inno.Editor.Assets.AssetOperationValidation left, Inno.Editor.Assets.AssetOperationValidation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L5).

## `ToString`

<a id="api-3e437a0706ecebb2"></a>
<!-- api: M:Inno.Editor.Assets.AssetOperationValidation.ToString 5cb5df9fb82dbf45208451b32b5914971f9b21c53161c137968054320e48fe37 -->

```csharp
public override string Inno.Editor.Assets.AssetOperationValidation.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L5).

## `isValid`

<a id="api-80b6301b71101d0a"></a>
<!-- api: P:Inno.Editor.Assets.AssetOperationValidation.isValid 1da8072e8a4365f8da08006e90154a791963be3f59d84b72fd30380615e79458 -->

```csharp
public bool Inno.Editor.Assets.AssetOperationValidation.isValid { get; }
```

Gets whether the operation may proceed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L27).

## `message`

<a id="api-b7934667c607e3ce"></a>
<!-- api: P:Inno.Editor.Assets.AssetOperationValidation.message 5a0b7f14df71b1b7aad6b3ab8f3860dd3e7f54ba199977fdcacb2cbe67623dfb -->

```csharp
public string Inno.Editor.Assets.AssetOperationValidation.message { get; }
```

Gets the validation diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L31).

## `valid`

<a id="api-495933659e6980b9"></a>
<!-- api: P:Inno.Editor.Assets.AssetOperationValidation.valid 8ee9072f9cbc028eb2f6eaf229288f33aadb1ca3dbf5fb690889412dc2826b55 -->

```csharp
public static Inno.Editor.Assets.AssetOperationValidation Inno.Editor.Assets.AssetOperationValidation.valid { get; }
```

Gets a successful validation result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetOperationValidation.cs#L35).
