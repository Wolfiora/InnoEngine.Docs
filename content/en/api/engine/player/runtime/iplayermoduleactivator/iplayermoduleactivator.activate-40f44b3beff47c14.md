---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.40f44b3beff47c145859e1aa49d46aaf92e30933bd1eaec0fd51dd6a615c3177
symbol: engine:Inno.Player.Runtime:M:Inno.Player.Runtime.IPlayerModuleActivator.Activate(Inno.Extensibility.Modules.ModuleHost,Inno.Runtime.GameCodeDeployment)
title: IPlayerModuleActivator.Activate
kind: api
owners:
- Inno.Player.Runtime
apiSurface: source-clr
reviewed: e7ddd954c42d49a040011780299fe6ae5f0f55d5d09bd3be16077c53ffc37aa3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `modules`:** The engine-owned module catalog and generation coordinator.

**Parameter `deployment`:** The frozen logical deployment, independent of DLL directories or managed runtime technology.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The runtime manifest does not match the linked code closure.
