---
title: "NativeToolchainSelection"
description: "Reference for NativeToolchainSelection in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.a8cba54ec2a3dd34
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeToolchainSelection`

This reference describes `NativeToolchainSelection` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f7ba9b05582bac00) | Method |
| [`ResolveExecutable`](#api-78d67f4a3d65939a) | Method |
| [`TryResolveExecutable`](#api-1e579fa88e8aa666) | Method |
| [`WithTools`](#api-1ed03b255016639b) | Method |
| [`cmakeArguments`](#api-ef5e5b305f723d9b) | Property |
| [`compilerInputs`](#api-1ceb2c4ec16a17d2) | Property |
| [`declarations`](#api-8b19e9aa0651b4a4) | Property |
| [`environment`](#api-de040b897c608735) | Property |
| [`host`](#api-8a5cf82c6cf52a51) | Property |
| [`inputPaths`](#api-4874e810982c0aec) | Property |
| [`linkPlan`](#api-5297daeae34a8469) | Property |
| [`multiConfiguration`](#api-1857c684cc486329) | Property |
| [`sharedLibraryExtension`](#api-cf6c1ad0784ca0a0) | Property |
| [`targetId`](#api-0e8801719ee1df06) | Property |

## Type declaration

<a id="api-a8cba54ec2a3dd34"></a>
<!-- api: T:Inno.Build.Toolchains.NativeToolchainSelection 4c1b907ae3e376be3e11a1ba1dad00b7e6256e927c5cc5322c92c6cad92fa82d -->

```csharp
public sealed class Inno.Build.Toolchains.NativeToolchainSelection
```

Freezes target compiler tools and SDK inputs independently of discovery and platform policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainSelection.cs#L12).

## `#ctor`

<a id="api-f7ba9b05582bac00"></a>
<!-- api: M:Inno.Build.Toolchains.NativeToolchainSelection.#ctor(System.String,Inno.Build.Toolchains.BuildHostDescriptor,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},Inno.Build.Toolchains.NativeLinkPlan,System.Boolean,Inno.Build.Toolchains.NativeCompilerInputs) 932136237972b9b6261d8602fa1d64600999b3b075cd3dfbd760ee3ad59ba6d1 -->

```csharp
public Inno.Build.Toolchains.NativeToolchainSelection.NativeToolchainSelection(string targetId, Inno.Build.Toolchains.BuildHostDescriptor host, System.Collections.Generic.IReadOnlyDictionary<string, string> tools, System.Collections.Generic.IReadOnlyDictionary<string, string> environment, System.Collections.Generic.IEnumerable<string> inputPaths, System.Collections.Generic.IEnumerable<string> cmakeArguments, Inno.Build.Toolchains.NativeLinkPlan linkPlan, bool multiConfiguration, Inno.Build.Toolchains.NativeCompilerInputs? compilerInputs = null)
```

Captures an immutable, explicit compiler and SDK selection supplied by a platform provider.

**Parameter `targetId`:** The exact native target identity.

**Parameter `host`:** The machine on which the selected tools execute.

**Parameter `tools`:** Absolute executable paths indexed by explicit command names.

**Parameter `environment`:** Frozen SDK values applied to owned tools and in-process binding configuration without changing process state.

**Parameter `inputPaths`:** Compiler, SDK and tool files participating in product identity.

**Parameter `cmakeArguments`:** Ordered configuration arguments pinning compiler, generator and SDK.

**Parameter `multiConfiguration`:** Whether configuration is selected during build rather than configure.

**Parameter `linkPlan`:** The sole source of target library formats and linker capabilities.

**Parameter `compilerInputs`:** Explicit SDK parser inputs, or null when no native parser is provided.

**Throws `System.ArgumentException`:** The selection is incomplete or has unassigned target facts.

**Throws `System.ArgumentNullException`:** A required descriptor or collection is null.

**Throws `System.IO.FileNotFoundException`:** A selected executable or SDK input is unavailable before preparation begins.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainSelection.cs#L55).

## `ResolveExecutable`

<a id="api-78d67f4a3d65939a"></a>
<!-- api: M:Inno.Build.Toolchains.NativeToolchainSelection.ResolveExecutable(System.String) 6fbd6ba71a3d7e0c802f8a055c31ce2e20f31cc40cf8f6c97c85578872450eef -->

```csharp
public string Inno.Build.Toolchains.NativeToolchainSelection.ResolveExecutable(string name)
```

Resolves an executable from the frozen selection rather than a mutable process PATH.

**Parameter `name`:** The explicit command registered by the platform provider.

**Returns:** The selected executable; an absent command fails immediately.

**Throws `System.InvalidOperationException`:** The provider did not register the requested command.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainSelection.cs#L212).

## `TryResolveExecutable`

<a id="api-1e579fa88e8aa666"></a>
<!-- api: M:Inno.Build.Toolchains.NativeToolchainSelection.TryResolveExecutable(System.String,System.String@) 2a9b4f1ccaf6b2381ca20433831e745e60783ebd153c8c52225536d6b6766a14 -->

```csharp
public bool Inno.Build.Toolchains.NativeToolchainSelection.TryResolveExecutable(string name, out string executable)
```

Checks an optional tool capability without discovering a command from the process environment.

**Parameter `name`:** The declared tool identity to check.

**Parameter `executable`:** The frozen absolute path when present, or an empty string when absent.

**Returns:** True only when this selection explicitly supplies the requested tool.

**Throws `System.ArgumentException`:** The tool identity is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainSelection.cs#L231).

## `WithTools`

<a id="api-1ed03b255016639b"></a>
<!-- api: M:Inno.Build.Toolchains.NativeToolchainSelection.WithTools(System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IEnumerable{System.String}) 3f487b913c2cc8ad11b194788d28546715bca907f84afd837a17d4786654d91e -->

