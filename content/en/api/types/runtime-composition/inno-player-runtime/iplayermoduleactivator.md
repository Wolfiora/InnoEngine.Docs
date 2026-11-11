---
title: "IPlayerModuleActivator"
description: "Reference for IPlayerModuleActivator in Inno.Player.Runtime."
uid: api.inno.player.runtime.f9711962e51dbf5a
kind: api
owners:
  - Inno.Player.Runtime
apiSurface: source-clr
contracts:
  - project.inno-player-runtime
---
# `IPlayerModuleActivator`

This reference describes `IPlayerModuleActivator` in `Inno.Player.Runtime`. Read the [shared contract](../../../projects/inno-player-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Activate`](#api-f2b66e1810d8ee4e) | Method |

## Type declaration

<a id="api-f9711962e51dbf5a"></a>
<!-- api: T:Inno.Player.Runtime.IPlayerModuleActivator f73caabb9d53418972de7bcca8e7a0b305a7646820cc4bb08e675124de744a84 -->

```csharp
public interface Inno.Player.Runtime.IPlayerModuleActivator
```

Activates a validated logical code deployment through the common module transaction boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/Deployment/IPlayerModuleActivator.cs#L9).

## `Activate`

<a id="api-f2b66e1810d8ee4e"></a>
<!-- api: M:Inno.Player.Runtime.IPlayerModuleActivator.Activate(Inno.Extensibility.Modules.ModuleHost,Inno.Runtime.GameCodeDeployment) 5c91418fecb3ad4e4089a34328c46498453ebbaad478ea8997e92637b18631a4 -->

```csharp
void Inno.Player.Runtime.IPlayerModuleActivator.Activate(Inno.Extensibility.Modules.ModuleHost modules, Inno.Runtime.GameCodeDeployment deployment)
```

Verifies the code closure and publishes its module contributions atomically.

**Parameter `modules`:** The engine-owned module catalog and generation coordinator.

**Parameter `deployment`:** The frozen logical deployment, independent of DLL directories or managed runtime technology.

**Throws `System.IO.InvalidDataException`:** The runtime manifest does not match the linked code closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/player/Inno.Player.Runtime/Deployment/IPlayerModuleActivator.cs#L23).
