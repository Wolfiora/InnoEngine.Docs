---
title: "INativeProductExecutor"
description: "Reference for INativeProductExecutor in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.6900511d04964d3f
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `INativeProductExecutor`

This reference describes `INativeProductExecutor` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`BuildAsync`](#api-e90479cbbbabdfd3) | Method |

## Type declaration

<a id="api-6900511d04964d3f"></a>
<!-- api: T:Inno.Build.Toolchains.INativeProductExecutor 6089f2a1f0dba382bb11c9db3524a509e3bd2aac19e4088b70bb5429961a0f98 -->

```csharp
public interface Inno.Build.Toolchains.INativeProductExecutor
```

Executes an explicitly selected native product graph without target discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/INativeProductExecutor.cs#L9).

## `BuildAsync`

<a id="api-e90479cbbbabdfd3"></a>
<!-- api: M:Inno.Build.Toolchains.INativeProductExecutor.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,System.Threading.CancellationToken) 43471be816d6bc4eb01f086064af1286fc09e99783363d8c93bd5e61f4937fcc -->

```csharp
System.Threading.Tasks.Task<Inno.Build.Toolchains.ProductNativeBuildResult> Inno.Build.Toolchains.INativeProductExecutor.BuildAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.ProductNativeBuildPlan plan, System.Threading.CancellationToken cancellationToken)
```

Builds or reuses the complete product with the operation's frozen tools.

**Parameter `context`:** The frozen operation.

**Parameter `plan`:** The complete dependency-ordered component plan.

**Parameter `cancellationToken`:** Cancels waits and unpublished work.

**Returns:** The owned complete output and binding closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/INativeProductExecutor.cs#L26).
