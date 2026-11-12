---
title: "AssetSourceId"
description: "Reference for AssetSourceId in Inno.Assets."
uid: api.inno.assets.runtime-script.a646a4f012c8b860
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `AssetSourceId`

This reference describes `AssetSourceId` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Assets.AssetSourceId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ef346173ac6bd7c5) | Method |
| [`Equals`](#api-72280ea68fb7f7dd) | Method |
| [`Equals`](#api-aefaaefe9ec7072f) | Method |
| [`GetHashCode`](#api-baf55788f50fdb22) | Method |
| [`op_Equality`](#api-613a4df69c9c889f) | Method |
| [`op_Inequality`](#api-4945527835c5b689) | Method |
| [`ToString`](#api-847a9721b9c90a6e) | Method |
| [`isValid`](#api-1563d7d2975b534c) | Property |
| [`project`](#api-7fb282775d087d02) | Property |
| [`value`](#api-95627d45ef92f438) | Property |

## Type declaration

<a id="api-a646a4f012c8b860"></a>
<!-- api: T:InnoEngine.Assets.AssetSourceId c8aa136218c5e992a33891e676a74e39cc51c449ab9e7dc97fd185fa7143a1d2 -->

```csharp
public struct InnoEngine.Assets.AssetSourceId : System.IEquatable<InnoEngine.Assets.AssetSourceId>
```

Identifies one isolated asset source mount.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L10).

## `#ctor`

<a id="api-ef346173ac6bd7c5"></a>
<!-- api: M:InnoEngine.Assets.AssetSourceId.#ctor(System.String) a8ed080f1fd46584d9df12c6af7864942442747bf265913c365b234d76300e80 -->

```csharp
public InnoEngine.Assets.AssetSourceId.AssetSourceId(string value)
```

Creates a globally stable source identifier.

**Parameter `value`:** Lowercase project or Plugin source identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L23).

## `Equals`

<a id="api-72280ea68fb7f7dd"></a>
<!-- api: M:InnoEngine.Assets.AssetSourceId.Equals(InnoEngine.Assets.AssetSourceId) b891d3b31166c2040a9b284fc1c68dbceabea368ad459f8988a821d53559302c -->

```csharp
public bool InnoEngine.Assets.AssetSourceId.Equals(InnoEngine.Assets.AssetSourceId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L10).

## `Equals`

<a id="api-aefaaefe9ec7072f"></a>
<!-- api: M:InnoEngine.Assets.AssetSourceId.Equals(System.Object) 6017f1194d2502aed8dcfbf58dc11f89db60ed703e750c5e3b7b1c9aaa67f89d -->

```csharp
public override bool InnoEngine.Assets.AssetSourceId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L10).

## `GetHashCode`

<a id="api-baf55788f50fdb22"></a>
<!-- api: M:InnoEngine.Assets.AssetSourceId.GetHashCode 248830c6f307612157ffd7799d3846fdeb1218c9e60311480e1d2800a47944c7 -->

```csharp
public override int InnoEngine.Assets.AssetSourceId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L10).

## `op_Equality`

<a id="api-613a4df69c9c889f"></a>
<!-- api: M:InnoEngine.Assets.AssetSourceId.op_Equality(InnoEngine.Assets.AssetSourceId,InnoEngine.Assets.AssetSourceId) eba3aaedd34a69a284e2b5772877b755c109c990dcd9f14bd5d5fb3c3cf77bd2 -->

```csharp
public static bool InnoEngine.Assets.AssetSourceId.operator ==(InnoEngine.Assets.AssetSourceId left, InnoEngine.Assets.AssetSourceId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L10).

## `op_Inequality`

<a id="api-4945527835c5b689"></a>
<!-- api: M:InnoEngine.Assets.AssetSourceId.op_Inequality(InnoEngine.Assets.AssetSourceId,InnoEngine.Assets.AssetSourceId) 34f45a87e1062ad681ddcf1e4fe5d08f905e1159351717eeab9fb6dca832b6eb -->

```csharp
public static bool InnoEngine.Assets.AssetSourceId.operator !=(InnoEngine.Assets.AssetSourceId left, InnoEngine.Assets.AssetSourceId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L10).

## `ToString`

<a id="api-847a9721b9c90a6e"></a>
<!-- api: M:InnoEngine.Assets.AssetSourceId.ToString f620835c53dd90ba663cddc1583cf263b54ffe784d9ba26e2c48beacbc0e9c00 -->

```csharp
public override string InnoEngine.Assets.AssetSourceId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L55).

## `isValid`

<a id="api-1563d7d2975b534c"></a>
<!-- api: P:InnoEngine.Assets.AssetSourceId.isValid 5591192549a18963437c88bb19e92c84cd7642c09d3c9aeb9db8618ddafd5e0f -->

```csharp
public bool InnoEngine.Assets.AssetSourceId.isValid { get; }
```

Gets whether the source identity has a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L47).

## `project`

<a id="api-7fb282775d087d02"></a>
<!-- api: P:InnoEngine.Assets.AssetSourceId.project f2557218afc149483c6a96fc1c07dac31616832989e9b06f763073ccb1a8686b -->

```csharp
public static InnoEngine.Assets.AssetSourceId InnoEngine.Assets.AssetSourceId.project { get; }
```

Gets the writable project source identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L15).

## `value`

<a id="api-95627d45ef92f438"></a>
<!-- api: P:InnoEngine.Assets.AssetSourceId.value e03e6e4ce171b52b37ce18ab742582d80b437e59d6b3fae1476c8ed50491f156 -->

```csharp
public string InnoEngine.Assets.AssetSourceId.value { get; set; }
```

Gets or sets the globally stable source value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/AssetPath.cs#L42).
