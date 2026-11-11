---
title: "ToolchainLayout"
description: "Reference for ToolchainLayout in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.fd9854ba599fd357
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `ToolchainLayout`

This reference describes `ToolchainLayout` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`C_DEBUG_CONFIGURATION`](#api-d69fb14e43bb3f9c) | Field |
| [`C_EXTERNAL_DIRECTORY_NAME`](#api-b3cc3fae91f1666f) | Field |
| [`C_RELEASE_CONFIGURATION`](#api-95009bb7f1d25ccf) | Field |
| [`C_REPOSITORY_MARKER_FILE`](#api-7eac0a961a007d5e) | Field |

## Type declaration

<a id="api-fd9854ba599fd357"></a>
<!-- api: T:Inno.Build.Toolchains.ToolchainLayout 2b3075f076cf641146191444f88e271c9d65d1e6b89fbd3e2b5d82ea9e5270bd -->

```csharp
public static class Inno.Build.Toolchains.ToolchainLayout
```

Defines stable repository-relative names shared by native dependency toolchains.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainLayout.cs#L6).

## `C_DEBUG_CONFIGURATION`

<a id="api-d69fb14e43bb3f9c"></a>
<!-- api: F:Inno.Build.Toolchains.ToolchainLayout.C_DEBUG_CONFIGURATION 06f46e39f3ee8df2467d70f313036f8c31eb72e4ea84d455df8283050f0cd4cd -->

```csharp
public const string Inno.Build.Toolchains.ToolchainLayout.C_DEBUG_CONFIGURATION = "debug"
```

Identifies the normalized debug configuration token.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainLayout.cs#L21).

## `C_EXTERNAL_DIRECTORY_NAME`

<a id="api-b3cc3fae91f1666f"></a>
<!-- api: F:Inno.Build.Toolchains.ToolchainLayout.C_EXTERNAL_DIRECTORY_NAME 9bfa613cebebfd752a12c8cf4af11a2330bbec7348dfa6ba69e3e2f18c4a3647 -->

```csharp
public const string Inno.Build.Toolchains.ToolchainLayout.C_EXTERNAL_DIRECTORY_NAME = "extern"
```

Identifies the directory containing checked-out native dependency sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainLayout.cs#L16).

## `C_RELEASE_CONFIGURATION`

<a id="api-95009bb7f1d25ccf"></a>
<!-- api: F:Inno.Build.Toolchains.ToolchainLayout.C_RELEASE_CONFIGURATION 8c86701ed669511580332530ea974f8c920a4c1eb9a74841053f5175890058ee -->

```csharp
public const string Inno.Build.Toolchains.ToolchainLayout.C_RELEASE_CONFIGURATION = "release"
```

Identifies the normalized release configuration token.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainLayout.cs#L26).

## `C_REPOSITORY_MARKER_FILE`

<a id="api-7eac0a961a007d5e"></a>
<!-- api: F:Inno.Build.Toolchains.ToolchainLayout.C_REPOSITORY_MARKER_FILE 74e271c71b54073cb030d2cd40488d37c20a9b8a0bf2d1bb48df9688513d6570 -->

```csharp
public const string Inno.Build.Toolchains.ToolchainLayout.C_REPOSITORY_MARKER_FILE = "InnoEngine.sln"
```

Identifies the repository marker used while resolving a toolchain workspace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainLayout.cs#L11).
