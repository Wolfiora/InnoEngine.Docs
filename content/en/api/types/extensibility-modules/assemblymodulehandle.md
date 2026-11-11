---
title: "AssemblyModuleHandle"
description: "Reference for AssemblyModuleHandle in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.f76db355c5f2f3b8
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `AssemblyModuleHandle`

This reference describes `AssemblyModuleHandle` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Extensibility.Modules.AssemblyModuleHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2d852448b29920f4) | Method |
| [`Deconstruct`](#api-84f8b307d5849c80) | Method |
| [`Equals`](#api-48b2f64c9c5ab86b) | Method |
| [`Equals`](#api-a5a2d18770b3be3a) | Method |
| [`GetHashCode`](#api-7b0a5a3b3f7fd67b) | Method |
| [`op_Equality`](#api-67156e33df66a48c) | Method |
| [`op_Inequality`](#api-e90e96e9c12c3a04) | Method |
| [`ToString`](#api-c820546c73e6bc2c) | Method |
| [`id`](#api-58e0534f919df2e9) | Property |

## Type declaration

<a id="api-f76db355c5f2f3b8"></a>
<!-- api: T:Inno.Extensibility.Modules.AssemblyModuleHandle acfb37792268d134a8c5a8eaa9ae4ff5ad518c17a599459020ae945de32823e9 -->

```csharp
public readonly record struct Inno.Extensibility.Modules.AssemblyModuleHandle : System.IEquatable<Inno.Extensibility.Modules.AssemblyModuleHandle>
```

Identifies a logical assembly module without retaining its runtime assemblies.

**Parameter `id`:** The stable identity used to locate the requested value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleHandle.cs#L11).

## `#ctor`

<a id="api-2d852448b29920f4"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyModuleHandle.#ctor(System.Guid) 56ba3351881bfa3f7ac3d94ff1d7161f85f39381e30aa6e83655b2f0c0c94b01 -->

```csharp
public Inno.Extensibility.Modules.AssemblyModuleHandle.AssemblyModuleHandle(System.Guid id)
```

Identifies a logical assembly module without retaining its runtime assemblies.

**Parameter `id`:** The stable identity used to locate the requested value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleHandle.cs#L11).

## `Deconstruct`

<a id="api-84f8b307d5849c80"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyModuleHandle.Deconstruct(System.Guid@) 62daa80c3a359d216f80191e3fafdc02155cbd0015e83c53acbe83b39b4c6c98 -->

```csharp
public void Inno.Extensibility.Modules.AssemblyModuleHandle.Deconstruct(out System.Guid id)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleHandle.cs#L11).

## `Equals`

<a id="api-48b2f64c9c5ab86b"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyModuleHandle.Equals(Inno.Extensibility.Modules.AssemblyModuleHandle) 38c02df329fd1cc1015a98ad0e72703fe4accb9383c30e4724a8654b9a75a783 -->

```csharp
public bool Inno.Extensibility.Modules.AssemblyModuleHandle.Equals(Inno.Extensibility.Modules.AssemblyModuleHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleHandle.cs#L11).

## `Equals`

<a id="api-a5a2d18770b3be3a"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyModuleHandle.Equals(System.Object) 0f04f3bcd9e7324ef0d7816d8f88bdf0643adc1cfb481ca1708fb70bd91818b8 -->

```csharp
public override bool Inno.Extensibility.Modules.AssemblyModuleHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleHandle.cs#L11).

## `GetHashCode`

<a id="api-7b0a5a3b3f7fd67b"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyModuleHandle.GetHashCode 3e2d12eeed2fbdea632657395921744c01d63c1aac238c376813898976257154 -->

```csharp
public override int Inno.Extensibility.Modules.AssemblyModuleHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleHandle.cs#L11).

## `op_Equality`

<a id="api-67156e33df66a48c"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyModuleHandle.op_Equality(Inno.Extensibility.Modules.AssemblyModuleHandle,Inno.Extensibility.Modules.AssemblyModuleHandle) 1a6986ee3a0bfa7632c6fc40b6f7526326878405878d0b860311976a5a342239 -->

```csharp
public static bool Inno.Extensibility.Modules.AssemblyModuleHandle.operator ==(Inno.Extensibility.Modules.AssemblyModuleHandle left, Inno.Extensibility.Modules.AssemblyModuleHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleHandle.cs#L11).

## `op_Inequality`

<a id="api-e90e96e9c12c3a04"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyModuleHandle.op_Inequality(Inno.Extensibility.Modules.AssemblyModuleHandle,Inno.Extensibility.Modules.AssemblyModuleHandle) e9eed3b1d97bf24021b3e880ef3e9b983eaf8b41482b53f9336a678f629d0849 -->

```csharp
public static bool Inno.Extensibility.Modules.AssemblyModuleHandle.operator !=(Inno.Extensibility.Modules.AssemblyModuleHandle left, Inno.Extensibility.Modules.AssemblyModuleHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleHandle.cs#L11).

## `ToString`

<a id="api-c820546c73e6bc2c"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyModuleHandle.ToString ffb0b6056e3a98301bf37bf20a5cf62e5b036906ba68d917433b22d8c16d2852 -->

```csharp
public override string Inno.Extensibility.Modules.AssemblyModuleHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleHandle.cs#L11).

## `id`

<a id="api-58e0534f919df2e9"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyModuleHandle.id c714428aec4372bc79a7b8573b20308aab89a222443168b1fe8f6620ae6c8aad -->

```csharp
public System.Guid Inno.Extensibility.Modules.AssemblyModuleHandle.id { get; init; }
```

The stable identity used to locate the requested value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Modules/AssemblyModuleHandle.cs#L11).
