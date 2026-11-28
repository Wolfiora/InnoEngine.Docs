---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0548c7f964f843c114d999481ced3e3d2bce0154653b753cd66dbbbe6d4dae77
symbol: scripting:Inno.Input:M:InnoEngine.Input.InputSnapshot.WithDevices(System.Collections.Generic.IEnumerable{InnoEngine.Input.InputDeviceState},System.Collections.Generic.IEnumerable{InnoEngine.Input.InputDeviceChange})
title: InputSnapshot.WithDevices
kind: api
owners:
- Inno.Input
apiSurface: editor-script
sourceFingerprint: 959b1d82015144983976d62857f1618069c40ddb35b2244221e5a2a0c04947fa
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `states`:** Immutable states of currently connected devices.

**Parameter `changes`:** Ordered device transitions to freeze.

## Returns

An independent snapshot sharing the frozen keyboard and pointer capture.
