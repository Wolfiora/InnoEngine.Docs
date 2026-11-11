---
title: "AssemblyExtensions"
description: "Reference for AssemblyExtensions in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.29bb37f556f472c6
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `AssemblyExtensions`

This reference describes `AssemblyExtensions` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`GetInnoAssemblyDomain`](#api-ab49ae17a3f9115c) | Method |
| [`GetInnoAssemblyScope`](#api-4b39f060e523426e) | Method |
| [`TryGetInnoAssemblyClassification`](#api-f84479558a1b8992) | Method |

## Type declaration

<a id="api-29bb37f556f472c6"></a>
<!-- api: T:Inno.Extensibility.Modules.AssemblyExtensions 0661ccb989a068d2d587d9eae4319631c7d4932a3f249c662a418b6fb6781019 -->

```csharp
public static class Inno.Extensibility.Modules.AssemblyExtensions
```

Provides ownership and scope metadata helpers for assemblies participating in the Inno runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Metadata/AssemblyExtensions.cs#L10).

## `GetInnoAssemblyDomain`

<a id="api-ab49ae17a3f9115c"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyExtensions.GetInnoAssemblyDomain(System.Reflection.Assembly) e0f468e0c8ea50ddba64b7c0921f3208ecea91eec6dd908a85aeadc273d20612 -->

```csharp
public static Inno.Extensibility.Modules.AssemblyDomain Inno.Extensibility.Modules.AssemblyExtensions.GetInnoAssemblyDomain(System.Reflection.Assembly assembly)
```

Resolves the reload domain declared by an assembly.

**Parameter `assembly`:** The assembly whose metadata should be inspected.

**Returns:** The declared assembly domain.

**Throws `System.ArgumentNullException`:** Thrown when `assembly` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the metadata is absent or invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Metadata/AssemblyExtensions.cs#L32).

## `GetInnoAssemblyScope`

<a id="api-4b39f060e523426e"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyExtensions.GetInnoAssemblyScope(System.Reflection.Assembly) a2b27b27560b623cc952c24982b3f0fe88d92b993766db7abb1c564bfdb8a182 -->

```csharp
public static Inno.Extensibility.Modules.AssemblyScope Inno.Extensibility.Modules.AssemblyExtensions.GetInnoAssemblyScope(System.Reflection.Assembly assembly)
```

Resolves the dependency scope declared by an assembly.

**Parameter `assembly`:** The assembly whose metadata should be inspected.

**Returns:** The declared assembly scope.

**Throws `System.ArgumentNullException`:** Thrown when `assembly` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the metadata is absent or invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Metadata/AssemblyExtensions.cs#L55).

## `TryGetInnoAssemblyClassification`

<a id="api-f84479558a1b8992"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyExtensions.TryGetInnoAssemblyClassification(System.Reflection.Assembly,Inno.Extensibility.Modules.AssemblyDomain@,Inno.Extensibility.Modules.AssemblyScope@) 76bad3ea1605966e686275548a782fa3558ae44a3553421370b2b97f0960d88b -->

```csharp
public static bool Inno.Extensibility.Modules.AssemblyExtensions.TryGetInnoAssemblyClassification(System.Reflection.Assembly assembly, out Inno.Extensibility.Modules.AssemblyDomain domain, out Inno.Extensibility.Modules.AssemblyScope scope)
```

Reads ownership metadata without treating an unrelated assembly as an extension.

**Parameter `assembly`:** The assembly whose declared classification is inspected.

**Parameter `domain`:** Receives the declared domain when metadata is complete.

**Parameter `scope`:** Receives the declared dependency scope when metadata is complete.

**Returns:** Whether both classifications are present and valid; outputs are default values on failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Metadata/AssemblyExtensions.cs#L78).
