---
title: "ModuleAssemblyDescriptor"
description: "Reference for ModuleAssemblyDescriptor in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.bfd7aa5a816450e1
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `ModuleAssemblyDescriptor`

This reference describes `ModuleAssemblyDescriptor` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Extensibility.Modules.ModuleAssemblyDescriptor>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e0b05397ab17bef4) | Method |
| [`Deconstruct`](#api-14ffe313aca11a45) | Method |
| [`Equals`](#api-a2ca6250c8e1af85) | Method |
| [`Equals`](#api-aaf872ed27e5bf43) | Method |
| [`GetHashCode`](#api-c4f384a4ae6e7d97) | Method |
| [`op_Equality`](#api-112752f4641932b1) | Method |
| [`op_Inequality`](#api-90d35466b7df3ffa) | Method |
| [`ToString`](#api-5365b0c41c5f5773) | Method |
| [`domain`](#api-ea28211537288e22) | Property |
| [`scope`](#api-82c09fb4490a3073) | Property |

## Type declaration

<a id="api-bfd7aa5a816450e1"></a>
<!-- api: T:Inno.Extensibility.Modules.ModuleAssemblyDescriptor 4bbf43adaacb6118ebfba20c4e93dc1a6261cf5a8405298573c46243463b787d -->

```csharp
public readonly record struct Inno.Extensibility.Modules.ModuleAssemblyDescriptor : System.IEquatable<Inno.Extensibility.Modules.ModuleAssemblyDescriptor>
```

Describes the ownership classification of one planned assembly without loading its code.

**Parameter `domain`:** The owning extension domain.

**Parameter `scope`:** The dependency scope declared by the module source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleAssemblyDescriptor.cs#L19).

## `#ctor`

<a id="api-e0b05397ab17bef4"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleAssemblyDescriptor.#ctor(Inno.Extensibility.Modules.AssemblyDomain,Inno.Extensibility.Modules.AssemblyScope) 0498d398489d066512dd44246114f49745b1a3d29c89952a5f006567bcecf4a4 -->

```csharp
public Inno.Extensibility.Modules.ModuleAssemblyDescriptor.ModuleAssemblyDescriptor(Inno.Extensibility.Modules.AssemblyDomain domain, Inno.Extensibility.Modules.AssemblyScope scope)
```

Describes the ownership classification of one planned assembly without loading its code.

**Parameter `domain`:** The owning extension domain.

**Parameter `scope`:** The dependency scope declared by the module source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleAssemblyDescriptor.cs#L19).

## `Deconstruct`

<a id="api-14ffe313aca11a45"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleAssemblyDescriptor.Deconstruct(Inno.Extensibility.Modules.AssemblyDomain@,Inno.Extensibility.Modules.AssemblyScope@) 85bdde5ebc20c8e015ce82d5f6e0c07b26567cdf1c66f49e61c8f458600bead5 -->

```csharp
public void Inno.Extensibility.Modules.ModuleAssemblyDescriptor.Deconstruct(out Inno.Extensibility.Modules.AssemblyDomain domain, out Inno.Extensibility.Modules.AssemblyScope scope)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleAssemblyDescriptor.cs#L19).

## `Equals`

<a id="api-a2ca6250c8e1af85"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleAssemblyDescriptor.Equals(Inno.Extensibility.Modules.ModuleAssemblyDescriptor) 3d666d4b5535a0aec2ca9d72f2fa6b77491dd6510c78fb2ef71311683dc8de96 -->

```csharp
public bool Inno.Extensibility.Modules.ModuleAssemblyDescriptor.Equals(Inno.Extensibility.Modules.ModuleAssemblyDescriptor other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleAssemblyDescriptor.cs#L19).

## `Equals`

<a id="api-aaf872ed27e5bf43"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleAssemblyDescriptor.Equals(System.Object) a7e5fd5a595a7570ffa4911855698c1e3cbe2c2a8288ae3b8179b8254671def5 -->

```csharp
public override bool Inno.Extensibility.Modules.ModuleAssemblyDescriptor.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleAssemblyDescriptor.cs#L19).

## `GetHashCode`

<a id="api-c4f384a4ae6e7d97"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleAssemblyDescriptor.GetHashCode 185fe6328bc665642eb429882e72f96fd965d6492c602178ea82893c47425a8b -->

```csharp
public override int Inno.Extensibility.Modules.ModuleAssemblyDescriptor.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleAssemblyDescriptor.cs#L19).

## `op_Equality`

<a id="api-112752f4641932b1"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleAssemblyDescriptor.op_Equality(Inno.Extensibility.Modules.ModuleAssemblyDescriptor,Inno.Extensibility.Modules.ModuleAssemblyDescriptor) 788a4a6cdfef70786b84e4b322f17428ed505b099232e458fa467eb7d1306794 -->

```csharp
public static bool Inno.Extensibility.Modules.ModuleAssemblyDescriptor.operator ==(Inno.Extensibility.Modules.ModuleAssemblyDescriptor left, Inno.Extensibility.Modules.ModuleAssemblyDescriptor right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleAssemblyDescriptor.cs#L19).

## `op_Inequality`

<a id="api-90d35466b7df3ffa"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleAssemblyDescriptor.op_Inequality(Inno.Extensibility.Modules.ModuleAssemblyDescriptor,Inno.Extensibility.Modules.ModuleAssemblyDescriptor) 6e2df4cf01473fc39ad814b5bcd2432312e7204761d8ba33f3c6288790d9443b -->

```csharp
public static bool Inno.Extensibility.Modules.ModuleAssemblyDescriptor.operator !=(Inno.Extensibility.Modules.ModuleAssemblyDescriptor left, Inno.Extensibility.Modules.ModuleAssemblyDescriptor right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleAssemblyDescriptor.cs#L19).

## `ToString`

<a id="api-5365b0c41c5f5773"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleAssemblyDescriptor.ToString 67c194b6d531ed8edb1b181195c7ccb06db43d58590263d53dc0681b42362dc9 -->

```csharp
public override string Inno.Extensibility.Modules.ModuleAssemblyDescriptor.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleAssemblyDescriptor.cs#L19).

## `domain`

<a id="api-ea28211537288e22"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleAssemblyDescriptor.domain 76f3ca042a8c8a2ca06dbd46745b624f82d397d716631d9302a86049590d0461 -->

```csharp
public Inno.Extensibility.Modules.AssemblyDomain Inno.Extensibility.Modules.ModuleAssemblyDescriptor.domain { get; init; }
```

The owning extension domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleAssemblyDescriptor.cs#L20).

## `scope`

<a id="api-82c09fb4490a3073"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleAssemblyDescriptor.scope 9588e027aed3b2d7b5d24311bd70414c33d637725e794b28e604a7c9ee7f5898 -->

```csharp
public Inno.Extensibility.Modules.AssemblyScope Inno.Extensibility.Modules.ModuleAssemblyDescriptor.scope { get; init; }
```

The dependency scope declared by the module source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/ModuleAssemblyDescriptor.cs#L21).
