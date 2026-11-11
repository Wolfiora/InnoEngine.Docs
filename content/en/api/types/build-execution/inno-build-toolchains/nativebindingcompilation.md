---
title: "NativeBindingCompilation"
description: "Reference for NativeBindingCompilation in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.0f3c2ab50ccf389d
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeBindingCompilation`

This reference describes `NativeBindingCompilation` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bf2223d0d7fa25b3) | Method |
| [`GetInputs`](#api-ef8158478c7cd79f) | Method |
| [`Load`](#api-0acab8634bd6b6bd) | Method |
| [`ResolveRoot`](#api-5a900805eaae7ad8) | Method |
| [`VerifyInputs`](#api-7f0bdfe9ac9d9533) | Method |
| [`compilerDefines`](#api-896915555ba3da37) | Property |
| [`cStandard`](#api-caae5d05fd20fd69) | Property |
| [`cxxStandard`](#api-371f0a85745750b2) | Property |
| [`defines`](#api-df5663fc558f5bbc) | Property |
| [`files`](#api-4b08bbe4cb905075) | Property |
| [`includeDirectories`](#api-bb2eb2895e57da3c) | Property |
| [`requiredExports`](#api-b954faf041fba67f) | Property |
| [`roots`](#api-b45f8e6c998df8b0) | Property |
| [`staticExportAbi`](#api-894b5fc7e6d001e2) | Property |
| [`staticExportNames`](#api-f944d51ba7dab164) | Property |
| [`staticExportSymbols`](#api-bfdc289cc48e4ec0) | Property |

## Type declaration

<a id="api-0f3c2ab50ccf389d"></a>
<!-- api: T:Inno.Build.Toolchains.NativeBindingCompilation 41474d8fb3c410d67959afaaa0a0e03bce1dfedccef6fc0ccbb5ec66085133a8 -->

```csharp
public sealed class Inno.Build.Toolchains.NativeBindingCompilation
```

Describes a selected component's native requirements independently of its source generator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L16).

## `#ctor`

<a id="api-bf2223d0d7fa25b3"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingCompilation.#ctor a5ed398916d6074923d7171fbd32c6ab252752d63a1c5754c10bb0554c2c3a0b -->

```csharp
public Inno.Build.Toolchains.NativeBindingCompilation.NativeBindingCompilation()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L16).

## `GetInputs`

<a id="api-ef8158478c7cd79f"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingCompilation.GetInputs(System.String,System.String) f447249eac74c2bdb4afa72cfedefcb3a9442222f44a3a185aa56c529b89d343 -->

```csharp
public System.Collections.Generic.IEnumerable<Inno.Build.Toolchains.NativeBuildInput> Inno.Build.Toolchains.NativeBindingCompilation.GetInputs(string engineRoot, string nativeDirectory)
```

Enumerates exact file declarations for standalone or aggregate recipe fingerprinting.

**Parameter `engineRoot`:** The current checkout's absolute root.

**Parameter `nativeDirectory`:** The selected native artifact directory.

**Returns:** All generated, user and SDK inputs with their current physical locations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L179).

## `Load`

<a id="api-0acab8634bd6b6bd"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingCompilation.Load(System.String) 1c7c7291da6b88fc6b7f310578a59432074b656da8af7124859b1fea7ef865ad -->

```csharp
public static Inno.Build.Toolchains.NativeBindingCompilation Inno.Build.Toolchains.NativeBindingCompilation.Load(string nativeDirectory)
```

Reads the current engine-owned compilation description from a selected native output.

**Parameter `nativeDirectory`:** The complete selected generation's native directory.

**Returns:** The validated description; missing or malformed descriptions fail explicitly.

**Throws `System.IO.IOException`:** The description cannot be read.

**Throws `System.Text.Json.JsonException`:** The description does not match the current contract.

**Throws `System.IO.InvalidDataException`:** A root, path or content identity is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L97).

## `ResolveRoot`

<a id="api-5a900805eaae7ad8"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingCompilation.ResolveRoot(System.String,System.String,System.String) 675817642ee13c1052f9a1addc5cffea835e2266c8578142e5d7b9714d96ca93 -->

```csharp
public string Inno.Build.Toolchains.NativeBindingCompilation.ResolveRoot(string engineRoot, string nativeDirectory, string rootId)
```

Resolves a component-local root using the current checkout and selected output.

**Parameter `engineRoot`:** The current checkout's absolute root.

**Parameter `nativeDirectory`:** The selected generation's absolute native output.

**Parameter `rootId`:** An ordinal root identity from this description.

**Returns:** The physical root; no other component's root table participates.

**Throws `System.IO.InvalidDataException`:** The root identity is unknown.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L124).

## `VerifyInputs`

<a id="api-7f0bdfe9ac9d9533"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingCompilation.VerifyInputs(System.Func{System.String,System.String},System.Threading.CancellationToken) 11c3c2bda073c2d197112e84a8717dca408249de321eada607cf298b34a72e79 -->

```csharp
public void Inno.Build.Toolchains.NativeBindingCompilation.VerifyInputs(System.Func<string, string> resolveRoot, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Verifies the exact bytes at original or remapped roots before their use.

**Parameter `resolveRoot`:** Resolves a root identity to the selected physical or copied directory.

**Parameter `cancellationToken`:** Cancels verification without publishing a result.

**Throws `System.IO.InvalidDataException`:** A required file has a different length or digest.

**Throws `System.IO.IOException`:** A required input is missing or cannot be read.

**Throws `System.OperationCanceledException`:** Verification was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L152).

