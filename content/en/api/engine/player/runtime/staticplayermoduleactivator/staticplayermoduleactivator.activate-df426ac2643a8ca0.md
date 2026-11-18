---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.df426ac2643a8ca0924bf9bd4af59895fcf686b1b79648b63cef009041f55751
symbol: engine:Inno.Player.Runtime:M:Inno.Player.Runtime.StaticPlayerModuleActivator.Activate(Inno.Extensibility.Modules.ModuleHost,Inno.Runtime.GameCodeDeployment)
title: StaticPlayerModuleActivator.Activate
kind: api
owners:
- Inno.Player.Runtime
apiSurface: source-clr
sourceFingerprint: 5873be02f9a8072c01901b96905943e28b57803155420ec2c3b209e37cc424c0
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
