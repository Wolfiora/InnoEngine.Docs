---
uid: api.40f44b3beff47c145859e1aa49d46aaf92e30933bd1eaec0fd51dd6a615c3177
symbol: "engine:Inno.Player.Runtime:M:Inno.Player.Runtime.IPlayerModuleActivator.Activate(Inno.Extensibility.Modules.ModuleHost,Inno.Runtime.GameCodeDeployment)"
source: xml
reviewed: 8bebf6f57b5f4c9033ebeefcd0cac93a746f256d515b4d616020dd8e692d9451
title: "Activate"
kind: api
owners: [Inno.Player.Runtime]
apiSurface: source-clr
---

Verifies the code closure and publishes its module contributions atomically.

**Parameter `modules`:** The engine-owned module catalog and generation coordinator.

**Parameter `deployment`:** The frozen logical deployment, independent of DLL directories or managed runtime technology.

**Exception `T:System.IO.InvalidDataException`:** The runtime manifest does not match the linked code closure.
