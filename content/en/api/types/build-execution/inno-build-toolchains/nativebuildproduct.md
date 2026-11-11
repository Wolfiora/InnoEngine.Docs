---
title: "NativeBuildProduct"
description: "Reference for NativeBuildProduct in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.601ba5743c32f7c2
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeBuildProduct`

This reference describes `NativeBuildProduct` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-56121928582875bd) | Method |
| [`artifacts`](#api-688e8564689d579c) | Property |
| [`bindingGeneration`](#api-00986d488271ee58) | Property |
| [`component`](#api-3c419a795b491c97) | Property |
| [`directory`](#api-4a3a7c820a4e18e0) | Property |
| [`files`](#api-c61fe6e0d5be0ada) | Property |
| [`fingerprint`](#api-67dbd480c85768ec) | Property |
| [`sharedLibraryExtension`](#api-3a202db94bf9a5da) | Property |
| [`targetId`](#api-0456fd91197c25b8) | Property |

## Type declaration

<a id="api-601ba5743c32f7c2"></a>
<!-- api: T:Inno.Build.Toolchains.NativeBuildProduct cc63026093c927f71a343b2a18841d348af3f23def88c25a3835035e766c21d1 -->

```csharp
public sealed class Inno.Build.Toolchains.NativeBuildProduct : System.IDisposable
```

Identifies one complete, integrity-checked native artifact and its exact published file closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildProduct.cs#L11).

## `Dispose`

<a id="api-56121928582875bd"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildProduct.Dispose c462510b5b6112390c314196bae2ed86dac26630fa5be28f43213e4cadb8e1ac -->

```csharp
public void Inno.Build.Toolchains.NativeBuildProduct.Dispose()
```

Releases the artifact after all deployment, compilation and linking consumers finish.
File paths must not be used afterwards; repeated disposal has no effect.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildProduct.cs#L88).

## `artifacts`

<a id="api-688e8564689d579c"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildProduct.artifacts 5b6b95b4d190873a796d0bea097267565bd3b319b3dba585cbd2c0882ace8b1d -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.NativeArtifact> Inno.Build.Toolchains.NativeBuildProduct.artifacts { get; }
```

Gets the exact producer-declared output and link roles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildProduct.cs#L82).

## `bindingGeneration`

<a id="api-00986d488271ee58"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildProduct.bindingGeneration 0207ff2be22601a9828efe148cadafca99b3cc947a52b2734834f27990020cc0 -->

```csharp
public Inno.Build.Toolchains.NativeBindingGenerationDescriptor? Inno.Build.Toolchains.NativeBuildProduct.bindingGeneration { get; }
```

Gets the exact binding generation compiled into this product, or null for a component without bindings.
Managed consumers must retain this selection rather than resolve a new generation after native preparation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildProduct.cs#L67).

## `component`

<a id="api-3c419a795b491c97"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildProduct.component 96fa7f69785a9f9674d88a01a96b3a4717111dd686a1e79ece0946860b1f10e8 -->

```csharp
public string Inno.Build.Toolchains.NativeBuildProduct.component { get; }
```

Gets the component identity supplied by the owning toolchain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildProduct.cs#L46).

## `directory`

<a id="api-4a3a7c820a4e18e0"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildProduct.directory 4c66217069882ca54df8a0283fc0567c836dede7f1bbb6ca88ef2ab5377de39f -->

```csharp
public string Inno.Build.Toolchains.NativeBuildProduct.directory { get; }
```

Gets the immutable artifact root containing Outputs and its integrity manifest.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildProduct.cs#L61).

## `files`

<a id="api-c61fe6e0d5be0ada"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildProduct.files bf74bcfdf518076ba1c37f546fa2acae42cfd7e8ae6e7885709a6238da1b4879 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.NativeBuildProduct.files { get; }
```

Gets the exact absolute output file paths validated by the publisher.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildProduct.cs#L77).

## `fingerprint`

<a id="api-67dbd480c85768ec"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildProduct.fingerprint f09ae6f7793ac8ff5c6fe79a760973db39939630c4b536d1670be646b422f858 -->

```csharp
public string Inno.Build.Toolchains.NativeBuildProduct.fingerprint { get; }
```

Gets the content fingerprint covering sources, tool executables and toolchain declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildProduct.cs#L56).

## `sharedLibraryExtension`

<a id="api-3a202db94bf9a5da"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildProduct.sharedLibraryExtension dd9d3727d468dd692d9e68fc9325a26625151041dde59b4da13a6519ffa11f4f -->

```csharp
public string? Inno.Build.Toolchains.NativeBuildProduct.sharedLibraryExtension { get; }
```

Gets the shared-library suffix declared by the selected SDK, or null for an SDK-independent producer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildProduct.cs#L72).

## `targetId`

<a id="api-0456fd91197c25b8"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildProduct.targetId 835ab807eacb9642784d8cd71a13e82fec7016401ac89b1035014eb188328da3 -->

```csharp
public string Inno.Build.Toolchains.NativeBuildProduct.targetId { get; }
```

Gets the target ABI selected for this build.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildProduct.cs#L51).
