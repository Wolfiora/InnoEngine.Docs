---
title: "NativeBindingOutputMode"
description: "Reference for NativeBindingOutputMode in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.5e75a5edb99127c1
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeBindingOutputMode`

This reference describes `NativeBindingOutputMode` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`HostSource`](#api-b21e0aeb7ce50783) | Field |
| [`TargetArtifacts`](#api-25883215ca660107) | Field |

## Type declaration

<a id="api-5e75a5edb99127c1"></a>
<!-- api: T:Inno.Build.Toolchains.NativeBindingOutputMode 727d374f2302f0bee8a501b7e127564b5694b901941982aa7aeea7501b3b5004 -->

```csharp
public enum Inno.Build.Toolchains.NativeBindingOutputMode : int
```

Selects the publication owner of generated sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationRequest.cs#L11).

## `HostSource`

<a id="api-b21e0aeb7ce50783"></a>
<!-- api: F:Inno.Build.Toolchains.NativeBindingOutputMode.HostSource 342c6994bc148c2f88638778f272f02d2bba5188c3d57cff5cf0fafa8a3215f9 -->

```csharp
Inno.Build.Toolchains.NativeBindingOutputMode.HostSource = 0
```

Replaces the component's authored host source and bridge outputs together.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationRequest.cs#L16).

## `TargetArtifacts`

<a id="api-25883215ca660107"></a>
<!-- api: F:Inno.Build.Toolchains.NativeBindingOutputMode.TargetArtifacts 7c10373566cfe567f6e79d866afdc24a204f0497acba84a56b95929c3baf8f47 -->

```csharp
Inno.Build.Toolchains.NativeBindingOutputMode.TargetArtifacts = 1
```

Publishes immutable target outputs under the component's generation fingerprint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationRequest.cs#L20).
