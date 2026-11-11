---
title: "PlatformBackendId"
description: "Reference for PlatformBackendId in Inno.Adapter.Platform."
uid: api.inno.adapter.platform.625b4f17bcdd768e
kind: api
owners:
  - Inno.Adapter.Platform
apiSurface: source-clr
contracts:
  - project.inno-adapter-platform
---
# `PlatformBackendId`

This reference describes `PlatformBackendId` in `Inno.Adapter.Platform`. Read the [shared contract](../../../projects/inno-adapter-platform.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Adapter.Platform.PlatformBackendId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4182d1ec05c08810) | Method |
| [`Equals`](#api-4b0d27b992c5bc71) | Method |
| [`Equals`](#api-2ce9f3c97d881f1a) | Method |
| [`GetHashCode`](#api-581ca508521d12d1) | Method |
| [`op_Equality`](#api-eedc45070bcbde2d) | Method |
| [`op_Inequality`](#api-d69434242dac8a38) | Method |
| [`ToString`](#api-33e49a67651288ca) | Method |
| [`isValid`](#api-002af4dd6ac3bb88) | Property |
| [`sdl3`](#api-43fd1cc0b860d2f1) | Property |
| [`value`](#api-4aabba1c53ecdf7b) | Property |

## Type declaration

<a id="api-625b4f17bcdd768e"></a>
<!-- api: T:Inno.Adapter.Platform.PlatformBackendId 7b694790be21cc31d88ce119ad6e8f12dc0f346e4df5fd407869e4c8f1e0148c -->

```csharp
public readonly record struct Inno.Adapter.Platform.PlatformBackendId : System.IEquatable<Inno.Adapter.Platform.PlatformBackendId>
```

Identifies a platform implementation without closing the set of supported backends.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendId.cs#L8).

## `#ctor`

<a id="api-4182d1ec05c08810"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformBackendId.#ctor(System.String) 148face1a4321ee82f56fa07cd69ff3f95efd62982e49801eab19a7c97aafaf5 -->

```csharp
public Inno.Adapter.Platform.PlatformBackendId.PlatformBackendId(string value)
```

Creates an ordinal, case-sensitive implementation identifier.

**Parameter `value`:** A stable nonempty identifier containing no whitespace.

**Throws `System.ArgumentException`:** The identifier is empty or contains whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendId.cs#L19).

## `Equals`

<a id="api-4b0d27b992c5bc71"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformBackendId.Equals(Inno.Adapter.Platform.PlatformBackendId) 54841c36b2ac7be92e67cd242ddf2e49454900b00205e784777a4332063ccba5 -->

```csharp
public bool Inno.Adapter.Platform.PlatformBackendId.Equals(Inno.Adapter.Platform.PlatformBackendId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendId.cs#L8).

## `Equals`

<a id="api-2ce9f3c97d881f1a"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformBackendId.Equals(System.Object) e8fcaff794810b023a996b85bbad3d569bf5ea5280b28b3a06c30f37a997d4c9 -->

```csharp
public override bool Inno.Adapter.Platform.PlatformBackendId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendId.cs#L8).

## `GetHashCode`

<a id="api-581ca508521d12d1"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformBackendId.GetHashCode fc4a352086f08db77a34c8da92beba958f02cebaa3389d830debfcc6cf99878e -->

```csharp
public override int Inno.Adapter.Platform.PlatformBackendId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendId.cs#L8).

## `op_Equality`

<a id="api-eedc45070bcbde2d"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformBackendId.op_Equality(Inno.Adapter.Platform.PlatformBackendId,Inno.Adapter.Platform.PlatformBackendId) 5cbf751f35ec507b5838f2bf9087a1c2cebdc3c915dcd142e4a7a5a50fc2e679 -->

```csharp
public static bool Inno.Adapter.Platform.PlatformBackendId.operator ==(Inno.Adapter.Platform.PlatformBackendId left, Inno.Adapter.Platform.PlatformBackendId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendId.cs#L8).

## `op_Inequality`

<a id="api-d69434242dac8a38"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformBackendId.op_Inequality(Inno.Adapter.Platform.PlatformBackendId,Inno.Adapter.Platform.PlatformBackendId) 26159d62c489054dbb3b70833be6d2767a7fd96cd3a95bcd48f98ad2095cda7d -->

```csharp
public static bool Inno.Adapter.Platform.PlatformBackendId.operator !=(Inno.Adapter.Platform.PlatformBackendId left, Inno.Adapter.Platform.PlatformBackendId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendId.cs#L8).

## `ToString`

<a id="api-33e49a67651288ca"></a>
<!-- api: M:Inno.Adapter.Platform.PlatformBackendId.ToString 0498c29eacec105836f417df9780398fb30e7bf9c0af4d4c2df8ed3ae44cb580 -->

```csharp
public override string Inno.Adapter.Platform.PlatformBackendId.ToString()
```

Returns the identifier without resolving a provider.

**Returns:** The stable identifier, or an empty string when unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendId.cs#L49).

## `isValid`

<a id="api-002af4dd6ac3bb88"></a>
<!-- api: P:Inno.Adapter.Platform.PlatformBackendId.isValid 1ecac1a19caffb0f30514f34dd3aacfa3c92848411372a9052621f100131a925 -->

```csharp
public bool Inno.Adapter.Platform.PlatformBackendId.isValid { get; }
```

Gets whether this value identifies an implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendId.cs#L41).

## `sdl3`

<a id="api-43fd1cc0b860d2f1"></a>
<!-- api: P:Inno.Adapter.Platform.PlatformBackendId.sdl3 1d0890bf2f8a6fb2de2c6fb84fe145e82007cfc8370a61dea740ef4235be8007 -->

```csharp
public static Inno.Adapter.Platform.PlatformBackendId Inno.Adapter.Platform.PlatformBackendId.sdl3 { get; }
```

Gets the identifier of the bundled sdl3 implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendId.cs#L31).

## `value`

<a id="api-4aabba1c53ecdf7b"></a>
<!-- api: P:Inno.Adapter.Platform.PlatformBackendId.value a3cc43a014e4beaa875b24d1a9875e8fb0804b0a482e11f89e90f64b9999a4fa -->

```csharp
public string Inno.Adapter.Platform.PlatformBackendId.value { get; }
```

Gets the stable identifier; a default value is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/PlatformBackendId.cs#L36).
