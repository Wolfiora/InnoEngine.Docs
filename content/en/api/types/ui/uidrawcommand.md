---
title: "UiDrawCommand"
description: "Reference for UiDrawCommand in Inno.UI."
uid: api.inno.ui.0d3a9bb5d82163bb
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiDrawCommand`

This reference describes `UiDrawCommand` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.UI.UiDrawCommand>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b7b21ff97e1d875a) | Method |
| [`Deconstruct`](#api-4fbb8a6035a8fd50) | Method |
| [`Equals`](#api-c6c9197212bd8c45) | Method |
| [`Equals`](#api-703326f0a9734422) | Method |
| [`GetHashCode`](#api-7d5607d6ac8b78bd) | Method |
| [`op_Equality`](#api-dfaeba2919b3f991) | Method |
| [`op_Inequality`](#api-de0998c4b0a91966) | Method |
| [`ToString`](#api-32b71d92dd517ac7) | Method |
| [`mesh`](#api-2d59e30749fe50a5) | Property |
| [`scissor`](#api-be5ce9457dddb532) | Property |
| [`scissorEnabled`](#api-09f8dd1108e2a08c) | Property |
| [`texture`](#api-8fbb69b2bc55ec4d) | Property |

## Type declaration

<a id="api-0d3a9bb5d82163bb"></a>
<!-- api: T:Inno.UI.UiDrawCommand 44e0917dd86963fc0780fe72a9aaa908e1a1fca9a5c7baaae048becc1d75afc6 -->

```csharp
public readonly record struct Inno.UI.UiDrawCommand : System.IEquatable<Inno.UI.UiDrawCommand>
```

Describes one draw of a previously published mesh.

**Parameter `mesh`:** The ui mesh handle value used to initialize this instance.

**Parameter `texture`:** The ui texture handle value used to initialize this instance.

**Parameter `scissorEnabled`:** The bool value used to initialize this instance.

**Parameter `scissor`:** The ui clip rectangle value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `#ctor`

<a id="api-b7b21ff97e1d875a"></a>
<!-- api: M:Inno.UI.UiDrawCommand.#ctor(Inno.UI.UiMeshHandle,Inno.UI.UiTextureHandle,System.Boolean,Inno.UI.UiClipRectangle) 143ad1fffaf2f369fedd27aa538910744ae11f15c08dba030f01c54bf02fe3ad -->

```csharp
public Inno.UI.UiDrawCommand.UiDrawCommand(Inno.UI.UiMeshHandle mesh, Inno.UI.UiTextureHandle texture, bool scissorEnabled, Inno.UI.UiClipRectangle scissor)
```

Describes one draw of a previously published mesh.

**Parameter `mesh`:** The ui mesh handle value used to initialize this instance.

**Parameter `texture`:** The ui texture handle value used to initialize this instance.

**Parameter `scissorEnabled`:** The bool value used to initialize this instance.

**Parameter `scissor`:** The ui clip rectangle value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `Deconstruct`

<a id="api-4fbb8a6035a8fd50"></a>
<!-- api: M:Inno.UI.UiDrawCommand.Deconstruct(Inno.UI.UiMeshHandle@,Inno.UI.UiTextureHandle@,System.Boolean@,Inno.UI.UiClipRectangle@) 27ac9f02f7c03805833eb936ff98476d4b6064cca250a3e3d50ca8f57e8947de -->

```csharp
public void Inno.UI.UiDrawCommand.Deconstruct(out Inno.UI.UiMeshHandle mesh, out Inno.UI.UiTextureHandle texture, out bool scissorEnabled, out Inno.UI.UiClipRectangle scissor)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `Equals`

<a id="api-c6c9197212bd8c45"></a>
<!-- api: M:Inno.UI.UiDrawCommand.Equals(Inno.UI.UiDrawCommand) 3a98392cb1be2138b1b067f178a5464bc5668805bc9318b242062145295ae7b7 -->

```csharp
public bool Inno.UI.UiDrawCommand.Equals(Inno.UI.UiDrawCommand other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `Equals`

<a id="api-703326f0a9734422"></a>
<!-- api: M:Inno.UI.UiDrawCommand.Equals(System.Object) 4152fc29f4f11646dbb9db120a336630bf70d73fe1f9bb29e2734567700cdc0e -->

```csharp
public override bool Inno.UI.UiDrawCommand.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `GetHashCode`

<a id="api-7d5607d6ac8b78bd"></a>
<!-- api: M:Inno.UI.UiDrawCommand.GetHashCode ea9c25c89d2dc5d9f33d56785370361a28a971fe9fedc5b4ff2a8cfc02439642 -->

```csharp
public override int Inno.UI.UiDrawCommand.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `op_Equality`

<a id="api-dfaeba2919b3f991"></a>
<!-- api: M:Inno.UI.UiDrawCommand.op_Equality(Inno.UI.UiDrawCommand,Inno.UI.UiDrawCommand) 76a722ddbc8b287932bd9b65f61affcb98d5418382808dec4ab4a18fc3738fb2 -->

```csharp
public static bool Inno.UI.UiDrawCommand.operator ==(Inno.UI.UiDrawCommand left, Inno.UI.UiDrawCommand right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `op_Inequality`

<a id="api-de0998c4b0a91966"></a>
<!-- api: M:Inno.UI.UiDrawCommand.op_Inequality(Inno.UI.UiDrawCommand,Inno.UI.UiDrawCommand) 285354e9418fffec6c8a25c916e7d59646c29cd2d50348b60d98d97f5db2af04 -->

```csharp
public static bool Inno.UI.UiDrawCommand.operator !=(Inno.UI.UiDrawCommand left, Inno.UI.UiDrawCommand right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `ToString`

<a id="api-32b71d92dd517ac7"></a>
<!-- api: M:Inno.UI.UiDrawCommand.ToString 472fe5a5b713505b8dee713f2d83c4d355c04dbf144df8c9d371891df708d4bf -->

```csharp
public override string Inno.UI.UiDrawCommand.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L151).

## `mesh`

<a id="api-2d59e30749fe50a5"></a>
<!-- api: P:Inno.UI.UiDrawCommand.mesh a1bbe2a284b7b9c02f214976aa77b962df90ac2f3b0ceab5bc704f16840f0efe -->

```csharp
public Inno.UI.UiMeshHandle Inno.UI.UiDrawCommand.mesh { get; init; }
```

The ui mesh handle value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L152).

## `scissor`

<a id="api-be5ce9457dddb532"></a>
<!-- api: P:Inno.UI.UiDrawCommand.scissor 9b548f2c50691b537e6e8d0260bb58860b0c2b64b5027580fc09f580f7bf4533 -->

```csharp
public Inno.UI.UiClipRectangle Inno.UI.UiDrawCommand.scissor { get; init; }
```

The ui clip rectangle value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L155).

## `scissorEnabled`

<a id="api-09f8dd1108e2a08c"></a>
<!-- api: P:Inno.UI.UiDrawCommand.scissorEnabled 0c44dd960287368e28fd348edaaa7018b6bb9c07ea0ef9e36e246b929dacb249 -->

```csharp
public bool Inno.UI.UiDrawCommand.scissorEnabled { get; init; }
```

The bool value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L154).

## `texture`

<a id="api-8fbb69b2bc55ec4d"></a>
<!-- api: P:Inno.UI.UiDrawCommand.texture 5b55a63000876fbfe6b66ca842176ecacb987c60253a3b10dfc30b20c532fc8c -->

```csharp
public Inno.UI.UiTextureHandle Inno.UI.UiDrawCommand.texture { get; init; }
```

The ui texture handle value used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L153).
