---
title: "NativeBindingGenerationDescriptor"
description: "Reference for NativeBindingGenerationDescriptor in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.72d324bd4b9b3599
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeBindingGenerationDescriptor`

This reference describes `NativeBindingGenerationDescriptor` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-579694aef3d24bd0) | Method |
| [`Load`](#api-2917e65b83d0bec2) | Method |
| [`ValidateSelection`](#api-f1e8c590f8db4458) | Method |
| [`Write`](#api-00ce669ff41a660d) | Method |
| [`WriteSelection`](#api-4b9c824c94234aa7) | Method |
| [`artifactDirectory`](#api-94bc31d8d580030a) | Property |
| [`artifactOwnerDirectory`](#api-663546a40859bd7f) | Property |
| [`bindingsPath`](#api-9d9ccb1ebc1e5db7) | Property |
| [`fingerprint`](#api-3cfbab1bd43ff7f5) | Property |
| [`nativeDirectory`](#api-03bb371e1cda5eb6) | Property |
| [`usesRuntimeImports`](#api-7b0de461c3eabf59) | Property |

## Type declaration

<a id="api-72d324bd4b9b3599"></a>
<!-- api: T:Inno.Build.Toolchains.NativeBindingGenerationDescriptor 3d6e6d644e3cb4e86ae88a3b18a9750ad0b8662abd8ae26dee460a2049c14e40 -->

```csharp
public sealed class Inno.Build.Toolchains.NativeBindingGenerationDescriptor
```

Describes the complete binding generation selected by one native build request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationDescriptor.cs#L14).

## `#ctor`

<a id="api-579694aef3d24bd0"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.#ctor ff130d7442c2b29409757534d7c96b266067d2d2f0f81039e9473a182c460518 -->

