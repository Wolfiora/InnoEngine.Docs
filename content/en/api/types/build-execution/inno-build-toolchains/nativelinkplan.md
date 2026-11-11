---
title: "NativeLinkPlan"
description: "Reference for NativeLinkPlan in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.bb521e264b03c0d0
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeLinkPlan`

This reference describes `NativeLinkPlan` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-31b653b2f847eb21) | Method |
| [`GetFileExtension`](#api-651a33838d5e7f2d) | Method |
| [`GetStaticFileName`](#api-28f390d4607dd5c2) | Method |
| [`cmakeArguments`](#api-1d85d391a5b0fdbe) | Property |
| [`importLibraryExtension`](#api-f74f79fcd2d83ef4) | Property |
| [`sharedLibraryExtension`](#api-bfaadb95e9a94a25) | Property |
| [`staticLibraryExtension`](#api-bf1e67f556ec4288) | Property |

## Type declaration

<a id="api-bb521e264b03c0d0"></a>
<!-- api: T:Inno.Build.Toolchains.NativeLinkPlan 8f6a2c4bcebf5b48a9adddfa2d48e68318bebb82e8e8bd4b34ea40482dc0b436 -->

```csharp
public sealed class Inno.Build.Toolchains.NativeLinkPlan
```

Freezes platform library formats and linker configuration independently of component recipes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeLinkPlan.cs#L10).

## `#ctor`

<a id="api-31b653b2f847eb21"></a>
<!-- api: M:Inno.Build.Toolchains.NativeLinkPlan.#ctor(System.String,System.String,System.String,System.Collections.Generic.IEnumerable{System.String}) b2d584a4aff9d8a77a4227ac9e3b980233d4d3041bf64d411233af8df0bd51e3 -->

```csharp
public Inno.Build.Toolchains.NativeLinkPlan.NativeLinkPlan(string? sharedLibraryExtension = null, string? importLibraryExtension = null, string? staticLibraryExtension = null, System.Collections.Generic.IEnumerable<string>? cmakeArguments = null)
```

Captures explicitly supported library formats and ordered linker configuration.

**Parameter `sharedLibraryExtension`:** The shared-library suffix, or null when shared linkage is unsupported.

**Parameter `importLibraryExtension`:** The separate import-library suffix, or null when the shared library is the link input.

**Parameter `staticLibraryExtension`:** The archive suffix, or null when static linkage is not contributed.

**Parameter `cmakeArguments`:** Ordered platform-owned CMake linker definitions.

**Throws `System.ArgumentException`:** No format is supported, an import format lacks shared linkage, a suffix is invalid, or an argument is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeLinkPlan.cs#L30).

## `GetFileExtension`

<a id="api-651a33838d5e7f2d"></a>
<!-- api: M:Inno.Build.Toolchains.NativeLinkPlan.GetFileExtension(Inno.Build.Toolchains.NativeLibraryKind) 7ad4b8996a55b669d96d8a8d4bc73af5f5a71172e45ed6b0490c85cec3a90f46 -->

```csharp
public string Inno.Build.Toolchains.NativeLinkPlan.GetFileExtension(Inno.Build.Toolchains.NativeLibraryKind kind)
```

Resolves an explicitly supported linkage format before staging or generation begins.

**Parameter `kind`:** The component's requested linkage.

**Returns:** The selected file extension; unsupported linkage fails immediately.

**Throws `System.NotSupportedException`:** The platform does not contribute this linkage format.

**Throws `System.ArgumentOutOfRangeException`:** The linkage kind is not defined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeLinkPlan.cs#L95).

## `GetStaticFileName`

<a id="api-28f390d4607dd5c2"></a>
<!-- api: M:Inno.Build.Toolchains.NativeLinkPlan.GetStaticFileName(System.String) 5c6d84eefc448ecbadfa6038b88ea8bf87622931cac9b4b69b1360653818100e -->

```csharp
public string Inno.Build.Toolchains.NativeLinkPlan.GetStaticFileName(string logicalName)
```

Formats an explicitly declared logical archive using the selected platform format.

**Parameter `logicalName`:** The component-owned logical archive name.

**Returns:** The exact platform file name.

**Throws `System.NotSupportedException`:** Static linkage has no registered archive format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeLinkPlan.cs#L78).

## `cmakeArguments`

<a id="api-1d85d391a5b0fdbe"></a>
<!-- api: P:Inno.Build.Toolchains.NativeLinkPlan.cmakeArguments 9efef9f965e5c30e731cd7d98c1967b617be7a594715668193646d52566734a3 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.NativeLinkPlan.cmakeArguments { get; }
```

Gets ordered platform linker definitions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeLinkPlan.cs#L64).

## `importLibraryExtension`

<a id="api-f74f79fcd2d83ef4"></a>
<!-- api: P:Inno.Build.Toolchains.NativeLinkPlan.importLibraryExtension 423e3bd773db98e30b924eea46b709cd878a6b441678e04f5ed55fb637e71723 -->

```csharp
public string? Inno.Build.Toolchains.NativeLinkPlan.importLibraryExtension { get; }
```

Gets the separate import suffix, or null when no separate import library is used.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeLinkPlan.cs#L56).

## `sharedLibraryExtension`

<a id="api-bfaadb95e9a94a25"></a>
<!-- api: P:Inno.Build.Toolchains.NativeLinkPlan.sharedLibraryExtension a0ba4e8d604ad31799b6b4ffbacd00780b000e565f8f4482b27ae6f1d0b7c39a -->

```csharp
public string? Inno.Build.Toolchains.NativeLinkPlan.sharedLibraryExtension { get; }
```

Gets the shared-library suffix, or null when shared linkage is unsupported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeLinkPlan.cs#L52).

## `staticLibraryExtension`

<a id="api-bf1e67f556ec4288"></a>
<!-- api: P:Inno.Build.Toolchains.NativeLinkPlan.staticLibraryExtension 2159dff92846e4abfcf0a033f632b11b733f3dca8f41d352693b65ea99f77166 -->

```csharp
public string? Inno.Build.Toolchains.NativeLinkPlan.staticLibraryExtension { get; }
```

Gets the static archive suffix, or null when static linkage is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeLinkPlan.cs#L60).
