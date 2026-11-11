---
title: "DotNetSdkEnvironment"
description: "Reference for DotNetSdkEnvironment in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.0851a52ddb764124
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `DotNetSdkEnvironment`

This reference describes `DotNetSdkEnvironment` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-c85eac21f2afa54c) | Method |

## Type declaration

<a id="api-0851a52ddb764124"></a>
<!-- api: T:Inno.Build.Toolchains.DotNetSdkEnvironment 652f5a65ebf2632c810f2e382399a536eefe1296ed9de8f4824ae6df3f264f76 -->

```csharp
public static class Inno.Build.Toolchains.DotNetSdkEnvironment
```

Isolates a managed tool invocation from the invoking IDE's SDK and MSBuild process identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/DotNetSdkEnvironment.cs#L11).

## `Create`

<a id="api-c85eac21f2afa54c"></a>
<!-- api: M:Inno.Build.Toolchains.DotNetSdkEnvironment.Create(System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}) 1eddcb5564950d38addf86eeada240c541f7d5edc51749cdff3b0c48cde705cd -->

```csharp
public static System.Collections.Generic.IReadOnlyDictionary<string, string?> Inno.Build.Toolchains.DotNetSdkEnvironment.Create(string hostPath, System.Collections.Generic.IReadOnlyDictionary<string, string>? environment = null)
```

Freezes child-only overrides so the selected executable resolves the project's own SDK.
Null SDK overrides remove inherited variables rather than borrowing a parent's loaded MSBuild.

**Parameter `hostPath`:** The explicitly selected managed executable, resolved to an absolute path before invocation.

**Parameter `environment`:** Additional selected toolchain variables to copy, or null when no native SDK environment is required.

**Returns:** A read-only child environment that preserves selected toolchain settings and never changes the parent.

**Throws `System.ArgumentException`:** The managed executable is blank.

**Throws `System.IO.FileNotFoundException`:** The selected managed executable cannot be resolved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/DotNetSdkEnvironment.cs#L40).
