---
title: "IGameBuildTarget"
description: "Reference for IGameBuildTarget in Inno.Build."
uid: api.inno.build.c97cb8056aa72b2c
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `IGameBuildTarget`

This reference describes `IGameBuildTarget` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `Inno.Build.IPlayerSupportPackValidator`.

## Members

| Member | Kind |
| --- | --- |
| [`PackageAsync`](#api-e7b851faefbde586) | Method |
| [`defaultManagedDeployment`](#api-f1c08ac447d0f226) | Property |
| [`displayName`](#api-aeba8ef09659bc67) | Property |
| [`id`](#api-984ab41695089b6b) | Property |
| [`runtimeIdentifier`](#api-1fa7c8699b8cf505) | Property |

## Type declaration

<a id="api-c97cb8056aa72b2c"></a>
<!-- api: T:Inno.Build.IGameBuildTarget 20ad06c05dd6df219314ac128c3029cc132dbd956902f6264a0191c962744676 -->

```csharp
public interface Inno.Build.IGameBuildTarget : Inno.Build.IPlayerSupportPackValidator
```

Defines the replaceable platform packaging boundary for one game build target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/IGameBuildTarget.cs#L10).

## `PackageAsync`

<a id="api-e7b851faefbde586"></a>
<!-- api: M:Inno.Build.IGameBuildTarget.PackageAsync(Inno.Build.GameBuildPackageContext,System.Threading.CancellationToken) f268f1c623449444b828cc482346c8fd7a628ef030830e01367de2f2530b32bc -->

```csharp
System.Threading.Tasks.ValueTask<string> Inno.Build.IGameBuildTarget.PackageAsync(Inno.Build.GameBuildPackageContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Composes one platform output from a verified Support Pack and source-free content directory.

**Parameter `context`:** The isolated package context owned by the current build.

**Parameter `cancellationToken`:** The token that cancels work before the build is committed.

**Returns:** The single platform output path created beneath `Inno.Build.GameBuildPackageContext.outputDirectory`.

**Throws `System.OperationCanceledException`:** Thrown when packaging is canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/IGameBuildTarget.cs#L47).

## `defaultManagedDeployment`

<a id="api-f1c08ac447d0f226"></a>
<!-- api: P:Inno.Build.IGameBuildTarget.defaultManagedDeployment fbcebe1c15e43e4b89fffe7ea5e4d4b233168a2f2fb3d7a2f0ea345e6134ebdf -->

```csharp
Inno.Build.Managed.ManagedDeploymentId Inno.Build.IGameBuildTarget.defaultManagedDeployment { get; }
```

Gets the managed publisher selected when the profile does not specify an override.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/IGameBuildTarget.cs#L20).

## `displayName`

<a id="api-aeba8ef09659bc67"></a>
<!-- api: P:Inno.Build.IGameBuildTarget.displayName 33791805cb5acdfc3c60f588118e9a648f45aeb62df5f6563953b493b50e2bfe -->

```csharp
string Inno.Build.IGameBuildTarget.displayName { get; }
```

Gets the user-facing target name presented by authoring hosts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/IGameBuildTarget.cs#L30).

## `id`

<a id="api-984ab41695089b6b"></a>
<!-- api: P:Inno.Build.IGameBuildTarget.id 3e1dae1ad818e5c613ff854538f28c151557a8280fca2ca90f9ef6fbee0624dc -->

```csharp
Inno.Build.BuildTargetId Inno.Build.IGameBuildTarget.id { get; }
```

Gets the stable target identity implemented by this packager.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/IGameBuildTarget.cs#L15).

## `runtimeIdentifier`

<a id="api-1fa7c8699b8cf505"></a>
<!-- api: P:Inno.Build.IGameBuildTarget.runtimeIdentifier dde0dfa015e3b9d2a594a1ad2151e3ec019d93a645bc54ae7c3d892c677286ea -->

```csharp
string Inno.Build.IGameBuildTarget.runtimeIdentifier { get; }
```

Gets the managed toolchain target identifier required by this platform composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/IGameBuildTarget.cs#L25).
