---
title: "NativeProductContribution"
description: "Reference for NativeProductContribution in Inno.Build.Composition."
uid: api.inno.build.composition.e542df6e60eb8369
kind: api
owners:
  - Inno.Build.Composition
apiSurface: source-clr
contracts:
  - project.inno-build-composition
---
# `NativeProductContribution`

This reference describes `NativeProductContribution` in `Inno.Build.Composition`. Read the [shared contract](../../../projects/inno-build-composition.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8aa9682d924a3bd8) | Method |
| [`BuildAsync`](#api-f18f4b1d39e114c5) | Method |
| [`executor`](#api-d826dd6104f5aba7) | Property |
| [`plan`](#api-cf2d9a4f9e8720ff) | Property |

## Type declaration

<a id="api-e542df6e60eb8369"></a>
<!-- api: T:Inno.Build.Composition.NativeProductContribution b3f19e0f69cd8fac06b787c07f3e7f592bf592d44287a760aa4b3746f130e060 -->

```csharp
public sealed class Inno.Build.Composition.NativeProductContribution
```

Binds a product's immutable graph to its platform-selected execution strategy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/NativeProductContribution.cs#L11).

## `#ctor`

<a id="api-8aa9682d924a3bd8"></a>
<!-- api: M:Inno.Build.Composition.NativeProductContribution.#ctor(Inno.Build.Toolchains.ProductNativeBuildPlan,Inno.Build.Toolchains.INativeProductExecutor) 0997a2e0ea51e5b4b705b4c435b1272a6644efdd7fb31d38eaa28cee3f7a85b6 -->

```csharp
public Inno.Build.Composition.NativeProductContribution.NativeProductContribution(Inno.Build.Toolchains.ProductNativeBuildPlan plan, Inno.Build.Toolchains.INativeProductExecutor executor)
```

Captures a complete product without SDK discovery or output creation.

**Parameter `plan`:** The immutable component graph.

**Parameter `executor`:** The explicit execution strategy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/NativeProductContribution.cs#L22).

## `BuildAsync`

<a id="api-f18f4b1d39e114c5"></a>
<!-- api: M:Inno.Build.Composition.NativeProductContribution.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,System.Threading.CancellationToken) bdc6f922f207df6edfd20c36426a7174994f8f920df3230df6442791ec9549b3 -->

```csharp
public System.Threading.Tasks.Task<Inno.Build.Toolchains.ProductNativeBuildResult> Inno.Build.Composition.NativeProductContribution.BuildAsync(Inno.Build.Toolchains.NativeBuildContext context, System.Threading.CancellationToken cancellationToken)
```

Executes the selected product without inspecting its target identity.

**Parameter `context`:** The operation with frozen tools and binding configuration.

**Parameter `cancellationToken`:** Cancels preparation and unpublished output.

**Returns:** The complete owned native result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/NativeProductContribution.cs#L51).

## `executor`

<a id="api-d826dd6104f5aba7"></a>
<!-- api: P:Inno.Build.Composition.NativeProductContribution.executor 49cbe3055f6a284faa55bef9eedf4fc3ece95d8a1291b9370476dd307b9b761e -->

```csharp
public Inno.Build.Toolchains.INativeProductExecutor Inno.Build.Composition.NativeProductContribution.executor { get; }
```

Gets the platform-selected executor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/NativeProductContribution.cs#L37).

## `plan`

<a id="api-cf2d9a4f9e8720ff"></a>
<!-- api: P:Inno.Build.Composition.NativeProductContribution.plan 26a2950e615c95854f3b7d35f602b7abc440a32c097f14fabc1b33d279515c2f -->

```csharp
public Inno.Build.Toolchains.ProductNativeBuildPlan Inno.Build.Composition.NativeProductContribution.plan { get; }
```

Gets the immutable product graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/NativeProductContribution.cs#L33).
