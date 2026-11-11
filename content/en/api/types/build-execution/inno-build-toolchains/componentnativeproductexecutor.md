---
title: "ComponentNativeProductExecutor"
description: "Reference for ComponentNativeProductExecutor in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.64156b60e401ec7a
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `ComponentNativeProductExecutor`

This reference describes `ComponentNativeProductExecutor` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.Toolchains.INativeProductExecutor`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dfa18547c7d904fe) | Method |
| [`BuildAsync`](#api-48ad4f7ee02afca9) | Method |

## Type declaration

<a id="api-64156b60e401ec7a"></a>
<!-- api: T:Inno.Build.Toolchains.ComponentNativeProductExecutor dbebd1d3bb0e65c6bb82cbf817db09164c876a7329e921e924c18d8538c6ad68 -->

```csharp
public sealed class Inno.Build.Toolchains.ComponentNativeProductExecutor : Inno.Build.Toolchains.INativeProductExecutor
```

Executes portable component producers in their declared dependency order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ComponentNativeProductExecutor.cs#L13).

## `#ctor`

<a id="api-dfa18547c7d904fe"></a>
<!-- api: M:Inno.Build.Toolchains.ComponentNativeProductExecutor.#ctor 9e62efb39cb6fada2e5972e46c59e2ea46ca5b9d6f2b7efaa54c2b40db6e03a1 -->

```csharp
public Inno.Build.Toolchains.ComponentNativeProductExecutor.ComponentNativeProductExecutor()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ComponentNativeProductExecutor.cs#L13).

## `BuildAsync`

<a id="api-48ad4f7ee02afca9"></a>
<!-- api: M:Inno.Build.Toolchains.ComponentNativeProductExecutor.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.ProductNativeBuildPlan,System.Threading.CancellationToken) 630c53ac019dec823d2f7d8d49f2711787a628ddbb43f9233c49888b78631a53 -->

```csharp
public System.Threading.Tasks.Task<Inno.Build.Toolchains.ProductNativeBuildResult> Inno.Build.Toolchains.ComponentNativeProductExecutor.BuildAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.ProductNativeBuildPlan plan, System.Threading.CancellationToken cancellationToken)
```

Builds or reuses the complete product with the operation's frozen tools.

**Parameter `context`:** The frozen operation.

**Parameter `plan`:** The complete dependency-ordered component plan.

**Parameter `cancellationToken`:** Cancels waits and unpublished work.

**Returns:** The owned complete output and binding closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/ComponentNativeProductExecutor.cs#L16).
