---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.33867e3501158c0b89027980d6805c897a156a5d20ca8788a601f58356a088dc
symbol: scripting:Inno.Input:M:InnoEngine.Input.Input.ConnectDevice(System.String)
title: Input.ConnectDevice
kind: api
owners:
- Inno.Input
apiSurface: editor-script
sourceFingerprint: 0c3668924ebf05fa67e076f0694ae41e6d582ac1017aacdd0cee2be0460a9fab
apiScope: Runtime
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
