---
title: "INativeToolchainProvider"
description: "Reference for INativeToolchainProvider in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.9ee6daad93806ef8
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `INativeToolchainProvider`

This reference describes `INativeToolchainProvider` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`ResolveAsync`](#api-435205aae8af39b8) | Method |

## Type declaration

<a id="api-9ee6daad93806ef8"></a>
<!-- api: T:Inno.Build.Toolchains.INativeToolchainProvider 81fca595ac24b9057c344a08141384894dc7e792f2f7a3e8cd874ba761ae46a2 -->

```csharp
public interface Inno.Build.Toolchains.INativeToolchainProvider
```

Resolves one platform's SDK for an explicit target on a declared tool execution host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/INativeToolchainProvider.cs#L9).

## `ResolveAsync`

<a id="api-435205aae8af39b8"></a>
<!-- api: M:Inno.Build.Toolchains.INativeToolchainProvider.ResolveAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.BuildHostDescriptor,System.String,System.Threading.CancellationToken) b2c1e4e142ec1dc14993dd4abbb29cd4e212059b53d41b6de4becc67321d6a53 -->

```csharp
System.Threading.Tasks.ValueTask<Inno.Build.Toolchains.NativeToolchainSelection> Inno.Build.Toolchains.INativeToolchainProvider.ResolveAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.BuildHostDescriptor host, string targetId, System.Threading.CancellationToken cancellationToken)
```

Freezes compiler tools, SDK inputs and child environment before a native operation starts.

**Parameter `context`:** The checkout and configuration owned by the requesting operation.

**Parameter `host`:** The explicitly declared execution host, independent of the target.

**Parameter `targetId`:** The exact requested target; unsupported combinations must fail.

**Parameter `cancellationToken`:** Cancels SDK discovery before any product staging.

**Returns:** A complete immutable tool selection for the requested host and target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/INativeToolchainProvider.cs#L29).
