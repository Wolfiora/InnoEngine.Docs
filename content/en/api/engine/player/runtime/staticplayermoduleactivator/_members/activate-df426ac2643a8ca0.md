---
uid: api.df426ac2643a8ca0924bf9bd4af59895fcf686b1b79648b63cef009041f55751
symbol: "engine:Inno.Player.Runtime:M:Inno.Player.Runtime.StaticPlayerModuleActivator.Activate(Inno.Extensibility.Modules.ModuleHost,Inno.Runtime.GameCodeDeployment)"
source: xml
reviewed: 0281ecbf3de016e4de84a078890c40e72dbb8ddc8e6633c2ef1353d8d9202dd9
title: "Activate"
kind: api
owners: [Inno.Player.Runtime]
apiSurface: source-clr
---

Verifies the code closure and publishes its module contributions atomically.

**Parameter `modules`:** The engine-owned module catalog and generation coordinator.

**Parameter `deployment`:** The frozen logical deployment, independent of DLL directories or managed runtime technology.

**Exception `T:System.IO.InvalidDataException`:** The runtime manifest does not match the linked code closure.
