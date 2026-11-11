---
title: "Inno.Build.SupportPacks.IPlayerSupportPackSource"
description: "Reference for Inno.Build.SupportPacks.IPlayerSupportPackSource in Inno.Build.SupportPacks.Core."
uid: api.inno.build.supportpacks.core.b0b9f9b7d90a0ab7
kind: api
owners:
  - Inno.Build.SupportPacks.Core
apiSurface: source-clr
contracts:
  - project.inno-build-supportpacks-core
---
# `Inno.Build.SupportPacks.IPlayerSupportPackSource`

This reference describes `Inno.Build.SupportPacks.IPlayerSupportPackSource` in `Inno.Build.SupportPacks.Core`. Read the [shared contract](../../../projects/inno-build-supportpacks-core.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `Inno.Build.IPlayerSupportPackValidator`.

## Members

| Member | Kind |
| --- | --- |
| [`CreatePlanAsync`](#api-7fe95978bbd45c42) | Method |
| [`target`](#api-06779a7a1aa048d6) | Property |

## Type declaration

<a id="api-b0b9f9b7d90a0ab7"></a>
<!-- api: T:Inno.Build.SupportPacks.IPlayerSupportPackSource 90fc19594da2239e7b00eba1ae9f92db11b8dd8cfbb4ae31f557c1fb6df8f84b -->

```csharp
public interface Inno.Build.SupportPacks.IPlayerSupportPackSource : Inno.Build.IPlayerSupportPackValidator
```

Prepares one platform's runtime and compiler inputs without owning installation or replacement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/IPlayerSupportPackSource.cs#L10).

## `CreatePlanAsync`

<a id="api-7fe95978bbd45c42"></a>
<!-- api: M:Inno.Build.SupportPacks.IPlayerSupportPackSource.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext,System.Threading.CancellationToken) 9d85f35ccaf0fe1ccc0b9c19f23a857449359547822dd2cd2eda64be33bafcca -->

```csharp
System.Threading.Tasks.ValueTask<Inno.Build.SupportPacks.PlayerSupportPackPlan> Inno.Build.SupportPacks.IPlayerSupportPackSource.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext context, System.Threading.CancellationToken cancellationToken)
```

Validates discovery inputs and freezes a plan before publication output exists.

**Parameter `context`:** The source checkout and host used for read-only SDK discovery.

**Parameter `cancellationToken`:** Cancels preparation before installation.

**Returns:** A frozen plan with no running work; missing tools and unsupported hosts fail here.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/IPlayerSupportPackSource.cs#L29).

## `target`

<a id="api-06779a7a1aa048d6"></a>
<!-- api: P:Inno.Build.SupportPacks.IPlayerSupportPackSource.target eecf31a8fb0ba8e256f9072c8cf2ea062e17bdba110dbf79548e3ca27bdc07e0 -->

```csharp
Inno.Build.BuildTargetId Inno.Build.SupportPacks.IPlayerSupportPackSource.target { get; }
```

Gets the stable target identity implemented by this source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/IPlayerSupportPackSource.cs#L15).
