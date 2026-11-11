---
title: "NativeToolchainPreparation"
description: "Reference for NativeToolchainPreparation in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.289f19e5ac67d6c5
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeToolchainPreparation`

This reference describes `NativeToolchainPreparation` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateEnvironment`](#api-202ab55e7e72e403) | Method |
| [`Freeze`](#api-e0ea03065657679d) | Method |

## Type declaration

<a id="api-289f19e5ac67d6c5"></a>
<!-- api: T:Inno.Build.Toolchains.NativeToolchainPreparation 8cc36f37677243516a6a7e9d9b85e42b22fd295a94c619ede07277f3bd3a68f5 -->

```csharp
public static class Inno.Build.Toolchains.NativeToolchainPreparation
```

Supplies shared environment isolation and SDK input validation without selecting a platform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainPreparation.cs#L11).

## `CreateEnvironment`

<a id="api-202ab55e7e72e403"></a>
<!-- api: M:Inno.Build.Toolchains.NativeToolchainPreparation.CreateEnvironment acccbc8718e0663e4e53bba1e51099b1716d9b9202cd8fa42960548a19ba9af5 -->

```csharp
public static System.Collections.Generic.Dictionary<string, string> Inno.Build.Toolchains.NativeToolchainPreparation.CreateEnvironment()
```

Creates a child-process environment that clears undeclared ambient compiler policy.

**Returns:** A caller-owned dictionary to populate with explicitly selected SDK variables.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainPreparation.cs#L26).

## `Freeze`

<a id="api-e0ea03065657679d"></a>
<!-- api: M:Inno.Build.Toolchains.NativeToolchainPreparation.Freeze(System.String,Inno.Build.Toolchains.BuildHostDescriptor,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},Inno.Build.Toolchains.NativeLinkPlan,System.Boolean,Inno.Build.Toolchains.NativeCompilerInputs) eae4af7a6f9ef29861076bd03eb96ae075a2065a646f23b59f0b0a336cd8f77c -->

```csharp
public static Inno.Build.Toolchains.NativeToolchainSelection Inno.Build.Toolchains.NativeToolchainPreparation.Freeze(string targetId, Inno.Build.Toolchains.BuildHostDescriptor host, System.Collections.Generic.IReadOnlyDictionary<string, string> tools, System.Collections.Generic.IReadOnlyDictionary<string, string> environment, System.Collections.Generic.IEnumerable<string> inputs, System.Collections.Generic.IEnumerable<string> cmakeArguments, Inno.Build.Toolchains.NativeLinkPlan linkPlan, bool multiConfiguration, Inno.Build.Toolchains.NativeCompilerInputs? compilerInputs = null)
```

Validates and freezes a provider's complete tool selection before product staging.

**Parameter `targetId`:** The explicit requested target.

**Parameter `host`:** The declared tool execution host.

**Parameter `tools`:** Selected executable paths.

**Parameter `environment`:** Isolated child environment.

**Parameter `inputs`:** Selected compiler and SDK inputs.

**Parameter `cmakeArguments`:** Ordered target configuration arguments.

**Parameter `multiConfiguration`:** Whether configuration is chosen during build.

**Parameter `linkPlan`:** The sole source of target library formats and linker capabilities.

**Parameter `compilerInputs`:** The selected SDK parser inputs, or null for a selection without parsing capability.

**Returns:** An immutable selection with validated physical tool and SDK inputs.

**Throws `System.IO.FileNotFoundException`:** A selected SDK input or executable is absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeToolchainPreparation.cs#L65).
