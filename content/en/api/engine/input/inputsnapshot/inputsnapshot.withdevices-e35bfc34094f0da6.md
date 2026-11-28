---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e35bfc34094f0da62268a40f6a2c6fa79c791d68c24848db24a48cd739a43233
symbol: engine:Inno.Input:M:Inno.Input.InputSnapshot.WithDevices(System.Collections.Generic.IEnumerable{Inno.Input.InputDeviceState},System.Collections.Generic.IEnumerable{Inno.Input.InputDeviceChange})
title: InputSnapshot.WithDevices
kind: api
owners:
- Inno.Input
apiSurface: source-clr
sourceFingerprint: 99bd0c439f84390dabb637ed70ab759be9f36416b3252d0a4b7634b125cf74ce
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
