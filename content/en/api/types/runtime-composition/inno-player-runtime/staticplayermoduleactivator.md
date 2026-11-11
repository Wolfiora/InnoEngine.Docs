---
title: "StaticPlayerModuleActivator"
description: "Reference for StaticPlayerModuleActivator in Inno.Player.Runtime."
uid: api.inno.player.runtime.631d50e30cc8cb9e
kind: api
owners:
  - Inno.Player.Runtime
apiSurface: source-clr
contracts:
  - project.inno-player-runtime
---
# `StaticPlayerModuleActivator`

This reference describes `StaticPlayerModuleActivator` in `Inno.Player.Runtime`. Read the [shared contract](../../../projects/inno-player-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Player.Runtime.IPlayerModuleActivator`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b53e56d1ee8471e4) | Method |
| [`Activate`](#api-d8e316ef3c987383) | Method |

## Type declaration

<a id="api-631d50e30cc8cb9e"></a>
<!-- api: T:Inno.Player.Runtime.StaticPlayerModuleActivator a551eea9c2525ca02583e7c4f540ff8bf65902da020a428e6c9249cc25f650d2 -->

```csharp
public sealed class Inno.Player.Runtime.StaticPlayerModuleActivator : Inno.Player.Runtime.IPlayerModuleActivator
```

Activates explicit linked code without probing assemblies or opening runtime code files.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/Deployment/StaticPlayerModuleActivator.cs#L14).

## `#ctor`

<a id="api-b53e56d1ee8471e4"></a>
<!-- api: M:Inno.Player.Runtime.StaticPlayerModuleActivator.#ctor(Inno.Runtime.GameCodeDeployment,System.Collections.Generic.IReadOnlyDictionary{System.String,System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly}}) ce9693295b70681c3b1f3b32e8dcef797a0c13c71c6a10d4af00eee54fca1c9b -->

```csharp
public Inno.Player.Runtime.StaticPlayerModuleActivator.StaticPlayerModuleActivator(Inno.Runtime.GameCodeDeployment deployment, System.Collections.Generic.IReadOnlyDictionary<string, System.Collections.Generic.IReadOnlyList<System.Reflection.Assembly>> assemblies)
```

Validates and freezes linked assembly ownership before the Player opens its runtime session.

**Parameter `deployment`:** The build-generated code identity closure.

**Parameter `assemblies`:** Explicit linked assembly instances grouped by logical module; values are copied.

**Throws `System.IO.InvalidDataException`:** A linked assembly is absent, duplicated, or owned by an undeclared module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/Deployment/StaticPlayerModuleActivator.cs#L31).

## `Activate`

<a id="api-d8e316ef3c987383"></a>
<!-- api: M:Inno.Player.Runtime.StaticPlayerModuleActivator.Activate(Inno.Extensibility.Modules.ModuleHost,Inno.Runtime.GameCodeDeployment) 6681578e2e8731b78a7fbb9eacd39e18b34503bc8f1dd264072ed587bbb1bce5 -->

```csharp
public void Inno.Player.Runtime.StaticPlayerModuleActivator.Activate(Inno.Extensibility.Modules.ModuleHost modules, Inno.Runtime.GameCodeDeployment deployment)
```

Verifies the code closure and publishes its module contributions atomically.

**Parameter `modules`:** The engine-owned module catalog and generation coordinator.

**Parameter `deployment`:** The frozen logical deployment, independent of DLL directories or managed runtime technology.

**Throws `System.IO.InvalidDataException`:** The runtime manifest does not match the linked code closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/Deployment/StaticPlayerModuleActivator.cs#L55).
