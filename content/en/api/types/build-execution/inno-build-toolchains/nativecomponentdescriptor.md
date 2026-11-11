---
title: "NativeComponentDescriptor"
description: "Reference for NativeComponentDescriptor in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.4c1a90a6f32f4296
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeComponentDescriptor`

This reference describes `NativeComponentDescriptor` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f5e421624a1394a3) | Method |
| [`GetNativeRoot`](#api-c52cdafc011ec954) | Method |
| [`GetToolchainRoot`](#api-fe663268d8ff9888) | Method |
| [`bindingDefinition`](#api-feaa39bc589b90ed) | Property |
| [`id`](#api-743368349d6fa848) | Property |
| [`nativeProject`](#api-9366a5aa90b5bb6e) | Property |
| [`staticBuild`](#api-e945dc58ccce098b) | Property |
| [`toolchainProject`](#api-1013c3aac87e9b2e) | Property |

## Type declaration

<a id="api-4c1a90a6f32f4296"></a>
<!-- api: T:Inno.Build.Toolchains.NativeComponentDescriptor 7c2a5512787adc1c54f06f7590e646a4768bc2da3ed2ab76fab58ac783b478db -->

```csharp
public sealed class Inno.Build.Toolchains.NativeComponentDescriptor
```

Declares the unique source and build owners of a reusable native component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentDescriptor.cs#L10).

## `#ctor`

<a id="api-f5e421624a1394a3"></a>
<!-- api: M:Inno.Build.Toolchains.NativeComponentDescriptor.#ctor(System.String,System.String,System.String,Inno.Build.Toolchains.NativeStaticBuildDefinition,System.String) e50172aa28704120b23ffc306d79fe74fbf6baf03220f3e00440f00601338078 -->

```csharp
public Inno.Build.Toolchains.NativeComponentDescriptor.NativeComponentDescriptor(string id, string nativeProject, string toolchainProject, Inno.Build.Toolchains.NativeStaticBuildDefinition? staticBuild = null, string? bindingDefinition = null)
```

Freezes portable checkout-relative owner locations without assembly-name or directory inference.

**Parameter `id`:** The portable component artifact identity.

**Parameter `nativeProject`:** The checkout-relative native project file.

**Parameter `toolchainProject`:** The checkout-relative build implementation project file.

**Parameter `staticBuild`:** The backend-owned static recipe, or null when this component has none.

**Parameter `bindingDefinition`:** The portable binding definition, or null when the component generates no bindings.

**Throws `System.ArgumentException`:** An identity or path is empty, absolute, or escapes its checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentDescriptor.cs#L33).

## `GetNativeRoot`

<a id="api-c52cdafc011ec954"></a>
<!-- api: M:Inno.Build.Toolchains.NativeComponentDescriptor.GetNativeRoot(System.String) 461e20b9a08c95603c32333886627d5590ce5f8c6edeb3dde5e6e7f959546dc5 -->

```csharp
public string Inno.Build.Toolchains.NativeComponentDescriptor.GetNativeRoot(string engineRoot)
```

Resolves the declared native owner within an explicitly supplied checkout.

**Parameter `engineRoot`:** The absolute operation-owned checkout.

**Returns:** The absolute native project directory, without creating it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentDescriptor.cs#L90).

## `GetToolchainRoot`

<a id="api-fe663268d8ff9888"></a>
<!-- api: M:Inno.Build.Toolchains.NativeComponentDescriptor.GetToolchainRoot(System.String) c7b08623570f5a32d09c58df9b3ecb589e609b281248bc20f0c00a0d416557ff -->

```csharp
public string Inno.Build.Toolchains.NativeComponentDescriptor.GetToolchainRoot(string engineRoot)
```

Resolves the declared recipe owner within an explicitly supplied checkout.

**Parameter `engineRoot`:** The absolute operation-owned checkout.

**Returns:** The absolute toolchain project directory, without creating it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentDescriptor.cs#L101).

## `bindingDefinition`

<a id="api-feaa39bc589b90ed"></a>
<!-- api: P:Inno.Build.Toolchains.NativeComponentDescriptor.bindingDefinition 6ef903b7d46437fd23ed9855634ce775d1d830366559f9aa078d0131a6dd41b6 -->

```csharp
public string? Inno.Build.Toolchains.NativeComponentDescriptor.bindingDefinition { get; }
```

Gets the declared binding definition, or null for a component without generated bindings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentDescriptor.cs#L79).

## `id`

<a id="api-743368349d6fa848"></a>
<!-- api: P:Inno.Build.Toolchains.NativeComponentDescriptor.id 9e92ca934e9a5c77544dbcb7d6492bfc0feb832ceddf391d91d184a9c93c7138 -->

```csharp
public string Inno.Build.Toolchains.NativeComponentDescriptor.id { get; }
```

Gets the portable artifact identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentDescriptor.cs#L59).

## `nativeProject`

<a id="api-9366a5aa90b5bb6e"></a>
<!-- api: P:Inno.Build.Toolchains.NativeComponentDescriptor.nativeProject ab6eef7f923363bea1e732de10db2fc585f1402ea64d4f2947444a073caa1494 -->

```csharp
public string Inno.Build.Toolchains.NativeComponentDescriptor.nativeProject { get; }
```

Gets the explicit checkout-relative Native owner project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentDescriptor.cs#L64).

## `staticBuild`

<a id="api-e945dc58ccce098b"></a>
<!-- api: P:Inno.Build.Toolchains.NativeComponentDescriptor.staticBuild e79eec709f5b7e67e3cef0609cb1738f754351a791aa58ee81d730a1d9ff0ab0 -->

```csharp
public Inno.Build.Toolchains.NativeStaticBuildDefinition? Inno.Build.Toolchains.NativeComponentDescriptor.staticBuild { get; }
```

Gets the declared static build capability without requiring a platform-specific component project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentDescriptor.cs#L74).

## `toolchainProject`

<a id="api-1013c3aac87e9b2e"></a>
<!-- api: P:Inno.Build.Toolchains.NativeComponentDescriptor.toolchainProject c576fa20e09d289e838c2ca803bb2be975201c32b9de9aa60ed56973122c9f04 -->

```csharp
public string Inno.Build.Toolchains.NativeComponentDescriptor.toolchainProject { get; }
```

Gets the explicit checkout-relative recipe owner project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeComponentDescriptor.cs#L69).
