---
title: "BgfxNativeBuildProfile"
description: "Reference for BgfxNativeBuildProfile in Inno.Build.Toolchains.Bgfx."
uid: api.inno.build.toolchains.bgfx.3e3c4725c3e0811d
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx
---
# `BgfxNativeBuildProfile`

This reference describes `BgfxNativeBuildProfile` in `Inno.Build.Toolchains.Bgfx`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6c94662cc4c57d40) | Method |
| [`CreateBindingLinkSettings`](#api-c1eaa6f0bbc60532) | Method |
| [`CreateBuildInvocation`](#api-15d33f873c9a0f80) | Method |
| [`SelectTools`](#api-12b4c4c77d859b4b) | Method |
| [`artifactPathToken`](#api-7e99189992f57762) | Property |
| [`bindingCmakeArguments`](#api-2e0389a44ec60128) | Property |
| [`generatorArguments`](#api-5158501d7faaa62f) | Property |
| [`targetId`](#api-24b79e0ba190fc3f) | Property |

## Type declaration

<a id="api-3e3c4725c3e0811d"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile f1584927a412b203586956b4161debf2cdac7d3ea6efcc88e41d350672ac957b -->

```csharp
public abstract class Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile
```

Supplies platform-owned project generation and SDK invocation data to the shared BGFX recipe.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxNativeBuildProfile.cs#L9).

## `#ctor`

<a id="api-6c94662cc4c57d40"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile.#ctor a6033636e494736212d9c9903d8a628bb5d8d3a801e54921bc793f03523e8735 -->

```csharp
protected Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile.BgfxNativeBuildProfile()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxNativeBuildProfile.cs#L9).

## `CreateBindingLinkSettings`

<a id="api-c1eaa6f0bbc60532"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile.CreateBindingLinkSettings(System.String) b72d4e4f446f0eff4a147bc98c88a2b932e6ab799b8def2779c2084c6727b2f1 -->

```csharp
public abstract (string reference, System.Collections.Generic.IReadOnlyList<string> arguments) Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile.CreateBindingLinkSettings(string archivePath)
```

Formats bridge dependency and retention requirements for the platform's GENie generator.

**Parameter `archivePath`:** The complete path of the independently compiled bridge archive.

**Returns:** The dependency reference and ordered linker arguments retaining every bridge translation unit.

**Throws `System.ArgumentException`:** The archive path is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxNativeBuildProfile.cs#L61).

## `CreateBuildInvocation`

<a id="api-15d33f873c9a0f80"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile.CreateBuildInvocation(Inno.Build.Toolchains.NativeBuildContext,System.Boolean) a3e99fb2c4a81a5436a2df0ddd98fde0c5bb82b7ec45bad71d04daddfdd125fe -->

```csharp
public abstract Inno.Build.Toolchains.Bgfx.BgfxBuildInvocation Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile.CreateBuildInvocation(Inno.Build.Toolchains.NativeBuildContext context, bool includeTools)
```

Freezes the selected SDK invocation without executing tools or creating staging.

**Parameter `context`:** The frozen target tools and configuration used by this operation.

**Parameter `includeTools`:** Whether the component must prepare offline compiler executables.

**Returns:** Immutable arguments executed from the owned BGFX source snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxNativeBuildProfile.cs#L75).

## `SelectTools`

<a id="api-12b4c4c77d859b4b"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile.SelectTools(Inno.Build.Toolchains.NativeBuildContext,System.Boolean) ab32291ffc1ad0bbe77fd3132e09b1355fb1ce5b33567e1b1ac45bd7358f5716 -->

```csharp
public abstract Inno.Build.Toolchains.NativeToolchainSelection Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile.SelectTools(Inno.Build.Toolchains.NativeBuildContext context, bool includeTools)
```

Adds the integration's explicit generator executable and its configuration inputs before preparation.

**Parameter `context`:** The requested target, checkout and already selected platform SDK.

**Parameter `includeTools`:** Whether this request builds offline tools, which do not compile a runtime binding bridge.

**Returns:** A frozen selection declaring the generator and all existing SDK commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxNativeBuildProfile.cs#L23).

## `artifactPathToken`

<a id="api-7e99189992f57762"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile.artifactPathToken b2e10e3e9f464c5fa19a77515d8f3b49906e0a1f96b4034db696e42f2d5ff80e -->

```csharp
public abstract string Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile.artifactPathToken { get; }
```

Gets the vendor output directory token used to select this target's artifacts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxNativeBuildProfile.cs#L41).

## `bindingCmakeArguments`

<a id="api-2e0389a44ec60128"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile.bindingCmakeArguments 107d6a3abce9e7c1885fba2315aba603f601dc1fbdc7994fe95c322b1b2b4ead -->

```csharp
public abstract System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile.bindingCmakeArguments { get; }
```

Gets SDK options needed to compile the generated bridge with the producer's runtime linkage.
These options apply only to the independently compiled bridge archive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxNativeBuildProfile.cs#L47).

## `generatorArguments`

<a id="api-5158501d7faaa62f"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile.generatorArguments 88c4b382ce7c7422b8553b276f1fcc75abf9092c829f44f6407811578716a9da -->

```csharp
public abstract System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile.generatorArguments { get; }
```

Gets ordered vendor project-generation arguments, excluding shared component options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxNativeBuildProfile.cs#L36).

## `targetId`

<a id="api-24b79e0ba190fc3f"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile.targetId 48436f25ae5ebf072fdad9cfb0bc7da9f35ecafad483bc4b267a45a2caee23f1 -->

```csharp
public abstract string Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile.targetId { get; }
```

Gets the exact native target accepted by this configuration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/BgfxNativeBuildProfile.cs#L31).
