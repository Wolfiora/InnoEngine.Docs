---
title: "PlatformNativeHandleId"
description: "Reference for PlatformNativeHandleId in Inno.Adapter.Platform."
uid: api.inno.adapter.platform.970b5b95c9bb2ab4
kind: api
owners:
  - Inno.Adapter.Platform
apiSurface: source-clr
contracts:
  - project.inno-adapter-platform
---
# `PlatformNativeHandleId`

This reference describes `PlatformNativeHandleId` in `Inno.Adapter.Platform`. Read the [shared contract](../../../projects/inno-adapter-platform.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Adapter.Platform.PlatformNativeHandleId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0b6989e629aa48d2) | Method |
| [`Equals`](#api-efc4bc36bee5ad43) | Method |
| [`Equals`](#api-0f842ac943631868) | Method |
| [`GetHashCode`](#api-c3dd63813d5b00f5) | Method |
| [`op_Equality`](#api-d2f27e8d26ba0584) | Method |
| [`op_Inequality`](#api-e5333548c20740b5) | Method |
| [`ToString`](#api-7140e5622486663d) | Method |
| [`browserCanvas`](#api-348c780dba4a5d0e) | Property |
| [`cocoa`](#api-c5009deac9d2a586) | Property |
| [`isValid`](#api-c32494e7e866b6bf) | Property |
| [`value`](#api-3f1f01a29bccbc6d) | Property |
| [`win32`](#api-0f70828ef9a577c3) | Property |

## Type declaration

<a id="api-970b5b95c9bb2ab4"></a>
<!-- api: T:Inno.Adapter.Platform.PlatformNativeHandleId f07458603bdb3c853da7209f30b7ecd1f6226731a9bde30969c1182a208f5644 -->

```csharp
public readonly record struct Inno.Adapter.Platform.PlatformNativeHandleId : System.IEquatable<Inno.Adapter.Platform.PlatformNativeHandleId>
```

Identifies an open native surface ABI understood by cooperating window and graphics adapters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandleId.cs#L8).

## `#ctor`

<a id="api-0b6989e629aa48d2"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformNativeHandleId.#ctor(System.String) 0893812d59f8ae89334f98d1b2acb62bdf54770e911c02f5d4d6a52600963c89 -->

```csharp
public Inno.Adapter.Platform.PlatformNativeHandleId.PlatformNativeHandleId(string value)
```

Creates an ordinal, case-sensitive ABI identifier.

**Parameter `value`:** Stable nonempty identifier without whitespace.

**Throws `System.ArgumentException`:** The identifier is empty or contains whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandleId.cs#L19).

## `Equals`

<a id="api-efc4bc36bee5ad43"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformNativeHandleId.Equals(Inno.Adapter.Platform.PlatformNativeHandleId) 81562b05bd5d1e2aabdfbc1674de02a601723d1c0d082c89275498b69e034da6 -->

```csharp
public bool Inno.Adapter.Platform.PlatformNativeHandleId.Equals(Inno.Adapter.Platform.PlatformNativeHandleId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandleId.cs#L8).

## `Equals`

<a id="api-0f842ac943631868"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformNativeHandleId.Equals(System.Object) 9a03ffcdb68282bda75eedf4ce60142295b33c35775cd2a65aac7c2931953a42 -->

```csharp
public override bool Inno.Adapter.Platform.PlatformNativeHandleId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandleId.cs#L8).

## `GetHashCode`

<a id="api-c3dd63813d5b00f5"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformNativeHandleId.GetHashCode 52b0d307a61d66684dc8c61019de7f225ebb9a9ba2cd31ab5c2b511241c35d33 -->

```csharp
public override int Inno.Adapter.Platform.PlatformNativeHandleId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandleId.cs#L8).

## `op_Equality`

<a id="api-d2f27e8d26ba0584"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformNativeHandleId.op_Equality(Inno.Adapter.Platform.PlatformNativeHandleId,Inno.Adapter.Platform.PlatformNativeHandleId) de5f70c2163731f4ee7144101fea545e0d851e281e8acb364d88804c8ec97541 -->

```csharp
public static bool Inno.Adapter.Platform.PlatformNativeHandleId.operator ==(Inno.Adapter.Platform.PlatformNativeHandleId left, Inno.Adapter.Platform.PlatformNativeHandleId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandleId.cs#L8).

## `op_Inequality`

<a id="api-e5333548c20740b5"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformNativeHandleId.op_Inequality(Inno.Adapter.Platform.PlatformNativeHandleId,Inno.Adapter.Platform.PlatformNativeHandleId) ba9c190b84f9e961e41c21e964bee32c75b5d14d2e278fcf442d29d37670fe10 -->

```csharp
public static bool Inno.Adapter.Platform.PlatformNativeHandleId.operator !=(Inno.Adapter.Platform.PlatformNativeHandleId left, Inno.Adapter.Platform.PlatformNativeHandleId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandleId.cs#L8).

## `ToString`

<a id="api-7140e5622486663d"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformNativeHandleId.ToString 96f29e9e0fa76fd26deb5ef7297698aae72a3531280d1f4d9863724b325f3fd2 -->

```csharp
public override string Inno.Adapter.Platform.PlatformNativeHandleId.ToString()
```

Returns the identifier without resolving an implementation.

**Returns:** The stable identifier, or an empty string when unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandleId.cs#L59).

## `browserCanvas`

<a id="api-348c780dba4a5d0e"></a>
<!-- api: P:Inno.Adapter.Platform.PlatformNativeHandleId.browserCanvas 4da80e9384b66f4b73ff78971acaf514f063f2fa035b72d45bc5ed93a910ee8f -->

```csharp
public static Inno.Adapter.Platform.PlatformNativeHandleId Inno.Adapter.Platform.PlatformNativeHandleId.browserCanvas { get; }
```

Gets the UTF-8 canvas selector surface ABI.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandleId.cs#L41).

## `cocoa`

<a id="api-c5009deac9d2a586"></a>
<!-- api: P:Inno.Adapter.Platform.PlatformNativeHandleId.cocoa 8f0fc848f1e9a917659f44171687c16df9c4b5093c50e5843b315de4edc4054b -->

```csharp
public static Inno.Adapter.Platform.PlatformNativeHandleId Inno.Adapter.Platform.PlatformNativeHandleId.cocoa { get; }
```

Gets the Cocoa window surface ABI.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandleId.cs#L36).

## `isValid`

<a id="api-c32494e7e866b6bf"></a>
<!-- api: P:Inno.Adapter.Platform.PlatformNativeHandleId.isValid 2f3aeeaa4f772aaad01cfef6e903f27e7558a725f84f2dc5ad7a7144442ebf9f -->

```csharp
public bool Inno.Adapter.Platform.PlatformNativeHandleId.isValid { get; }
```

Gets whether a surface ABI was assigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandleId.cs#L51).

## `value`

<a id="api-3f1f01a29bccbc6d"></a>
<!-- api: P:Inno.Adapter.Platform.PlatformNativeHandleId.value 003003ac24ce332d71886073beb2072fdf0cf2e857dcc81c2d48cc4f8dd4983c -->

```csharp
public string Inno.Adapter.Platform.PlatformNativeHandleId.value { get; }
```

Gets the stable identifier; the default value is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandleId.cs#L46).

## `win32`

<a id="api-0f70828ef9a577c3"></a>
<!-- api: P:Inno.Adapter.Platform.PlatformNativeHandleId.win32 be4e160ded718c1ed6254d7fcd2c3b6b2d7140fa1dde30246370367a7e65b34e -->

```csharp
public static Inno.Adapter.Platform.PlatformNativeHandleId Inno.Adapter.Platform.PlatformNativeHandleId.win32 { get; }
```

Gets the Win32 HWND surface ABI.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformNativeHandleId.cs#L31).
