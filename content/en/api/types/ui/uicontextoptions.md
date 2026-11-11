---
title: "UiContextOptions"
description: "Reference for UiContextOptions in Inno.UI."
uid: api.inno.ui.78676f2e0ae8a192
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiContextOptions`

This reference describes `UiContextOptions` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.UI.UiContextOptions>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a57a79673c9a577e) | Method |
| [`Equals`](#api-7c19405cb3973a56) | Method |
| [`Equals`](#api-82fb5916aefcc0d6) | Method |
| [`GetHashCode`](#api-029334aad3fc532f) | Method |
| [`op_Equality`](#api-305fe364cdf3bb5a) | Method |
| [`op_Inequality`](#api-f989c2beba7a4f0e) | Method |
| [`ToString`](#api-a462013183daf651) | Method |
| [`density`](#api-88f0b58ca8ab55a8) | Property |
| [`height`](#api-00d6f0e48a46c6ec) | Property |
| [`name`](#api-c144d7424625b040) | Property |
| [`width`](#api-5d26a320a645d3fa) | Property |

## Type declaration

<a id="api-78676f2e0ae8a192"></a>
<!-- api: T:Inno.UI.UiContextOptions 5f3bd5c15024a2503e142b192b19bec9c01154434d2a9ff40b14d92f5b755d8f -->

```csharp
public readonly record struct Inno.UI.UiContextOptions : System.IEquatable<Inno.UI.UiContextOptions>
```

Defines one independent UI layout and interaction surface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L12).

## `#ctor`

<a id="api-a57a79673c9a577e"></a>
<!-- api: M:Inno.UI.UiContextOptions.#ctor(System.String,System.Int32,System.Int32,System.Single) c8e2692b6477f486598075654b1df52031e5e408da7641023671705eeb0f5671 -->

```csharp
public Inno.UI.UiContextOptions.UiContextOptions(string name, int width, int height, float density = 1)
```

Creates validated context options.

**Parameter `name`:** A non-empty diagnostic context name.

**Parameter `width`:** The positive initial width in pixels.

**Parameter `height`:** The positive initial height in pixels.

**Parameter `density`:** The positive density-independent pixel ratio.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L29).

## `Equals`

<a id="api-7c19405cb3973a56"></a>
<!-- api: M:Inno.UI.UiContextOptions.Equals(Inno.UI.UiContextOptions) a2df9fff7e1a76c5a73873258eda1e44b15d1698533418b0fedc5ece47794391 -->

```csharp
public bool Inno.UI.UiContextOptions.Equals(Inno.UI.UiContextOptions other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L12).

## `Equals`

<a id="api-82fb5916aefcc0d6"></a>
<!-- api: M:Inno.UI.UiContextOptions.Equals(System.Object) 86deeb805f3862b983d3007c3a42d3fd4d47adbb00b242c17e0fde065f2edf6a -->

```csharp
public override bool Inno.UI.UiContextOptions.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L12).

## `GetHashCode`

<a id="api-029334aad3fc532f"></a>
<!-- api: M:Inno.UI.UiContextOptions.GetHashCode 55a02d39855ae2ad1bf2b879cf6dbffa100cb24aa8e6848143761d38bf0ab645 -->

```csharp
public override int Inno.UI.UiContextOptions.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L12).

## `op_Equality`

<a id="api-305fe364cdf3bb5a"></a>
<!-- api: M:Inno.UI.UiContextOptions.op_Equality(Inno.UI.UiContextOptions,Inno.UI.UiContextOptions) cf6c6f71e177cd6f70e8a379182d0bc276481b5ad7bad35f0362db24336ba537 -->

```csharp
public static bool Inno.UI.UiContextOptions.operator ==(Inno.UI.UiContextOptions left, Inno.UI.UiContextOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L12).

## `op_Inequality`

<a id="api-f989c2beba7a4f0e"></a>
<!-- api: M:Inno.UI.UiContextOptions.op_Inequality(Inno.UI.UiContextOptions,Inno.UI.UiContextOptions) 723449ec7768abfa5b01ab00604410c9695b00adde7c0d813da752815a952f97 -->

```csharp
public static bool Inno.UI.UiContextOptions.operator !=(Inno.UI.UiContextOptions left, Inno.UI.UiContextOptions right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L12).

## `ToString`

<a id="api-a462013183daf651"></a>
<!-- api: M:Inno.UI.UiContextOptions.ToString 94c73f79067cc659cb0834028e0d83a8290557989d7d6391a66540079550fd3c -->

```csharp
public override string Inno.UI.UiContextOptions.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L12).

## `density`

<a id="api-88f0b58ca8ab55a8"></a>
<!-- api: P:Inno.UI.UiContextOptions.density fcca87f6f895c569ef5662ee125b15f438dc7b6089e9b1efb7b31a7527322a8b -->

```csharp
public float Inno.UI.UiContextOptions.density { get; }
```

Gets the density-independent pixel ratio.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L61).

## `height`

<a id="api-00d6f0e48a46c6ec"></a>
<!-- api: P:Inno.UI.UiContextOptions.height 9acbe1dabce94613241c1bc1bedaed7bd985ddda4a6641f5fc6c19e4ad195926 -->

```csharp
public int Inno.UI.UiContextOptions.height { get; }
```

Gets the initial height in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L57).

## `name`

<a id="api-c144d7424625b040"></a>
<!-- api: P:Inno.UI.UiContextOptions.name 545602e1631d931e4e9b1bcd239384278a3ba7449d0390af8eecb013dcf00b16 -->

```csharp
public string Inno.UI.UiContextOptions.name { get; }
```

Gets the diagnostic context name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L49).

## `width`

<a id="api-5d26a320a645d3fa"></a>
<!-- api: P:Inno.UI.UiContextOptions.width b712e4b21d864580c514ecafb011a8f1203afa0d56495d706ac28ad96ae6a419 -->

```csharp
public int Inno.UI.UiContextOptions.width { get; }
```

Gets the initial width in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiTypes.cs#L53).
