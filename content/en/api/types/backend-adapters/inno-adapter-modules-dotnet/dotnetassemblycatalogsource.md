---
title: "DotNetAssemblyCatalogSource"
description: "Reference for DotNetAssemblyCatalogSource in Inno.Adapter.Modules.DotNet."
uid: api.inno.adapter.modules.dotnet.3d27e635d040ef9a
kind: api
owners:
  - Inno.Adapter.Modules.DotNet
apiSurface: source-clr
contracts:
  - project.inno-adapter-modules-dotnet
---
# `DotNetAssemblyCatalogSource`

This reference describes `DotNetAssemblyCatalogSource` in `Inno.Adapter.Modules.DotNet`. Read the [shared contract](../../../projects/inno-adapter-modules-dotnet.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Extensibility.Modules.IAssemblyCatalogSource`.

## Members

| Member | Kind |
| --- | --- |
| [`changed`](#api-bbde0880bc990a1a) | Event |
| [`#ctor`](#api-ff50f71908f0e11a) | Method |
| [`Dispose`](#api-ada1d6f131f6e8a2) | Method |
| [`GetAssemblies`](#api-0d8731c3dd19c832) | Method |
| [`GetSharedAssemblies`](#api-7bc35abc89b67305) | Method |
| [`IsFrameworkAssembly`](#api-582a72f04596d8e0) | Method |
| [`IsFrameworkReference`](#api-1b82deb3a2cb01ae) | Method |

## Type declaration

<a id="api-3d27e635d040ef9a"></a>
<!-- api: T:Inno.Adapter.Modules.DotNet.DotNetAssemblyCatalogSource d438e2eb336277aa90b9713d439d9795a766e13916d22e52cb5338cc613d6ceb -->

```csharp
public sealed class Inno.Adapter.Modules.DotNet.DotNetAssemblyCatalogSource : Inno.Extensibility.Modules.IAssemblyCatalogSource
```

Owns discovery of an explicit desktop authoring closure and its shareable framework contracts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetAssemblyCatalogSource.cs#L14).

## `changed`

<a id="api-bbde0880bc990a1a"></a>
<!-- api: E:Inno.Adapter.Modules.DotNet.DotNetAssemblyCatalogSource.changed 22f0fc121a3c9d75161137203f75264abad4ae57570763e34866cc81a00db27f -->

```csharp
public System.Action? Inno.Adapter.Modules.DotNet.DotNetAssemblyCatalogSource.changed
```

Notifies the owner that the host assembly snapshot should be refreshed at a safe point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetAssemblyCatalogSource.cs#L50).

## `#ctor`

<a id="api-ff50f71908f0e11a"></a>
<!-- api: M:Inno.Adapter.Modules.DotNet.DotNetAssemblyCatalogSource.#ctor(System.Reflection.Assembly[]) c96927a9f4c2b906d6ac18d0d5344449366007aa15b2370a5eb1f22989ea0e92 -->

```csharp
public Inno.Adapter.Modules.DotNet.DotNetAssemblyCatalogSource.DotNetAssemblyCatalogSource(params System.Reflection.Assembly[] roots)
```

Resolves the referenced Inno closure in the roots' existing load context.

**Parameter `roots`:** Explicit composition roots, all belonging to the same externally owned load context.

**Throws `System.ArgumentException`:** No roots are supplied or roots belong to different load contexts.

**Throws `System.IO.FileNotFoundException`:** An explicitly declared engine dependency is absent from the host deployment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetAssemblyCatalogSource.cs#L35).

## `Dispose`

<a id="api-ada1d6f131f6e8a2"></a>
<!-- api: M:Inno.Adapter.Modules.DotNet.DotNetAssemblyCatalogSource.Dispose 35fcd296a2cc4087872f5eabc43a2a89b64b35db9d3be0e71af0e05aa1400c53 -->

```csharp
public void Inno.Adapter.Modules.DotNet.DotNetAssemblyCatalogSource.Dispose()
```

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetAssemblyCatalogSource.cs#L78).

## `GetAssemblies`

<a id="api-0d8731c3dd19c832"></a>
<!-- api: M:Inno.Adapter.Modules.DotNet.DotNetAssemblyCatalogSource.GetAssemblies 144251dbc521a2f3ff2f281459916aba03d08587f87b6709807e7ba1df542d85 -->

```csharp
public System.Collections.Generic.IReadOnlyList<System.Reflection.Assembly> Inno.Adapter.Modules.DotNet.DotNetAssemblyCatalogSource.GetAssemblies()
```

Gets the complete host assemblies that participate in extension discovery.

**Returns:** The current host snapshot; the caller must not retain it beyond its catalog generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetAssemblyCatalogSource.cs#L53).

## `GetSharedAssemblies`

<a id="api-7bc35abc89b67305"></a>
<!-- api: M:Inno.Adapter.Modules.DotNet.DotNetAssemblyCatalogSource.GetSharedAssemblies 5fc49394fa02fefc66dc57d65636c40cadd638c6f25718cc88b50ea1aa459cb4 -->

```csharp
public System.Collections.Generic.IReadOnlyList<System.Reflection.Assembly> Inno.Adapter.Modules.DotNet.DotNetAssemblyCatalogSource.GetSharedAssemblies()
```

Gets host contracts and framework assemblies available to candidate modules.

**Returns:** A snapshot of shareable assemblies owned by the host implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetAssemblyCatalogSource.cs#L63).

## `IsFrameworkAssembly`

<a id="api-582a72f04596d8e0"></a>
<!-- api: M:Inno.Adapter.Modules.DotNet.DotNetAssemblyCatalogSource.IsFrameworkAssembly(System.Reflection.Assembly) a8eb9967c7818872e6df643f73531c09c0fb06679d061f0985a7896a4e92ccb9 -->

```csharp
public bool Inno.Adapter.Modules.DotNet.DotNetAssemblyCatalogSource.IsFrameworkAssembly(System.Reflection.Assembly assembly)
```

Determines whether an assembly is a framework contract rather than a contributed module.

**Parameter `assembly`:** The candidate shared assembly.

**Returns:** Whether the assembly is owned by the selected managed framework.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetAssemblyCatalogSource.cs#L75).

## `IsFrameworkReference`

<a id="api-1b82deb3a2cb01ae"></a>
<!-- api: M:Inno.Adapter.Modules.DotNet.DotNetAssemblyCatalogSource.IsFrameworkReference(System.String) 6d3337cff6cf8a7e9838cedd7f464fc47c7b7a657d038ea0811019f9df7988e0 -->

```csharp
public bool Inno.Adapter.Modules.DotNet.DotNetAssemblyCatalogSource.IsFrameworkReference(string assemblyName)
```

Determines whether a referenced simple name belongs to the selected managed framework.

**Parameter `assemblyName`:** The referenced managed assembly simple name.

**Returns:** Whether the framework owns this dependency.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/runtime/Inno.Adapter.Modules.DotNet/DotNetAssemblyCatalogSource.cs#L72).
