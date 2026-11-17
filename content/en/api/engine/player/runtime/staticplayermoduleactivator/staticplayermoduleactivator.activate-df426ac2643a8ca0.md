---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.df426ac2643a8ca0924bf9bd4af59895fcf686b1b79648b63cef009041f55751
symbol: engine:Inno.Player.Runtime:M:Inno.Player.Runtime.StaticPlayerModuleActivator.Activate(Inno.Extensibility.Modules.ModuleHost,Inno.Runtime.GameCodeDeployment)
title: StaticPlayerModuleActivator.Activate
kind: api
owners:
- Inno.Player.Runtime
apiSurface: source-clr
reviewed: 40d96ccda43230335096baccaffb8fe4296b960d88f5a78b005e9865606d302e
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
