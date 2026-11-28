---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4fa2cdc7f383bdeff42a5ecaf9ed0f66a7e5b79a054a81c83d3dc5d490c7daa4
symbol: engine:Inno.Input:M:Inno.Input.IInputDeviceSource.ConnectDevice(System.String)
title: IInputDeviceSource.ConnectDevice
kind: api
owners:
- Inno.Input
apiSurface: source-clr
sourceFingerprint: 527a76c51d821e192599ce02ab26ee4572f3ff9206ddb44f63c396d86dd8a576
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `typeID`:** A stable, case-sensitive identifier shared by devices exposing the same controls.

## Returns

A connection owned by the provider. Dispose it when the device disconnects or the provider retires.
