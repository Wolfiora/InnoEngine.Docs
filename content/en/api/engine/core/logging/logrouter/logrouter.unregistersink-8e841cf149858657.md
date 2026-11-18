---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8e841cf1498586570dfded1ff08ed72df281b91a549ab2a9b5137ccbe4df6443
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.UnregisterSink(Inno.Core.Logging.ILogSink)
title: LogRouter.UnregisterSink
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
sourceFingerprint: ca3ca79f73703b539a9fa3f29618b014ea8c9c1103fbb85b1fd2d675b00ac79c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

An in-flight batch may still borrow the previous snapshot. This operation does not wait for its callbacks; the host must coordinate quiescence before releasing sink resources. Router disposal releases only sinks that remain registered.

## Parameters

**Parameter `sink`:** The sink to remove when registered.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `sink` is null.
