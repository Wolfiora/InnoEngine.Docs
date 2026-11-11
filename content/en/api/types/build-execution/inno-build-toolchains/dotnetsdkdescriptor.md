---
title: "DotNetSdkDescriptor"
description: "Reference for DotNetSdkDescriptor in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.c57a2b1ccefc085d
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `DotNetSdkDescriptor`

This reference describes `DotNetSdkDescriptor` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`cliPath`](#api-968468591bf016c5) | Property |
| [`hostPath`](#api-68026f3e0c4326f3) | Property |
| [`sdkIdentity`](#api-54b7e9ad4b272316) | Property |

## Type declaration

<a id="api-c57a2b1ccefc085d"></a>
<!-- api: T:Inno.Build.Toolchains.DotNetSdkDescriptor b1296e1abcae3e0e4978b2355f2cd6c315de9c266d98b5485dc0a423981e264b -->

```csharp
public sealed class Inno.Build.Toolchains.DotNetSdkDescriptor
```

Freezes the host, SDK identity and managed CLI entry selected by one managed entry project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/DotNetSdkDescriptor.cs#L6).

## `cliPath`

<a id="api-968468591bf016c5"></a>
<!-- api: P:Inno.Build.Toolchains.DotNetSdkDescriptor.cliPath 12eef961a72db9bc222799737da66e33aacccd0aef66401373a4d3f570bb5658 -->

```csharp
public string Inno.Build.Toolchains.DotNetSdkDescriptor.cliPath { get; }
```

Gets the selected SDK's managed CLI entry assembly, invoked with the recorded host
without resolving another SDK from a temporary execution directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/DotNetSdkDescriptor.cs#L32).

## `hostPath`

<a id="api-68026f3e0c4326f3"></a>
<!-- api: P:Inno.Build.Toolchains.DotNetSdkDescriptor.hostPath 948d0159fefb07249babba62844aa9878ad60c7c5da81e3e3b41584b080a30bc -->

```csharp
public string Inno.Build.Toolchains.DotNetSdkDescriptor.hostPath { get; }
```

Gets the executable used for project-scoped SDK and workload resolution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/DotNetSdkDescriptor.cs#L21).

## `sdkIdentity`

<a id="api-54b7e9ad4b272316"></a>
<!-- api: P:Inno.Build.Toolchains.DotNetSdkDescriptor.sdkIdentity 744ca37da9209f94db6ebeca1eae6f860534b04c0ddcb8d89b00abf80310899c -->

```csharp
public string Inno.Build.Toolchains.DotNetSdkDescriptor.sdkIdentity { get; }
```

Gets the exact SDK identity selected by the project's global.json resolution rules.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Managed/DotNetSdkDescriptor.cs#L26).