```csharp
public Inno.Build.Toolchains.NativeToolchainSelection Inno.Build.Toolchains.NativeToolchainSelection.WithTools(System.Collections.Generic.IReadOnlyDictionary<string, string> tools, System.Collections.Generic.IEnumerable<string> inputs)
```

Adds integration-owned tools without changing the platform SDK or replacing existing commands.

**Parameter `tools`:** Explicit absolute executables required by the selected backend integration.

**Parameter `inputs`:** Integration implementation and configuration files participating in tool selection.

**Returns:** A new immutable selection containing both the platform and integration inputs.

**Throws `System.ArgumentException`:** A contribution conflicts with an already selected command.

**Throws `System.IO.FileNotFoundException`:** A contributed tool or input does not exist.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainSelection.cs#L183).

## `cmakeArguments`

<a id="api-ef5e5b305f723d9b"></a>
<!-- api: P:Inno.Build.Toolchains.NativeToolchainSelection.cmakeArguments e6740a37bc739f8a45f1f6c8b74f6bfa1888b6d6daccb16a2cea45228bb36fae -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.NativeToolchainSelection.cmakeArguments { get; }
```

Gets configuration arguments selecting the compiler, generator and SDK.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainSelection.cs#L135).

## `compilerInputs`

<a id="api-1ceb2c4ec16a17d2"></a>
<!-- api: P:Inno.Build.Toolchains.NativeToolchainSelection.compilerInputs f95c153251f21508a7fabc0d86adcd0a51d74221fb34036817f30e190a1f44a7 -->

```csharp
public Inno.Build.Toolchains.NativeCompilerInputs Inno.Build.Toolchains.NativeToolchainSelection.compilerInputs { get; }
```

Gets the target provider's explicit parser inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainSelection.cs#L158).

## `declarations`

<a id="api-8b19e9aa0651b4a4"></a>
<!-- api: P:Inno.Build.Toolchains.NativeToolchainSelection.declarations 11d5605dbd175d262fea21f32fd4f47069ba2bc3125f3f58556628f1c75190a0 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.NativeToolchainSelection.declarations { get; }
```

Gets ordered tool and environment facts included in the recipe fingerprint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainSelection.cs#L130).

## `environment`

<a id="api-de040b897c608735"></a>
<!-- api: P:Inno.Build.Toolchains.NativeToolchainSelection.environment 721440422187fe1ef1003912776473e5b79d8d966c8a6d43ab5039b52596841d -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, string> Inno.Build.Toolchains.NativeToolchainSelection.environment { get; }
```

Gets frozen SDK values supplied to owned tools and in-process binding configuration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainSelection.cs#L140).

## `host`

<a id="api-8a5cf82c6cf52a51"></a>
<!-- api: P:Inno.Build.Toolchains.NativeToolchainSelection.host 589d08d5a6acdc4273897b6da9f40a8370ab759aa8d3566aec36932f72845dd3 -->

```csharp
public Inno.Build.Toolchains.BuildHostDescriptor Inno.Build.Toolchains.NativeToolchainSelection.host { get; }
```

Gets the declared tool execution host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainSelection.cs#L120).

## `inputPaths`

<a id="api-4874e810982c0aec"></a>
<!-- api: P:Inno.Build.Toolchains.NativeToolchainSelection.inputPaths 8ec25e6124345a503c42736fb52521f6a297d2a0235dbbd22ae5d8fc21bbf69c -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.NativeToolchainSelection.inputPaths { get; }
```

Gets the immutable SDK and compiler input closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainSelection.cs#L125).

## `linkPlan`

<a id="api-5297daeae34a8469"></a>
<!-- api: P:Inno.Build.Toolchains.NativeToolchainSelection.linkPlan 65b1e0a976836d653645c018cb6eb6a319035546070b3633f484421d785672f0 -->

```csharp
public Inno.Build.Toolchains.NativeLinkPlan Inno.Build.Toolchains.NativeToolchainSelection.linkPlan { get; }
```

Gets the platform-owned linker capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainSelection.cs#L163).

## `multiConfiguration`

<a id="api-1857c684cc486329"></a>
<!-- api: P:Inno.Build.Toolchains.NativeToolchainSelection.multiConfiguration 5431e7fd1d811ead9eef31edd925eb1c7e98252369dab658820f76049d52c0e3 -->

```csharp
public bool Inno.Build.Toolchains.NativeToolchainSelection.multiConfiguration { get; }
```

Gets whether the selected generator supports build-time configuration selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainSelection.cs#L153).

## `sharedLibraryExtension`

<a id="api-cf6c1ad0784ca0a0"></a>
<!-- api: P:Inno.Build.Toolchains.NativeToolchainSelection.sharedLibraryExtension e2d2691d88daa7caa979bf3f953ef2b077463dba34883b9ac45e85f9fb854f0f -->

```csharp
public string Inno.Build.Toolchains.NativeToolchainSelection.sharedLibraryExtension { get; }
```

Gets the target's shared-library suffix.

**Throws `System.NotSupportedException`:** The target does not support shared libraries.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainSelection.cs#L148).

## `targetId`

<a id="api-0e8801719ee1df06"></a>
<!-- api: P:Inno.Build.Toolchains.NativeToolchainSelection.targetId c4f4c30c40bab95eb41425f55d4877c18d50f92bc1936bb3e40d5d0d3210142c -->

```csharp
public string Inno.Build.Toolchains.NativeToolchainSelection.targetId { get; }
```

Gets the target identity, without inferring it from the execution host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainSelection.cs#L115).
