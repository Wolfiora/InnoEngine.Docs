---
title: "MacOSArm64PlayerSupportPackSource"
description: "Reference for MacOSArm64PlayerSupportPackSource in Inno.Build.MacOSArm64."
uid: api.inno.build.macosarm64.80d1c3b6048d409b
kind: api
owners:
  - Inno.Build.MacOSArm64
apiSurface: source-clr
contracts:
  - project.inno-build-macosarm64
---
# `MacOSArm64PlayerSupportPackSource`

This reference describes `MacOSArm64PlayerSupportPackSource` in `Inno.Build.MacOSArm64`. Read the [shared contract](../../../projects/inno-build-macosarm64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.SupportPacks.IPlayerSupportPackSource`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6a377231574cb0b4) | Method |
| [`CreatePlanAsync`](#api-c827347dd7f3a84a) | Method |
| [`Validate`](#api-353f962d007d2097) | Method |
| [`target`](#api-40a37174ff79fddf) | Property |

## Type declaration

<a id="api-80d1c3b6048d409b"></a>
<!-- api: T:Inno.Build.MacOSArm64.MacOSArm64PlayerSupportPackSource 4437b9de92b1f4a681838d6aa264cc9ac97e3e1f9ef19b89f50639f1ecd0ccd8 -->

```csharp
public sealed class Inno.Build.MacOSArm64.MacOSArm64PlayerSupportPackSource : Inno.Build.SupportPacks.IPlayerSupportPackSource
```

Prepares the MacOS Player's explicit layout through shared publication mechanisms.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/SupportPacks/MacOSArm64PlayerSupportPackSource.cs#L12).

## `#ctor`

<a id="api-6a377231574cb0b4"></a>
<!-- api: M:Inno.Build.MacOSArm64.MacOSArm64PlayerSupportPackSource.#ctor(Inno.Build.Composition.NativeProductContribution,Inno.Build.Toolchains.BuildHostDescriptor,System.String,Inno.Build.Toolchains.INativeBindingGenerator,Inno.Build.IPlayerSupportPackValidator) 4a28228e87cc177e5c801d1e06aae94135c1a57f6888ab2a37810830b582ca08 -->

```csharp
public Inno.Build.MacOSArm64.MacOSArm64PlayerSupportPackSource.MacOSArm64PlayerSupportPackSource(Inno.Build.Composition.NativeProductContribution nativePlan, Inno.Build.Toolchains.BuildHostDescriptor host, string dotnetHost, Inno.Build.Toolchains.INativeBindingGenerator bindingGenerator, Inno.Build.IPlayerSupportPackValidator supportPackValidator)
```

Captures the selected product closure and tool execution host.

**Parameter `nativePlan`:** The explicit Player component closure.

**Parameter `host`:** The declared machine executing platform tools.

**Parameter `bindingGenerator`:** The borrowed shared binding implementation selected by distribution.

**Parameter `dotnetHost`:** The explicit SDK executable for binding generation.

**Parameter `supportPackValidator`:** The borrowed validator selected by the distribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/SupportPacks/MacOSArm64PlayerSupportPackSource.cs#L34).

## `CreatePlanAsync`

<a id="api-c827347dd7f3a84a"></a>
<!-- api: M:Inno.Build.MacOSArm64.MacOSArm64PlayerSupportPackSource.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext,System.Threading.CancellationToken) cbe9ec1c06acbd66a7310710dc9192569e3af8d6ec10d375f8d94d5f10a73a91 -->

```csharp
public System.Threading.Tasks.ValueTask<Inno.Build.SupportPacks.PlayerSupportPackPlan> Inno.Build.MacOSArm64.MacOSArm64PlayerSupportPackSource.CreatePlanAsync(Inno.Build.SupportPacks.PlayerSupportPackPlanningContext context, System.Threading.CancellationToken cancellationToken)
```

Validates discovery inputs and freezes a plan before publication output exists.

**Parameter `context`:** The source checkout and host used for read-only SDK discovery.

**Parameter `cancellationToken`:** Cancels preparation before installation.

**Returns:** A frozen plan with no running work; missing tools and unsupported hosts fail here.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/SupportPacks/MacOSArm64PlayerSupportPackSource.cs#L55).

## `Validate`

<a id="api-353f962d007d2097"></a>
<!-- api: M:Inno.Build.MacOSArm64.MacOSArm64PlayerSupportPackSource.Validate(System.String) ce4f8ed820ba30f1e131cbe96dbb34a95f3560d217e9229ae0af27bce37bf4b4 -->

```csharp
public void Inno.Build.MacOSArm64.MacOSArm64PlayerSupportPackSource.Validate(string directory)
```

Rejects an incomplete or incompatible platform closure.

**Parameter `directory`:** The prepared or installed Support Pack directory.

**Throws `System.IO.InvalidDataException`:** A required platform input is absent or incompatible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/SupportPacks/MacOSArm64PlayerSupportPackSource.cs#L61).

## `target`

<a id="api-40a37174ff79fddf"></a>
<!-- api: P:Inno.Build.MacOSArm64.MacOSArm64PlayerSupportPackSource.target e8bb94795e87b3efcd31760ab606d6bfe452a2f48d223628aac4cf04d07991c0 -->

```csharp
public Inno.Build.BuildTargetId Inno.Build.MacOSArm64.MacOSArm64PlayerSupportPackSource.target { get; }
```

Gets the stable target identity implemented by this source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/SupportPacks/MacOSArm64PlayerSupportPackSource.cs#L52).
