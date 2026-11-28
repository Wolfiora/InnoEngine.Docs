---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fbae948a65f3168076fd3d2ec3d66a4b69e43771c65452e73e91ced2e271b70d
symbol: engine:Inno.Input.Runtime:M:Inno.Input.Runtime.InputRuntime.ConnectDevice(System.String)
title: InputRuntime.ConnectDevice
kind: api
owners:
- Inno.Input.Runtime
apiSurface: source-clr
sourceFingerprint: ba16453a29aa034d4da63798695c3de91f363834a094fe808bbd0382bc3f465c
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
