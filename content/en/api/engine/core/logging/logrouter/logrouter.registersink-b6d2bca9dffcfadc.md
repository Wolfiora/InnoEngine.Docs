---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b6d2bca9dffcfadc748a03dd83f9610e72523de9a3d2a7df61eba7ca48644f0d
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.RegisterSink(Inno.Core.Logging.ILogSink)
title: LogRouter.RegisterSink
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
sourceFingerprint: 454e75bbe52f1f8636e0d3fe7d6e66970cbc7c073c43f4fdb2ae9f6c381f650d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `sink`:** The sink to register exactly once.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `sink` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown after this router has been disposed.
