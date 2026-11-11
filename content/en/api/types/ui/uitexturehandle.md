---
title: "UiTextureHandle"
description: "Reference for UiTextureHandle in Inno.UI."
uid: api.inno.ui.27e920bedf7c3db2
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiTextureHandle`

This reference describes `UiTextureHandle` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.UI.UiTextureHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e58fe30ab1f33c8a) | Method |
| [`Deconstruct`](#api-925f9b19f1ad78ce) | Method |
| [`Equals`](#api-5ed14de0527b2bfd) | Method |
| [`Equals`](#api-d760dbe9808cd89c) | Method |
| [`GetHashCode`](#api-470199c909f394d0) | Method |
| [`op_Equality`](#api-4c9ce2273bfc9155) | Method |
| [`op_Inequality`](#api-a0216e0253f164a3) | Method |
| [`ToString`](#api-a580419a6e0e3733) | Method |
| [`isValid`](#api-b8b87672e61291e1) | Property |
| [`value`](#api-5ed32912f337f2fc) | Property |

## Type declaration

<a id="api-27e920bedf7c3db2"></a>
<!-- api: T:Inno.UI.UiTextureHandle ba39df2d42a237f7ecf38f0c86d3e314216e1e7136e6cde7a65a39068e6b0082 -->

```csharp
public readonly record struct Inno.UI.UiTextureHandle : System.IEquatable<Inno.UI.UiTextureHandle>
```

Identifies one backend-owned immutable texture generation.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `#ctor`

<a id="api-e58fe30ab1f33c8a"></a>
<!-- api: M:Inno.UI.UiTextureHandle.#ctor(System.UInt64) aaf1046f3827fea1474d4cfc16f003c94788e89067be02f010ace6c808439999 -->

```csharp
public Inno.UI.UiTextureHandle.UiTextureHandle(ulong value)
```

Identifies one backend-owned immutable texture generation.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `Deconstruct`

<a id="api-925f9b19f1ad78ce"></a>
<!-- api: M:Inno.UI.UiTextureHandle.Deconstruct(System.UInt64@) c2adc21340249aab4d25b9f051ea44c373fff7865323102bb46be387d01b51bb -->

```csharp
public void Inno.UI.UiTextureHandle.Deconstruct(out ulong value)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `Equals`

<a id="api-5ed14de0527b2bfd"></a>
<!-- api: M:Inno.UI.UiTextureHandle.Equals(Inno.UI.UiTextureHandle) e923dc1eb151ef4b3284b895ec31098cfe4224fbf3eb4f429722a99932c41d0b -->

```csharp
public bool Inno.UI.UiTextureHandle.Equals(Inno.UI.UiTextureHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `Equals`

<a id="api-d760dbe9808cd89c"></a>
<!-- api: M:Inno.UI.UiTextureHandle.Equals(System.Object) c7806b3653aa408830a1eb71dc1e65336b08cfb68f159ea510899e69aaa97b0d -->

```csharp
public override bool Inno.UI.UiTextureHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `GetHashCode`

<a id="api-470199c909f394d0"></a>
<!-- api: M:Inno.UI.UiTextureHandle.GetHashCode 83c600d8b3ad6392a953fd03d249fa25e1477856baf3fbecc2a514358124de3a -->

```csharp
public override int Inno.UI.UiTextureHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `op_Equality`

<a id="api-4c9ce2273bfc9155"></a>
<!-- api: M:Inno.UI.UiTextureHandle.op_Equality(Inno.UI.UiTextureHandle,Inno.UI.UiTextureHandle) f82f2ca8124bda07a244e1c91328014333fd65a791604ec4af38eb8c28b543ac -->

```csharp
public static bool Inno.UI.UiTextureHandle.operator ==(Inno.UI.UiTextureHandle left, Inno.UI.UiTextureHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `op_Inequality`

<a id="api-a0216e0253f164a3"></a>
<!-- api: M:Inno.UI.UiTextureHandle.op_Inequality(Inno.UI.UiTextureHandle,Inno.UI.UiTextureHandle) c2c33243e2eb313676d36baeff26d77ebb660ecdba7b835d120d0654622e8267 -->

```csharp
public static bool Inno.UI.UiTextureHandle.operator !=(Inno.UI.UiTextureHandle left, Inno.UI.UiTextureHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `ToString`

<a id="api-a580419a6e0e3733"></a>
<!-- api: M:Inno.UI.UiTextureHandle.ToString d78085625396c676c93ea3ab42d2ae13d086a453d41bbde710cef45fbdff28f5 -->

```csharp
public override string Inno.UI.UiTextureHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).

## `isValid`

<a id="api-b8b87672e61291e1"></a>
<!-- api: P:Inno.UI.UiTextureHandle.isValid 57be8082717c44ebd605b941e3f6c778d00544ea9f5ed372d2791cb3f72953e0 -->

```csharp
public bool Inno.UI.UiTextureHandle.isValid { get; }
```

Gets whether the handle identifies a texture; an unassigned handle selects the renderer's white texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L69).

## `value`

<a id="api-5ed32912f337f2fc"></a>
<!-- api: P:Inno.UI.UiTextureHandle.value eeb8d337994362baac052835539d344a92a35273e9bef89043321f1b69343d33 -->

```csharp
public ulong Inno.UI.UiTextureHandle.value { get; init; }
```

The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiIdentifiers.cs#L64).
