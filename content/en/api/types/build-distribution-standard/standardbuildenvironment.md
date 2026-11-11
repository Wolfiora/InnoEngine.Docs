---
title: "StandardBuildEnvironment"
description: "Reference for StandardBuildEnvironment in Inno.Build.Distribution.Standard."
uid: api.inno.build.distribution.standard.34ce61062e19e5cc
kind: api
owners:
  - Inno.Build.Distribution.Standard
apiSurface: source-clr
contracts:
  - project.inno-build-distribution-standard#cache-and-workspace-ownership
---
# `StandardBuildEnvironment`

This reference describes `StandardBuildEnvironment` in `Inno.Build.Distribution.Standard`. Read the [shared contract](../../projects/inno-build-distribution-standard.md#cache-and-workspace-ownership) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Capture`](#api-25327c3983a2684a) | Method |
| [`ResolveManagedHost`](#api-ed10c33c8f7bd0be) | Method |

## Type declaration

<a id="api-34ce61062e19e5cc"></a>
<!-- api: T:Inno.Build.Distribution.Standard.StandardBuildEnvironment 394337b4425899a30bb2d41c27a9dd2aeb0d3d5acf91e15945d186b2ec9f442e -->

```csharp
public static class Inno.Build.Distribution.Standard.StandardBuildEnvironment
```

Captures the actual machine running distribution tools without choosing an output target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/build/distributions/Inno.Build.Distribution.Standard/StandardBuildEnvironment.cs#L12).

## `Capture`

<a id="api-25327c3983a2684a"></a>
<!-- api: M:Inno.Build.Distribution.Standard.StandardBuildEnvironment.Capture(System.String,Inno.Build.BuildTargetId,System.String) ffdd261f9c1dda713fd996b771830e607b5788e277217e39e3a41d22bd1b4dba -->

```csharp
public static Inno.Build.Composition.BuildCompositionContext Inno.Build.Distribution.Standard.StandardBuildEnvironment.Capture(string applicationDirectory, Inno.Build.BuildTargetId toolsTarget, string? dotnetHost = null)
```

Resolves the selected managed host and captures execution capabilities at the composition boundary.

**Parameter `applicationDirectory`:** The product or tool's installed location used for source provisioning.

**Parameter `toolsTarget`:** The native target explicitly selected for executable build tools, independently of exported games.

**Parameter `dotnetHost`:** An explicit SDK executable, or null to use DOTNET_HOST_PATH, the loaded shared runtime's
muxer, then normal executable discovery when this process has no shared runtime installation.

**Returns:** A frozen execution context; publication targets must be selected independently.

**Throws `System.PlatformNotSupportedException`:** The distribution has no build execution integration for this system or processor.

**Throws `System.IO.FileNotFoundException`:** The selected managed SDK host cannot be located.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/build/distributions/Inno.Build.Distribution.Standard/StandardBuildEnvironment.cs#L36).

## `ResolveManagedHost`

<a id="api-ed10c33c8f7bd0be"></a>
<!-- api: M:Inno.Build.Distribution.Standard.StandardBuildEnvironment.ResolveManagedHost(System.String) 133a0ed3d17b025f9dd05dff48abf552862362633e6b17df537da206fe9463d3 -->

```csharp
public static string Inno.Build.Distribution.Standard.StandardBuildEnvironment.ResolveManagedHost(string? dotnetHost = null)
```

Resolves the managed SDK executable without selecting a native tool target or preparing a product.

**Parameter `dotnetHost`:** Explicit executable, or null to use DOTNET_HOST_PATH and then the currently loaded runtime's installation.
Normal executable discovery is used only when there is no shared runtime installation.

**Returns:** The absolute existing managed SDK executable selected for this operation.

**Throws `System.IO.FileNotFoundException`:** The selected SDK executable is unavailable.

**Throws `System.PlatformNotSupportedException`:** No standard execution host is registered for this system and processor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/build/distributions/Inno.Build.Distribution.Standard/StandardBuildEnvironment.cs#L62).