```csharp
public Inno.Build.Toolchains.NativeBindingGenerationDescriptor.NativeBindingGenerationDescriptor()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationDescriptor.cs#L14).

## `Load`

<a id="api-2917e65b83d0bec2"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.Load(System.String) 59654db817683d030bfe0cd0d15f4d9899a1b6305a123f9295db5e13a0d535d2 -->

```csharp
public static Inno.Build.Toolchains.NativeBindingGenerationDescriptor Inno.Build.Toolchains.NativeBindingGenerationDescriptor.Load(string path)
```

Reads and validates the result of a completed component generation request.

**Parameter `path`:** The request-owned descriptor file written after successful generation.

**Returns:** The selected generation whose managed source and optional bridge are present.

**Throws `System.IO.InvalidDataException`:** The descriptor is missing required output identities or contains unavailable outputs.

**Throws `System.Text.Json.JsonException`:** The descriptor cannot be read as the current contract.

**Throws `System.IO.IOException`:** An immutable artifact escapes its declared publisher or traverses a linked directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationDescriptor.cs#L140).

## `ValidateSelection`

<a id="api-f1e8c590f8db4458"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.ValidateSelection(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeBindingGenerationDescriptor},System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeLibraryKind}) d264c4d1b36703565bb3e1607d67be607a888887c1487e14ea5f6f8f659a91d1 -->

```csharp
public static void Inno.Build.Toolchains.NativeBindingGenerationDescriptor.ValidateSelection(string path, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Build.Toolchains.NativeBindingGenerationDescriptor> generations, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Build.Toolchains.NativeLibraryKind> linkage)
```

Rejects publication when the managed selection differs from the complete native generations to deploy.

**Parameter `path`:** The operation-owned selection consumed during managed compilation.

**Parameter `generations`:** The complete current native project closure and its selected generations.

**Parameter `linkage`:** The exact component linkage used to build the native closure.

**Throws `System.IO.InvalidDataException`:** The selection differs in project closure, fingerprint, source location, linkage, or structure.

**Throws `System.ArgumentException`:** The current generation closure has an unsafe or repeated project name.

**Throws `System.ArgumentNullException`:** The current generation closure is null.

**Throws `System.IO.FileNotFoundException`:** The managed selection is no longer available.

**Throws `System.Xml.XmlException`:** The selection is not a valid XML document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationDescriptor.cs#L81).

## `Write`

<a id="api-00ce669ff41a660d"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.Write(System.String) 4793545c8bdef63718cef858ec59c1677a65a9231848ea93a614b422262e0fcc -->

```csharp
public void Inno.Build.Toolchains.NativeBindingGenerationDescriptor.Write(string path)
```

Atomically writes this completed generation to a request-owned descriptor file.

**Parameter `path`:** The descriptor destination; a unique path keeps concurrent requests independent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationDescriptor.cs#L154).

## `WriteSelection`

<a id="api-4b9c824c94234aa7"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.WriteSelection(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeBindingGenerationDescriptor},System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeLibraryKind}) 7ee9a279be7ffafc50048dc7bc641698df956a7f691baa7df45d3466a8139eee -->

```csharp
public static void Inno.Build.Toolchains.NativeBindingGenerationDescriptor.WriteSelection(string path, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Build.Toolchains.NativeBindingGenerationDescriptor> generations, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Build.Toolchains.NativeLibraryKind> linkage)
```

Writes the exact native binding identities for a subsequent managed build without reselecting generations.
Identical content preserves the existing import timestamp; changed content is installed atomically.

**Parameter `path`:** The MSBuild selection document in an intermediate directory exclusively owned by the caller.

**Parameter `generations`:** Explicit checkout-relative native project paths and their complete selected generations.

**Parameter `linkage`:** Explicit linkage of each selected component, used by its managed native initialization boundary.

**Throws `System.ArgumentException`:** A project name is unsafe or repeated, or component linkage is invalid or incomplete.

**Throws `System.ArgumentNullException`:** The generation or linkage closure is null.

**Throws `System.IO.IOException`:** The selection cannot be read or its complete replacement cannot be installed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationDescriptor.cs#L38).

## `artifactDirectory`

<a id="api-94bc31d8d580030a"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.artifactDirectory edfd6b77b3f0c839b1f42eff943628c3d4cc7922026e00f0819f7f89448e09f4 -->

```csharp
public required string Inno.Build.Toolchains.NativeBindingGenerationDescriptor.artifactDirectory { get; init; }
```

Gets the immutable artifact root protected by reading leases, or an empty value for mutable host sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationDescriptor.cs#L114).

## `artifactOwnerDirectory`

<a id="api-663546a40859bd7f"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.artifactOwnerDirectory f853d0eff20e1a67eef5b196582d48d4755eb69567609eae6c846eada9d6ad48 -->

```csharp
public required string Inno.Build.Toolchains.NativeBindingGenerationDescriptor.artifactOwnerDirectory { get; init; }
```

Gets the publisher root coordinating immutable artifact readers and retirement, or empty for host sources.
This owner remains unchanged when component sources are copied into a frozen build workspace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationDescriptor.cs#L120).

## `bindingsPath`

<a id="api-9d9ccb1ebc1e5db7"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.bindingsPath d6bfd98bd96860c91c59fcb98bd4b00cfb719497833b042ddfbd0512e3fda9e5 -->

```csharp
public required string Inno.Build.Toolchains.NativeBindingGenerationDescriptor.bindingsPath { get; init; }
```

Gets the absolute managed source path selected by the component project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationDescriptor.cs#L104).

## `fingerprint`

<a id="api-3cfbab1bd43ff7f5"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.fingerprint 8fa1636cde3318f2f772e67d885026ff9b96f26c62cbcf3762b91d802003179b -->

```csharp
public required string Inno.Build.Toolchains.NativeBindingGenerationDescriptor.fingerprint { get; init; }
```

Gets the immutable input identity assigned to this target generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationDescriptor.cs#L93).

## `nativeDirectory`

<a id="api-03bb371e1cda5eb6"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.nativeDirectory a4331a52985429468fb98e5946a8f7142a3a5c6f439c9e1581e023d5610c245e -->

```csharp
public required string Inno.Build.Toolchains.NativeBindingGenerationDescriptor.nativeDirectory { get; init; }
```

Gets the complete native artifact and compilation-requirement directory, or empty when none is required.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationDescriptor.cs#L109).

## `usesRuntimeImports`

<a id="api-7b0de461c3eabf59"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingGenerationDescriptor.usesRuntimeImports 35804cffee9de4ea5be942b40efba7e3ddf2a596e39d70ca29052649190d951b -->

```csharp
public required bool Inno.Build.Toolchains.NativeBindingGenerationDescriptor.usesRuntimeImports { get; init; }
```

Gets whether the generated context uses runtime-resolved imports instead of a module provider.
This initialization choice is independent of static or shared native linkage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationDescriptor.cs#L99).
