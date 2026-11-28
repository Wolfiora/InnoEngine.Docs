---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e9ad2f97f6389895b175411fcf040b3dd0620d5ffce0bbb822f125cad242cc29
symbol: engine:Inno.Input:M:Inno.Input.Input.ConnectDevice(System.String)
title: Input.ConnectDevice
kind: api
owners:
- Inno.Input
apiSurface: source-clr
sourceFingerprint: 7d7afb5f80de501238c59483e66fd31851711447f4f483eadba4c2b269584f23
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `typeID`:** A stable device protocol identifier.

## Returns

A provider-owned connection that must retire with its device or plugin.

## Exceptions

**Exception `T:System.NotSupportedException`:** The selected input service cannot accept plugin devices.
