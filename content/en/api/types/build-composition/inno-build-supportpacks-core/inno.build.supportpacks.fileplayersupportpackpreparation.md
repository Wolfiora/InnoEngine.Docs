---
title: "Inno.Build.SupportPacks.FilePlayerSupportPackPreparation"
description: "Reference for Inno.Build.SupportPacks.FilePlayerSupportPackPreparation in Inno.Build.SupportPacks.Core."
uid: api.inno.build.supportpacks.core.3ce60cea9d6333af
kind: api
owners:
  - Inno.Build.SupportPacks.Core
apiSurface: source-clr
contracts:
  - project.inno-build-supportpacks-core
---
# `Inno.Build.SupportPacks.FilePlayerSupportPackPreparation`

This reference describes `Inno.Build.SupportPacks.FilePlayerSupportPackPreparation` in `Inno.Build.SupportPacks.Core`. Read the [shared contract](../../../projects/inno-build-supportpacks-core.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c7b346851ac37652) | Method |
| [`CreatePlanAsync`](#api-49d5d4fd16d72d61) | Method |
| [`Validate`](#api-099f0bf54a36cfba) | Method |
| [`target`](#api-6d3d34cca79420a5) | Property |

## Type declaration

<a id="api-3ce60cea9d6333af"></a>
<!-- api: T:Inno.Build.SupportPacks.FilePlayerSupportPackPreparation 2eb799525289294fd50a92b0f54b1d7cbd07fc9a8d952a4c61af1f86526a819f -->

```csharp
public sealed class Inno.Build.SupportPacks.FilePlayerSupportPackPreparation
```

Prepares file-based product inputs using injected target tools, source locations and native closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/FilePlayerSupportPackPreparation.cs#L15).

## `#ctor`

<a id="api-c7b346851ac37652"></a>
<!-- api: M:Inno.Build.SupportPacks.FilePlayerSupportPackPreparation.#ctor(Inno.Build.BuildTargetId,System.String,System.String,System.String,Inno.Build.IPlayerSupportPackValidator,System.String,System.String,Inno.Build.Toolchains.ProductNativeBuildPlan,Inno.Build.Toolchains.INativeProductExecutor,Inno.Build.Toolchains.INativeToolchainProvider,Inno.Build.Toolchains.BuildHostDescriptor,Inno.Build.Toolchains.INativeBindingGenerator,System.Collections.Generic.IReadOnlyList{System.String}) b03dc62ca7dcd11f9c261ba896bb395d34b39a7862e5aad064d9bbb55c07f1b2 -->

```csharp
public Inno.Build.SupportPacks.FilePlayerSupportPackPreparation.FilePlayerSupportPackPreparation(Inno.Build.BuildTargetId target, string runtimeIdentifier, string nativePlatform, string nativeExtension, Inno.Build.IPlayerSupportPackValidator validator, string productProject, string templateFile, Inno.Build.Toolchains.ProductNativeBuildPlan nativePlan, Inno.Build.Toolchains.INativeProductExecutor nativeExecutor, Inno.Build.Toolchains.INativeToolchainProvider toolchainProvider, Inno.Build.Toolchains.BuildHostDescriptor host, Inno.Build.Toolchains.INativeBindingGenerator bindingGenerator, System.Collections.Generic.IReadOnlyList<string> preparationInputs)
```

Captures the platform layout and validator without preparing any tools or files.

**Parameter `target`:** The publication platform identity.

**Parameter `runtimeIdentifier`:** The managed SDK runtime target.

**Parameter `nativePlatform`:** The native toolchain target identity required by this source.

**Parameter `nativeExtension`:** The runtime library suffix selected by this platform.

**Parameter `validator`:** The borrowed platform validator used before publication.

**Parameter `productProject`:** The explicit checkout-relative product project.

**Parameter `templateFile`:** The explicit checkout-relative publication template.

**Parameter `nativePlan`:** The frozen product component closure.

**Parameter `toolchainProvider`:** The SDK provider for the explicit native target.

**Parameter `host`:** The declared machine executing tools.

**Parameter `nativeExecutor`:** The product-selected native execution strategy.

**Parameter `bindingGenerator`:** The borrowed generation service used by the frozen Native operation.

**Parameter `preparationInputs`:** The platform-owned preparation and validator implementation files included in source identity.

**Throws `System.ArgumentException`:** A platform identifier or required target string is blank.

**Throws `System.ArgumentNullException`:** The validator is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/FilePlayerSupportPackPreparation.cs#L79).

## `CreatePlanAsync`

<a id="api-49d5d4fd16d72d61"></a>
<!-- api: M:Inno.Build.SupportPacks.FilePlayerSupportPackPreparation.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext,System.Threading.CancellationToken) d2196d68db8a5edc6c8e81f49cf019b2e662565b3ec4d7ce61678efe54c70110 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.SupportPacks.PlayerSupportPackPlan> Inno.Build.SupportPacks.FilePlayerSupportPackPreparation.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext context, System.Threading.CancellationToken cancellationToken)
```

Resolves tools and validates required source inputs before any staging exists.

**Parameter `context`:** The read-only source checkout and explicitly selected managed host.

**Parameter `cancellationToken`:** Cancels discovery before publication is permitted.

**Returns:** A frozen plan borrowing this preparation definition, or a propagated preflight failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/FilePlayerSupportPackPreparation.cs#L138).

## `Validate`

<a id="api-099f0bf54a36cfba"></a>
<!-- api: M:Inno.Build.SupportPacks.FilePlayerSupportPackPreparation.Validate(System.String) fac8a5d6857488db774283b83e91927c9f71ad79185e6324ec129dbe01dfb835 -->

```csharp
public void Inno.Build.SupportPacks.FilePlayerSupportPackPreparation.Validate(string directory)
```

Validates the prepared platform inputs before atomic installation.

**Parameter `directory`:** The isolated target pack directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/FilePlayerSupportPackPreparation.cs#L228).

## `target`

<a id="api-6d3d34cca79420a5"></a>
<!-- api: P:Inno.Build.SupportPacks.FilePlayerSupportPackPreparation.target bd77746aabda4c1fe552d081499a7ae4a9df35712429f898143961633320f174 -->

```csharp
public Inno.Build.BuildTargetId Inno.Build.SupportPacks.FilePlayerSupportPackPreparation.target { get; }
```

Gets the platform identity whose closure this source prepares.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/FilePlayerSupportPackPreparation.cs#L124).