## `compilerDefines`

<a id="api-896915555ba3da37"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingCompilation.compilerDefines 6fce30e385b94818f5dec6f7ae4e34ec0e85b3447755826db74540634613f579 -->

```csharp
public required string[] Inno.Build.Toolchains.NativeBindingCompilation.compilerDefines { get; init; }
```

Gets parser target macro facts; these must not override the consuming compiler's builtins.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L47).

## `cStandard`

<a id="api-caae5d05fd20fd69"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingCompilation.cStandard 5a77a5b63cae20df6782ba3c5c9dfca3b3d3a83457f3e1f4f3eca8f450490ac5 -->

```csharp
public required int Inno.Build.Toolchains.NativeBindingCompilation.cStandard { get; init; }
```

Gets the minimum C standard, or zero when no C translation unit is required.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L57).

## `cxxStandard`

<a id="api-371f0a85745750b2"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingCompilation.cxxStandard 1017028e0c7e12a790160633ea0fd2d7e9c65a90cd12e880bd23dfca361feecc -->

```csharp
public required int Inno.Build.Toolchains.NativeBindingCompilation.cxxStandard { get; init; }
```

Gets the minimum C++ standard, or zero when no C++ translation unit is required.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L52).

## `defines`

<a id="api-df5663fc558f5bbc"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingCompilation.defines 5a92d8c7c3824238be147aca94102f33299b5cad80794a009f76892e37c4a6b1 -->

```csharp
public required string[] Inno.Build.Toolchains.NativeBindingCompilation.defines { get; init; }
```

Gets ordered definitions for manifest translation units; upstream target configuration remains component-owned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L42).

## `files`

<a id="api-4b08bbe4cb905075"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingCompilation.files 4d8890d75c5fbd99d816750d30f7fb9f7e02fe8f1fb4547ba3b9120cb213a040 -->

```csharp
public required Inno.Build.Toolchains.NativeBindingSourceFile[] Inno.Build.Toolchains.NativeBindingCompilation.files { get; init; }
```

Gets all exact input files; only files marked compile are translation units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L32).

## `includeDirectories`

<a id="api-bb2eb2895e57da3c"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingCompilation.includeDirectories 0b8503efa23b6d1cf903350d8ee609b3d77dc325814311ed6bf062c69155894e -->

```csharp
public required Inno.Build.Toolchains.NativeBindingIncludeDirectory[] Inno.Build.Toolchains.NativeBindingCompilation.includeDirectories { get; init; }
```

Gets include requirements in their original search order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L37).

## `requiredExports`

<a id="api-b954faf041fba67f"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingCompilation.requiredExports 1a9480d6e47e4c485265b13ad5c37b0af219bcbf85b8a696026f8d20e6d6cbc9 -->

```csharp
public required string[] Inno.Build.Toolchains.NativeBindingCompilation.requiredExports { get; init; }
```

Gets the exact native symbols that the component must provide.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L62).

## `roots`

<a id="api-b45f8e6c998df8b0"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingCompilation.roots 32502591ef968e64945c8e2db9960f3a3f36fc4b1cf833d059f10e90a827aa7b -->

```csharp
public required Inno.Build.Toolchains.NativeBindingSourceRoot[] Inno.Build.Toolchains.NativeBindingCompilation.roots { get; init; }
```

Gets root bindings whose identities are local to this component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L27).

## `staticExportAbi`

<a id="api-894b5fc7e6d001e2"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingCompilation.staticExportAbi 1ff77b1da8e927283ce7b4665ff5b794f7fefbdff6f2b8633720ad8fcd4d82d3 -->

```csharp
public required string Inno.Build.Toolchains.NativeBindingCompilation.staticExportAbi { get; init; }
```

Gets the static table ABI digest, or an empty value when no static table exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L72).

## `staticExportNames`

<a id="api-f944d51ba7dab164"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingCompilation.staticExportNames 2b6c8363d2b4723086be2c017a21ddde6b20826bc5a6f6dc95924cc1c436a053 -->

```csharp
public required string[] Inno.Build.Toolchains.NativeBindingCompilation.staticExportNames { get; init; }
```

Gets static table entries in address-resolution order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L77).

## `staticExportSymbols`

<a id="api-bfdc289cc48e4ec0"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingCompilation.staticExportSymbols b98e6d03c90c18f504d021118b76a5e04c5e01010a0d28cfe7512bff93e497c9 -->

```csharp
public required string[] Inno.Build.Toolchains.NativeBindingCompilation.staticExportSymbols { get; init; }
```

Gets static table entry points, or an empty array for dynamic-only bindings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingCompilation.cs#L67).
