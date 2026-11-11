---
title: "EmscriptenToolchainResolver"
description: "Reference for EmscriptenToolchainResolver in Inno.Build.BrowserWasm32."
uid: api.inno.build.browserwasm32.66a465e498bb2235
kind: api
owners:
  - Inno.Build.BrowserWasm32
apiSurface: source-clr
contracts:
  - project.inno-build-browserwasm32
---
# `EmscriptenToolchainResolver`

This reference describes `EmscriptenToolchainResolver` in `Inno.Build.BrowserWasm32`. Read the [shared contract](../../../projects/inno-build-browserwasm32.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ResolveAsync`](#api-fc6d95fed43b229e) | Method |

## Type declaration

<a id="api-66a465e498bb2235"></a>
<!-- api: T:Inno.Build.BrowserWasm32.EmscriptenToolchainResolver bc19cecc7f9ecf813d9db4766afbd807d2ba4b95d50d1b628350d219e05dc7e9 -->

```csharp
public static class Inno.Build.BrowserWasm32.EmscriptenToolchainResolver
```

Resolves Emscripten from the workload selected by one application project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/EmscriptenToolchainResolver.cs#L14).

## `ResolveAsync`

<a id="api-fc6d95fed43b229e"></a>
<!-- api: M:Inno.Build.BrowserWasm32.EmscriptenToolchainResolver.ResolveAsync(System.String,System.String,System.Threading.CancellationToken) a0c9bec2c903edd13b521c7f2f5c36f7626cfc73f2364cc48b4549cfeb25a730 -->

```csharp
public static System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, string>> Inno.Build.BrowserWasm32.EmscriptenToolchainResolver.ResolveAsync(string dotnetHost, string projectPath, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Resolves the native toolchain actually selected by MSBuild for one browser project.

**Parameter `dotnetHost`:** The SDK host executable, either an absolute path or a name available on PATH.

**Parameter `projectPath`:** The browser project whose target framework and SDK determine workload selection.

**Parameter `cancellationToken`:** Cancels the hidden SDK query and waits for its exit.

**Returns:** Variables for native builds and binding generation, without changing the parent process.

**Constraints:** Compiler worker budgets remain inherited from the host environment or tool defaults.
Runtime threading policy does not constrain build-time parallelism.

**Throws `System.IO.FileNotFoundException`:** The SDK host or a required Emscripten workload component is missing.

**Throws `System.ArgumentException`:** The SDK host or project path is empty.

**Throws `System.IO.DirectoryNotFoundException`:** A selected SDK directory or sysroot is missing.

**Throws `System.InvalidOperationException`:** Project evaluation fails or does not select a complete native toolchain.

**Throws `System.OperationCanceledException`:** The operation was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/EmscriptenToolchainResolver.cs#L50).
