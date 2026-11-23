---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8e841cf1498586570dfded1ff08ed72df281b91a549ab2a9b5137ccbe4df6443
symbol: engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.UnregisterSink(Inno.Core.Logging.ILogSink)
title: LogRouter.UnregisterSink
kind: api
owners:
- Inno.Core.Logging
apiSurface: source-clr
sourceFingerprint: cef99ed1974eda7715cd89eceeda22b94d81c192bc2c5d41b779de970979d67a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `sink`:** The sink to remove when registered.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `sink` is null.

## Remarks

An in-flight batch may still borrow the previous snapshot. This operation does not wait for its callbacks; the host must coordinate quiescence before releasing sink resources. Router disposal releases only sinks that remain registered.
