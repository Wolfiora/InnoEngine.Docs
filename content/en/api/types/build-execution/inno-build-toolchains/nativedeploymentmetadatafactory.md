---
title: "NativeDeploymentMetadataFactory"
description: "Reference for NativeDeploymentMetadataFactory in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.641a8b10c3851918
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeDeploymentMetadataFactory`

This reference describes `NativeDeploymentMetadataFactory` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-614c5e092b1f801d) | Method |
| [`BeginInvoke`](#api-3d56224604bec76f) | Method |
| [`EndInvoke`](#api-573499f52de43f03) | Method |
| [`Invoke`](#api-95de3083af7f82d4) | Method |

## Type declaration

<a id="api-641a8b10c3851918"></a>
<!-- api: T:Inno.Build.Toolchains.NativeDeploymentMetadataFactory 790013b74338d10015ea2549e4aaad22b62aedf3dacddd437d5dc87d339c0079 -->

```csharp
public delegate System.Collections.Generic.IReadOnlyDictionary<string, byte[]> Inno.Build.Toolchains.NativeDeploymentMetadataFactory(System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.NativeBuildProduct> products, System.Collections.Generic.IReadOnlyDictionary<string, string> files)
```

Creates explicitly selected deployment metadata from a frozen Native closure.

**Parameter `products`:** Borrowed complete products whose leases remain held through metadata preparation.

**Parameter `files`:** Exact relative deployment paths mapped to verified source files.

**Returns:** Relative metadata paths mapped to immutable bytes; collisions with payloads are rejected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeDeploymentMetadataFactory.cs#L17).

## `#ctor`

<a id="api-614c5e092b1f801d"></a>
<!-- api: M:Inno.Build.Toolchains.NativeDeploymentMetadataFactory.#ctor(System.Object,System.IntPtr) 56e4f3bb9134a38d18a5f70b75f0ef22546b1cdd5755ecdc27379b43f4ca5b48 -->

```csharp
public Inno.Build.Toolchains.NativeDeploymentMetadataFactory.NativeDeploymentMetadataFactory(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeDeploymentMetadataFactory.cs#L17).

## `BeginInvoke`

<a id="api-3d56224604bec76f"></a>
<!-- api: M:Inno.Build.Toolchains.NativeDeploymentMetadataFactory.BeginInvoke(System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeBuildProduct},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.AsyncCallback,System.Object) 2e10954cd240c7462b2d584702d61a53d6f1b5df1e620457dc32e7d6d2bb412a -->

```csharp
public virtual System.IAsyncResult Inno.Build.Toolchains.NativeDeploymentMetadataFactory.BeginInvoke(System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.NativeBuildProduct> products, System.Collections.Generic.IReadOnlyDictionary<string, string> files, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeDeploymentMetadataFactory.cs#L17).

## `EndInvoke`

<a id="api-573499f52de43f03"></a>
<!-- api: M:Inno.Build.Toolchains.NativeDeploymentMetadataFactory.EndInvoke(System.IAsyncResult) 048d8f916f4ab4a44f988f245daa96d9b320ab566ddd258b1b3588d219ae7c10 -->

```csharp
public virtual System.Collections.Generic.IReadOnlyDictionary<string, byte[]> Inno.Build.Toolchains.NativeDeploymentMetadataFactory.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeDeploymentMetadataFactory.cs#L17).

## `Invoke`

<a id="api-95de3083af7f82d4"></a>
<!-- api: M:Inno.Build.Toolchains.NativeDeploymentMetadataFactory.Invoke(System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeBuildProduct},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}) 5d0940e77325b7e2706bacdb44c9c2dc02d0bf77c5b0ebdf05a9db1d90f8807b -->

```csharp
public virtual System.Collections.Generic.IReadOnlyDictionary<string, byte[]> Inno.Build.Toolchains.NativeDeploymentMetadataFactory.Invoke(System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.NativeBuildProduct> products, System.Collections.Generic.IReadOnlyDictionary<string, string> files)
```

Creates explicitly selected deployment metadata from a frozen Native closure.

**Parameter `products`:** Borrowed complete products whose leases remain held through metadata preparation.

**Parameter `files`:** Exact relative deployment paths mapped to verified source files.

**Returns:** Relative metadata paths mapped to immutable bytes; collisions with payloads are rejected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeDeploymentMetadataFactory.cs#L17).
