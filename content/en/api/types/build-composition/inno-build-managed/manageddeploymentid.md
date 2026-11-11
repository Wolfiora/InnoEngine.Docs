---
title: "ManagedDeploymentId"
description: "Reference for ManagedDeploymentId in Inno.Build.Managed."
uid: api.inno.build.managed.dda51a2f21105456
kind: api
owners:
  - Inno.Build.Managed
apiSurface: source-clr
contracts:
  - project.inno-build-managed
---
# `ManagedDeploymentId`

This reference describes `ManagedDeploymentId` in `Inno.Build.Managed`. Read the [shared contract](../../../projects/inno-build-managed.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Build.Managed.ManagedDeploymentId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b22849ad5ca90e6c) | Method |
| [`Equals`](#api-2f0333cd744d8b12) | Method |
| [`Equals`](#api-bc9e4e4aab999a82) | Method |
| [`GetHashCode`](#api-f7ab7157e1843974) | Method |
| [`op_Equality`](#api-825b69158b311022) | Method |
| [`op_Inequality`](#api-974480c1a55c696a) | Method |
| [`ToString`](#api-0d1f1fe11ff5fc3f) | Method |
| [`coreClr`](#api-5e7448bdba360a83) | Property |
| [`monoWasm`](#api-c654bd8b76882928) | Property |
| [`monoWasmAot`](#api-21f4f4c3f2232579) | Property |
| [`nativeAot`](#api-e1b27ff6981ecd26) | Property |
| [`value`](#api-5bf1dd6c932f8631) | Property |

## Type declaration

<a id="api-dda51a2f21105456"></a>
<!-- api: T:Inno.Build.Managed.ManagedDeploymentId d5c7a5a4b5b4ceb7ecdeaa40017f539447064d8aa175ff6e6f95087cf84995c0 -->

```csharp
public readonly record struct Inno.Build.Managed.ManagedDeploymentId : System.IEquatable<Inno.Build.Managed.ManagedDeploymentId>
```

Identifies an open managed deployment implementation independently of the publication platform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentId.cs#L8).

## `#ctor`

<a id="api-b22849ad5ca90e6c"></a>
<!-- api: M:Inno.Build.Managed.ManagedDeploymentId.#ctor(System.String) f0d67fc4ab1c006edeeb8755b97e73b0882d390ed5346abda9ac2211b77b3b7d -->

```csharp
public Inno.Build.Managed.ManagedDeploymentId.ManagedDeploymentId(string value)
```

Validates a stable portable provider identity.

**Parameter `value`:** A nonempty lowercase identifier composed of letters, digits and hyphens.

**Throws `System.ArgumentException`:** The identity is empty or contains nonportable characters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentId.cs#L39).

## `Equals`

<a id="api-2f0333cd744d8b12"></a>
<!-- api: M:Inno.Build.Managed.ManagedDeploymentId.Equals(Inno.Build.Managed.ManagedDeploymentId) eb8922f12d2383cd27564921a62d9219b58cf2d5a82591bcd84fcb16cb997eb3 -->

```csharp
public bool Inno.Build.Managed.ManagedDeploymentId.Equals(Inno.Build.Managed.ManagedDeploymentId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentId.cs#L8).

## `Equals`

<a id="api-bc9e4e4aab999a82"></a>
<!-- api: M:Inno.Build.Managed.ManagedDeploymentId.Equals(System.Object) f1fc46270d7a3ef3e171306edb86b02951af1c1847c07433ff4b5c6f0d4b85ef -->

```csharp
public override bool Inno.Build.Managed.ManagedDeploymentId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentId.cs#L8).

## `GetHashCode`

<a id="api-f7ab7157e1843974"></a>
<!-- api: M:Inno.Build.Managed.ManagedDeploymentId.GetHashCode ca31d24e3f78ff2cf6248484603cac3be90cbc1539a8fc3c59caf45ffd335bec -->

```csharp
public override int Inno.Build.Managed.ManagedDeploymentId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentId.cs#L8).

## `op_Equality`

<a id="api-825b69158b311022"></a>
<!-- api: M:Inno.Build.Managed.ManagedDeploymentId.op_Equality(Inno.Build.Managed.ManagedDeploymentId,Inno.Build.Managed.ManagedDeploymentId) 08e0d5fe0300055c7aab654b0d96ad969aea2b59bfc403d1ffb40946092d15c3 -->

```csharp
public static bool Inno.Build.Managed.ManagedDeploymentId.operator ==(Inno.Build.Managed.ManagedDeploymentId left, Inno.Build.Managed.ManagedDeploymentId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentId.cs#L8).

## `op_Inequality`

<a id="api-974480c1a55c696a"></a>
<!-- api: M:Inno.Build.Managed.ManagedDeploymentId.op_Inequality(Inno.Build.Managed.ManagedDeploymentId,Inno.Build.Managed.ManagedDeploymentId) 93772a6145e1776b0d5ecd35e8c69c9405fdfc07f567413680c8c36a7928c930 -->

```csharp
public static bool Inno.Build.Managed.ManagedDeploymentId.operator !=(Inno.Build.Managed.ManagedDeploymentId left, Inno.Build.Managed.ManagedDeploymentId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentId.cs#L8).

## `ToString`

<a id="api-0d1f1fe11ff5fc3f"></a>
<!-- api: M:Inno.Build.Managed.ManagedDeploymentId.ToString 0888c2c3e13b3c0a012f3e9cc22dfaaf4118c3544b7e89f5bea0b0528096f0ca -->

```csharp
public override string Inno.Build.Managed.ManagedDeploymentId.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentId.cs#L54).

## `coreClr`

<a id="api-5e7448bdba360a83"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentId.coreClr f2e2d04241de887e379af8c9c4f53b3138ed11d59a09da084c1578ac7bd2d41a -->

```csharp
public static Inno.Build.Managed.ManagedDeploymentId Inno.Build.Managed.ManagedDeploymentId.coreClr { get; }
```

Identifies the desktop CoreCLR publisher.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentId.cs#L13).

## `monoWasm`

<a id="api-c654bd8b76882928"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentId.monoWasm 251a6512af93eea1d781603750e103827fe60fda7b4a8fdef4a80a0ac4adc5b3 -->

```csharp
public static Inno.Build.Managed.ManagedDeploymentId Inno.Build.Managed.ManagedDeploymentId.monoWasm { get; }
```

Identifies the Mono WebAssembly interpreter publisher.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentId.cs#L18).

## `monoWasmAot`

<a id="api-21f4f4c3f2232579"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentId.monoWasmAot 4626d1bbd6f91fe34544286e9617046c1253e570f639b864d0aabcfa210f1d49 -->

```csharp
public static Inno.Build.Managed.ManagedDeploymentId Inno.Build.Managed.ManagedDeploymentId.monoWasmAot { get; }
```

Identifies the Mono WebAssembly ahead-of-time publisher.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentId.cs#L23).

## `nativeAot`

<a id="api-e1b27ff6981ecd26"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentId.nativeAot 82ebf1578582fc46b66a08a8d8a42471a8d9ac579f10a246eebe16332c785ada -->

```csharp
public static Inno.Build.Managed.ManagedDeploymentId Inno.Build.Managed.ManagedDeploymentId.nativeAot { get; }
```

Identifies the .NET NativeAOT publisher.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentId.cs#L28).

## `value`

<a id="api-5bf1dd6c932f8631"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentId.value 16be2d08f8819f41f8f743fabfad02b8b692b61234915f54e367163064bd0d15 -->

```csharp
public string Inno.Build.Managed.ManagedDeploymentId.value { get; }
```

Gets the exact stable provider identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentId.cs#L51).
