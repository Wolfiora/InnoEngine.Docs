---
uid: api.df426ac2643a8ca0924bf9bd4af59895fcf686b1b79648b63cef009041f55751
symbol: "engine:Inno.Player.Runtime:M:Inno.Player.Runtime.StaticPlayerModuleActivator.Activate(Inno.Extensibility.Modules.ModuleHost,Inno.Runtime.GameCodeDeployment)"
source: xml
reviewed: c855eb88c0c6a513f2a0443057cd89588dd5099e0d937644cb6a63bb7c9a1ace
title: "StaticPlayerModuleActivator.Activate"
kind: api
owners: [Inno.Player.Runtime]
apiSurface: source-clr
---

Verifies the code closure and publishes its module contributions atomically.

## Parameters

**Parameter `modules`:** The engine-owned module catalog and generation coordinator.

**Parameter `deployment`:** The frozen logical deployment, independent of DLL directories or managed runtime technology.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The runtime manifest does not match the linked code closure.
