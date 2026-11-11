---
title: "DotNetSdkResolver"
description: "Reference for DotNetSdkResolver in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.d9be84cd84264983
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `DotNetSdkResolver`

This reference describes `DotNetSdkResolver` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ResolveAsync`](#api-ec57ca783256112d) | Method |
| [`ResolveDirectoryAsync`](#api-3d8c2c4c831c7e56) | Method |

## Type declaration

<a id="api-d9be84cd84264983"></a>
<!-- api: T:Inno.Build.Toolchains.DotNetSdkResolver 98aaca582e625b83dcba8b2e1978fdee594a3611d949ba70292b9898c1ba362f -->

```csharp
public static class Inno.Build.Toolchains.DotNetSdkResolver
```

Resolves the managed SDK using the prepared entry project's directory and normal global.json rules.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/DotNetSdkResolver.cs#L12).

## `ResolveAsync`

<a id="api-ec57ca783256112d"></a>
<!-- api: M:Inno.Build.Toolchains.DotNetSdkResolver.ResolveAsync(System.String,System.String,System.Threading.CancellationToken) 649f78ca3cdede4ab0731324b96abb4732dc47fbdd8e7c924087bf4a10f12a9a -->

```csharp
public static System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.DotNetSdkDescriptor> Inno.Build.Toolchains.DotNetSdkResolver.ResolveAsync(string hostPath, string projectPath, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Asks the selected host to resolve its SDK from the project location without guessing installed versions.

**Parameter `hostPath`:** The .NET executable selected by the build composition root.

**Parameter `projectPath`:** The prepared entry project whose directory controls SDK selection.

**Parameter `cancellationToken`:** Cancels SDK discovery and drains its child process.

**Returns:** The exact project-selected SDK, managed entry assembly and host; missing SDKs fail explicitly.

**Throws `System.IO.FileNotFoundException`:** The selected host, prepared entry project or selected SDK entry assembly does not exist.

**Throws `System.InvalidOperationException`:** The selected host cannot resolve a valid SDK identity and absolute base path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/DotNetSdkResolver.cs#L35).

## `ResolveDirectoryAsync`

<a id="api-3d8c2c4c831c7e56"></a>
<!-- api: M:Inno.Build.Toolchains.DotNetSdkResolver.ResolveDirectoryAsync(System.String,System.String,System.Threading.CancellationToken) 6f8a73bcbdec7510f0eb1fc0df719d15d5bb304803e0e6c10a266bb31af560f9 -->

```csharp
public static System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.DotNetSdkDescriptor> Inno.Build.Toolchains.DotNetSdkResolver.ResolveDirectoryAsync(string hostPath, string ownerDirectory, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Selects the SDK from an authoring owner's directory before any temporary evaluation project is created.

**Parameter `hostPath`:** The managed host explicitly selected by the composition root.

**Parameter `ownerDirectory`:** The existing source owner whose ancestor global.json rules govern the operation.

**Parameter `cancellationToken`:** Cancels discovery and drains the SDK process.

**Returns:** The selected SDK and fixed managed CLI path, without probing reference pack directories.

**Throws `System.IO.DirectoryNotFoundException`:** The source owner directory does not exist.

**Throws `System.IO.FileNotFoundException`:** The host or selected SDK CLI is missing.

**Throws `System.InvalidOperationException`:** The host cannot resolve the source owner's requested SDK.

**Throws `System.OperationCanceledException`:** The caller cancels SDK discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/DotNetSdkResolver.cs#L75).
